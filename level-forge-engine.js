/* Item-level Forge Preview v1. Pure UMD; never reads storage or the legacy engine.
 * Class-union curated reference, NOT a PoE2 simulator or combat/reward system.
 * Probability policy: uniform removal (Chaos), eligible family, eligible tier,
 * then endpoint-precision value steps. All are OUR PREVIEW rules, not source odds.
 */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./level-forge-data.js'));
  else root.LevelForgeEngine = root.EFLevelForge = factory(root.LevelForgeData);
})(typeof globalThis !== 'undefined' ? globalThis : this, function makeEngine(sourceData) {
  'use strict';
  var STORAGE_KEY = 'ef-level-forge-lab-v1', VERSION = 1, MAX_ITEMS = 24, MAX_EVENTS = 4096;
  var UINT_MAX = 4294967295, STOCK = 20;
  var PROFILES = {
    'launch-preview': { id: 'launch-preview', name: '首发上限预览', minItemLevel: 1, maxItemLevel: 30, formalGame: false },
    'developer-preview': { id: 'developer-preview', name: '全装等开发预览', minItemLevel: 1, maxItemLevel: 100, formalGame: false }
  };
  var POLICY = {
    id: 'strict-class-union-uniform-v1', strictFloor: true, fallbackImplemented: false,
    sourceWeightsKnown: false, actualBaseEligibilityVerified: false, combatConnected: false,
    sampling: 'uniform-eligible-family-then-uniform-eligible-tier-then-uniform-preview-value-step',
    chaosSampling: 'uniform-removal; every-removal-branch-must-have-a-replacement',
    label: '自有均匀演示概率，非流放之路2真实权重或生成概率。',
    eligibility: '部位并集精选，不是具体底材合法池；只纳入 requiredLevel ≤ 装等且 ≥ 通货门槛的档。',
    fallback: '本预览严格过滤；未实现来源所述整族排空例外，不宣称完整复刻。',
    valueSteps: '步长仅按来源端点精度推导；真实档内离散步长和分布未知。',
    provenance: '所有库存与底材均为有限测试配额，不是正式产出、掉落或奖励；不能转入正式游戏。'
  };
  function own(o, k) { return typeof k === 'string' && o !== null && typeof o === 'object' && Object.prototype.hasOwnProperty.call(o, k); }
  function obj(o) { return o !== null && typeof o === 'object' && !Array.isArray(o); }
  function keys(o, list) { return obj(o) && Object.keys(o).every(function(k) { return list.indexOf(k) >= 0; }); }
  function exactKeys(o, list) { return keys(o, list) && Object.keys(o).length === list.length; }
  function integer(v, lo, hi) { return Number.isSafeInteger(v) && v >= lo && (hi === undefined || v <= hi); }
  function clone(v) { return JSON.parse(JSON.stringify(v)); }
  function freeze(v) { if (v && typeof v === 'object') { Object.keys(v).forEach(function(k) { freeze(v[k]); }); Object.freeze(v); } return v; }
  function equal(a,b) {
    if (a === b) return true;
    if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object' || Array.isArray(a) !== Array.isArray(b)) return false;
    var ak=Object.keys(a),bk=Object.keys(b); if(ak.length!==bk.length)return false;
    return ak.every(function(k){return own(b,k)&&equal(a[k],b[k]);});
  }
  function error(code, message, state) { var r={ok:false,error:{code:code,message:message}}; if(state!==undefined)r.state=state; return r; }
  function hash(text) { var h=2166136261; for(var i=0;i<text.length;i++){h^=text.charCodeAt(i);h=Math.imul(h,16777619);}return (h>>>0).toString(16); }
  function capacity(rarity) { if(obj(rarity))rarity=rarity.rarity; return rarity==='rare'?{prefix:3,suffix:3,total:6}:rarity==='magic'?{prefix:1,suffix:1,total:2}:{prefix:0,suffix:0,total:0}; }
  var data = clone(sourceData || {}), scopes = data.scopes, scopeMap = Object.create(null), familyMap = Object.create(null);
  if (!Array.isArray(scopes) || !scopes.length) throw new Error('Level forge source data is missing.');
  scopes.forEach(function(scope) {
    if(!obj(scope)||typeof scope.id!=='string'||own(scopeMap,scope.id)||!Array.isArray(scope.families)||!scope.families.length)throw new Error('Invalid source scope.');
    scopeMap[scope.id]=scope;
    scope.families.forEach(function(f) {
      if(!obj(f)||typeof f.id!=='string'||own(familyMap,f.id)||f.scope!==scope.id||['prefix','suffix'].indexOf(f.side)<0||!Array.isArray(f.tiers)||!f.tiers.length||f.weight!==null)throw new Error('Invalid source family.');
      familyMap[f.id]=f;var seen=new Set();
      f.tiers.forEach(function(t){
        var steps=(t.max-t.min)/t.step;
        if(!integer(t.sourceTier,1,1000)||t.tier!=='T'+t.sourceTier||seen.has(t.tier)||!integer(t.requiredLevel,1,100)||!Number.isFinite(t.min)||!Number.isFinite(t.max)||t.max<t.min||!Number.isFinite(t.step)||t.step<=0||!Number.isFinite(steps)||Math.abs(steps-Math.round(steps))>0.000001||steps>1000000||t.weight!==null)throw new Error('Invalid source tier.');
        seen.add(t.tier);
      });
    });
  });
  var DATA_ID='lf-'+hash(JSON.stringify(data));
  var CURRENCIES=[],currencyMap=Object.create(null);
  var names={transmutation:'蜕变石',augmentation:'增幅石',regal:'富豪石',exalted:'崇高石',chaos:'混沌石',divine:'神圣石'};
  Object.keys(names).forEach(function(operation){
    (operation==='divine'?['normal']:['normal','greater','perfect']).forEach(function(variant){
      var floor=variant==='normal'?0:(operation==='transmutation'||operation==='augmentation'?(variant==='greater'?44:70):(variant==='greater'?35:50));
      var currency={id:operation+'-'+variant,operation:operation,variant:variant,name:(variant==='normal'?'普通':variant==='greater'?'高级':'完美')+names[operation],floor:floor,minItemLevel:floor,sourceWeight:null};
      CURRENCIES.push(currency);currencyMap[currency.id]=currency;
    });
  });
  var CURRENCY_IDS=CURRENCIES.map(function(c){return c.id;});
  function initialStock(profile){var p=PROFILES[profile],s={};CURRENCIES.forEach(function(c){s[c.id]=c.floor<=p.maxItemLevel?STOCK:0;});return s;}
  function newState(profile,seed){
    var p=PROFILES[profile];return {schemaVersion:VERSION,namespace:STORAGE_KEY,dataId:DATA_ID,profile:profile,originSeed:seed,seed:seed,revision:0,nextItemId:1,nextAffixId:1,selectedId:null,items:[],stock:initialStock(profile),baseTokens:MAX_ITEMS,supply:{id:'finite-test-allocation-v1',claimed:true,profile:profile,maxItemLevel:p.maxItemLevel,formalReward:false,label:'测试配额',initialBaseTokens:MAX_ITEMS,initialStock:initialStock(profile)},journal:[],history:[]};
  }
  function createState(options){
    options=options===undefined?{}:options;
    if(!keys(options,['profile','seed']))throw new TypeError('Invalid createState options.');
    var profile=options.profile===undefined?'launch-preview':options.profile,seed=options.seed===undefined?20261025:options.seed;
    if(!own(PROFILES,profile)||!integer(seed,1,UINT_MAX))throw new TypeError('Invalid profile or seed.');
    return newState(profile,seed);
  }
  function itemById(state,id){return state.items.find(function(i){return i.id===id;});}
  function counts(item){var n={prefix:0,suffix:0};item.affixes.forEach(function(a){n[a.side]++;});return n;}
  function pool(item,currency,rarity,survivors){
    var cap=capacity(rarity),used=new Set(survivors.map(function(a){return a.familyId;})),count={prefix:0,suffix:0};survivors.forEach(function(a){count[a.side]++;});
    return scopeMap[item.scopeId].families.filter(function(f){return !used.has(f.id)&&count[f.side]<cap[f.side];}).map(function(f){return {family:f,tiers:f.tiers.filter(function(t){return t.requiredLevel<=item.itemLevel&&t.requiredLevel>=currency.floor;})};}).filter(function(o){return o.tiers.length>0;});
  }
  function eligibility(state,item,currency){
    function no(code,message){return {ok:false,code:code,reason:message,branches:[]};}
    if(!item)return no('NO_ITEM','请先领取或选择一件测试底材。');
    if(!currency)return no('UNKNOWN_CURRENCY','未知通货面额；神圣石仅有普通版本。');
    if(item.provenance.profile!==state.profile)return no('PROFILE_MISMATCH','装备与预览模式不匹配，不能跨模式转移。');
    if(item.itemLevel>PROFILES[state.profile].maxItemLevel)return no('LEVEL_LOCKED','超过当前模式装等上限。');
    if(item.itemLevel<currency.floor)return no('MIN_ITEM_LEVEL','目标装等至少为 '+currency.floor+'；通货只约束新加入的词缀，不升级已有词缀。');
    var op=currency.operation,targetRarity=item.rarity;
    if(op==='transmutation'){if(item.rarity!=='normal')return no('RARITY_REQUIRED','蜕变石仅用于普通装备。');targetRarity='magic';}
    if(op==='augmentation'){if(item.rarity!=='magic')return no('RARITY_REQUIRED','增幅石仅用于魔法装备。');if(item.affixes.length>=2)return no('CAPACITY_FULL','魔法装备上限为 1 前缀 + 1 后缀。');}
    if(op==='regal'){if(item.rarity!=='magic')return no('RARITY_REQUIRED','富豪石仅用于魔法装备。');targetRarity='rare';}
    if(op==='exalted'){if(item.rarity!=='rare')return no('RARITY_REQUIRED','崇高石仅用于稀有装备。');if(item.affixes.length>=6)return no('CAPACITY_FULL','稀有装备上限为 3 前缀 + 3 后缀。');}
    if(op==='chaos'&&item.rarity!=='rare')return no('RARITY_REQUIRED','混沌石仅用于稀有装备。');
    if(op==='divine'&&(!item.affixes.length||item.rarity==='normal'))return no('RARITY_REQUIRED','神圣石需要已有显式词缀；只在原档范围内重掷数值。');
    var branches=[];
    if(op!=='divine'){
      if(op==='chaos'){
        item.affixes.forEach(function(a,index){var survivors=item.affixes.filter(function(_,i){return i!==index;});branches.push({removed:a,probability:1/item.affixes.length,pool:pool(item,currency,targetRarity,survivors)});});
      } else branches.push({removed:null,probability:1,pool:pool(item,currency,targetRarity,item.affixes)});
      if(!branches.length||branches.some(function(b){return !b.pool.length;}))return no('NO_ELIGIBLE_POOL',op==='chaos'?'至少一种移除结果没有合法补入候选；严格过滤下整次拒绝，不扣通货也不推进随机数。':'没有符合装等、通货门槛、同族排斥和前后缀容量的候选；不扣通货。');
    }
    if(!integer(state.stock[currency.id],1))return no('NO_STOCK','该面额测试配额已用尽；其他面额不会自动兑换。');
    return {ok:true,code:null,reason:op==='divine'?'保留词缀、T档、范围与装等，只重掷原范围数值；可能不变或降低。':'保留未被替换的旧词缀；新词缀严格满足本面额门槛。',branches:branches,targetRarity:targetRarity};
  }
  function nextRandom(state){var x=state.seed>>>0;x^=x<<13;x^=x>>>17;x^=x<<5;state.seed=x>>>0;return state.seed;}
  function randomIndex(state,n){if(!integer(n,1,1000001))throw new Error('Invalid random range.');var limit=Math.floor(UINT_MAX/n)*n,r;do{r=nextRandom(state)-1;}while(r>=limit);return r%n;}
  function rollValue(state,t){var steps=Math.round((t.max-t.min)/t.step),v=t.min+randomIndex(state,steps+1)*t.step;return Number(v.toFixed(8));}
  function affixFrom(state,f,t){return {id:'ll-affix-'+state.nextAffixId++,familyId:f.id,label:f.label,name:f.name,side:f.side,tier:t.tier,sourceTier:t.sourceTier,requiredLevel:t.requiredLevel,min:t.min,max:t.max,step:t.step,unit:f.unit,value:rollValue(state,t),template:f.template,sourceName:t.sourceName,sourceEffect:t.sourceEffect,sourceLocalId:t.sourceLocalId,sourceUrl:f.sourceUrl,sourceWeight:null};}
  function chooseAffix(state,choices){var p=choices[randomIndex(state,choices.length)],t=p.tiers[randomIndex(state,p.tiers.length)];return affixFrom(state,p.family,t);}
  function actionKeys(action){
    if(!obj(action)||typeof action.requestId!=='string'||!/^[A-Za-z0-9_.:-]{1,100}$/.test(action.requestId))return false;
    if(action.type==='create')return exactKeys(action,['type','requestId','scopeId','itemLevel'])&&typeof action.scopeId==='string'&&integer(action.itemLevel,1,100);
    if(action.type==='select')return exactKeys(action,['type','requestId','itemId'])&&typeof action.itemId==='string';
    if(action.type==='currency')return exactKeys(action,['type','requestId','itemId','currencyId'])&&typeof action.itemId==='string'&&typeof action.currencyId==='string';
    return false;
  }
  /* Private mutation applies only after all eligibility checks. It is reused for
   * deterministic save replay, so importing cannot mint stock or alter tiers. */
  function execute(state,action){
    if(!actionKeys(action))return error('INVALID_INPUT','操作参数格式不正确。',state);
    if(state.journal.length>=MAX_EVENTS)return error('EVENT_LIMIT','本预览操作记录已达上限，请导出后显式重置当前模式。',state);
    if(state.journal.some(function(e){return e.requestId===action.requestId;}))return error('DUPLICATE_REQUEST','此操作已经提交，不会重复消耗。',state);
    var item,check,currency;
    if(action.type==='create'){
      if(!own(scopeMap,action.scopeId))return error('UNKNOWN_SCOPE','未知装备类别；不将缺失的剑资料映射为其他武器。',state);
      if(action.itemLevel>PROFILES[state.profile].maxItemLevel)return error('LEVEL_LOCKED','首发上限预览仅开放装等 1–30；更高装等仅在开发预览创建。',state);
      if(state.baseTokens<1||state.items.length>=MAX_ITEMS)return error('NO_BASE_TOKENS','底材测试配额已用尽；重置需明确确认。',state);
    } else {
      item=itemById(state,action.itemId);if(!item)return error('UNKNOWN_ITEM','装备不存在。',state);
      if(action.type==='currency'){currency=currencyMap[action.currencyId];check=eligibility(state,item,currency);if(!check.ok)return error(check.code,check.reason,state);}
    }
    var before=item?clone(item):null,seedBefore=state.seed,changes={added:[],removed:[],rerolled:[]},cost={currencyId:null,amount:0,baseTokens:0};
    if(action.type==='create'){
      item={id:'ll-item-'+state.nextItemId++,scopeId:action.scopeId,name:scopeMap[action.scopeId].name+'测试底材',itemLevel:action.itemLevel,rarity:'normal',revision:0,provenance:{profile:state.profile,maxItemLevel:PROFILES[state.profile].maxItemLevel,kind:'preview-only',transferable:false},affixes:[]};
      state.items.push(item);state.baseTokens--;state.selectedId=item.id;cost.baseTokens=1;
    } else if(action.type==='select') state.selectedId=item.id;
    else {
      if(currency.operation==='divine'){
        item.affixes.forEach(function(a){var old=a.value;a.value=rollValue(state,a);changes.rerolled.push({id:a.id,familyId:a.familyId,tier:a.tier,min:a.min,max:a.max,before:old,after:a.value,unit:a.unit});});
      } else {
        var branch=check.branches[currency.operation==='chaos'?randomIndex(state,check.branches.length):0];
        if(branch.removed){item.affixes=item.affixes.filter(function(a){return a.id!==branch.removed.id;});changes.removed.push(clone(branch.removed));}
        var added=chooseAffix(state,branch.pool);item.affixes.push(added);changes.added.push(clone(added));item.rarity=check.targetRarity;
      }
      item.revision++;state.stock[currency.id]--;cost.currencyId=currency.id;cost.amount=1;
    }
    state.revision++;
    var receipt={id:'ll-op-'+state.revision,revision:state.revision,requestId:action.requestId,type:action.type,operation:currency?currency.operation:action.type,currencyId:currency?currency.id:null,profile:state.profile,itemId:item.id,before:before,after:clone(item),cost:cost,changes:changes,seedBefore:seedBefore,seedAfter:state.seed,policyId:POLICY.id,irreversible:true};
    state.journal.push(clone(action));state.history.unshift(receipt);state.history=state.history.slice(0,20);
    return {ok:true,state:state,receipt:clone(receipt)};
  }
  function validateState(state){
    try{
      var fields=['schemaVersion','namespace','dataId','profile','originSeed','seed','revision','nextItemId','nextAffixId','selectedId','items','stock','baseTokens','supply','journal','history'];
      if(!exactKeys(state,fields)||state.schemaVersion!==VERSION||state.namespace!==STORAGE_KEY)return error('INVALID_STATE','不是当前装等预览的完整存档；不会读取或导入旧六通货存档。');
      if(state.dataId!==DATA_ID)return error('DATA_VERSION_MISMATCH','参考数据版本不同；保留原存档，请先导出再决定是否重置。');
      if(!own(PROFILES,state.profile)||!integer(state.originSeed,1,UINT_MAX)||!integer(state.seed,1,UINT_MAX)||!integer(state.revision,0,MAX_EVENTS)||!Array.isArray(state.journal)||state.journal.length!==state.revision||state.journal.length>MAX_EVENTS||!Array.isArray(state.items)||state.items.length>MAX_ITEMS||!Array.isArray(state.history)||state.history.length>20)return error('INVALID_STATE','存档模式、随机状态、操作记录或容量无效。');
      var rebuilt=newState(state.profile,state.originSeed);
      for(var i=0;i<state.journal.length;i++){var result=execute(rebuilt,state.journal[i]);if(!result.ok)return error('INVALID_JOURNAL','存档操作记录不能合法重放：'+result.error.message);}
      if(!equal(rebuilt,state))return error('STATE_REPLAY_MISMATCH','存档数值、库存、词缀、来源或回执与合法操作记录不一致；未自动修复或覆盖。');
      return {ok:true};
    }catch(e){return error('INVALID_STATE','存档无法安全读取；原始内容应保留。');}
  }
  function transact(state,action,expectedRevision,requestId){
    var valid=validateState(state);if(!valid.ok)return error(valid.error.code,valid.error.message,state);
    if(!integer(expectedRevision,0)||expectedRevision!==state.revision)return error('STALE_REVISION','装备或库存状态已更新；本次重复/过期提交已拒绝。',state);
    action.requestId=requestId===undefined?'revision-'+(state.revision+1):requestId;
    if(!actionKeys(action))return error('INVALID_INPUT','操作参数格式不正确。',state);
    var draft=clone(state),result=execute(draft,action);return result.ok?result:error(result.error.code,result.error.message,state);
  }
  function createItem(state,options,expectedRevision,requestId){if(!exactKeys(options,['scopeId','itemLevel']))return error('INVALID_INPUT','需要明确装备类别和整数装等；现有装备装等不可修改。',state);return transact(state,{type:'create',scopeId:options.scopeId,itemLevel:options.itemLevel},expectedRevision,requestId);}
  function selectItem(state,itemId,expectedRevision,requestId){return transact(state,{type:'select',itemId:itemId},expectedRevision,requestId);}
  function applyCurrency(state,options,expectedRevision,requestId){if(!keys(options,['itemId','currencyId'])||typeof options.currencyId!=='string')return error('INVALID_INPUT','必须指定合法通货面额。',state);return transact(state,{type:'currency',itemId:options.itemId===undefined?(obj(state)?state.selectedId:null):options.itemId,currencyId:options.currencyId},expectedRevision,requestId);}
  function previewOptions(check){
    var aggregate=Object.create(null),branches=[];
    (check.branches||[]).forEach(function(b){
      var options=[];b.pool.forEach(function(p){p.tiers.forEach(function(t){
        var probability=1/b.pool.length/p.tiers.length,key=p.family.id+'|'+t.tier;
        var row={familyId:p.family.id,label:p.family.label,side:p.family.side,tier:t.tier,sourceTier:t.sourceTier,requiredLevel:t.requiredLevel,min:t.min,max:t.max,step:t.step,unit:p.family.unit,sourceWeight:null,probability:probability,probabilityLabel:'本预览自有概率',sourceName:t.sourceName,sourceEffect:t.sourceEffect,sourceLocalId:t.sourceLocalId,sourceUrl:p.family.sourceUrl};options.push(row);
        if(!aggregate[key]){aggregate[key]=clone(row);aggregate[key].probability=0;}aggregate[key].probability+=b.probability*probability;
      });});branches.push({removedAffixId:b.removed?b.removed.id:null,probability:b.probability,eligibleOptions:options});
    });return {eligibleOptions:Object.keys(aggregate).map(function(k){return aggregate[k];}),branches:branches};
  }
  function inspect(state,itemId,currencyId){
    var valid=validateState(state);if(!valid.ok)return valid;
    if((itemId!==undefined&&itemId!==null&&typeof itemId!=='string')||(currencyId!==undefined&&typeof currencyId!=='string'))return error('INVALID_INPUT','装备或通货标识必须是字符串。');
    var item=itemById(state,itemId===undefined?state.selectedId:itemId),selected=currencyId===undefined?null:currencyMap[currencyId];
    if(currencyId!==undefined&&!selected)return error('UNKNOWN_CURRENCY','未知通货面额。');
    var currencies=CURRENCIES.map(function(c){var e=eligibility(state,item,c),row=clone(c);row.stock=state.stock[c.id];row.allowed=e.ok;row.code=e.code;row.reason=e.reason;return row;});
    var detail=selected?eligibility(state,item,selected):{ok:false,branches:[],code:null,reason:'选择通货查看精确候选。'};
    var preview=previewOptions(detail);return {ok:true,item:item?clone(item):null,profile:clone(PROFILES[state.profile]),currencies:currencies,currency:selected?clone(selected):null,allowed:detail.ok,code:detail.code,reason:detail.reason,eligibleOptions:preview.eligibleOptions,branches:preview.branches,policy:clone(POLICY)};
  }
  function importState(raw){try{if(typeof raw==='string'&&raw.length>4000000)return error('INVALID_STATE','存档超过预览容量。');var state=typeof raw==='string'?JSON.parse(raw):clone(raw),v=validateState(state);return v.ok?{ok:true,state:state}:v;}catch(e){return error('INVALID_STATE','无法解析存档；原始内容应保留。');}}
  function exportState(state){var v=validateState(state);return v.ok?JSON.stringify(state):v;}
  function validateReward(reward,profile){
    if(!own(PROFILES,profile)||!keys(reward,['itemLevel','currencyId','quantity']))return error('INVALID_REWARD','未知模式或奖励参数。');
    if(own(reward,'itemLevel')&&(!integer(reward.itemLevel,1,100)||reward.itemLevel>PROFILES[profile].maxItemLevel))return error('LEVEL_LOCKED','奖励装等超过当前模式上限。');
    if(own(reward,'currencyId')&&(!own(currencyMap,reward.currencyId)||currencyMap[reward.currencyId].floor>PROFILES[profile].maxItemLevel))return error('CURRENCY_LOCKED','当前模式不能发放该面额。');
    if(!own(reward,'itemLevel')&&!own(reward,'currencyId'))return error('INVALID_REWARD','奖励必须指定装等或通货。');
    if(!integer(reward.quantity,1,1000))return error('INVALID_REWARD','奖励数量必须为正整数。');
    return {ok:true,profile:profile,maxItemLevel:PROFILES[profile].maxItemLevel,validationOnly:true,granted:false};
  }
  freeze(data);freeze(PROFILES);freeze(CURRENCIES);freeze(POLICY);
  return Object.freeze({version:VERSION,storageKey:STORAGE_KEY,STORAGE_KEY:STORAGE_KEY,dataId:DATA_ID,data:data,scopes:scopes,currencies:CURRENCIES,profiles:PROFILES,policy:POLICY,MAX_ITEMS:MAX_ITEMS,MAX_EVENTS:MAX_EVENTS,createState:createState,createItem:createItem,selectItem:selectItem,applyCurrency:applyCurrency,inspect:inspect,validateState:validateState,validate:validateState,importState:importState,restore:importState,exportState:exportState,capacity:capacity,validateReward:validateReward,withData:makeEngine});
});
