/* Display-only Simplified Chinese terminology and borrowed PoE2 affix names. Never imported by the forge engine or stored.
 * Sources are community databases, not verification of official Chinese localization.
 * Project T1/T2/T3 and values are intentionally NOT PoE2 tiers or ranges.
 */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ForgeAffixNames = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const statLabels = Object.freeze({
    'lab:edge': '攻击力', 'lab:critical': '暴击率', 'lab:flame': '火焰抗性',
    'lab:frost': '冰霜抗性', 'lab:fortune': '物品稀有度'
  });
  const legacyLabels = Object.freeze({ '武力': '攻击力', '会心伤害': '暴击伤害', '会心率': '暴击率', '会心': '暴击率', '火性抗性': '火焰抗性', '霜性抗性': '冰霜抗性', '寻获': '物品稀有度' });
  function displayText(value) { return String(value).replace(/火性抗性|霜性抗性|会心伤害|会心率|武力|会心|寻获/g, label => legacyLabels[label]); }
  function displayLabel(affix) { return Object.prototype.hasOwnProperty.call(statLabels, affix.family) ? statLabels[affix.family] : displayText(affix.label); }
  function detailHelp(affix) { if (affix.family === 'lab:fortune') return '当前仅展示词缀，未接入掉落结算；不代表物品数量/装备稀有度等级。'; return ['lab:guard','lab:spirit','lab:ward','lab:bloom','lab:tempo','lab:resolve'].includes(affix.family) ? '本项目待定义属性：尚未定义对应机制，不等同于 PoE2 的力量、敏捷、智慧或其他具体属性。' : ''; }
  const families = {
    'lab:life': {
      source: 'PoE2DB 中文 · 社区数据库', url: 'https://poe2db.tw/cn/Life',
      effect: '生命上限', scope: '借用生命主题的名称，不将本项目生命数值或战斗机制等同于 PoE2 生命上限。',
      tiers: {
        3: { name: '健壮的', compact: true, sourceRange: '+10–19 生命上限', sourceLevel: '物品等级 1' },
        2: { name: '健康的', compact: true, sourceRange: '+20–29 生命上限', sourceLevel: '物品等级 6' },
        1: { name: '红润的', compact: true, sourceRange: '+30–39 生命上限', sourceLevel: '物品等级 16' }
      }
    },
    'lab:flame': {
      source: 'ExileDB · 社区数据库', url: 'https://exiledb.com/mods/rings',
      effect: '火焰抗性', scope: '借用火焰抗性主题的英文后缀名；中文为本项目译名，不声称官方简中名称。',
      tiers: {
        3: { name: '雏龙之', originalName: 'of the Whelpling', translation: '本项目译名', compact: true, sourceRange: '+6–10% 火焰抗性', sourceLevel: '来源 T8' },
        2: { name: '火蜥蜴之', originalName: 'of the Salamander', translation: '本项目译名', compact: true, sourceRange: '+11–15% 火焰抗性', sourceLevel: '来源 T7' },
        1: { name: '飞龙之', originalName: 'of the Drake', translation: '本项目译名', compact: true, sourceRange: '+16–20% 火焰抗性', sourceLevel: '来源 T6' }
      }
    },
    'lab:frost': {
      source: 'ExileDB · 社区数据库', url: 'https://exiledb.com/mods/rings',
      effect: '冰霜抗性', scope: '借用冰霜抗性主题的英文后缀名；中文为本项目译名，不声称官方简中名称。',
      tiers: {
        3: { name: '海豹之', originalName: 'of the Seal', translation: '本项目译名', compact: true, sourceRange: '+6–10% 冰霜抗性', sourceLevel: '来源 T8' },
        2: { name: '企鹅之', originalName: 'of the Penguin', translation: '本项目译名', compact: true, sourceRange: '+11–15% 冰霜抗性', sourceLevel: '来源 T7' },
        1: { name: '独角鲸之', originalName: 'of the Narwhal', translation: '本项目译名', compact: true, sourceRange: '+16–20% 冰霜抗性', sourceLevel: '来源 T6' }
      }
    }
  };
  function freeze(value) { Object.values(value).forEach(v => { if (v && typeof v === 'object') freeze(v); }); return Object.freeze(value); }
  freeze(families);
  function lookup(affix) {
    const family = affix && Object.prototype.hasOwnProperty.call(families, affix.family) && families[affix.family];
    const tier = family && Object.prototype.hasOwnProperty.call(family.tiers, affix.tier) && family.tiers[affix.tier];
    return tier ? Object.freeze({ ...tier, source: family.source, url: family.url, effect: family.effect, scope: family.scope }) : null;
  }
  function compactName(affix) { const entry = lookup(affix); return entry && entry.compact ? entry.name : displayLabel(affix); }
  function detailName(affix) { const entry = lookup(affix); return entry ? entry.name : displayLabel(affix); }
  function searchText(affix) { const entry = lookup(affix); return [affix.label, displayLabel(affix), affix.family === 'lab:critical' ? '会心率' : '', entry && entry.name, entry && entry.originalName].filter(Boolean).join(' '); }
  return Object.freeze({ families, statLabels, displayText, displayLabel, detailHelp, lookup, compactName, detailName, searchText });
});
