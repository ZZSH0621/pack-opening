/* Read-only gallery. Original screenshots and independent experimental stats stay distinct. */
(() => {
'use strict';
const $=id=>document.getElementById(id), data=window.CompanionData, cards=data.cards, sources=new Map(data.sources.map(s=>[s.id,s]));
const dialog=$('detail'), media=window.matchMedia('(prefers-reduced-motion: reduce)');
const params=new URLSearchParams(location.search), embedded=params.get('embed')==='1', fromMain=params.get('source')==='main';
if(fromMain){$('return-home').href='index.html';$('return-home').textContent='‹ 返回云海群岛'}
if(embedded)document.body.classList.add('embedded');
let current=null, opener=null, animate=!media.matches, filtered=cards.slice();
const experimental=new Map(Object.entries(window.BattleHomeState.SPECIES).map(([species,stats])=>[stats.name,{...stats,species}]));
const mechanics={whale:'开战获得护盾，抵挡一次 10 点伤害。',owl:'命中附加易伤，下一次受击额外承受 6 点伤害。',hound:'受到普通攻击后，存活时反击 11 点伤害。'};
function spriteError(event){const img=event.currentTarget;img.hidden=true;const text=document.createElement('span');text.className='thumb-error';text.textContent='实体暂未加载';img.after(text)}
function renderGrid(){
 const q=$('search').value.trim().toLowerCase(), pack=$('pack').value;
 filtered=cards.filter(c=>(pack==='all'||String(c.packPrice)===pack)&&(!q||`${c.name} ${c.id} ${String(c.index).padStart(2,'0')}`.toLowerCase().includes(q)));
 $('grid').replaceChildren();
 for(const c of filtered){const button=document.createElement('button');button.className='companion';button.dataset.card=c.id;button.setAttribute('aria-label',`查看${c.name}详情，编号${c.index}`);const num=document.createElement('span');num.className='number';num.textContent=`NO. ${String(c.index).padStart(2,'0')}`;const img=document.createElement('img');img.src=c.sprite;img.alt='';img.loading='lazy';img.addEventListener('error',spriteError,{once:true});const name=document.createElement('strong');name.textContent=c.name;const packName=document.createElement('small');packName.textContent=`${c.packPrice} 星尘包`;button.append(num,img,name,packName);button.addEventListener('click',()=>open(c.id,button));$('grid').append(button)}
 $('count').textContent=`${filtered.length} / 36 位伙伴`;$('empty').hidden=filtered.length!==0;
}
function setURL(id){const u=new URL(location.href);if(id)u.searchParams.set('card',id);else u.searchParams.delete('card');history.replaceState(null,'',u.pathname+u.search+u.hash)}
function updateMotion(){const on=animate&&!media.matches;$('entity').classList.toggle('still',!on);$('motion').textContent=media.matches?'系统偏好 · 静止':on?'待机 · 开':'待机 · 静止';$('motion').setAttribute('aria-pressed',String(on));$('motion').disabled=media.matches}
function original(c){
 const s=sources.get(c.source), f=c.fullCard, container=$('original-card');container.replaceChildren();container.style.aspectRatio=`${f.width} / ${f.height}`;
 const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg'),img=document.createElementNS(ns,'image');svg.setAttribute('viewBox',`${f.x} ${f.y} ${f.width} ${f.height}`);svg.setAttribute('role','img');svg.setAttribute('aria-label',`${c.name}原卡，来自第${data.sources.indexOf(s)+1}张用户截图`);img.setAttribute('href',s.path);img.setAttribute('width',s.width);img.setAttribute('height',s.height);img.addEventListener('error',()=>{if(current!==c.id)return;container.replaceChildren();const p=document.createElement('p');p.className='asset-error';p.textContent='原卡截图未能加载，可通过下方来源链接重试。';container.append(p)});svg.append(img);container.append(svg);
 $('source-label').textContent=`来源：用户提供的第 ${data.sources.indexOf(s)+1} 张合集截图 · 编号 ${c.id}。所属卡包价格：${c.packPrice} 星尘（不是战力或收益）。`;
 $('source-link').href=s.path;
}
function open(id,trigger){
 const c=cards.find(x=>x.id===id)||cards[0];current=c.id;if(trigger)opener=trigger;
 $('detail-name').textContent=c.name;$('file-number').textContent=String(c.index).padStart(2,'0');$('card-pack').textContent=`所属卡包 · ${c.packPrice} 星尘`; $('position').textContent=`${String(c.index).padStart(2,'0')} / 36`;
 $('entity').hidden=false;$('entity-error').hidden=true;$('entity').alt=`${c.name}新绘像素实体`;$('entity').src=c.sprite;updateMotion();original(c);
 const stats=experimental.get(c.name);$('stats').replaceChildren();for(const [label,value] of [['生命',stats?.hp],['攻击',stats?.attack]]){const row=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=value??'待接入';if(value===undefined)dd.className='pending';row.append(dt,dd);$('stats').append(row)}
 $('skill').textContent=stats?(mechanics[stats.species]||'普通攻击。当前驻地实验尚未加入专属机制。'):'尚未接入驻地战斗。原卡技能保留在卡面中。';
 setURL(c.id);if(!dialog.open)dialog.showModal();
}
function navigate(delta){const list=filtered.some(c=>c.id===current)?filtered:cards;const i=list.findIndex(c=>c.id===current);open(list[(i+delta+list.length)%list.length].id)}
$('search').addEventListener('input',renderGrid);$('pack').addEventListener('change',renderGrid);
$('close').addEventListener('click',()=>dialog.close());$('previous').addEventListener('click',()=>navigate(-1));$('next').addEventListener('click',()=>navigate(1));
$('motion').addEventListener('click',()=>{animate=!animate;updateMotion()});media.addEventListener?.('change',updateMotion);
$('entity').addEventListener('error',()=>{$('entity').hidden=true;$('entity-error').hidden=false});
dialog.addEventListener('close',()=>{if(embedded&&!fromMain&&window.parent!==window)window.parent.postMessage({type:'companion-close'},location.origin);setURL(null);const target=opener?.isConnected?opener:$('search');target.focus();opener=null});
dialog.addEventListener('keydown',e=>{if(['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName))return;if(e.key==='ArrowLeft'){e.preventDefault();navigate(-1)}if(e.key==='ArrowRight'){e.preventDefault();navigate(1)}});
dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()});
window.addEventListener('popstate',()=>{const id=new URLSearchParams(location.search).get('card');if(id)open(id);else if(dialog.open)dialog.close()});
renderGrid();const initial=new URLSearchParams(location.search).get('card');if(initial)open(initial);
})();
