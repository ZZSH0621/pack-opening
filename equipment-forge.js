/* Original art + isolated browser UI. No formal-game state is read or changed. */
(function () {
  'use strict';
  const E = window.ForgeEngine;
  // Keep canonical stat labels available even if the optional borrowed-name asset fails.
  const fallbackLabels = { '武力':'攻击力', '会心伤害':'暴击伤害', '会心率':'暴击率', '会心':'暴击率', '火性抗性':'火焰抗性', '霜性抗性':'冰霜抗性', '寻获':'物品稀有度' };
  const fallbackText = value => String(value).replace(/火性抗性|霜性抗性|会心伤害|会心率|武力|会心|寻获/g, label => fallbackLabels[label]);
  const fallbackLabel = a => fallbackText(a.label);
  const A = window.ForgeAffixNames || { lookup: () => null, displayText: fallbackText, displayLabel: fallbackLabel, compactName: fallbackLabel, detailName: fallbackLabel, searchText: a => a.label+' '+fallbackLabel(a), detailHelp: a => a.family==='lab:fortune'?'当前仅展示词缀，未接入掉落结算；不代表物品数量/装备稀有度等级。':['lab:guard','lab:spirit','lab:ward','lab:bloom','lab:tempo','lab:resolve'].includes(a.family)?'本项目待定义属性：尚未定义对应机制，不等同于 PoE2 的力量、敏捷、智慧或其他具体属性。':'' };
  if (!E) { document.getElementById('save-status').textContent = '工坊引擎未载入，请刷新重试。'; return; }
  const $ = id => document.getElementById(id);
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const clone = v => JSON.parse(JSON.stringify(v));
  const currencyIds = Object.keys(E.MATERIALS);
  const names = {normal:'普通',magic:'魔法',rare:'稀有'};
  const steps = {
    transmutation:{action:'从白装开始',purpose:'普通 → 魔法',english:'ORB OF TRANSMUTATION',short:'升魔法，添 1 条',risk:'只新增一条，不会直接变成稀有。',note:'普通底材升为魔法，并新增一个随机词缀。',result:'蜕变完成'},
    augmentation:{action:'补一条词缀',purpose:'补齐魔法空位',english:'ORB OF AUGMENTATION',short:'魔法装备再添 1 条',risk:'魔法最多 1 前缀 + 1 后缀。',note:'保留已有词缀，为魔法装备补充一个合法随机词缀。',result:'增幅完成'},
    regal:{action:'晋升为稀有',purpose:'魔法 → 稀有',english:'REGAL ORB',short:'升稀有，再添 1 条',risk:'不补满六条，不提升旧词缀 T 档。',note:'保留所有旧词缀，升为稀有并新增一个随机词缀。',result:'晋升完成'},
    exalted:{action:'添一条词缀',purpose:'稀有装备新增',english:'EXALTED ORB',short:'保留已有，新增 1 条',risk:'新增可能不合需求，也会占用槽位。',note:'为稀有装备新增一个合法随机词缀，已有词缀保持不变。',result:'增缀完成'},
    chaos:{action:'随机换一条',purpose:'随机删 1 条，再加 1 条',english:'CHAOS ORB',short:'可能失去好词缀',risk:'会随机失去一条，包括你最满意的词缀；不是整件全洗。',note:'随机移除一个词缀，再添加一个合法随机词缀；可能再次抽到同族。未删除的其他词缀保持原样。',result:'替换完成'},
    divine:{action:'重掷全部数值',purpose:'词缀不换，数值重掷',english:'DIVINE ORB',short:'T 档不变，可能降低',risk:'所有现有词缀数值一起重掷，可能变低或相同，仍消耗材料。',note:'本原型重掷全部显式词缀的数值；词缀身份、T 档和范围不变。固定底材属性不参与。',result:'重掷完成'}
  };
  const art = {
    sword:'<path fill="#3d5547" d="M29 4h11v11h-4v4h-4v4h-4v4h-4v4h-5v-5h4v-4h4v-4h4V9h-2z"/><path fill="#a8c1a0" d="M31 6h7v7h-4v4h-4v4h-4v4h-4v-3h4v-4h4v-4h2z"/><path fill="#d4e0b5" d="M35 7h3v6h-4v4h-4v4h-4v-3h4v-4h4z"/><path fill="#9c6b3f" d="M13 23h5v4h4v4h4v5h-6v-4h-4v-4h-3zM15 31h5v5h-4v4h-4v4H6v-6h4v-4h5z"/><path fill="#d5ac5d" d="M14 24h3v4h5v4h3v3h-4v-4h-5v-4h-2zM8 39h4v-4h3v3h-3v4H8z"/><path fill="#3a6457" d="M17 26h5v5h-5z"/>',
    bow:'<path fill="#5f583c" d="M12 5h8v3h7v4h5v6h4v12h-4v6h-5v4h-7v3h-8v-4h7v-3h6v-5h4V18h-4v-5h-6v-4h-7z"/><path fill="#bf9760" d="M14 6h5v4h7v4h4v5h3v10h-3v5h-4v4h-7v3h-5v-2h5v-4h6v-5h4V18h-4v-5h-6V9h-5z"/><path fill="#dbd4a5" d="M13 9h1v30h-1z"/><path fill="#496d53" d="M6 22h31v3H6zM6 19h6v3H6zM6 25h6v3H6z"/><path fill="#8aa98a" d="M36 19h4v3h4v3h-4v3h-4z"/>',
    staff:'<path fill="#74573b" d="M20 17h5v26h-5zM16 12h16v6H16zM13 8h5v9h-5zM29 8h5v9h-5z"/><path fill="#b6935e" d="M21 18h2v23h-2zM18 14h12v2H18z"/><path fill="#2f7166" d="M21 1h5v4h5v9h-5v5h-5v-5h-5V5h5z"/><path fill="#81b3a0" d="M21 4h4v3h4v5h-5v4h-3v-4h-3V7h3z"/><path fill="#d7e5b8" d="M21 5h3v4h-3zM20 25h6v3h-6zM20 35h6v3h-6z"/><path fill="#cfac64" d="M7 4h2v2H7zM35 19h3v3h-3z"/>',
    coat:'<path fill="#3e6050" d="M13 8h7v4h8V8h7v4h5v12h-7v17H15V24H8V12h5z"/><path fill="#789777" d="M14 11h4v4h12v-4h4v4h3v6h-7v17H18V21h-7v-6h3z"/><path fill="#b0c39b" d="M18 15h12v5H18zM18 21h3v16h-3z"/><path fill="#406e59" d="M24 15h4v23h-4zM16 33h16v5H16z"/><path fill="#a58245" d="M15 26h18v5H15z"/><path fill="#ddbf74" d="M22 26h6v5h-6z"/><path fill="#3c5a48" d="M24 27h2v3h-2z"/>',
    boots:'<path fill="#435b46" d="M8 8h14v17h4v12h-4v3H5V26h3zM27 5h14v20h4v11h-4v3H27V27h-3V13h3z"/><path fill="#859677" d="M11 11h8v17h4v7H8V27h3zM30 8h8v19h4v7H30V26h-3V15h3z"/><path fill="#b79b60" d="M8 13h14v5H8zM27 10h14v5H27z"/><path fill="#cfbc82" d="M12 13h5v5h-5zM31 10h5v5h-5z"/><path fill="#6c6144" d="M6 35h19v3H6zM28 34h16v3H28z"/><path fill="#b2c198" d="M11 22h3v10h-3zM30 20h3v10h-3z"/>',
    ring:'<path fill="#897443" d="M13 16h22v5h5v15h-5v5H13v-5H8V21h5z"/><path fill="#d2b477" d="M15 18h18v5h5v11h-5v5H15v-5h-5V23h5z"/><path fill="#ede0ad" d="M15 20h3v5h-4v9h-3V24h4zM17 36h15v3H17z"/><path fill="#e5e9d7" d="M18 24h12v4h4v6h-4v3H18v-3h-4v-6h4z"/><path fill="#356f68" d="M18 5h12v4h5v13h-5v4H18v-4h-5V9h5z"/><path fill="#79afa2" d="M19 8h10v4h3v8h-4v3h-8v-3h-4v-8h3z"/><path fill="#c5dfbe" d="M20 9h5v4h-5zM18 13h3v5h-3z"/>',
    anvil:'<path fill="#3d7564" d="M5 14h35v5h-5v5h-7v6h7v5H13v-5h7v-6h-9v-4H5z"/><path fill="#a7bc91" d="M8 15h29v3H8z"/><path fill="#b18b50" d="M10 37h29v5H10zM27 4h12v7H27zM22 9h6v10h-6z"/><path fill="#ddc07c" d="M29 5h8v3h-8z"/>',
    chest:'<path fill="#6d6848" d="M6 13h4V9h28v4h4v28H6z"/><path fill="#b99c64" d="M10 13h28v24H10z"/><path fill="#d9bb7c" d="M12 12h24v10H12z"/><path fill="#587d5d" d="M8 23h32v4H8zM12 11h4v28h-4zM32 11h4v28h-4z"/><path fill="#3e5944" d="M21 21h7v11h-7z"/><path fill="#e5cc8c" d="M23 23h3v5h-3z"/>'
  };
  function icon(id, className='') { return currencyIds.includes(id) ? `<img class="${className}" src="forge-currency-assets/${id}.svg" alt="" width="48" height="48" draggable="false">` : `<svg class="${className}" viewBox="0 0 48 48" aria-hidden="true" focusable="false" shape-rendering="crispEdges">${art[id] || art.anvil}</svg>`; }
  let state = E.createInitial(), currentView = 'forge', selectedMaterial = 'exalted', pending = null, lastExportUrl = null, toastTimer = 0;
  let unsaved = false, blockedSave = false, storageMessage = '', lastStored = null;
  let sceneChange = null;
  const dialogOpeners = new Map();
  try {
    const raw = localStorage.getItem(E.STORAGE_KEY);
    if (raw !== null) { const restored = E.restore(raw); if (restored.ok) {state=restored.state;lastStored=raw;} else {blockedSave=true;storageMessage='原存档校验未通过：已保留，当前为临时演示。导出后可明确重置。';} }
  } catch (_) {unsaved=true;storageMessage='浏览器存储不可用：仅本次会话有效，请导出备份。';}
  const base = item => E.BASES.find(b => b.id === item.baseId);
  const selectedItem = () => state.items.find(i=>i.id===state.selectedId) || state.items[0];
  function suggest(item) { if(item.rarity==='normal')return'transmutation'; if(item.rarity==='magic')return item.affixes.length<2?'augmentation':'regal'; return item.affixes.length<6?'exalted':null; }
  selectedMaterial = suggest(selectedItem());
  function toast(message) { $('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3500);$('announcement').textContent=message; }
  function renderSave() { const node=$('save-status');node.textContent=storageMessage || '已自动保存于此浏览器 · 独立工坊存档';node.classList.toggle('save-warning',blockedSave||unsaved); }
  function persist() {
    if(blockedSave){renderSave();return false;}
    try { const json=JSON.stringify(state);localStorage.setItem(E.STORAGE_KEY,json);lastStored=json;unsaved=false;storageMessage='';renderSave();return true; }
    catch(_){unsaved=true;storageMessage='未能保存：当前变更只在内存中，请先导出 JSON 备份。';renderSave();return false;}
  }
  function synchronize() {
    if(blockedSave||unsaved)return true;
    try {const raw=localStorage.getItem(E.STORAGE_KEY);if(raw!==null&&raw!==lastStored){const r=E.restore(raw);if(!r.ok){blockedSave=true;storageMessage='外部存档校验失败：停止覆盖，请先导出当前备份。';renderSave();return false;}state=r.state;lastStored=raw;selectedMaterial=suggest(selectedItem());render();toast('已同步另一个标签页的变更，请重新操作。');return false;}}
    catch(_){unsaved=true;storageMessage='存储暂不可读：当前改动仅保留在本次会话。';renderSave();}
    return true;
  }
  function focusForge() { $('forge-heading').setAttribute('tabindex','-1'); $('forge-heading').focus({preventScroll:true}); }
  function execute(command) {
    if(!synchronize())return;
    const result=E.execute(state,command);
    if(!result.ok){toast(result.error.message);render();return;}
    state=result.state;
    sceneChange=currencyIds.includes(command.type)?state.history[0]:null;
    if(currencyIds.includes(command.type)&&!E.canCraft(state,state.selectedId,selectedMaterial).ok)selectedMaterial=suggest(selectedItem())||command.type;
    persist();
    if(command.type==='create'){currentView='forge';selectedMaterial='transmutation';}
    render();
    if(command.type==='claim'){ $('supply-title').setAttribute('tabindex','-1'); $('supply-title').focus({preventScroll:true}); }
    else { const action=$('action-'+command.type); if(action&&!action.disabled)action.focus({preventScroll:true}); else focusForge(); }
    if(command.type==='claim')toast('补给已入账，六种通货余额已同步。');
    else if(command.type==='create')toast('普通底材已入库，并放上锻造台。');
    else toast(`${steps[command.type].result} · 消耗 1 枚${E.MATERIALS[command.type].name}${unsaved?'（暂未保存，请导出）':''}`);
  }
  function counts(item) {return {prefix:item.affixes.filter(a=>a.side==='prefix').length,suffix:item.affixes.filter(a=>a.side==='suffix').length};}
  function fullAffix(a) {return `${A.displayLabel(a)} +${a.value}${a.unit} · T${a.tier}`;}
  function namedAffix(a) {const name=A.detailName(a);return `${name===A.displayLabel(a)?'':name+' · '}${fullAffix(a)}`;}
  function floatingValue(a) {return `${A.compactName(a)===A.displayLabel(a)?'':'<small>'+esc(A.displayLabel(a))+' </small>'}+${a.value}${a.unit}`;}
  function renderMaterials() {
    $('materials').innerHTML=currencyIds.map(id=>`<button type="button" class="material" data-currency="${id}" aria-label="${E.MATERIALS[id].name}，余额 ${state.materials[id]}，${steps[id].purpose}，前往锻造"><span>${icon(id)}</span><span><span class="material-name">${E.MATERIALS[id].name}</span><span class="material-balance">${state.materials[id]}</span></span><span class="material-tooltip" role="tooltip">${esc(E.MATERIALS[id].hint)}<br>点选后前往锻造台。</span></button>`).join('');
    $('supply-count').textContent=`剩余 ${3-state.claimed.length} / 3 份 · 每份限领一次`;
    $('currency-grid').innerHTML=currencyIds.map((id,n)=>`<article class="currency-card"><div class="currency-card-top">${icon(id)}<div><p class="currency-purpose">0${n+1} / ${steps[id].purpose}</p><h3>${E.MATERIALS[id].name}</h3><p class="currency-english">${steps[id].english}</p></div></div><span class="currency-balance">${state.materials[id]}<small>持有</small></span><p class="currency-rule">${steps[id].note}</p><p class="currency-risk">${steps[id].risk}</p><button class="currency-use" data-currency="${id}">带到锻造台 <span aria-hidden="true">↗</span></button><p class="currency-source">来源：初始赠送 / 一次性补给</p></article>`).join('');
  }
  function renderInventory() {
    const search=$('search').value.trim().toLocaleLowerCase(),type=$('type-filter').value,rarity=$('rarity-filter').value,sort=$('sort').value;
    const list=state.items.filter(i=>{const b=base(i);return(type==='all'||b.category===type)&&(rarity==='all'||i.rarity===rarity)&&(!search||(i.name+' '+b.slot+' '+A.displayText(b.baseStat)+' '+i.affixes.map(a=>A.searchText(a)).join(' ')).toLocaleLowerCase().includes(search));});
    list.sort((a,b)=>sort==='rarity'?({normal:0,magic:1,rare:2}[b.rarity]-{normal:0,magic:1,rare:2}[a.rarity]||Number(b.id.slice(3))-Number(a.id.slice(3))):sort==='affixes'?(b.affixes.length-a.affixes.length||Number(b.id.slice(3))-Number(a.id.slice(3))):Number(b.id.slice(3))-Number(a.id.slice(3)));
    $('inventory-count').textContent=`${state.items.length} / ${E.MAX_ITEMS}`;$('tab-count').textContent=state.items.length;$('inventory-hint').textContent=`显示 ${list.length} 件 · 点击装备，送上锻造台`;
    $('new-base').disabled=state.items.length>=E.MAX_ITEMS;
    $('equipment-grid').innerHTML=list.length?list.map(i=>`<button class="equipment-card" data-item="${i.id}" data-rarity="${i.rarity}" aria-pressed="${i.id===state.selectedId}" aria-label="${esc(i.name)}，${names[i.rarity]}，${i.affixes.length} 条词缀，选择装备">${i.id===state.selectedId?'<span class="card-marker" aria-hidden="true">✓</span>':''}<span class="equipment-icon">${icon(i.baseId)}</span><strong>${esc(i.name)}</strong><span class="card-meta"><span class="rarity-${i.rarity}">${names[i.rarity]}</span><span>· ${i.affixes.length} 词缀</span></span><span class="slot-dots" aria-hidden="true">${Array.from({length:6},(_,n)=>`<i class="${n<i.affixes.length?'filled':''}"></i>`).join('')}</span></button>`).join(''):'<div class="empty-inventory"><b aria-hidden="true">⌕</b>没有符合条件的装备<br><button class="text-button" id="clear-filters">清除筛选</button></div>';
  }
  function floatingAffix(a,side,index,capacity,changeClass='') {
    const label=side==='prefix'?'前缀':'后缀',slot=side+'-'+index,locked=index>=capacity;
    if(a)return `<button id="affix-${slot}" class="floating-affix ${side} ${changeClass}" data-affix="${a.id}" data-slot="${slot}" aria-haspopup="dialog" aria-label="${label} ${index+1}，${esc(namedAffix(a))}，查看范围与详情"><span class="floating-label">${label} 0${index+1}<span class="tier tier-${a.tier}">T${a.tier}</span></span><strong class="floating-name">${esc(A.compactName(a))}</strong><span class="floating-value">${floatingValue(a)}</span></button>`;
    return `<button id="affix-${slot}" class="floating-affix ${side} ${locked?'locked-affix':'empty-affix-card'}" data-slot="${slot}" aria-haspopup="dialog" aria-label="${label} ${index+1}，${locked?'尚未开放':'等待新词缀'}，查看槽位规则"><span class="floating-label">${label} 0${index+1}</span><span class="empty-slot-symbol" aria-hidden="true">${locked?'◇':'＋'}</span><strong class="floating-name">${locked?'尚未开放':'等待新词缀'}</strong></button>`;
  }
  function renderSelected() {
    const item=selectedItem(),b=base(item),cap=E.capacity(item),c=counts(item),change=sceneChange&&sceneChange.itemId===item.id?sceneChange:null;
    const added=new Set(change?change.changes.added.map(a=>a.id):[]),rerolled=new Set(change?change.changes.rerolled.filter(a=>a.before!==a.after).map(a=>a.id):[]);
    const columns=['prefix','suffix'].map(side=>{const list=item.affixes.filter(a=>a.side===side);return `<div class="floating-column ${side}-column" aria-label="${side==='prefix'?'前缀':'后缀'} ${c[side]} / ${cap[side]}">${Array.from({length:3},(_,i)=>floatingAffix(list[i],side,i,cap[side],list[i]?(added.has(list[i].id)?'affix-entering':rerolled.has(list[i].id)?'affix-rerolled':''):'')).join('')}</div>`;}).join('');
    const ghosts=change?change.changes.removed.map(a=>{const i=change.before.affixes.filter(x=>x.side===a.side).findIndex(x=>x.id===a.id);return `<div class="affix-ghost floating-affix ${a.side} affix-leaving" data-removed-affix="${a.id}" style="--slot:${i}" aria-hidden="true"><span class="floating-label">已移除 · T${a.tier}</span><strong class="floating-name">${esc(A.compactName(a))}</strong><span class="floating-value">${floatingValue(a)}</span></div>`;}).join(''):'';
    const latest=state.history.find(r=>r.itemId===item.id&&currencyIds.includes(r.type));
    const feedback=change?(change.type==='divine'?`数值已重掷 · ${change.changes.rerolled.filter(a=>a.before!==a.after).length} 条发生变化`:`${steps[change.type].result} · ${change.changes.removed.length?'随机替换':'新增'} ${change.changes.added.map(a=>fullAffix(a)).join('、')}`):'点词缀看详情 · 词缀由通货随机产生';
    $('selected-equipment').innerHTML=`<div class="forge-scene" data-item-id="${item.id}" data-rarity="${item.rarity}"><article class="portrait-card ${change&&change.before.rarity!==change.after.rarity?'rarity-upgraded':''}" data-rarity="${item.rarity}"><div class="portrait-art"><span class="portrait-index">NO. ${item.id.slice(3).padStart(3,'0')}</span><span class="portrait-spark" aria-hidden="true">✧</span><span class="portrait-halo" aria-hidden="true"></span><span class="equipment-icon">${icon(item.baseId)}</span><span class="portrait-plinth" aria-hidden="true"></span></div><div class="portrait-caption"><span class="portrait-rarity">${names[item.rarity]} · ${esc(b.slot)}</span><h3>${esc(item.name)}</h3><p>${esc(A.displayText(b.baseStat))}</p></div></article>${columns}${ghosts}</div><div class="scene-meta"><span>前缀 <b>${c.prefix}/${cap.prefix}</b></span><span class="scene-meta-rule">${item.rarity==='normal'?'普通无词缀':item.rarity==='magic'?'魔法上限 2 条':'稀有上限 6 条'}</span><span>后缀 <b>${c.suffix}/${cap.suffix}</b></span></div><p class="scene-feedback ${change?'has-change':''}" id="scene-feedback" role="status" aria-live="polite">${esc(feedback)}</p>`;
    sceneChange=null;
    const recommended=suggest(item);if(!selectedMaterial)selectedMaterial=recommended||'chaos';
    $('currency-tray').innerHTML=currencyIds.map(id=>{const check=E.canCraft(state,item.id,id);return `<button type="button" id="tray-${id}" class="currency-slot ${check.ok?'':'is-unavailable'} ${id===selectedMaterial?'is-selected':''}" data-currency="${id}" aria-pressed="${id===selectedMaterial}" aria-label="${E.MATERIALS[id].name}，持有 ${state.materials[id]}，${check.ok?'当前可用':esc(check.error.message)}。点选不消耗" title="${esc(check.ok?steps[id].purpose:check.error.message)}"><span class="currency-slot-count">×${state.materials[id]}</span>${icon(id)}<strong>${E.MATERIALS[id].name}</strong>${id===recommended?'<span class="currency-recommended" aria-hidden="true"></span>':''}</button>`;}).join('');
    const id=selectedMaterial,check=E.canCraft(state,item.id,id),risky=id==='chaos'||id==='divine';
    $('next-step').innerHTML=`<div><b>${E.MATERIALS[id].name}</b><span id="selection-detail">${esc(check.ok?steps[id].short:check.error.message)}</span></div>`;
    $('forge-actions').innerHTML=`<button id="action-${id}" class="action-button primary-action selected-material" data-craft="${id}" ${check.ok?'':'disabled'} aria-describedby="selection-detail" aria-label="${check.ok?(risky?'查看风险并使用':'使用')+' '+E.MATERIALS[id].name+'，消耗 1 枚':esc(check.error.message)}"><strong>${risky?'查看风险并使用':'使用'+E.MATERIALS[id].name}</strong><span class="action-cost">${check.ok?'消耗 ×1':'暂不可用'}</span></button>`;
    $('outcome-summary').textContent=latest?`${steps[latest.type].result} · 前后对照`:'锻造前后对照';
    renderOutcome(item);
  }
  function openAffix(slot) {
    const match=/^(prefix|suffix)-([0-2])$/.exec(slot);if(!match)return;
    const item=selectedItem(),side=match[1],index=Number(match[2]),cap=E.capacity(item),a=item.affixes.filter(x=>x.side===side)[index],sideName=side==='prefix'?'前缀':'后缀';
    $('affix-title').textContent=a?A.detailName(a):`${sideName} 0${index+1}`;
    if(a){const alias=A.lookup(a),pct=Math.round(100*(a.value-a.min)/(a.max-a.min||1));$('affix-detail-content').innerHTML=`<p class="detail-context">${esc(item.name)} · ${sideName} 0${index+1}</p><p class="detail-stat">${esc(A.displayLabel(a))}</p><div class="detail-value">+${a.value}${a.unit}<span>本项目 T${a.tier}</span></div><dl class="affix-facts"><div><dt>本项目档位范围</dt><dd>${a.min}–${a.max}${a.unit}</dd></div><div><dt>词缀类型</dt><dd>${sideName}</dd></div><div><dt>本项目档位</dt><dd>T${a.tier} · T1 为较高档</dd></div><div><dt>家族限制</dt><dd>同件装备不重复</dd></div></dl>${alias?`<details class="affix-name-source"><summary>名称出处与翻译说明</summary><p><b>借用名称，不借用数值</b> · ${esc(alias.scope)}</p>${alias.originalName?`<p>英文原名：${esc(alias.originalName)} · ${esc(alias.translation)}（非官方简中认证）</p>`:''}<p>名称出处：<a href="${esc(alias.url)}" target="_blank" rel="noopener noreferrer">${esc(alias.source)} ↗</a>。来源记录：${esc(alias.sourceLevel)}，${esc(alias.sourceRange)}。</p><p>来源不是官方中文词表；本项目 T 档与范围保留原样，不对应 PoE2 的同名词缀档位或数值。</p></details>`:'<p class="detail-note">当前仍用本项目属性名：尚未核对到可直接对应的 PoE2 名称，不强行套用。</p>'}${A.detailHelp(a)?`<p class="detail-note">${esc(A.detailHelp(a))}</p>`:''}<div class="detail-roll" aria-hidden="true"><i style="width:${pct}%"></i></div><p class="detail-note">神圣石重掷全部现有词缀数值，身份、T 档和范围不变。混沌石随机替换一条，不能指定此槽。</p>`;}
    else $('affix-detail-content').innerHTML=`<p class="detail-context">${esc(item.name)} · ${names[item.rarity]}装备</p><h3 class="empty-detail-title">${index>=cap[side]?'这个槽位尚未开放':'等待一条新词缀'}</h3><p class="detail-note">${item.rarity==='normal'?'普通装备没有词缀容量。使用蜕变石升为魔法，开放 1 前缀和 1 后缀。':index>=cap[side]?'魔法装备最多 1 前缀和 1 后缀。使用富豪石升为稀有，容量提升到 3 前缀和 3 后缀。':item.rarity==='magic'?'使用增幅石，随机新增一条合法词缀；也可以使用富豪石升为稀有。':'使用崇高石，随机新增一条合法词缀。'}</p><p class="detail-note">点槽位仅查看详情，不选择锻造目标。新增词缀与混沌替换均由规则随机决定。</p>`;
    openDialog('affix-dialog');$('close-affix').focus();
  }
  function renderOutcome(item) {
    const r=state.history.find(r=>r.itemId===item.id&&currencyIds.includes(r.type));
    if(!r){$('outcome').innerHTML='<div class="empty-outcome"><span aria-hidden="true">✧</span><div><h3 id="outcome-heading">等一声锤响</h3><p>完成一次锻造，在这里对照变化。</p></div></div>';return;}
    let rows=[];
    if(r.type==='divine') rows=r.changes.rerolled.map(a=>`<div class="comparison-row"><span class="comparison-before">${esc(A.displayLabel(a))} +${a.before}${a.unit}</span><span class="comparison-arrow" aria-hidden="true">→</span><span class="comparison-after ${a.after<a.before?'down':''}">${esc(A.displayLabel(a))} +${a.after}${a.unit} <small>${a.after===a.before?'相同':a.after>a.before?'↑':'↓'}</small></span></div>`);
    else rows=[`<div class="comparison-row"><span class="comparison-before">${r.changes.removed.length?esc(fullAffix(r.changes.removed[0])):'空词缀槽'}</span><span class="comparison-arrow" aria-hidden="true">→</span><span class="comparison-after">${r.changes.added.length?esc(fullAffix(r.changes.added[0])):'未改变'}</span></div>`];
    const rarityNote=r.before.rarity!==r.after.rarity?`${names[r.before.rarity]} → ${names[r.after.rarity]} · `:'';
    $('outcome').innerHTML=`<div class="outcome-title"><h3 id="outcome-heading"><b>${steps[r.type].result}</b></h3><span>${E.MATERIALS[r.type].name} −1 · #${r.sequence}</span></div>${rows.join('')}<p class="outcome-note">${rarityNote}${r.type==='divine'?'所有词缀身份、T 档与范围不变；结果相同也消耗。':`其余 ${r.before.affixes.length-r.changes.removed.length} 条词缀原样保留。`} 无免费撤销。</p>`;
  }
  function renderHistory() {
    $('history').innerHTML=state.history.length?`<ol class="history-list">${state.history.map(r=>`<li class="history-entry"><span class="history-icon">${icon(currencyIds.includes(r.type)?r.type:r.type==='create'?r.after.baseId:'chest')}</span><div><h3>${esc(A.displayText(r.summary))}</h3><p>${currencyIds.includes(r.type)?`${E.MATERIALS[r.type].name} −1 · ${steps[r.type].short}`:r.type==='create'?'免费底材已入库，不消耗通货':'六种演示通货已入账，每份补给只能领取一次'}</p></div><span>#${String(r.sequence).padStart(2,'0')}</span></li>`).join('')}</ol>`:'<p class="ledger-empty">还没有锻造记录。每一次选择，都会留在这里。</p>';
  }
  function renderDialogs() {
    $('supply-parcels').innerHTML=[1,2,3].map(n=>`<article class="parcel"><span>${icon('chest')}</span><div><h3>第 ${n} 份 · 炉边补给</h3><p>蜕变 / 增幅 / 富豪各 +2<br>崇高 +6 · 混沌 +3 · 神圣 +2</p></div><button data-claim="${n}" ${state.claimed.includes(n)?'disabled':''}>${state.claimed.includes(n)?'已领取':'领取'}</button></article>`).join('');
    $('base-capacity').textContent=`当前 ${state.items.length} / ${E.MAX_ITEMS} 件，每次领取占一格。`;
    $('base-grid').innerHTML=E.BASES.map(b=>`<button class="base-choice" data-base="${b.id}" ${state.items.length>=E.MAX_ITEMS?'disabled':''}>${icon(b.id)}<strong>${esc(b.name)}</strong><small>${esc(A.displayText(b.baseStat))}</small><span>免费领取 ＋</span></button>`).join('');
  }
  function renderView() {
    document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===currentView)));
    $('currency-warehouse').hidden=currentView!=='currency';$('warehouse').hidden=currentView!=='warehouse';$('forge').hidden=currentView!=='forge';document.querySelector('.workspace').hidden=currentView==='currency';document.querySelector('.workspace').dataset.mobileView=currentView;
  }
  function render() {renderMaterials();renderInventory();renderSelected();renderHistory();renderDialogs();renderView();renderSave();}
  function openDialog(id) {const dialog=$(id);if(!dialog.open){const opener=document.activeElement;dialogOpeners.set(id,{id:opener&&opener.id,node:opener});dialog.showModal();}}
  function restoreDialogFocus(id) {
    const opener=dialogOpeners.get(id);dialogOpeners.delete(id);if(!opener)return;
    const node=opener.id?$(opener.id):opener.node;
    if(node&&node.isConnected&&!node.disabled&&(!node.getClientRects||node.getClientRects().length))node.focus({preventScroll:true});else focusForge();
  }
  ['affix-dialog','help-dialog','supply-dialog','bases-dialog','confirm-dialog'].forEach(id=>$(id).addEventListener('close',()=>restoreDialogFocus(id)));
  function openConfirm(type) {
    const item=selectedItem();
    if(type==='reset'){
      pending={type:'reset'};$('confirm-title').textContent='重置这间实验工坊？';
      $('confirm-content').innerHTML=`<div class="confirm-target">${icon('chest')}<div><h3>重新从第一件开始</h3><p>只重置本工坊独立存档</p></div></div><p class="risk-note">会清空本工坊的装备改动、材料余额与锻造记录，并恢复初始装备、六种通货及三份补给。无法撤销。<br>不会删除或改动主站、图鉴、战斗与卡牌存档。建议先导出 JSON。</p>`;
      $('confirm').textContent='确认重置演示';$('cancel').textContent='保留当前进度';
    } else {
      const can=E.canCraft(state,item.id,type);if(!can.ok){toast(can.error.message);return;}
      pending={type,itemId:item.id,expectedRevision:item.revision};$('confirm-title').textContent=steps[type].action;
      $('confirm-content').innerHTML=`<div class="confirm-target">${icon(item.baseId)}<div><h3>${esc(item.name)}</h3><p>${names[item.rarity]} · ${item.affixes.length} 条词缀</p></div></div><p class="risk-note">${steps[type].risk}<br>${steps[type].note}</p><div class="confirm-cost">${icon(type)}<span>消耗 <b>1 枚${E.MATERIALS[type].name}</b> · 持有 ${state.materials[type]}</span></div>`;
      $('confirm').textContent=`确认消耗 1 枚`;$('cancel').textContent='先不锻造';
    }
    openDialog('confirm-dialog');$('cancel').focus();
  }
  function cancelConfirm() {pending=null;$('confirm-dialog').close();}
  $('cancel').addEventListener('click',cancelConfirm);$('cancel-top').addEventListener('click',cancelConfirm);
  $('confirm-dialog').addEventListener('cancel',()=>{pending=null;});$('confirm-dialog').addEventListener('close',()=>{pending=null;});
  $('confirm').addEventListener('click',()=>{
    if(!pending)return;const command=pending;pending=null;$('confirm-dialog').close();
    if(command.type==='reset'){state=E.createInitial();blockedSave=false;unsaved=false;storageMessage='';selectedMaterial=suggest(selectedItem());currentView='forge';$('search').value='';$('type-filter').value='all';$('rarity-filter').value='all';$('sort').value='recent';persist();render();focusForge();toast('工坊演示已重置；其他游戏存档没有改动。');return;}
    execute(command);
  });
  document.addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button||button.disabled)return;
    const d=button.dataset;
    if(d.view){currentView=d.view;renderView();return;}
    if(d.open){if(d.open==='reset')openConfirm('reset');else{renderDialogs();openDialog(d.open+'-dialog');}return;}
    if(d.currency){const fromTray=button.id&&button.id.startsWith('tray-');selectedMaterial=d.currency;currentView='forge';renderSelected();renderView();if(fromTray)$('tray-'+d.currency).focus({preventScroll:true});else focusForge();return;}
    if(d.slot){openAffix(d.slot);return;}
    if(d.item){if(!synchronize())return;state.selectedId=d.item;selectedMaterial=suggest(selectedItem());currentView='forge';persist();render();focusForge();return;}
    if(d.base){$('bases-dialog').close();execute({type:'create',baseId:d.base,expectedRevision:state.revision});return;}
    if(d.claim){execute({type:'claim',parcelId:Number(d.claim),expectedRevision:state.revision});return;}
    if(d.craft){selectedMaterial=d.craft;const item=selectedItem();if(d.craft==='chaos'||d.craft==='divine')openConfirm(d.craft);else execute({type:d.craft,itemId:item.id,expectedRevision:item.revision});return;}
    if(button.id==='clear-filters'){$('search').value='';$('type-filter').value='all';$('rarity-filter').value='all';renderInventory();}
  });
  ['search','type-filter','rarity-filter','sort'].forEach(id=>$(id).addEventListener(id==='search'?'input':'change',renderInventory));
  $('export').addEventListener('click',()=>{
    try{const data=JSON.stringify(state,null,2);if(lastExportUrl)URL.revokeObjectURL(lastExportUrl);lastExportUrl=URL.createObjectURL(new Blob([data],{type:'application/json'}));const anchor=document.createElement('a');anchor.href=lastExportUrl;anchor.download='装备工坊-实验备份-'+new Date().toISOString().slice(0,10)+'.json';document.body.appendChild(anchor);anchor.click();anchor.remove();toast('已发起 JSON 下载；请检查浏览器下载列表。本版尚不支持导入。');}catch(_){toast('当前浏览器无法下载，请换用支持文件下载的浏览器。');}
  });
  window.addEventListener('storage',event=>{
    if(event.key!==E.STORAGE_KEY||event.newValue===null||blockedSave||unsaved)return;
    const r=E.restore(event.newValue);if(!r.ok){blockedSave=true;storageMessage='另一个标签页写入了无效存档；原始数据不会被覆盖。';renderSave();return;}
    pending=null;if($('confirm-dialog').open)$('confirm-dialog').close();if($('affix-dialog').open)$('affix-dialog').close();state=r.state;lastStored=event.newValue;selectedMaterial=suggest(selectedItem());render();toast('已同步另一个标签页的工坊进度。');
  });
  document.querySelectorAll('[data-icon]').forEach(node=>{node.innerHTML=icon(node.dataset.icon);});
  $('random-policy').textContent='原型抽样政策：合法「家族 × T 档」组合等概率抽取；档内整数等概率。替换先等概率选可完成的删除分支，再抽合法家族 × T 档，可再次抽到同族。伪随机序列随本机存档保存，不代表 PoE2 权重。';
  render();if(!lastStored&&!blockedSave)persist();
})();
