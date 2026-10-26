/* Isolated, in-memory UI. Never reads or writes the original demo's storage. */
(() => {
'use strict';
const E=window.BattleHomeState, $=id=>document.getElementById(id);
let state=E.create(),paused=false,speed=1,timer=null,toastTimer=null,generation=0,drawerName='',selected=[],audioOn=false,audio=null;
const animations=new Set(),delays=new Set(),logs=[];
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const companionIds={fox:'card-01',owl:'card-04',whale:'card-06',weasel:'card-08',deer:'card-29',hound:'card-31'};
let companionCard='',companionReturnUnit='';
const rarities={whale:'SR',fox:'R',weasel:'SR',owl:'SR',hound:'R',deer:'SSR'};
const traits={whale:['shield','护盾'],owl:['exposure','易伤'],hound:['counter','反击']};
const name=id=>[...state.battle.allies,...state.battle.enemies].find(u=>u.id===id)?.name||'';
function notify(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2600)}
function waiting(fn,ms){const token=generation;const id=setTimeout(()=>{delays.delete(id);if(token===generation)fn()},ms);delays.add(id)}
function stop(){clearTimeout(timer);timer=null;generation++;for(const id of delays)clearTimeout(id);delays.clear();for(const a of animations)a.cancel();animations.clear();$('effects').replaceChildren()}
function blocked(){return paused||document.hidden||$('drawer').open||state.battle.status!=='active'}
function schedule(){clearTimeout(timer);timer=null;if(!blocked())timer=setTimeout(tick,1250/speed)}
function sync(){render();schedule()}
function render(){
 $('coins').textContent=state.coins;$('pack-count').textContent=state.packs?`${state.packs} 个待开启`:'60 金币 / 包';
 $('turn').textContent=`行动 ${String(state.battle.turn).padStart(2,'0')}`;
 $('battle-status').textContent=state.battle.status!=='active'?'切磋已结束':document.hidden?'后台已暂停':$('drawer').open?'驻地事务 · 暂停中':paused?'已暂停 · 等你回来':`${state.battle.difficulty} · 自动战斗`;
 $('pause').textContent=paused?'▶ 继续':'Ⅱ 暂停';$('pause').setAttribute('aria-pressed',String(paused));$('pause').disabled=state.battle.status!=='active';
 $('fighters').innerHTML=[...state.battle.enemies.map((u,i)=>fighter(u,i,false)),...state.battle.allies.map((u,i)=>fighter(u,i,true))].join('');
 const finished=state.battle.status!=='active';$('result').hidden=!finished;
 if(finished){$('result-title').textContent=state.battle.status==='victory'?'驻地安然':'休整再战';$('result-desc').textContent=state.battle.status==='victory'?'+30 金币 · +20 实验积分':'这次遇上了强敌。换个队伍再来。'}
 $('home-hint').textContent=state.questClaimed?'委托已完成，今天也有小小收获。':state.wins&&state.opened?'驻地委托完成，去领取奖励吧。':'精灵驻守云海，冒险就在手边。';
}
function fighter(u,i,ally){return `<div class="fighter ${ally?'ally':'enemy'} ${u.hp?'':'dead'}" id="unit-${u.id}" style="--slot:${i}" aria-label="${u.name}，生命 ${u.hp}/${u.maxHp}${u.status?'，'+u.status:''}"><span class="status" ${u.status?'':'hidden'}>${u.status}</span><button type="button" class="portrait rarity-${rarities[u.species].toLowerCase()}" data-companion="${companionIds[u.species]}" data-unit="${u.id}" aria-label="查看${u.name}精灵详情"><span class="card-rank">${rarities[u.species]}</span><img class="creature" src="battle-home-assets/${u.species}.svg" alt="">${traits[u.species]?`<span class="card-trait" title="实验机制：${traits[u.species][1]}"><img src="battle-home-assets/${traits[u.species][0]}.svg" alt="${traits[u.species][1]}"></span>`:''}</button><span class="name">${u.name}</span><div class="health"><i style="width:${u.hp/u.maxHp*100}%"></i></div><span class="hptext">${u.hp} / ${u.maxHp}</span></div>`}
function sound(){if(!audioOn||!audio)return;try{const o=audio.createOscillator(),g=audio.createGain();o.type='sine';o.frequency.setValueAtTime(510,audio.currentTime);o.frequency.exponentialRampToValueAtTime(250,audio.currentTime+.08);g.gain.setValueAtTime(.025,audio.currentTime);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.09);o.connect(g);g.connect(audio.destination);o.start();o.stop(audio.currentTime+.1)}catch{}}
function effect(event){
 const from=$('unit-'+event.from),to=$('unit-'+event.to);if(!from||!to)return;
 const base=$('effects').getBoundingClientRect(),a=from.getBoundingClientRect(),b=to.getBoundingClientRect();
 const start={x:a.left-base.left+a.width/2,y:a.top-base.top+a.height*.44},end={x:b.left-base.left+b.width/2,y:b.top-base.top+b.height*.44};
 from.classList.add('fire');if(event.type==='counter'||event.status==='易伤')from.classList.add('trigger');if(event.shielded)to.classList.add('trigger');
 const impact=()=>{to.classList.add('hit');const n=document.createElement('span');n.className='damage'+(event.type==='counter'?' counter':'');n.textContent=(event.type==='counter'?'反击 ':'')+'−'+event.damage;n.style.left=end.x-12+'px';n.style.top=end.y-15+'px';$('effects').append(n);waiting(()=>n.remove(),650/speed);sound()};
 if(reduced){impact();return}
 const dot=document.createElement('i');dot.className='bolt';dot.style.left=start.x+'px';dot.style.top=start.y+'px';$('effects').append(dot);
 if(typeof dot.animate==='function'){const animation=dot.animate([{transform:'translate(0,0)'},{transform:`translate(${end.x-start.x}px,${end.y-start.y}px)`}],{duration:230/speed,easing:'ease-in'});animations.add(animation);animation.onfinish=()=>{animations.delete(animation);dot.remove()}}
 waiting(impact,230/speed);
}
function tick(){timer=null;if(blocked())return;const events=E.step(state);let delay=0;for(const ev of events){if(ev.type==='result'){logs.unshift(ev.result==='victory'?'切磋胜利 · +30 金币 / +20 积分':'强敌试炼失利 · 未扣除资源');continue}logs.unshift(`${name(ev.from)}${ev.type==='counter'?'反击':' →'} ${name(ev.to)} −${ev.damage}${ev.status?' · '+ev.status:''}${ev.shielded?' · 护盾吸收':''}`);waiting(()=>effect(ev),delay);delay+=300/speed}logs.splice(30);renderLog();waiting(()=>{render();schedule()},Math.max(350/speed,delay+260/speed))}
function renderLog(){$('log-list').innerHTML=logs.map(x=>`<li>${x}</li>`).join('')}
function openDrawer(which){$('drawer').classList.toggle('gallery-drawer',which==='gallery');stop();drawerName=which;selected=state.team.slice();drawDrawer();$('drawer').showModal();render()}
function drawDrawer(){
 const S=E.SPECIES;let html='';
 if(drawerName==='packs')html=`<h2>一包新的相遇</h2><p>实验包 · 每包 1 位收藏样本，附 10 积分。</p><div class="statline"><span>金币 <b>${state.coins}</b></span><span>待开 <b>${state.packs}</b></span><span>积分 <b>${state.points}</b></span></div>${state.lastPack?`<div class="pull"><img src="battle-home-assets/${state.lastPack.species}.svg" alt=""><div><span class="overline">NEW COMPANION</span><p><b>${state.lastPack.name}</b><br>收藏样本 #${state.opened} · +10 积分</p></div></div>`:''}<div class="drawer-card"><h3>云海小包</h3><p>先使用赠送包，用完后每包 60 金币。</p><button class="primary" data-action="open" ${!state.packs&&state.coins<60?'disabled':''}>${state.packs?'开启 1 个实验包':'60 金币开启'}</button></div><div class="drawer-card"><h3>积分回礼</h3><p>40 积分返 1 包 · 本次剩余 ${2-state.redeemed} / 2 次</p><button class="secondary" data-action="redeem" ${state.points<40||state.redeemed>=2?'disabled':''}>兑换实验包</button></div>`;
 if(drawerName==='quests')html=`<h2>驻地小事</h2><p>不赶路，也有值得完成的一件小事。</p><div class="drawer-card"><h3>初到风息石台</h3><p>${state.wins?'✓':'○'} 赢得 1 场切磋<br>${state.opened?'✓':'○'} 开启 1 个实验包</p><button class="primary" data-action="quest" ${state.questClaimed||!state.wins||!state.opened?'disabled':''}>${state.questClaimed?'已领取':'领取 60 金币'}</button></div><p class="fine">单次体验委托。刷新页面重新开始。</p>`;
 if(drawerName==='team')html=`<h2>三位同行</h2><p>${state.battle.status==='active'?'本轮站位已锁定。结束后可选 3 位伙伴，下一轮生效。':'选择 3 位不同的伙伴，保存后再挑战。'}</p><div class="team-grid">${Object.entries(S).map(([s,m])=>`<button class="team-choice" data-species="${s}" aria-pressed="${selected.includes(s)}" ${state.battle.status==='active'?'disabled':''}><img src="battle-home-assets/${s}.svg" alt=""><span>${m.name}</span></button>`).join('')}</div><p class="fine">云鲸：初始护盾 · 晶鸮：命中易伤 · 磁轨犬：受击反击</p><button class="primary" data-action="team" ${state.battle.status==='active'||selected.length!==3?'disabled':''}>保存队伍 · ${selected.length} / 3</button>`;
 if(drawerName==='plan')html=`<h2>把冒险放在日常里</h2><p>冒险计划 · 实验提案</p><ol class="plan-steps"><li class="${state.wins?'done':''}">驻守石台，完成切磋 ${state.wins?'✓':''}</li><li class="${state.opened?'done':''}">开启卡包，遇见伙伴 ${state.opened?'✓':''}</li><li class="${state.redeemed?'done':''}">攒下 40 积分，换回一包 ${state.redeemed?'✓':''}</li></ol><div class="drawer-card"><h3>有限回礼，不做无限循环</h3><p>胜利 +20 积分，开包 +10 积分。最多返 2 包；没有充值、签到或离线收益。</p><button class="primary" data-action="go-packs">去看看实验包</button></div><p class="fine">本页为纯内存体验，刷新即重置；不会读取或改变原体验的队伍、存档与经济。</p>`;
 if(drawerName==='gallery')html=`<iframe id="companion-frame" class="companion-frame" title="36 位精灵图鉴与详情" src="companion-gallery.html?embed=1${companionCard?'&card='+companionCard:''}"></iframe>`;
 if(drawerName==='reset')html='<h2>重新抵达云海？</h2><p>清空本页实验金币、收藏与战绩，恢复 2 个赠送包和初始队伍。</p><button class="primary" data-action="confirm-reset">重置这次体验</button>';
 $('drawer-content').innerHTML=html;
}
$('drawer-content').addEventListener('click',e=>{const target=e.target.closest('button');if(!target||target.disabled)return;if(target.dataset.species){const s=target.dataset.species;if(selected.includes(s))selected=selected.filter(x=>x!==s);else if(selected.length<3)selected.push(s);else notify('先取消 1 位，再选择新伙伴');drawDrawer();return}const action=target.dataset.action;if(action==='go-packs'){drawerName='packs';drawDrawer();return}if(action==='confirm-reset'){stop();state=E.create();paused=false;speed=1;$('speed').textContent='1×';logs.length=0;renderLog();$('drawer').close();notify('已恢复初始体验');return}const actions={open:E.openPack,redeem:E.redeem,quest:E.claimQuest,team:s=>E.setTeam(s,selected)};if(actions[action]){const res=actions[action](state);notify(res.message);drawDrawer();render()}});
document.querySelectorAll('[data-drawer]').forEach(b=>b.addEventListener('click',()=>{companionCard='';companionReturnUnit='';openDrawer(b.dataset.drawer)}));
$('close-drawer').addEventListener('click',()=>$('drawer').close());$('drawer').addEventListener('close',()=>{sync();if(companionReturnUnit){document.querySelector('[data-unit="'+companionReturnUnit+'"]')?.focus();companionReturnUnit=''}if(drawerName==='gallery')$('drawer-content').replaceChildren()});
$('fighters').addEventListener('click',e=>{const button=e.target.closest('[data-companion]');if(!button)return;companionCard=button.dataset.companion;companionReturnUnit=button.dataset.unit;openDrawer('gallery')});
window.addEventListener('message',e=>{const frame=$('companion-frame');if(e.origin!==location.origin||!frame||e.source!==frame.contentWindow)return;if(e.data?.type==='companion-close'&&$('drawer').open)$('drawer').close()});
$('drawer').addEventListener('click',e=>{if(e.target===$('drawer')){const r=$('drawer').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('drawer').close()}});
$('pause').addEventListener('click',()=>{paused=!paused;if(!paused&&audioOn&&audio)audio.resume().catch(()=>{});stop();sync()});
$('speed').addEventListener('click',()=>{speed=speed===1?2:1;$('speed').textContent=speed+'×';stop();sync()});
$('retry').addEventListener('click',()=>{if(state.battle.status==='active')return;stop();E.restart(state);paused=false;sync()});
$('reset').addEventListener('click',()=>openDrawer('reset'));
$('log-toggle').addEventListener('click',()=>{const isHidden=$('log').hidden;$('log').hidden=!isHidden;$('log-toggle').setAttribute('aria-expanded',String(isHidden))});
$('sound').addEventListener('click',()=>{audioOn=!audioOn;if(audioOn){try{const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)throw Error('unavailable');audio=audio||new Audio();audio.resume().catch(()=>{});}catch{audioOn=false;notify('此浏览器暂不支持音效')}}else if(audio)audio.suspend().catch(()=>{});$('sound').textContent='音效 '+(audioOn?'开':'关');$('sound').setAttribute('aria-pressed',String(audioOn))});
document.addEventListener('visibilitychange',()=>{stop();if(document.hidden){paused=true;if(audio)audio.suspend().catch(()=>{})}sync()});
window.addEventListener('pagehide',()=>{paused=true;stop();if(audio)audio.suspend().catch(()=>{})});
window.addEventListener('pageshow',()=>{sync()});
render();schedule();
})();
