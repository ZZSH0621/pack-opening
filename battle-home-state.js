/* Independent battle-home prototype. Pure memory; deliberately no persistence API. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BattleHomeState = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const SPECIES = {
    whale: {name:'漂流云鲸',hp:155,attack:23},
    fox: {name:'苔晶狐',hp:116,attack:29},
    weasel: {name:'电弧鼬',hp:103,attack:34},
    owl: {name:'紫晶观测鸮',hp:112,attack:24},
    hound: {name:'磁轨犬',hp:132,attack:24},
    deer: {name:'翠穹灵鹿',hp:142,attack:22}
  };
  function unit(species, id, scale) {
    const data = SPECIES[species];
    const maxHp = Math.round(data.hp * scale);
    return {id,species,name:data.name,maxHp,hp:maxHp,attack:Math.round(data.attack*scale),status:species==='whale'?'护盾':''};
  }
  function restart(state) {
    const id = (state.battle ? state.battle.id : 0) + 1;
    // Every third encounter is an explicit tougher practice wave, not an escalating economy.
    const scale = id % 3 === 0 ? 1.3 : .94;
    state.battle = {id,turn:0,status:'active',allies:state.team.map((s,i)=>unit(s,'a'+i,1)),enemies:['owl','weasel','deer'].map((s,i)=>unit(s,'e'+i,scale)),rewarded:false,difficulty:scale>1?'强敌试炼':'云海巡游'};
    return {ok:true,message:'新一轮云海巡游开始'};
  }
  function create() {
    const state = {coins:240,packs:2,points:0,redeemed:0,opened:0,wins:0,questClaimed:false,team:['whale','fox','hound'],roster:Object.keys(SPECIES),collection:[],battle:null,lastPack:null};
    restart(state); return state;
  }
  function resolve(state, events) {
    const b=state.battle;
    if (b.allies.some(u=>u.hp>0) && b.enemies.some(u=>u.hp>0)) return false;
    b.status=b.allies.some(u=>u.hp>0)?'victory':'defeat';
    let coins=0,points=0;
    if (!b.rewarded) {
      b.rewarded=true;
      if (b.status==='victory') { coins=30;points=20;state.coins+=coins;state.points+=points;state.wins++; }
    }
    events.push({type:'result',result:b.status,coins,points}); return true;
  }
  function strike(from,to,type,events) {
    const shielded=to.status==='护盾';
    let damage=type==='counter'?11:from.attack;
    if (to.status==='护盾') damage=Math.max(1,damage-10);
    if (to.status==='易伤') damage+=6;
    to.status='';
    damage=Math.min(to.hp,damage);to.hp=Math.max(0,to.hp-damage);
    if (type==='attack' && from.species==='owl' && to.hp>0) to.status='易伤';
    events.push({type,from:from.id,to:to.id,damage,hp:to.hp,status:to.status,shielded});
  }
  function step(state) {
    const b=state.battle,events=[];
    if (!b || b.status!=='active') return events;
    if (resolve(state,events)) return events;
    const order=[b.allies[0],b.enemies[0],b.allies[1],b.enemies[1],b.allies[2],b.enemies[2]];
    let actor;
    for (let i=0;i<order.length;i++) { actor=order[b.turn%order.length]; b.turn++; if(actor.hp>0)break; }
    const targets=actor.id[0]==='a'?b.enemies:b.allies;
    // Stable slots; focus cycles by round, never remove or reorder units.
    const alive=targets.filter(u=>u.hp>0);
    const target=alive[Math.floor((b.turn-1)/6)%alive.length];
    strike(actor,target,'attack',events);
    if (target.hp>0 && target.species==='hound' && actor.hp>0) strike(target,actor,'counter',events);
    resolve(state,events);
    return events;
  }
  function openPack(state) {
    if (state.packs>0) state.packs--;
    else if (state.coins>=60) state.coins-=60;
    else return {ok:false,message:'金币不足，完成战斗或委托再来'};
    const species=state.roster[state.opened%state.roster.length];
    state.opened++;state.points+=10;
    const item={id:'sample-'+state.opened,species,name:SPECIES[species].name};
    state.collection.push(item);state.lastPack=item;
    return {ok:true,message:'获得 '+item.name+' · +10 实验积分',item};
  }
  function redeem(state) {
    if (state.redeemed>=2) return {ok:false,message:'本次体验的 2 次返包已用完'};
    if (state.points<40) return {ok:false,message:'需要 40 实验积分'};
    state.points-=40;state.packs++;state.redeemed++;
    return {ok:true,message:'已用 40 积分兑换 1 个实验包'};
  }
  function claimQuest(state) {
    if (state.questClaimed) return {ok:false,message:'云海委托已领取'};
    if (state.wins<1 || state.opened<1) return {ok:false,message:'先完成 1 场胜利，并开启 1 个实验包'};
    state.questClaimed=true;state.coins+=60;
    return {ok:true,message:'委托完成 · +60 金币'};
  }
  function setTeam(state, species) {
    if (state.battle.status==='active') return {ok:false,message:'本轮结束后可调整队伍'};
    if (!Array.isArray(species)||species.length!==3||new Set(species).size!==3||!species.every(s=>Object.hasOwn(SPECIES,s))) return {ok:false,message:'请选择 3 位不同的伙伴'};
    state.team=species.slice();return {ok:true,message:'队伍已更新，下轮生效'};
  }
  return {SPECIES,create,restart,step,openPack,redeem,claimQuest,setTeam};
});
