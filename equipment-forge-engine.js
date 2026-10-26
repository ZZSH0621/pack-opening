/* Equipment Forge Laboratory v1 — original simulation policies, not PoE probabilities.
 * Pure browser/CommonJS engine. It never reads or writes any storage or other game state.
 */
(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ForgeEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var STORAGE_KEY = 'ef-forge-lab-v1';
  var VERSION = 1;
  var MAX_ITEMS = 24;
  var INITIAL_MATERIALS = { transmutation: 8, augmentation: 8, regal: 8, exalted: 20, chaos: 12, divine: 10 };
  var PARCEL = { transmutation: 2, augmentation: 2, regal: 2, exalted: 6, chaos: 3, divine: 2 };
  var BASES = [
    { id: 'sword', name: '苔光短剑', category: 'weapon', slot: '单手剑', baseStat: '基础武力 18', flavor: '青铜刃上，留着清晨的苔色。' },
    { id: 'bow', name: '逐风木弓', category: 'weapon', slot: '长弓', baseStat: '基础武力 16', flavor: '弓弦拨动，仿佛林间的第一阵风。' },
    { id: 'staff', name: '星枝法杖', category: 'weapon', slot: '法杖', baseStat: '基础灵力 20', flavor: '一粒小小的星光，在枝头长明。' },
    { id: 'coat', name: '暮林旅衣', category: 'armor', slot: '胸甲', baseStat: '基础防御 24', flavor: '把林间的暮色，缝进旅人的衣角。' },
    { id: 'boots', name: '踏露短靴', category: 'armor', slot: '鞋履', baseStat: '基础防御 12', flavor: '穿过青草时，脚步轻得像一滴露。' },
    { id: 'ring', name: '月泉指环', category: 'accessory', slot: '戒指', baseStat: '基础护盾 10', flavor: '银环上的蓝石，倒映着一汪月泉。' }
  ];
  var MATERIALS = {
    transmutation: { id: 'transmutation', name: '蜕变石', operation: 'transmutation', hint: '普通底材变为魔法装备，新增一条随机词缀。' },
    augmentation: { id: 'augmentation', name: '增幅石', operation: 'augmentation', hint: '为尚有合法空槽的魔法装备新增一条词缀；魔法容量为一前一后。' },
    regal: { id: 'regal', name: '富豪石', operation: 'regal', hint: '魔法装备变为稀有装备，保留已有词缀并新增一条；不补满六条。' },
    exalted: { id: 'exalted', name: '崇高石', operation: 'exalted', hint: '为稀有装备新增一条随机词缀；保留原有种类、档级和数值。' },
    chaos: { id: 'chaos', name: '混沌石', operation: 'chaos', hint: '仅稀有装备：随机移除一条，再新增一条；可能失去好词缀，不是整件全洗。' },
    divine: { id: 'divine', name: '神圣石', operation: 'divine', hint: '本原型重掷全部显式词缀数值；种类、档级和范围不变，数值可能变低。' }
  };
  var MATERIAL_IDS = Object.keys(MATERIALS);
  var ALL = BASES.map(function (b) { return b.id; });
  function family(id, label, side, unit, ranges, bases) {
    return { family: id, label: label, side: side, unit: unit, ranges: ranges, bases: bases || ALL.slice() };
  }
  var POOL = [
    family('lab:edge', '武力', 'prefix', '', { 1: [24, 32], 2: [15, 23], 3: [8, 14] }, ['sword', 'bow', 'coat', 'boots', 'ring']),
    family('lab:life', '生命', 'prefix', '', { 1: [48, 64], 2: [30, 47], 3: [16, 29] }),
    family('lab:guard', '防御', 'prefix', '', { 1: [28, 38], 2: [18, 27], 3: [9, 17] }),
    family('lab:spirit', '灵力', 'prefix', '', { 1: [25, 34], 2: [16, 24], 3: [8, 15] }, ['sword', 'staff', 'coat', 'boots', 'ring']),
    family('lab:ward', '护盾', 'prefix', '', { 1: [36, 48], 2: [23, 35], 3: [12, 22] }),
    family('lab:bloom', '生命恢复', 'prefix', '', { 1: [8, 12], 2: [5, 7], 3: [2, 4] }),
    family('lab:tempo', '迅捷', 'suffix', '%', { 1: [12, 16], 2: [8, 11], 3: [4, 7] }),
    family('lab:resolve', '韧性', 'suffix', '%', { 1: [18, 24], 2: [12, 17], 3: [6, 11] }),
    family('lab:critical', '会心', 'suffix', '%', { 1: [10, 14], 2: [6, 9], 3: [2, 5] }),
    family('lab:flame', '火性抗性', 'suffix', '%', { 1: [24, 32], 2: [16, 23], 3: [8, 15] }),
    family('lab:frost', '霜性抗性', 'suffix', '%', { 1: [24, 32], 2: [16, 23], 3: [8, 15] }),
    family('lab:fortune', '寻获', 'suffix', '%', { 1: [12, 18], 2: [7, 11], 3: [3, 6] })
  ];
  var OPS = { transmutation: 'transmutation', augmentation: 'augmentation', regal: 'regal', exalted: 'exalted', chaos: 'chaos', divine: 'divine' };
  var TITLES = { transmutation: '蜕变', augmentation: '增幅', regal: '晋升稀有', exalted: '崇高增缀', chaos: '混沌替换', divine: '神圣重掷', create: '领取底材', claim: '领取补给' };
  function known(map, key) { return typeof key === 'string' && Object.prototype.hasOwnProperty.call(map, key); }
  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function base(id) { return BASES.find(function (entry) { return entry.id === id; }); }
  function definition(id) { return POOL.find(function (entry) { return entry.family === id; }); }
  function integer(value, min, max) { return Number.isSafeInteger(value) && value >= min && (max === undefined || value <= max); }
  function object(value) { return value !== null && typeof value === 'object' && !Array.isArray(value); }
  function keys(value, allowed) { return object(value) && Object.keys(value).every(function (key) { return allowed.indexOf(key) !== -1; }); }
  function fail(code, message) { return { ok: false, error: { code: code, message: message } }; }
  function capacity(item) {
    var rarity = typeof item === 'string' ? item : item && item.rarity;
    if (rarity === 'normal') return { prefix: 0, suffix: 0, total: 0 };
    if (rarity === 'magic') return { prefix: 1, suffix: 1, total: 2 };
    if (rarity === 'rare') return { prefix: 3, suffix: 3, total: 6 };
    return { prefix: 0, suffix: 0, total: 0 };
  }
  function validateAffix(affix, baseId) {
    if (!keys(affix, ['id', 'family', 'label', 'side', 'tier', 'min', 'max', 'value', 'unit'])) return false;
    var d = definition(affix.family);
    if (!d || !/^af-[1-9][0-9]*$/.test(affix.id) || !integer(Number(affix.id.slice(3)), 1)) return false;
    if (baseId && d.bases.indexOf(baseId) === -1) return false;
    if (!integer(affix.tier, 1, 3)) return false;
    var range = d.ranges[affix.tier];
    return affix.label === d.label && affix.side === d.side && affix.unit === d.unit && affix.min === range[0] && affix.max === range[1] && integer(affix.value, affix.min, affix.max);
  }
  function validateItem(item) {
    if (!keys(item, ['id', 'baseId', 'name', 'rarity', 'revision', 'affixes'])) return false;
    var b = base(item.baseId);
    if (!b || item.name !== b.name || !/^eq-[1-9][0-9]*$/.test(item.id) || !integer(Number(item.id.slice(3)), 1) || !integer(item.revision, 0)) return false;
    if (['normal', 'magic', 'rare'].indexOf(item.rarity) === -1 || !Array.isArray(item.affixes)) return false;
    var cap = capacity(item);
    if (item.affixes.length > cap.total || (item.rarity === 'magic' && item.affixes.length < 1) || (item.rarity === 'rare' && item.affixes.length < 2)) return false;
    var ids = new Set(), families = new Set(), counts = { prefix: 0, suffix: 0 };
    return item.affixes.every(function (affix) {
      if (!validateAffix(affix, item.baseId) || ids.has(affix.id) || families.has(affix.family)) return false;
      ids.add(affix.id); families.add(affix.family); counts[affix.side]++;
      return counts[affix.side] <= cap[affix.side];
    });
  }
  function validChanges(changes, baseId) {
    if (!keys(changes, ['added', 'removed', 'rerolled'])) return false;
    if (!['added', 'removed', 'rerolled'].every(function (k) { return Array.isArray(changes[k]) && changes[k].length <= 6; })) return false;
    if (!changes.added.concat(changes.removed).every(function (a) { return validateAffix(a, baseId); })) return false;
    return changes.rerolled.every(function (r) {
      return keys(r, ['id', 'label', 'before', 'after', 'tier', 'min', 'max', 'unit']) && /^af-[1-9][0-9]*$/.test(r.id) && POOL.some(function (d) { return d.label === r.label && d.unit === r.unit && integer(r.tier, 1, 3) && d.ranges[r.tier][0] === r.min && d.ranges[r.tier][1] === r.max; }) && integer(r.before, r.min, r.max) && integer(r.after, r.min, r.max);
    });
  }
  function validateReceipt(r) {
    if (!keys(r, ['id', 'sequence', 'type', 'itemId', 'itemName', 'revision', 'before', 'after', 'cost', 'gained', 'changes', 'summary', 'irreversible', 'parcelId'])) return false;
    if (!integer(r.sequence, 1) || r.id !== 'op-' + r.sequence || !known(TITLES, r.type) || r.irreversible !== true || !integer(r.revision, 0)) return false;
    if (!keys(r.cost, MATERIAL_IDS) || !Object.keys(r.cost).every(function (k) { return r.cost[k] === 1; })) return false;
    if (r.gained !== undefined && (!keys(r.gained, MATERIAL_IDS) || !MATERIAL_IDS.every(function (k) { return r.gained[k] === PARCEL[k]; }))) return false;
    if (r.type === 'claim') return r.itemId === null && r.itemName === null && r.before === null && r.after === null && r.parcelId >= 1 && r.parcelId <= 3 && Number.isInteger(r.parcelId) && r.summary === '领取第 ' + r.parcelId + ' 份补给' && r.gained !== undefined && Object.keys(r.cost).length === 0 && validChanges(r.changes);
    if (!validateItem(r.after) || r.itemId !== r.after.id || r.itemName !== r.after.name || r.revision !== r.after.revision || r.summary !== TITLES[r.type] + ' · ' + r.itemName || !validChanges(r.changes, r.after.baseId)) return false;
    if (r.type === 'create') return r.before === null && r.after.rarity === 'normal' && Object.keys(r.cost).length === 0;
    return validateItem(r.before) && r.before.id === r.after.id && r.before.baseId === r.after.baseId && r.after.revision === r.before.revision + 1 && Object.keys(r.cost).length === 1 && r.cost[OPS[r.type]] === 1;
  }
  function validate(state) {
    try {
      if (!keys(state, ['version', 'revision', 'seed', 'nextItemId', 'nextAffixId', 'selectedId', 'items', 'materials', 'claimed', 'history'])) return fail('INVALID_STATE', '存档结构不正确。');
      if (state.version !== VERSION) return fail('VERSION_MISMATCH', '存档版本不匹配；原存档不会被覆盖。');
      if (!integer(state.revision, 0) || !integer(state.seed, 1, 4294967295) || !integer(state.nextItemId, 1) || !integer(state.nextAffixId, 1)) return fail('INVALID_STATE', '存档序号或随机状态无效。');
      if (!Array.isArray(state.items) || state.items.length < 6 || state.items.length > MAX_ITEMS || !state.items.every(validateItem)) return fail('INVALID_ITEMS', '装备、词缀或容量校验未通过。');
      var itemIds = new Set(), affixIds = new Set(), highestItem = 0, highestAffix = 0;
      for (var i = 0; i < state.items.length; i++) {
        var item = state.items[i];
        if (itemIds.has(item.id)) return fail('DUPLICATE_ID', '装备标识重复。');
        itemIds.add(item.id); highestItem = Math.max(highestItem, Number(item.id.slice(3)));
        for (var j = 0; j < item.affixes.length; j++) {
          var a = item.affixes[j];
          if (affixIds.has(a.id)) return fail('DUPLICATE_ID', '词缀标识重复。');
          affixIds.add(a.id); highestAffix = Math.max(highestAffix, Number(a.id.slice(3)));
        }
      }
      if (state.nextItemId <= highestItem || state.nextAffixId <= highestAffix || !itemIds.has(state.selectedId)) return fail('INVALID_STATE', '存档标识或当前选择无效。');
      if (!Array.isArray(state.claimed) || state.claimed.length > 3 || new Set(state.claimed).size !== state.claimed.length || !state.claimed.every(function (id) { return integer(id, 1, 3); })) return fail('INVALID_SUPPLIES', '补给领取记录无效。');
      if (!keys(state.materials, MATERIAL_IDS) || !MATERIAL_IDS.every(function (id) { return integer(state.materials[id], 0, INITIAL_MATERIALS[id] + state.claimed.length * PARCEL[id]); })) return fail('INVALID_MATERIALS', '材料余额无效。');
      if (!Array.isArray(state.history) || state.history.length > 20 || !state.history.every(validateReceipt)) return fail('INVALID_HISTORY', '锻造记录无效。');
      for (var h = 0; h < state.history.length; h++) {
        if (state.history[h].sequence > state.revision || (h > 0 && state.history[h].sequence >= state.history[h - 1].sequence)) return fail('INVALID_HISTORY', '锻造记录顺序无效。');
      }
      return { ok: true };
    } catch (error) { return fail('INVALID_STATE', '存档内容无法安全读取。'); }
  }
  function restore(raw) {
    try {
      if (typeof raw === 'string' && raw.length > 1000000) return fail('INVALID_STATE', '存档超过实验室容量。');
      var value = typeof raw === 'string' ? JSON.parse(raw) : clone(raw);
      var check = validate(value);
      return check.ok ? { ok: true, state: value } : check;
    } catch (error) { return fail('INVALID_STATE', '存档无法读取；原存档不会被覆盖。'); }
  }
  function next(state) {
    var x = state.seed >>> 0;
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
    state.seed = x >>> 0;
    return state.seed / 4294967296;
  }
  function choose(state, list) { return list[Math.floor(next(state) * list.length)]; }
  function roll(state, min, max) { return min + Math.floor(next(state) * (max - min + 1)); }
  function candidates(item) {
    var cap = capacity(item), counts = { prefix: 0, suffix: 0 }, families = new Set();
    item.affixes.forEach(function (a) { counts[a.side]++; families.add(a.family); });
    if (item.affixes.length >= cap.total) return [];
    var result = [];
    POOL.forEach(function (d) {
      if (d.bases.indexOf(item.baseId) === -1 || families.has(d.family) || counts[d.side] >= cap[d.side]) return;
      [1, 2, 3].forEach(function (tier) { result.push({ definition: d, tier: tier }); });
    });
    return result;
  }
  function addRarity(item) { return item.rarity === 'normal' ? 'magic' : item.rarity === 'magic' && item.affixes.length === 2 ? 'rare' : item.rarity; }
  function addCandidates(item, type) {
    var projected = clone(item);
    if (type === 'transmutation') projected.rarity = 'magic';
    if (type === 'regal') projected.rarity = 'rare';
    return candidates(projected);
  }
  function replaceBranches(item) {
    return item.affixes.map(function (a) {
      var remainder = clone(item); remainder.affixes = remainder.affixes.filter(function (b) { return b.id !== a.id; });
      return { removeId: a.id, candidates: candidates(remainder) };
    }).filter(function (branch) { return branch.candidates.length > 0; });
  }
  function craftCheck(state, itemId, type) {
    if (!known(OPS, type)) return fail('INVALID_OPERATION', '未知锻造动作。');
    var material = OPS[type], item = state.items.find(function (entry) { return entry.id === itemId; });
    if (!item) return fail('INVALID_ITEM', '请先选择一件装备。');
    if (type === 'transmutation' && item.rarity !== 'normal') return fail('INVALID_RARITY', '蜕变石只能用于普通底材。');
    if ((type === 'augmentation' || type === 'regal') && item.rarity !== 'magic') return fail('INVALID_RARITY', MATERIALS[material].name + '只能用于魔法装备。');
    if ((type === 'exalted' || type === 'chaos') && item.rarity !== 'rare') return fail('INVALID_RARITY', MATERIALS[material].name + '只能用于稀有装备。');
    if (['transmutation', 'augmentation', 'regal', 'exalted'].indexOf(type) !== -1 && addCandidates(item, type).length === 0) return fail('AFFIX_CAPACITY_FULL', '当前前后缀容量已满，无法继续新增。');
    if (type === 'chaos' && replaceBranches(item).length === 0) return fail('NO_ELIGIBLE_MOD', '没有合法的完整替换结果。');
    if (type === 'divine' && item.affixes.length === 0) return fail('NO_AFFIX', '空白底材没有可重掷的显式数值。');
    if (state.materials[material] < 1) return fail('INSUFFICIENT_MATERIAL', MATERIALS[material].name + '不足，需要 1 枚。');
    return { ok: true, material: material, cost: 1 };
  }
  function canCraft(state, itemId, type) {
    var check = validate(state); return check.ok ? craftCheck(state, itemId, type) : check;
  }
  function newAffix(state, candidate) {
    var d = candidate.definition, range = d.ranges[candidate.tier];
    return { id: 'af-' + state.nextAffixId++, family: d.family, label: d.label, side: d.side, tier: candidate.tier, min: range[0], max: range[1], value: roll(state, range[0], range[1]), unit: d.unit };
  }
  function newItem(state, baseId) {
    var b = base(baseId);
    return { id: 'eq-' + state.nextItemId++, baseId: b.id, name: b.name, rarity: 'normal', revision: 0, affixes: [] };
  }
  function createInitial(seed) {
    if (seed === undefined) seed = 10726025;
    if (!integer(seed, 1, 4294967295)) throw new TypeError('Seed must be an unsigned nonzero 32-bit integer.');
    var state = { version: VERSION, revision: 0, seed: seed, nextItemId: 1, nextAffixId: 1, selectedId: 'eq-1', items: [], materials: clone(INITIAL_MATERIALS), claimed: [], history: [] };
    var counts = [4, 2, 0, 3, 1, 0];
    BASES.forEach(function (b, index) {
      var item = newItem(state, b.id);
      for (var k = 0; k < counts[index]; k++) { item.rarity = addRarity(item); item.affixes.push(newAffix(state, choose(state, candidates(item)))); }
      state.items.push(item);
    });
    return state;
  }
  function execute(state, command) {
    function rejected(check) { return { ok: false, state: state, error: check.error }; }
    var check = validate(state);
    if (!check.ok) return rejected(check);
    if (!object(command) || !keys(command, ['type', 'itemId', 'expectedRevision', 'baseId', 'parcelId']) || !known(TITLES, command.type)) return rejected(fail('INVALID_COMMAND', '操作参数无效。'));
    var type = command.type, source = state.items.find(function (i) { return i.id === command.itemId; });
    var expected = OPS[type] ? source && source.revision : state.revision;
    if (command.expectedRevision !== undefined && (!integer(command.expectedRevision, 0) || command.expectedRevision !== expected)) return rejected(fail('STALE_REVISION', '装备或仓库已经改变，请重新确认本次操作。'));
    if (OPS[type]) {
      check = craftCheck(state, command.itemId, type);
      if (!check.ok) return rejected(check);
    } else if (type === 'create') {
      if (!base(command.baseId)) return rejected(fail('INVALID_BASE', '请选择实验室提供的底材。'));
      if (state.items.length >= MAX_ITEMS) return rejected(fail('INVENTORY_FULL', '仓库已达 24 件上限；重置会清空本实验存档。'));
    } else if (type === 'claim') {
      if (!integer(command.parcelId, 1, 3)) return rejected(fail('INVALID_PARCEL', '补给编号无效。'));
      if (state.claimed.indexOf(command.parcelId) !== -1) return rejected(fail('ALREADY_CLAIMED', '这份演示补给已经领取。'));
    }
    try {
      var result = clone(state), before = source ? clone(source) : null;
      var item = source ? result.items.find(function (i) { return i.id === source.id; }) : null;
      var changes = { added: [], removed: [], rerolled: [] }, cost = {}, gained;
      if (['transmutation', 'augmentation', 'regal', 'exalted'].indexOf(type) !== -1) {
        if (type === 'transmutation') item.rarity = 'magic';
        if (type === 'regal') item.rarity = 'rare';
        var added = newAffix(result, choose(result, candidates(item)));
        item.affixes.push(added); changes.added.push(clone(added));
      } else if (type === 'chaos') {
        var branch = choose(result, replaceBranches(item));
        changes.removed.push(clone(item.affixes.find(function (a) { return a.id === branch.removeId; })));
        item.affixes = item.affixes.filter(function (a) { return a.id !== branch.removeId; });
        var replacement = newAffix(result, choose(result, branch.candidates));
        item.affixes.push(replacement); changes.added.push(clone(replacement));
      } else if (type === 'divine') {
        item.affixes.forEach(function (a) {
          var old = a.value; a.value = roll(result, a.min, a.max);
          changes.rerolled.push({ id: a.id, label: a.label, before: old, after: a.value, tier: a.tier, min: a.min, max: a.max, unit: a.unit });
        });
      } else if (type === 'create') {
        item = newItem(result, command.baseId); result.items.push(item); result.selectedId = item.id;
      } else if (type === 'claim') {
        result.claimed.push(command.parcelId); gained = clone(PARCEL);
        Object.keys(PARCEL).forEach(function (id) { result.materials[id] += PARCEL[id]; });
      }
      if (OPS[type]) { item.revision++; result.materials[OPS[type]]--; cost[OPS[type]] = 1; }
      result.revision++;
      var receipt = { id: 'op-' + result.revision, sequence: result.revision, type: type, itemId: item ? item.id : null, itemName: item ? item.name : null, revision: item ? item.revision : result.revision, before: before, after: item ? clone(item) : null, cost: cost, changes: changes, summary: type === 'claim' ? '领取第 ' + command.parcelId + ' 份补给' : TITLES[type] + ' · ' + item.name, irreversible: true };
      if (gained) { receipt.gained = gained; receipt.parcelId = command.parcelId; }
      result.history.unshift(receipt); result.history = result.history.slice(0, 20);
      check = validate(result);
      if (!check.ok) return rejected(fail('TRANSACTION_REJECTED', '本次结果校验未通过，未扣除任何材料。'));
      return { ok: true, state: result, receipt: clone(receipt) };
    } catch (error) { return rejected(fail('TRANSACTION_REJECTED', '本次操作未完成，材料与装备均未改变。')); }
  }
  function formatAffix(affix) { return '+' + affix.value + affix.unit + ' ' + affix.label; }
  function deepFreeze(value) { Object.freeze(value); Object.keys(value).forEach(function (k) { if (value[k] && typeof value[k] === 'object' && !Object.isFrozen(value[k])) deepFreeze(value[k]); }); return value; }
  return deepFreeze({ STORAGE_KEY: STORAGE_KEY, VERSION: VERSION, MAX_ITEMS: MAX_ITEMS, INITIAL_MATERIALS: INITIAL_MATERIALS, PARCEL: PARCEL, BASES: BASES, MATERIALS: MATERIALS, POOL: POOL, createInitial: createInitial, validate: validate, restore: restore, execute: execute, canCraft: canCraft, capacity: capacity, formatAffix: formatAffix });
});
