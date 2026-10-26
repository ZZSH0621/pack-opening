# 装等与词缀阶级手册

版本 v1.0　整理日期 2026年10月25日　适用范围 本游戏装备成长设计与离线网页预览

**先记住一句话：装等决定“哪些词缀档位有资格出现”，不决定“整件装备统一是什么 T”。首发正式开放的装备装等上限为30；更高装等保留资料与预览，不开放、不掉落。**

同样是装等30，鞋子的生命上限最高可到 T6，戒指生命上限最高可到 T5，胸甲生命上限最高可到 T10；这三条对应的源数值却都是 +40–59 生命上限。T 的编号只在本类别、本词缀族内比较，不是跨部位通用战力评分。最高可用也不代表必出，低档仍在等级合格候选中。以下门槛和区间来自固定资料快照，不是为本游戏虚构的一条统一成长曲线。

## 1 如何使用这份手册

- 只想理解规则：读第2节和第3节。
- 想知道首发装等30能看到什么：读第4节与第5节；第8节每个家族都列出装等30的最高等级合格档。
- 想查某个部位、某个家族在各装等的解锁：在第8节按部位查找；`16→T5` 表示达到装等16时新增 T5 的资格，并不删除原有低档。
- 想查每一档准确数值与英文阶名：使用同目录的 [普通词缀完整档位数据](level-forge-full-affixes.json)，保留全部4333档。本文索引给出全门槛、T1识别原文、装等30最好档和下一门槛，避免把数千行完整数值挤成不可读的横表。
- 网页使用的是其中精选的60族473档，见第5节。它不是完整数据库，也不是已经核验过的具体底材词缀池。

## 2 装等 阶级和数值是三个不同维度

| 概念 | 回答的问题 | 不能误读成 |
|---|---|---|
| 装备装等 itemLevel | 这件装备允许访问哪些生成门槛 | 角色等级、穿戴等级或整件装备的T |
| 词缀最低装等 requiredLevel | 该家族这一档最早何时具有等级资格 | 装备已存在的装等或通货掉落等级 |
| 词缀族 family | 同一部位中，同类效果的多档规则 | 全游戏唯一官方互斥组 |
| 词缀阶级 T | 本族内的档位顺序；数字越小越高 | 全族、全部位统一数值强度 |
| 档内数值 roll | 选中该档后，在其定义范围内得到的数值 | 新增词缀、升档或提高装备装等 |
| 稀有度 rarity | 普通、魔法、稀有等类别与相应容量 | 品质、装等或T档 |
| 底材 base | 具体基础物品及其资格约束 | 这里只列出的部位并集 |

GGG 在0.2.1补丁明确反转过词缀阶级编号：较小数字更强，1是该类型的最好档。本手册因此保持源 T1、T2 等编号，不把装等30当前能出的最好档重新命名为 T1。[GGG 0.2.1补丁](https://www.pathofexile.com/forum/view-thread/3787044)

### 只看装等时的判断顺序

1. 确定部位与词缀族，拿到该族的完整档位表。
2. 保留 `requiredLevel ≤ 装备装等` 的档位；这一步只是等级资格过滤。
3. 其中最小的 T 数字是当前装等的最高等级合格档；其他合格低档不会自动消失。
4. 真正生成前还要检查具体底材、来源、前后缀容量、已有同族冲突及其他互斥。本文固定快照没有核实全部条件，不能把等级合格直接称为“游戏内一定可生成”。
5. 抽中哪个族、哪个档及档内哪个数值，需要概率规则。当前没有可信完整权重，不能从候选行数计算命中率或平均成本。

一个词缀可能含多项效果。原文若有两段数值，它仍可能只是一个复合词缀，不是自动占两条词缀位。普通武器、防具与首饰的常规容量设计和特殊类别不能混为一谈；珠宝、护符、药剂等虽然纳入资料索引，不因此继承普通装备的六词缀模型。

## 3 用真实家族看懂不同装等

以下是源表的完整小例子。中文是本项目的语义说明，英文效果与阶名在完整数据中逐条保留；不宣称这些中文均为官方译名。

### 鞋子 移动速度

家族 `boots:5`。装等30最高等级合格档为 **T5**。来源：[ExileDB 鞋子词缀](https://exiledb.com/mods/boots)。

| 最低装等 | 阶级 | 数值效果 | 装等30 |
|---:|---|---|---|
| 1 | T6 | 移动速度提高 10% | 等级合格 |
| 16 | T5 | 移动速度提高 15% | 等级合格且为当前最高档 |
| 33 | T4 | 移动速度提高 20% | 未来档 未开放 |
| 46 | T3 | 移动速度提高 25% | 未来档 未开放 |
| 65 | T2 | 移动速度提高 30% | 未来档 未开放 |
| 82 | T1 | 移动速度提高 35% | 未来档 未开放 |

### 鞋子 生命上限

家族 `boots:0`。装等30最高等级合格档为 **T6**。来源：[ExileDB 鞋子词缀](https://exiledb.com/mods/boots)。

| 最低装等 | 阶级 | 数值效果 | 装等30 |
|---:|---|---|---|
| 1 | T9 | 生命上限 +10–19 | 等级合格 |
| 6 | T8 | 生命上限 +20–29 | 等级合格 |
| 16 | T7 | 生命上限 +30–39 | 等级合格 |
| 24 | T6 | 生命上限 +40–59 | 等级合格且为当前最高档 |
| 33 | T5 | 生命上限 +60–69 | 未来档 未开放 |
| 38 | T4 | 生命上限 +70–84 | 未来档 未开放 |
| 46 | T3 | 生命上限 +85–99 | 未来档 未开放 |
| 54 | T2 | 生命上限 +100–119 | 未来档 未开放 |
| 60 | T1 | 生命上限 +120–149 | 未来档 未开放 |

### 戒指 生命上限

家族 `rings:7`。装等30最高等级合格档为 **T5**。来源：[ExileDB 戒指词缀](https://exiledb.com/mods/rings)。

| 最低装等 | 阶级 | 数值效果 | 装等30 |
|---:|---|---|---|
| 1 | T8 | 生命上限 +10–19 | 等级合格 |
| 6 | T7 | 生命上限 +20–29 | 等级合格 |
| 16 | T6 | 生命上限 +30–39 | 等级合格 |
| 24 | T5 | 生命上限 +40–59 | 等级合格且为当前最高档 |
| 33 | T4 | 生命上限 +60–69 | 未来档 未开放 |
| 38 | T3 | 生命上限 +70–84 | 未来档 未开放 |
| 46 | T2 | 生命上限 +85–99 | 未来档 未开放 |
| 54 | T1 | 生命上限 +100–119 | 未来档 未开放 |

### 胸甲 生命上限

家族 `body-armours:1`。装等30最高等级合格档为 **T10**。来源：[ExileDB 胸甲词缀](https://exiledb.com/mods/body-armours)。

| 最低装等 | 阶级 | 数值效果 | 装等30 |
|---:|---|---|---|
| 1 | T13 | 生命上限 +10–19 | 等级合格 |
| 6 | T12 | 生命上限 +20–29 | 等级合格 |
| 16 | T11 | 生命上限 +30–39 | 等级合格 |
| 24 | T10 | 生命上限 +40–59 | 等级合格且为当前最高档 |
| 33 | T9 | 生命上限 +60–69 | 未来档 未开放 |
| 38 | T8 | 生命上限 +70–84 | 未来档 未开放 |
| 46 | T7 | 生命上限 +85–99 | 未来档 未开放 |
| 54 | T6 | 生命上限 +100–119 | 未来档 未开放 |
| 60 | T5 | 生命上限 +120–149 | 未来档 未开放 |
| 65 | T4 | 生命上限 +150–174 | 未来档 未开放 |
| 70 | T3 | 生命上限 +175–189 | 未来档 未开放 |
| 75 | T2 | 生命上限 +190–199 | 未来档 未开放 |
| 80 | T1 | 生命上限 +200–214 | 未来档 未开放 |

### 弓 物理伤害

家族 `bows:7`。装等30最高等级合格档为 **T6**。来源：[ExileDB 弓词缀](https://exiledb.com/mods/bows)。

| 最低装等 | 阶级 | 数值效果 | 装等30 |
|---:|---|---|---|
| 1 | T8 | 物理伤害提高 40–49% | 等级合格 |
| 8 | T7 | 物理伤害提高 50–64% | 等级合格 |
| 16 | T6 | 物理伤害提高 65–84% | 等级合格且为当前最高档 |
| 33 | T5 | 物理伤害提高 85–109% | 未来档 未开放 |
| 46 | T4 | 物理伤害提高 110–134% | 未来档 未开放 |
| 60 | T3 | 物理伤害提高 135–154% | 未来档 未开放 |
| 75 | T2 | 物理伤害提高 155–169% | 未来档 未开放 |
| 82 | T1 | 物理伤害提高 170–179% | 未来档 未开放 |

### 项链 最大魔力

家族 `amulets:7`。装等30最高等级合格档为 **T10**。来源：[ExileDB 项链词缀](https://exiledb.com/mods/amulets)。

| 最低装等 | 阶级 | 数值效果 | 装等30 |
|---:|---|---|---|
| 1 | T13 | 最大魔力 +10–14 | 等级合格 |
| 6 | T12 | 最大魔力 +15–24 | 等级合格 |
| 16 | T11 | 最大魔力 +25–34 | 等级合格 |
| 25 | T10 | 最大魔力 +35–54 | 等级合格且为当前最高档 |
| 33 | T9 | 最大魔力 +55–64 | 未来档 未开放 |
| 38 | T8 | 最大魔力 +65–79 | 未来档 未开放 |
| 46 | T7 | 最大魔力 +80–89 | 未来档 未开放 |
| 54 | T6 | 最大魔力 +90–104 | 未来档 未开放 |
| 60 | T5 | 最大魔力 +105–124 | 未来档 未开放 |
| 65 | T4 | 最大魔力 +125–149 | 未来档 未开放 |
| 70 | T3 | 最大魔力 +150–164 | 未来档 未开放 |
| 75 | T2 | 最大魔力 +165–179 | 未来档 未开放 |
| 82 | T1 | 最大魔力 +180–189 | 未来档 未开放 |

**读表结论。** 鞋子移动速度在装等30只有 T5和T6具备等级资格，数值分别为15%和10%；每档是固定值，不是“10%到15%之间随便掷”。装等33才新增T4的20%。同一源数据还存在装等1已能达到T1的家族，例如珠宝 `jewels:0` 的异常状态强度家族；所以不能制定“所有T1都必须80装等”的伪通则。珠宝例子只解释阶级编号，不被纳入普通装备打造容量。

## 4 首发装等30与未来预览

本游戏按“首发最高装等30”设计，不把所有装备固定为30。后续更高装等的规则可以预存，网页可以切换查看，但正式获取、掉落、发奖、制造与导入必须共用同一开放边界。离线预览不能绕过该边界进入正式库存。

在本快照的25类别并集里，装等30按等级这一条件可访问 **1834个档位行、752个部位内家族**；另有28个家族尚无等级合格档。它们是去掉其他资格条件前的资料统计，不是任意装等30底材的实际可出词缀数量。

### 高阶通货为什么先只预览

| 通货家族 | 高级最低新增词缀等级 | 完美最低新增词缀等级 | 首发30装等阶段 |
|---|---:|---:|---|
| 蜕变石 增幅石 | 44 | 70 | 参考门槛高于正式开放上限 |
| 富豪石 崇高石 混沌石 | 35 | 50 | 参考门槛高于正式开放上限 |

上述参考门槛来自专门的通货核查：44有GGG 0.5.0直接支持，35、50、70由本轮社区物品文本读取支持，并非全部数值都已经逐一取得官方当前物品面板。它们限制新增词缀，不会提升装备装等，也不会把旧词缀自动升档。首发若沿用这些参考门槛，高级与完美版本均无合法目标，应标成未来功能而不是暗改门槛。普通神圣石用于已有词缀数值重掷，不属于这五类新增最低等级模型，也不创造“高级神圣”或“完美神圣”。[GGG 0.5.0补丁](https://www.pathofexile.com/forum/view-thread/3932540)、[PoE2DB 物品稀有度说明](https://poe2db.tw/cn/Item_Rarity)

最低词缀等级还有“避免某词缀类型被完全排除”的例外。其确切回退算法、官方族标识和处理顺序尚未核实，因此不能声称简单执行 `通货下限 ≤ 档位门槛 ≤ 装等` 就完整复现PoE2。离线实验可以明确采用自有严格过滤规则，并在无候选时拒绝操作；这仍只是实验规则，不是已经核验的服务器行为。[PoE2DB 最低词缀等级](https://poe2db.tw/cn/Minimum_Modifier_Level)

## 5 六类网页预览选了哪些词缀

精选池只接收单个数值或单区间效果，不把复合词缀、多区间点伤或同值作用多属性的效果强行压成一个旧属性。准确保留原始阶级、门槛、端点、英文阶名与英文效果。没有剑类源行，所以新预览使用有资料的单手锤；旧原型里的剑不因此被改名，也不接收伪造的剑词缀。

**这是部位并集精选预览，不是具体底材可生成池。** 例如胸甲与鞋子的护甲、闪避值、能量护盾可能各有底材限制；把它们收在同一类别用于研究，不表示任意一件底材能同时生成全部效果。来源鞋子页面本身也明确区分不同基础类型的词缀池。[ExileDB 鞋子词缀](https://exiledb.com/mods/boots)

### 单手锤

| 家族ID | 前后缀 | 中文效果名 | 完整档数 | 装等30最高档 | 当前最高档数值 |
|---|---|---|---:|---|---|
| `one-hand-maces:0` | 前缀 | 攻击元素伤害 | 6 | T5 | 攻击元素伤害提高 36–52% |
| `one-hand-maces:1` | 前缀 | 命中值 | 9 | T6 | 命中值 +85–123 |
| `one-hand-maces:7` | 前缀 | 物理伤害 | 8 | T6 | 物理伤害提高 65–84% |
| `one-hand-maces:9` | 后缀 | 击败敌人恢复生命 | 8 | T6 | 每击败一名敌人恢复 10–18 生命 |
| `one-hand-maces:13` | 后缀 | 暴击率 | 6 | T4 | 暴击率 +2.11–2.7% |
| `one-hand-maces:14` | 后缀 | 暴击伤害加成 | 6 | T4 | 暴击伤害加成 +14–16% |
| `one-hand-maces:15` | 后缀 | 攻击速度 | 8 | T5 | 攻击速度提高 14–16% |
| `one-hand-maces:17` | 后缀 | 晕眩积累 | 6 | T4 | 造成的晕眩积累提高 41–50% |
| `one-hand-maces:19` | 后缀 | 击败敌人恢复魔力 | 8 | T6 | 每击败一名敌人恢复 6–9 魔力 |
| `one-hand-maces:21` | 后缀 | 力量 | 8 | T6 | 力量 +13–16 |

### 弓

| 家族ID | 前后缀 | 中文效果名 | 完整档数 | 装等30最高档 | 当前最高档数值 |
|---|---|---|---:|---|---|
| `bows:0` | 前缀 | 攻击元素伤害 | 6 | T5 | 攻击元素伤害提高 36–52% |
| `bows:1` | 前缀 | 命中值 | 10 | T7 | 命中值 +85–123 |
| `bows:7` | 前缀 | 物理伤害 | 8 | T6 | 物理伤害提高 65–84% |
| `bows:9` | 后缀 | 敏捷 | 8 | T6 | 敏捷 +13–16 |
| `bows:10` | 后缀 | 投射物技能等级 | 4 | T4 | 所有投射物技能等级 +1 |
| `bows:11` | 后缀 | 击败敌人恢复生命 | 8 | T6 | 每击败一名敌人恢复 10–18 生命 |
| `bows:15` | 后缀 | 暴击率 | 6 | T4 | 暴击率 +2.11–2.7% |
| `bows:16` | 后缀 | 暴击伤害加成 | 6 | T4 | 暴击伤害加成 +14–16% |
| `bows:17` | 后缀 | 攻击速度 | 5 | T2 | 攻击速度提高 14–16% |
| `bows:19` | 后缀 | 击败敌人恢复魔力 | 8 | T6 | 每击败一名敌人恢复 6–9 魔力 |

### 法杖

| 家族ID | 前后缀 | 中文效果名 | 完整档数 | 装等30最高档 | 当前最高档数值 |
|---|---|---|---:|---|---|
| `staves:4` | 前缀 | 最大魔力 | 11 | T8 | 最大魔力 +69–108 |
| `staves:5` | 前缀 | 法术伤害 | 8 | T6 | 法术伤害提高 89–108% |
| `staves:3` | 前缀 | 火焰伤害 | 8 | T6 | 火焰伤害提高 89–108% |
| `staves:7` | 前缀 | 冰霜伤害 | 8 | T6 | 冰霜伤害提高 89–108% |
| `staves:14` | 后缀 | 施法速度 | 7 | T5 | 施法速度提高 26–31% |
| `staves:15` | 后缀 | 智慧 | 8 | T6 | 智慧 +13–16 |
| `staves:16` | 后缀 | 击败敌人恢复生命 | 8 | T6 | 每击败一名敌人恢复 10–18 生命 |
| `staves:20` | 后缀 | 魔力再生率 | 6 | T4 | 魔力再生率提高 45–59% |
| `staves:21` | 后缀 | 法术暴击率 | 6 | T4 | 法术暴击率提高 60–69% |
| `staves:22` | 后缀 | 法术暴击伤害加成 | 6 | T4 | 法术暴击伤害加成提高 30–36% |

### 胸甲

| 家族ID | 前后缀 | 中文效果名 | 完整档数 | 装等30最高档 | 当前最高档数值 |
|---|---|---|---:|---|---|
| `body-armours:1` | 前缀 | 生命上限 | 13 | T10 | 生命上限 +40–59 |
| `body-armours:12` | 前缀 | 护甲 | 11 | T8 | 护甲 +78–98 |
| `body-armours:11` | 前缀 | 闪避值 | 11 | T8 | 闪避值 +67–87 |
| `body-armours:10` | 前缀 | 最大能量护盾 | 11 | T8 | 最大能量护盾 +31–35 |
| `body-armours:30` | 后缀 | 冰霜抗性 | 8 | T6 | 冰霜抗性 +16–20% |
| `body-armours:33` | 后缀 | 火焰抗性 | 8 | T6 | 火焰抗性 +16–20% |
| `body-armours:35` | 后缀 | 闪电抗性 | 8 | T6 | 闪电抗性 +16–20% |
| `body-armours:40` | 后缀 | 力量 | 8 | T6 | 力量 +13–16 |
| `body-armours:43` | 后缀 | 智慧 | 8 | T6 | 智慧 +13–16 |
| `body-armours:31` | 后缀 | 敏捷 | 8 | T6 | 敏捷 +13–16 |

### 鞋子

| 家族ID | 前后缀 | 中文效果名 | 完整档数 | 装等30最高档 | 当前最高档数值 |
|---|---|---|---:|---|---|
| `boots:0` | 前缀 | 生命上限 | 9 | T6 | 生命上限 +40–59 |
| `boots:1` | 前缀 | 最大魔力 | 9 | T6 | 最大魔力 +35–54 |
| `boots:5` | 前缀 | 移动速度 | 6 | T5 | 移动速度提高 15% |
| `boots:7` | 前缀 | 护甲 | 7 | T4 | 护甲 +78–98 |
| `boots:23` | 后缀 | 冰霜抗性 | 8 | T6 | 冰霜抗性 +16–20% |
| `boots:26` | 后缀 | 火焰抗性 | 8 | T6 | 火焰抗性 +16–20% |
| `boots:29` | 后缀 | 闪电抗性 | 8 | T6 | 闪电抗性 +16–20% |
| `boots:36` | 后缀 | 力量 | 8 | T6 | 力量 +13–16 |
| `boots:38` | 后缀 | 智慧 | 8 | T6 | 智慧 +13–16 |
| `boots:24` | 后缀 | 敏捷 | 8 | T6 | 敏捷 +13–16 |

### 戒指

| 家族ID | 前后缀 | 中文效果名 | 完整档数 | 装等30最高档 | 当前最高档数值 |
|---|---|---|---:|---|---|
| `rings:7` | 前缀 | 生命上限 | 8 | T5 | 生命上限 +40–59 |
| `rings:8` | 前缀 | 最大魔力 | 12 | T9 | 最大魔力 +35–54 |
| `rings:1` | 前缀 | 冰霜伤害 | 6 | T5 | 冰霜伤害提高 8–12% |
| `rings:5` | 前缀 | 命中值 | 8 | T5 | 命中值 +85–123 |
| `rings:16` | 后缀 | 冰霜抗性 | 8 | T6 | 冰霜抗性 +16–20% |
| `rings:18` | 后缀 | 火焰抗性 | 8 | T6 | 火焰抗性 +16–20% |
| `rings:25` | 后缀 | 闪电抗性 | 8 | T6 | 闪电抗性 +16–20% |
| `rings:30` | 后缀 | 力量 | 8 | T6 | 力量 +13–16 |
| `rings:20` | 后缀 | 智慧 | 8 | T6 | 智慧 +13–16 |
| `rings:17` | 后缀 | 敏捷 | 8 | T6 | 敏捷 +13–16 |

精选池共60个部位内家族、473档；装等30有189个等级合格档位行。生成权重仍为未知。若网页为了可操作而使用均匀抽选，必须标注为演示抽样，不能展示成真实PoE2概率。档内演示步长依据源端点精度推导，同样不宣称已经验证真实档内分布。

## 6 资料边界与计数口径

| 项目 | 本手册范围 |
|---|---|
| 源站 | ExileDB 社区公开资料，非GGG官方数据库 |
| 固定版本 | 源站标注0.5.5；构建0.5.5.4.2；本地观察日2026-10-24 |
| 源文件全部记录 | 9237行，包含多种不同生成来源；不是9237个普通词缀 |
| 本文完整普通词缀 | ordinary_explicit 域4333档位行 |
| 部位类别 | 25类 |
| 部位内家族 | 780组，按类别加family_local_index分组；跨部位相似效果重复计数 |
| 家族真实档数 | 本快照各族1–13档，不是统一T0–T15 |
| 门槛范围 | 本快照最低1，最高83；更高预览装等不凭空补新档 |
| 官方标识 | game_mod_id为空；本地family ID不是官方全局mod group |
| 底材资格 | 仅类别并集；具体底材资格没有全量核验 |
| 真实随机概率 | 词缀权重、族/档抽样顺序、档内分布均未知 |
| 完整性 | 不是完整游戏数据库，不保证之后热修或当前服务端完全相同 |

本手册完整索引包括普通词缀域，不混入基础隐式、传奇效果、腐化、精髓保证、符文、灵魂核心、亵渎等其他域。它们有自己的生成入口与规则，不能因同样显示文字就加入普通重掷池。类别中文仅为本项目检索说明，精确检索键以英文ID为准。

### 按类别的覆盖统计

| 类别 | 英文ID | 部位内家族 | 档位行 | 装等30合格家族 | 装等30合格档位行 |
|---|---|---:|---:|---:|---:|
| 项链 | `amulets` | 33 | 209 | 30 | 75 |
| 腰带 | `belts` | 18 | 135 | 18 | 53 |
| 胸甲 | `body-armours` | 44 | 323 | 43 | 103 |
| 鞋子 | `boots` | 39 | 250 | 38 | 94 |
| 弓 | `bows` | 21 | 140 | 20 | 53 |
| 轻盾 | `bucklers` | 19 | 118 | 14 | 38 |
| 护符 Charm | `charms` | 9 | 51 | 9 | 20 |
| 弩 | `crossbows` | 25 | 156 | 22 | 58 |
| 法器 | `foci` | 22 | 140 | 21 | 58 |
| 手套 | `gloves` | 46 | 295 | 45 | 111 |
| 头盔 | `helmets` | 45 | 285 | 44 | 109 |
| 珠宝 | `jewels` | 163 | 320 | 163 | 320 |
| 生命药剂 | `life-flasks` | 12 | 57 | 11 | 23 |
| 魔力药剂 | `mana-flasks` | 11 | 52 | 10 | 21 |
| 单手锤 | `one-hand-maces` | 22 | 150 | 22 | 59 |
| 长棍 | `quarterstaves` | 23 | 158 | 23 | 62 |
| 箭袋 | `quivers` | 16 | 100 | 15 | 39 |
| 戒指 | `rings` | 31 | 203 | 31 | 86 |
| 权杖 | `sceptres` | 22 | 150 | 22 | 60 |
| 盾牌 | `shields` | 32 | 201 | 24 | 60 |
| 长矛 | `spears` | 24 | 162 | 24 | 63 |
| 法杖 | `staves` | 29 | 185 | 29 | 74 |
| Talismans 类 | `talismans` | 23 | 158 | 23 | 62 |
| 双手锤 | `two-hand-maces` | 22 | 150 | 22 | 59 |
| 魔杖 | `wands` | 29 | 185 | 29 | 74 |

## 7 每个装等的解锁总览

下表展示装等1–100，每一行仅累计 `requiredLevel ≤ 装等` 的源档位。新增数为0意味着这一装等没有新增源门槛，不代表装备无法成长；累积数量也不等于命中率。详细到具体词缀族的对应关系见第8节。装等31以上仅供未来资料预览；84–100在本快照中不会新增任何普通词缀档。

| 装等 | 此级新增档位行 | 累计等级合格档位行 | 累计等级合格部位内家族 | 项目开放状态 |
|---:|---:|---:|---:|---|
| 1 | 604 | 604 | 447 | 首发范围 |
| 2 | 70 | 674 | 517 | 首发范围 |
| 3 | 9 | 683 | 526 | 首发范围 |
| 4 | 8 | 691 | 534 | 首发范围 |
| 5 | 36 | 727 | 563 | 首发范围 |
| 6 | 20 | 747 | 564 | 首发范围 |
| 7 | 0 | 747 | 564 | 首发范围 |
| 8 | 181 | 928 | 654 | 首发范围 |
| 9 | 0 | 928 | 654 | 首发范围 |
| 10 | 21 | 949 | 671 | 首发范围 |
| 11 | 87 | 1036 | 676 | 首发范围 |
| 12 | 29 | 1065 | 680 | 首发范围 |
| 13 | 22 | 1087 | 682 | 首发范围 |
| 14 | 23 | 1110 | 683 | 首发范围 |
| 15 | 28 | 1138 | 689 | 首发范围 |
| 16 | 237 | 1375 | 701 | 首发范围 |
| 17 | 7 | 1382 | 701 | 首发范围 |
| 18 | 45 | 1427 | 709 | 首发范围 |
| 19 | 14 | 1441 | 709 | 首发范围 |
| 20 | 28 | 1469 | 712 | 首发范围 |
| 21 | 41 | 1510 | 733 | 首发范围 |
| 22 | 68 | 1578 | 733 | 首发范围 |
| 23 | 24 | 1602 | 734 | 首发范围 |
| 24 | 41 | 1643 | 751 | 首发范围 |
| 25 | 45 | 1688 | 751 | 首发范围 |
| 26 | 44 | 1732 | 751 | 首发范围 |
| 27 | 3 | 1735 | 751 | 首发范围 |
| 28 | 5 | 1740 | 751 | 首发范围 |
| 29 | 14 | 1754 | 751 | 首发范围 |
| 30 | 80 | 1834 | 752 | 首发上限 |
| 31 | 6 | 1840 | 753 | 仅预览 未开放 |
| 32 | 24 | 1864 | 754 | 仅预览 未开放 |
| 33 | 273 | 2137 | 757 | 仅预览 未开放 |
| 34 | 17 | 2154 | 757 | 仅预览 未开放 |
| 35 | 15 | 2169 | 757 | 仅预览 未开放 |
| 36 | 65 | 2234 | 757 | 仅预览 未开放 |
| 37 | 22 | 2256 | 757 | 仅预览 未开放 |
| 38 | 70 | 2326 | 757 | 仅预览 未开放 |
| 39 | 0 | 2326 | 757 | 仅预览 未开放 |
| 40 | 35 | 2361 | 757 | 仅预览 未开放 |
| 41 | 13 | 2374 | 757 | 仅预览 未开放 |
| 42 | 9 | 2383 | 759 | 仅预览 未开放 |
| 43 | 0 | 2383 | 759 | 仅预览 未开放 |
| 44 | 98 | 2481 | 759 | 仅预览 未开放 |
| 45 | 42 | 2523 | 759 | 仅预览 未开放 |
| 46 | 224 | 2747 | 761 | 仅预览 未开放 |
| 47 | 17 | 2764 | 761 | 仅预览 未开放 |
| 48 | 62 | 2826 | 767 | 仅预览 未开放 |
| 49 | 16 | 2842 | 767 | 仅预览 未开放 |
| 50 | 15 | 2857 | 767 | 仅预览 未开放 |
| 51 | 2 | 2859 | 767 | 仅预览 未开放 |
| 52 | 17 | 2876 | 767 | 仅预览 未开放 |
| 53 | 1 | 2877 | 767 | 仅预览 未开放 |
| 54 | 160 | 3037 | 767 | 仅预览 未开放 |
| 55 | 84 | 3121 | 768 | 仅预览 未开放 |
| 56 | 27 | 3148 | 768 | 仅预览 未开放 |
| 57 | 1 | 3149 | 768 | 仅预览 未开放 |
| 58 | 35 | 3184 | 768 | 仅预览 未开放 |
| 59 | 25 | 3209 | 768 | 仅预览 未开放 |
| 60 | 255 | 3464 | 768 | 仅预览 未开放 |
| 61 | 4 | 3468 | 768 | 仅预览 未开放 |
| 62 | 3 | 3471 | 768 | 仅预览 未开放 |
| 63 | 29 | 3500 | 768 | 仅预览 未开放 |
| 64 | 10 | 3510 | 768 | 仅预览 未开放 |
| 65 | 136 | 3646 | 768 | 仅预览 未开放 |
| 66 | 68 | 3714 | 768 | 仅预览 未开放 |
| 67 | 26 | 3740 | 768 | 仅预览 未开放 |
| 68 | 27 | 3767 | 776 | 仅预览 未开放 |
| 69 | 2 | 3769 | 776 | 仅预览 未开放 |
| 70 | 41 | 3810 | 776 | 仅预览 未开放 |
| 71 | 35 | 3845 | 776 | 仅预览 未开放 |
| 72 | 12 | 3857 | 778 | 仅预览 未开放 |
| 73 | 17 | 3874 | 778 | 仅预览 未开放 |
| 74 | 61 | 3935 | 778 | 仅预览 未开放 |
| 75 | 115 | 4050 | 780 | 仅预览 未开放 |
| 76 | 18 | 4068 | 780 | 仅预览 未开放 |
| 77 | 18 | 4086 | 780 | 仅预览 未开放 |
| 78 | 46 | 4132 | 780 | 仅预览 未开放 |
| 79 | 11 | 4143 | 780 | 仅预览 未开放 |
| 80 | 21 | 4164 | 780 | 仅预览 未开放 |
| 81 | 111 | 4275 | 780 | 仅预览 未开放 |
| 82 | 53 | 4328 | 780 | 仅预览 未开放 |
| 83 | 5 | 4333 | 780 | 仅预览 未开放 |
| 84 | 0 | 4333 | 780 | 仅预览 未开放 |
| 85 | 0 | 4333 | 780 | 仅预览 未开放 |
| 86 | 0 | 4333 | 780 | 仅预览 未开放 |
| 87 | 0 | 4333 | 780 | 仅预览 未开放 |
| 88 | 0 | 4333 | 780 | 仅预览 未开放 |
| 89 | 0 | 4333 | 780 | 仅预览 未开放 |
| 90 | 0 | 4333 | 780 | 仅预览 未开放 |
| 91 | 0 | 4333 | 780 | 仅预览 未开放 |
| 92 | 0 | 4333 | 780 | 仅预览 未开放 |
| 93 | 0 | 4333 | 780 | 仅预览 未开放 |
| 94 | 0 | 4333 | 780 | 仅预览 未开放 |
| 95 | 0 | 4333 | 780 | 仅预览 未开放 |
| 96 | 0 | 4333 | 780 | 仅预览 未开放 |
| 97 | 0 | 4333 | 780 | 仅预览 未开放 |
| 98 | 0 | 4333 | 780 | 仅预览 未开放 |
| 99 | 0 | 4333 | 780 | 仅预览 未开放 |
| 100 | 0 | 4333 | 780 | 仅预览 未开放 |

## 8 全部部位内家族门槛索引

**共有780行家族索引，覆盖全部4333个普通档位。** 每行的源效果使用该族T1原文作为辨识标签，不意味着装等30可出T1。“装等30最好档”只计算等级资格；其后附该档准确效果与数值。“下一门槛”是超过30后的首次解锁，不是已开放内容。所有阈值逐一复制源字段，不通过插值或等差公式生成。

解锁列按最低装等从低到高排列；同一最低装等可能同时解锁多档。例：`1→T2 · 1→T1` 表示两档都在装等1具备等级资格，不能遗漏其中一个。同类别中的本地索引从0计数，搜索完整ID可跳到JSON中的对应家族。

部位导航：[项链](#amulets) · [腰带](#belts) · [胸甲](#body-armours) · [鞋子](#boots) · [弓](#bows) · [轻盾](#bucklers) · [护符 Charm](#charms) · [弩](#crossbows) · [法器](#foci) · [手套](#gloves) · [头盔](#helmets) · [珠宝](#jewels) · [生命药剂](#life-flasks) · [魔力药剂](#mana-flasks) · [单手锤](#one-hand-maces) · [长棍](#quarterstaves) · [箭袋](#quivers) · [戒指](#rings) · [权杖](#sceptres) · [盾牌](#shields) · [长矛](#spears) · [法杖](#staves) · [Talismans 类](#talismans) · [双手锤](#two-hand-maces) · [魔杖](#wands)

<a id="amulets"></a>

### 项链 amulets

来源：[ExileDB 项链词缀](https://exiledb.com/mods/amulets)。本类别 33 个本地家族、209 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `amulets:0` 前缀 | +(47–50) to Spirit | 16→T5 · 25→T4 · 33→T3 · 46→T2 · 54→T1 | T4〔门槛25〕 +(34–37) to Spirit | 33 |
| `amulets:1` 前缀 | +(80–89) to maximum Energy Shield | 1→T10 · 11→T9 · 16→T8 · 25→T7 · 33→T6 · 46→T5 · 54→T4 · 65→T3 · 70→T2 · 80→T1 | T7〔门槛25〕 +(25–33) to maximum Energy Shield | 33 |
| `amulets:2` 前缀 | (45–50)% increased maximum Energy Shield | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 65→T2 · 75→T1 | T6〔门槛16〕 (15–20)% increased maximum Energy Shield | 33 |
| `amulets:3` 前缀 | (45–50)% increased Evasion Rating | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 70→T2 · 77→T1 | T6〔门槛16〕 (15–20)% increased Evasion Rating | 33 |
| `amulets:4` 前缀 | (45–50)% increased Armour | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 65→T2 · 75→T1 | T6〔门槛16〕 (15–20)% increased Armour | 33 |
| `amulets:5` 前缀 | +(347–450) to Accuracy Rating | 1→T8 · 11→T7 · 18→T6 · 26→T5 · 36→T4 · 48→T3 · 58→T2 · 67→T1 | T5〔门槛26〕 +(85–123) to Accuracy Rating | 36 |
| `amulets:6` 前缀 | +(120–149) to maximum Life | 1→T9 · 6→T8 · 16→T7 · 24→T6 · 33→T5 · 38→T4 · 46→T3 · 54→T2 · 60→T1 | T6〔门槛24〕 +(40–59) to maximum Life | 33 |
| `amulets:7` 前缀 | +(180–189) to maximum Mana | 1→T13 · 6→T12 · 16→T11 · 25→T10 · 33→T9 · 38→T8 · 46→T7 · 54→T6 · 60→T5 · 65→T4 · 70→T3 · 75→T2 · 82→T1 | T10〔门槛25〕 +(35–54) to maximum Mana | 33 |
| `amulets:8` 前缀 | (16–19)% increased Rarity of Items found | 10→T3 · 29→T2 · 47→T1 | T2〔门槛29〕 (12–15)% increased Rarity of Items found | 47 |
| `amulets:9` 前缀 | (7–8)% increased maximum Life | 33→T3 · 60→T2 · 75→T1 | 无等级合格档 | 33 |
| `amulets:10` 前缀 | (7–8)% increased maximum Mana | 33→T3 · 60→T2 · 75→T1 | 无等级合格档 | 33 |
| `amulets:11` 前缀 | (27–30)% increased Spell Damage | 1→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 75→T1 | T5〔门槛16〕 (8–12)% increased Spell Damage | 33 |
| `amulets:12` 后缀 | +(23–24) to all Attributes | 1→T9 · 11→T8 · 22→T7 · 33→T6 · 44→T5 · 55→T4 · 66→T3 · 75→T2 · 82→T1 | T7〔门槛22〕 +(8–10) to all Attributes | 33 |
| `amulets:13` 后缀 | +(17–18)% to all Elemental Resistances | 12→T6 · 26→T5 · 40→T4 · 54→T3 · 68→T2 · 80→T1 | T5〔门槛26〕 +(6–8)% to all Elemental Resistances | 40 |
| `amulets:14` 后缀 | +(24–27)% to Chaos Resistance | 16→T6 · 30→T5 · 44→T4 · 56→T3 · 68→T2 · 81→T1 | T5〔门槛30〕 +(8–11)% to Chaos Resistance | 44 |
| `amulets:15` 后缀 | +(41–45)% to Cold Resistance | 1→T8 · 14→T7 · 26→T6 · 38→T5 · 50→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛26〕 +(16–20)% to Cold Resistance | 38 |
| `amulets:16` 后缀 | (35–38)% increased Critical Hit Chance | 5→T6 · 20→T5 · 30→T4 · 44→T3 · 58→T2 · 72→T1 | T4〔门槛30〕 (20–24)% increased Critical Hit Chance | 44 |
| `amulets:17` 后缀 | (35–39)% increased Critical Damage Bonus | 8→T6 · 21→T5 · 31→T4 · 45→T3 · 59→T2 · 74→T1 | T5〔门槛21〕 (15–19)% increased Critical Damage Bonus | 31 |
| `amulets:18` 后缀 | (22–24)% of Damage taken Recouped as Life | 30→T5 · 44→T4 · 56→T3 · 68→T2 · 79→T1 | T5〔门槛30〕 (10–12)% of Damage taken Recouped as Life | 44 |
| `amulets:19` 后缀 | +(31–33) to Dexterity | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Dexterity | 33 |
| `amulets:20` 后缀 | +(41–45)% to Fire Resistance | 1→T8 · 12→T7 · 24→T6 · 36→T5 · 48→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛24〕 +(16–20)% to Fire Resistance | 36 |
| `amulets:21` 后缀 | +3 to Level of all Melee Skills | 5→T3 · 41→T2 · 75→T1 | T3〔门槛5〕 +1 to Level of all Melee Skills | 41 |
| `amulets:22` 后缀 | +3 to Level of all Minion Skills | 5→T3 · 41→T2 · 75→T1 | T3〔门槛5〕 +1 to Level of all Minion Skills | 41 |
| `amulets:23` 后缀 | +3 to Level of all Projectile Skills | 5→T3 · 41→T2 · 75→T1 | T3〔门槛5〕 +1 to Level of all Projectile Skills | 41 |
| `amulets:24` 后缀 | +3 to Level of all Spell Skills | 10→T3 · 41→T2 · 75→T1 | T3〔门槛10〕 +1 to Level of all Spell Skills | 41 |
| `amulets:25` 后缀 | (25–28)% increased Cast Speed | 1→T6 · 18→T5 · 35→T4 · 51→T3 · 60→T2 · 66→T1 | T5〔门槛18〕 (13–15)% increased Cast Speed | 35 |
| `amulets:26` 后缀 | +(31–33) to Intelligence | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Intelligence | 33 |
| `amulets:27` 后缀 | (15–18)% increased Rarity of Items found | 3→T3 · 24→T2 · 40→T1 | T2〔门槛24〕 (11–14)% increased Rarity of Items found | 40 |
| `amulets:28` 后缀 | (29.1–33) Life Regeneration per second | 1→T10 · 5→T9 · 11→T8 · 17→T7 · 26→T6 · 35→T5 · 47→T4 · 58→T3 · 68→T2 · 75→T1 | T6〔门槛26〕 (6.1–9) Life Regeneration per second | 35 |
| `amulets:29` 后缀 | +(41–45)% to Lightning Resistance | 1→T8 · 13→T7 · 25→T6 · 37→T5 · 49→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛25〕 +(16–20)% to Lightning Resistance | 37 |
| `amulets:30` 后缀 | (60–69)% increased Mana Regeneration Rate | 1→T6 · 18→T5 · 29→T4 · 42→T3 · 55→T2 · 79→T1 | T4〔门槛29〕 (30–39)% increased Mana Regeneration Rate | 42 |
| `amulets:31` 后缀 | (22–24)% of Damage taken Recouped as Mana | 31→T5 · 45→T4 · 57→T3 · 69→T2 · 80→T1 | 无等级合格档 | 31 |
| `amulets:32` 后缀 | +(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |

<a id="belts"></a>

### 腰带 belts

来源：[ExileDB 腰带词缀](https://exiledb.com/mods/belts)。本类别 18 个本地家族、135 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `belts:0` 前缀 | (35–40)% increased Flask Life Recovery rate | 1→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 75→T1 | T5〔门槛16〕 (11–16)% increased Flask Life Recovery rate | 33 |
| `belts:1` 前缀 | (35–40)% increased Flask Mana Recovery rate | 5→T6 · 11→T5 · 26→T4 · 36→T3 · 54→T2 · 63→T1 | T4〔门槛26〕 (17–22)% increased Flask Mana Recovery rate | 36 |
| `belts:2` 前缀 | (28–33)% increased Charm Effect Duration | 8→T5 · 33→T4 · 46→T3 · 60→T2 · 75→T1 | T5〔门槛8〕 (4–9)% increased Charm Effect Duration | 33 |
| `belts:3` 前缀 | +(150–174) to maximum Life | 1→T10 · 6→T9 · 16→T8 · 24→T7 · 33→T6 · 38→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T7〔门槛24〕 +(40–59) to maximum Life | 33 |
| `belts:4` 前缀 | +(105–124) to maximum Mana | 1→T9 · 6→T8 · 16→T7 · 25→T6 · 33→T5 · 38→T4 · 46→T3 · 54→T2 · 60→T1 | T6〔门槛25〕 +(35–54) to maximum Mana | 33 |
| `belts:5` 前缀 | +(312–351) to Armour | 1→T10 · 11→T9 · 16→T8 · 25→T7 · 33→T6 · 46→T5 · 54→T4 · 65→T3 · 70→T2 · 80→T1 | T7〔门槛25〕 +(69–107) to Armour | 33 |
| `belts:6` 前缀 | (101–151) to (152–220) Physical Thorns damage | 1→T7 · 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (11–16) to (17–23) Physical Thorns damage | 38 |
| `belts:7` 后缀 | (35–40)% increased Charm Charges gained | 2→T6 · 16→T5 · 32→T4 · 48→T3 · 70→T2 · 81→T1 | T5〔门槛16〕 (11–16)% increased Charm Charges gained | 32 |
| `belts:8` 后缀 | (35–40)% increased Flask Charges gained | 2→T6 · 16→T5 · 32→T4 · 48→T3 · 70→T2 · 81→T1 | T5〔门槛16〕 (11–16)% increased Flask Charges gained | 32 |
| `belts:9` 后缀 | (23–25)% reduced Charm Charges used | 3→T6 · 18→T5 · 33→T4 · 50→T3 · 72→T2 · 81→T1 | T5〔门槛18〕 (11–13)% reduced Charm Charges used | 33 |
| `belts:10` 后缀 | (23–25)% reduced Flask Charges used | 3→T6 · 18→T5 · 33→T4 · 50→T3 · 72→T2 · 81→T1 | T5〔门槛18〕 (11–13)% reduced Flask Charges used | 33 |
| `belts:11` 后缀 | +(24–27)% to Chaos Resistance | 16→T6 · 30→T5 · 44→T4 · 56→T3 · 68→T2 · 81→T1 | T5〔门槛30〕 +(8–11)% to Chaos Resistance | 44 |
| `belts:12` 后缀 | +(41–45)% to Cold Resistance | 1→T8 · 14→T7 · 26→T6 · 38→T5 · 50→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛26〕 +(16–20)% to Cold Resistance | 38 |
| `belts:13` 后缀 | +(41–45)% to Fire Resistance | 1→T8 · 12→T7 · 24→T6 · 36→T5 · 48→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛24〕 +(16–20)% to Fire Resistance | 36 |
| `belts:14` 后缀 | (23.1–29) Life Regeneration per second | 1→T9 · 5→T8 · 11→T7 · 17→T6 · 26→T5 · 35→T4 · 47→T3 · 58→T2 · 68→T1 | T5〔门槛26〕 (6.1–9) Life Regeneration per second | 35 |
| `belts:15` 后缀 | +(41–45)% to Lightning Resistance | 1→T8 · 13→T7 · 25→T6 · 37→T5 · 49→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛25〕 +(16–20)% to Lightning Resistance | 37 |
| `belts:16` 后缀 | +(34–36) to Strength | 1→T9 · 11→T8 · 22→T7 · 33→T6 · 44→T5 · 55→T4 · 66→T3 · 74→T2 · 81→T1 | T7〔门槛22〕 +(13–16) to Strength | 33 |
| `belts:17` 后缀 | +(254–304) to Stun Threshold | 1→T10 · 8→T9 · 15→T8 · 22→T7 · 29→T6 · 36→T5 · 45→T4 · 54→T3 · 63→T2 · 72→T1 | T6〔门槛29〕 +(73–97) to Stun Threshold | 36 |

<a id="body-armours"></a>

### 胸甲 body-armours

来源：[ExileDB 胸甲词缀](https://exiledb.com/mods/body-armours)。本类别 44 个本地家族、323 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `body-armours:0` 前缀 | +(57–61) to Spirit | 16→T8 · 25→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 78→T1 | T7〔门槛25〕 +(34–37) to Spirit | 33 |
| `body-armours:1` 前缀 | 生命上限；+(200–214) to maximum Life | 1→T13 · 6→T12 · 16→T11 · 24→T10 · 33→T9 · 38→T8 · 46→T7 · 54→T6 · 60→T5 · 65→T4 · 70→T3 · 75→T2 · 80→T1 | T10〔门槛24〕 +(40–59) to maximum Life | 33 |
| `body-armours:2` 前缀 | (101–110)% increased Armour and Evasion | 2→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Armour and Evasion | 33 |
| `body-armours:3` 前缀 | +(150–170) to Armour+(142–161) to Evasion Rating | 1→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 +(17–46) to Armour+(11–41) to Evasion Rating | 33 |
| `body-armours:4` 前缀 | +(42–52) to Armour+(40–50) to Evasion Rating(39–42)% increased Armour and Evasion | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 +(6–16) to Armour+(4–14) to Evasion Rating(14–20)% increased Armour and Evasion | 33 |
| `body-armours:5` 前缀 | (39–42)% increased Armour and Evasion+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Armour and Evasion+(11–19) to maximum Life | 33 |
| `body-armours:6` 前缀 | (101–151) to (152–220) Physical Thorns damage | 1→T7 · 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (11–16) to (17–23) Physical Thorns damage | 38 |
| `body-armours:7` 前缀 | (101–110)% increased Armour, Evasion and Energy Shield | 2→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Armour, Evasion and Energy Shield | 33 |
| `body-armours:8` 前缀 | +(150–170) to Armour+(43–48) to maximum Energy Shield | 1→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 +(17–46) to Armour+(9–15) to maximum Energy Shield | 33 |
| `body-armours:9` 前缀 | +(142–161) to Evasion Rating+(43–48) to maximum Energy Shield | 1→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 +(11–41) to Evasion Rating+(9–15) to maximum Energy Shield | 33 |
| `body-armours:10` 前缀 | 最大能量护盾；+(91–96) to maximum Energy Shield | 1→T11 · 8→T10 · 16→T9 · 25→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 70→T2 · 79→T1 | T8〔门槛25〕 +(31–35) to maximum Energy Shield | 33 |
| `body-armours:11` 前缀 | 闪避值；+(262–300) to Evasion Rating | 1→T11 · 8→T10 · 16→T9 · 25→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 79→T1 | T8〔门槛25〕 +(67–87) to Evasion Rating | 33 |
| `body-armours:12` 前缀 | 护甲；+(278–310) to Armour | 1→T11 · 8→T10 · 16→T9 · 25→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 79→T1 | T8〔门槛25〕 +(78–98) to Armour | 33 |
| `body-armours:13` 前缀 | (101–110)% increased Evasion and Energy Shield | 2→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Evasion and Energy Shield | 33 |
| `body-armours:14` 前缀 | +(40–50) to Evasion Rating+(13–15) to maximum Energy Shield(39–42)% increased Evasion and Energy Shield | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 +(4–14) to Evasion Rating+(5–6) to maximum Energy Shield(14–20)% increased Evasion and Energy Shield | 33 |
| `body-armours:15` 前缀 | (39–42)% increased Evasion and Energy Shield+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Evasion and Energy Shield+(11–19) to maximum Life | 33 |
| `body-armours:16` 前缀 | (101–110)% increased Evasion Rating | 2→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Evasion Rating | 33 |
| `body-armours:17` 前缀 | +(71–90) to Evasion Rating(39–42)% increased Evasion Rating | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 +(7–26) to Evasion Rating(14–20)% increased Evasion Rating | 33 |
| `body-armours:18` 前缀 | (39–42)% increased Evasion Rating+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Evasion Rating+(11–19) to maximum Life | 33 |
| `body-armours:19` 前缀 | (101–110)% increased Armour and Energy Shield | 2→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Armour and Energy Shield | 33 |
| `body-armours:20` 前缀 | +(42–52) to Armour+(13–15) to maximum Energy Shield(39–42)% increased Armour and Energy Shield | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 +(6–16) to Armour+(5–6) to maximum Energy Shield(14–20)% increased Armour and Energy Shield | 33 |
| `body-armours:21` 前缀 | (39–42)% increased Armour and Energy Shield+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Armour and Energy Shield+(11–19) to maximum Life | 33 |
| `body-armours:22` 前缀 | +(76–95) to Armour(39–42)% increased Armour | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 +(10–29) to Armour(14–20)% increased Armour | 33 |
| `body-armours:23` 前缀 | (39–42)% increased Armour+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Armour+(11–19) to maximum Life | 33 |
| `body-armours:24` 前缀 | (101–110)% increased Armour | 2→T8 · 16→T7 · 35→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Armour | 35 |
| `body-armours:25` 前缀 | (101–110)% increased Energy Shield | 2→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Energy Shield | 33 |
| `body-armours:26` 前缀 | +(26–30) to maximum Energy Shield(39–42)% increased Energy Shield | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 +(8–13) to maximum Energy Shield(14–20)% increased Energy Shield | 33 |
| `body-armours:27` 前缀 | (39–42)% increased Energy Shield+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Energy Shield+(11–19) to maximum Life | 33 |
| `body-armours:28` 后缀 | +(44–50)% of Armour also applies to Elemental Damage | 1→T6 · 16→T5 · 36→T4 · 48→T3 · 66→T2 · 81→T1 | T5〔门槛16〕 +(20–25)% of Armour also applies to Elemental Damage | 36 |
| `body-armours:29` 后缀 | +(24–27)% to Chaos Resistance | 16→T6 · 30→T5 · 44→T4 · 56→T3 · 68→T2 · 81→T1 | T5〔门槛30〕 +(8–11)% to Chaos Resistance | 44 |
| `body-armours:30` 后缀 | 冰霜抗性；+(41–45)% to Cold Resistance | 1→T8 · 14→T7 · 26→T6 · 38→T5 · 50→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛26〕 +(16–20)% to Cold Resistance | 38 |
| `body-armours:31` 后缀 | 敏捷；+(31–33) to Dexterity | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Dexterity | 33 |
| `body-armours:32` 后缀 | Gain Deflection Rating equal to (24–26)% of Evasion Rating | 1→T6 · 16→T5 · 36→T4 · 48→T3 · 66→T2 · 81→T1 | T5〔门槛16〕 Gain Deflection Rating equal to (12–14)% of Evasion Rating | 36 |
| `body-armours:33` 后缀 | 火焰抗性；+(41–45)% to Fire Resistance | 1→T8 · 12→T7 · 24→T6 · 36→T5 · 48→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛24〕 +(16–20)% to Fire Resistance | 36 |
| `body-armours:34` 后缀 | (33.1–36) Life Regeneration per second | 1→T11 · 5→T10 · 11→T9 · 17→T8 · 26→T7 · 35→T6 · 47→T5 · 58→T4 · 68→T3 · 75→T2 · 81→T1 | T7〔门槛26〕 (6.1–9) Life Regeneration per second | 35 |
| `body-armours:35` 后缀 | 闪电抗性；+(41–45)% to Lightning Resistance | 1→T8 · 13→T7 · 25→T6 · 37→T5 · 49→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛25〕 +(16–20)% to Lightning Resistance | 37 |
| `body-armours:36` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `body-armours:37` 后缀 | (56–60)% reduced Duration of Bleeding on You | 21→T5 · 37→T4 · 50→T3 · 64→T2 · 76→T1 | T5〔门槛21〕 (36–40)% reduced Duration of Bleeding on You | 37 |
| `body-armours:38` 后缀 | (56–60)% reduced Ignite Duration on you | 21→T5 · 37→T4 · 50→T3 · 64→T2 · 76→T1 | T5〔门槛21〕 (36–40)% reduced Ignite Duration on you | 37 |
| `body-armours:39` 后缀 | (56–60)% reduced Poison Duration on you | 21→T5 · 37→T4 · 50→T3 · 64→T2 · 76→T1 | T5〔门槛21〕 (36–40)% reduced Poison Duration on you | 37 |
| `body-armours:40` 后缀 | 力量；+(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |
| `body-armours:41` 后缀 | +(254–304) to Stun Threshold | 1→T10 · 8→T9 · 15→T8 · 22→T7 · 29→T6 · 36→T5 · 45→T4 · 54→T3 · 63→T2 · 72→T1 | T6〔门槛29〕 +(73–97) to Stun Threshold | 36 |
| `body-armours:42` 后缀 | (24–27)% increased Energy Shield Recharge Rate | 48→T3 · 66→T2 · 81→T1 | 无等级合格档 | 48 |
| `body-armours:43` 后缀 | 智慧；+(31–33) to Intelligence | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Intelligence | 33 |

<a id="boots"></a>

### 鞋子 boots

来源：[ExileDB 鞋子词缀](https://exiledb.com/mods/boots)。本类别 39 个本地家族、250 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `boots:0` 前缀 | 生命上限；+(120–149) to maximum Life | 1→T9 · 6→T8 · 16→T7 · 24→T6 · 33→T5 · 38→T4 · 46→T3 · 54→T2 · 60→T1 | T6〔门槛24〕 +(40–59) to maximum Life | 33 |
| `boots:1` 前缀 | 最大魔力；+(105–124) to maximum Mana | 1→T9 · 6→T8 · 16→T7 · 25→T6 · 33→T5 · 38→T4 · 46→T3 · 54→T2 · 60→T1 | T6〔门槛25〕 +(35–54) to maximum Mana | 33 |
| `boots:2` 前缀 | (39–42)% increased Evasion Rating+(95–136) to Stun Threshold | 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (14–20)% increased Evasion Rating+(14–24) to Stun Threshold | 38 |
| `boots:3` 前缀 | +(147–176) to Evasion Rating | 1→T7 · 8→T6 · 16→T5 · 25→T4 · 33→T3 · 46→T2 · 54→T1 | T4〔门槛25〕 +(67–87) to Evasion Rating | 33 |
| `boots:4` 前缀 | (92–100)% increased Evasion Rating | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Evasion Rating | 33 |
| `boots:5` 前缀 | 移动速度；35% increased Movement Speed | 1→T6 · 16→T5 · 33→T4 · 46→T3 · 65→T2 · 82→T1 | T5〔门槛16〕 15% increased Movement Speed | 33 |
| `boots:6` 前缀 | (39–42)% increased Armour+(95–136) to Stun Threshold | 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (14–20)% increased Armour+(14–24) to Stun Threshold | 38 |
| `boots:7` 前缀 | 护甲；+(160–190) to Armour | 1→T7 · 8→T6 · 16→T5 · 25→T4 · 33→T3 · 46→T2 · 54→T1 | T4〔门槛25〕 +(78–98) to Armour | 33 |
| `boots:8` 前缀 | (92–100)% increased Armour | 2→T7 · 16→T6 · 35→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Armour | 35 |
| `boots:9` 前缀 | +(48–60) to maximum Energy Shield | 1→T7 · 8→T6 · 16→T5 · 25→T4 · 33→T3 · 46→T2 · 54→T1 | T4〔门槛25〕 +(31–35) to maximum Energy Shield | 33 |
| `boots:10` 前缀 | (39–42)% increased Energy Shield+(95–136) to Stun Threshold | 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (14–20)% increased Energy Shield+(14–24) to Stun Threshold | 38 |
| `boots:11` 前缀 | (92–100)% increased Energy Shield | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Energy Shield | 33 |
| `boots:12` 前缀 | +(65–78) to Evasion Rating+(22–25) to maximum Energy Shield | 1→T4 · 16→T3 · 33→T2 · 46→T1 | T3〔门槛16〕 +(11–41) to Evasion Rating+(9–15) to maximum Energy Shield | 33 |
| `boots:13` 前缀 | (92–100)% increased Evasion and Energy Shield | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Evasion and Energy Shield | 33 |
| `boots:14` 前缀 | (39–42)% increased Evasion and Energy Shield+(95–136) to Stun Threshold | 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (14–20)% increased Evasion and Energy Shield+(14–24) to Stun Threshold | 38 |
| `boots:15` 前缀 | (92–100)% increased Armour and Energy Shield | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Armour and Energy Shield | 33 |
| `boots:16` 前缀 | (39–42)% increased Armour and Energy Shield+(95–136) to Stun Threshold | 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (14–20)% increased Armour and Energy Shield+(14–24) to Stun Threshold | 38 |
| `boots:17` 前缀 | +(72–85) to Armour+(22–25) to maximum Energy Shield | 1→T4 · 16→T3 · 33→T2 · 46→T1 | T3〔门槛16〕 +(17–46) to Armour+(9–15) to maximum Energy Shield | 33 |
| `boots:18` 前缀 | (92–100)% increased Armour and Evasion | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Armour and Evasion | 33 |
| `boots:19` 前缀 | (39–42)% increased Armour and Evasion+(95–136) to Stun Threshold | 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (14–20)% increased Armour and Evasion+(14–24) to Stun Threshold | 38 |
| `boots:20` 前缀 | +(72–85) to Armour+(65–78) to Evasion Rating | 1→T4 · 16→T3 · 33→T2 · 46→T1 | T3〔门槛16〕 +(17–46) to Armour+(11–41) to Evasion Rating | 33 |
| `boots:21` 前缀 | (101–110)% increased Armour, Evasion and Energy Shield | 2→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Armour, Evasion and Energy Shield | 33 |
| `boots:22` 后缀 | +(24–27)% to Chaos Resistance | 16→T6 · 30→T5 · 44→T4 · 56→T3 · 68→T2 · 81→T1 | T5〔门槛30〕 +(8–11)% to Chaos Resistance | 44 |
| `boots:23` 后缀 | 冰霜抗性；+(41–45)% to Cold Resistance | 1→T8 · 14→T7 · 26→T6 · 38→T5 · 50→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛26〕 +(16–20)% to Cold Resistance | 38 |
| `boots:24` 后缀 | 敏捷；+(31–33) to Dexterity | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Dexterity | 33 |
| `boots:25` 后缀 | Gain Deflection Rating equal to (21–23)% of Evasion Rating | 1→T5 · 16→T4 · 36→T3 · 48→T2 · 66→T1 | T4〔门槛16〕 Gain Deflection Rating equal to (12–14)% of Evasion Rating | 36 |
| `boots:26` 后缀 | 火焰抗性；+(41–45)% to Fire Resistance | 1→T8 · 12→T7 · 24→T6 · 36→T5 · 48→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛24〕 +(16–20)% to Fire Resistance | 36 |
| `boots:27` 后缀 | (15–18)% increased Rarity of Items found | 3→T3 · 24→T2 · 40→T1 | T2〔门槛24〕 (11–14)% increased Rarity of Items found | 40 |
| `boots:28` 后缀 | (18.1–23) Life Regeneration per second | 1→T8 · 5→T7 · 11→T6 · 17→T5 · 26→T4 · 35→T3 · 47→T2 · 58→T1 | T4〔门槛26〕 (6.1–9) Life Regeneration per second | 35 |
| `boots:29` 后缀 | 闪电抗性；+(41–45)% to Lightning Resistance | 1→T8 · 13→T7 · 25→T6 · 37→T5 · 49→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛25〕 +(16–20)% to Lightning Resistance | 37 |
| `boots:30` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `boots:31` 后缀 | (56–60)% reduced Chill Duration on you | 20→T5 · 36→T4 · 49→T3 · 63→T2 · 75→T1 | T5〔门槛20〕 (36–40)% reduced Chill Duration on you | 36 |
| `boots:32` 后缀 | (56–60)% reduced Freeze Duration on you | 20→T5 · 36→T4 · 49→T3 · 63→T2 · 75→T1 | T5〔门槛20〕 (36–40)% reduced Freeze Duration on you | 36 |
| `boots:33` 后缀 | (56–60)% reduced Shock duration on you | 20→T5 · 36→T4 · 49→T3 · 63→T2 · 75→T1 | T5〔门槛20〕 (36–40)% reduced Shock duration on you | 36 |
| `boots:34` 后缀 | +(305–352) to Stun Threshold | 1→T11 · 8→T10 · 15→T9 · 22→T8 · 29→T7 · 36→T6 · 45→T5 · 54→T4 · 63→T3 · 72→T2 · 80→T1 | T7〔门槛29〕 +(73–97) to Stun Threshold | 36 |
| `boots:35` 后缀 | +(38–43)% of Armour also applies to Elemental Damage | 1→T5 · 16→T4 · 36→T3 · 48→T2 · 66→T1 | T4〔门槛16〕 +(20–25)% of Armour also applies to Elemental Damage | 36 |
| `boots:36` 后缀 | 力量；+(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |
| `boots:37` 后缀 | (16–19)% increased Energy Shield Recharge Rate | 48→T1 | 无等级合格档 | 48 |
| `boots:38` 后缀 | 智慧；+(31–33) to Intelligence | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Intelligence | 33 |

<a id="bows"></a>

### 弓 bows

来源：[ExileDB 弓词缀](https://exiledb.com/mods/bows)。本类别 21 个本地家族、140 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `bows:0` 前缀 | 攻击元素伤害；(87–100)% increased Elemental Damage with Attacks | 4→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 81→T1 | T5〔门槛16〕 (36–52)% increased Elemental Damage with Attacks | 33 |
| `bows:1` 前缀 | 命中值；+(551–650) to Accuracy Rating | 8→T10 · 13→T9 · 18→T8 · 26→T7 · 36→T6 · 48→T5 · 58→T4 · 67→T3 · 76→T2 · 82→T1 | T7〔门槛26〕 +(85–123) to Accuracy Rating | 36 |
| `bows:2` 前缀 | Adds (72–81) to (110–123) Cold Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (6–9) to (10–16) Cold Damage | 33 |
| `bows:3` 前缀 | Adds (88–101) to (133–154) Fire Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (7–11) to (13–19) Fire Damage | 33 |
| `bows:4` 前缀 | (75–79)% increased Physical Damage+(175–200) to Accuracy Rating | 8→T8 · 14→T7 · 23→T6 · 38→T5 · 54→T4 · 65→T3 · 70→T2 · 81→T1 | T6〔门槛23〕 (25–34)% increased Physical Damage+(47–72) to Accuracy Rating | 38 |
| `bows:5` 前缀 | Adds (1–12) to (202–234) Lightning Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (1–2) to (20–30) Lightning Damage | 33 |
| `bows:6` 前缀 | Adds (26–39) to (44–66) Physical Damage | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (6–9) to (11–16) Physical Damage | 33 |
| `bows:7` 前缀 | 物理伤害；(170–179)% increased Physical Damage | 1→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 75→T2 · 82→T1 | T6〔门槛16〕 (65–84)% increased Physical Damage | 33 |
| `bows:8` 后缀 | +(175–200)% Surpassing chance to fire an additional Arrow | 46→T4 · 55→T3 · 66→T2 · 82→T1 | 无等级合格档 | 46 |
| `bows:9` 后缀 | 敏捷；+(31–33) to Dexterity | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Dexterity | 33 |
| `bows:10` 后缀 | 投射物技能等级；+4 to Level of all Projectile Skills | 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +1 to Level of all Projectile Skills | 36 |
| `bows:11` 后缀 | 击败敌人恢复生命；Gain (69–84) Life per enemy killed | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 77→T1 | T6〔门槛22〕 Gain (10–18) Life per enemy killed | 33 |
| `bows:12` 后缀 | Grants 5 Life per Enemy Hit | 8→T4 · 20→T3 · 30→T2 · 40→T1 | T2〔门槛30〕 Grants 4 Life per Enemy Hit | 40 |
| `bows:13` 后缀 | Leeches (9–9.9)% of Physical Damage as Life | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (6–6.9)% of Physical Damage as Life | 38 |
| `bows:14` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `bows:15` 后缀 | 暴击率；+(4.41–5)% to Critical Hit Chance | 1→T6 · 20→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(2.11–2.7)% to Critical Hit Chance | 44 |
| `bows:16` 后缀 | 暴击伤害加成；+(23–25)% to Critical Damage Bonus | 8→T6 · 21→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(14–16)% to Critical Damage Bonus | 44 |
| `bows:17` 后缀 | 攻击速度；(17–19)% increased Attack Speed | 1→T5 · 11→T4 · 22→T3 · 30→T2 · 37→T1 | T2〔门槛30〕 (14–16)% increased Attack Speed | 37 |
| `bows:18` 后缀 | +(41–60) to Accuracy Rating15% increased Light Radius | 8→T3 · 15→T2 · 30→T1 | T1〔门槛30〕 +(41–60) to Accuracy Rating15% increased Light Radius | 无后续源档 |
| `bows:19` 后缀 | 击败敌人恢复魔力；Gain (36–45) Mana per enemy killed | 1→T8 · 12→T7 · 23→T6 · 34→T5 · 45→T4 · 56→T3 · 67→T2 · 78→T1 | T6〔门槛23〕 Gain (6–9) Mana per enemy killed | 34 |
| `bows:20` 后缀 | Leeches (8–8.9)% of Physical Damage as Mana | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (5–5.9)% of Physical Damage as Mana | 38 |

<a id="bucklers"></a>

### 轻盾 bucklers

来源：[ExileDB 轻盾词缀](https://exiledb.com/mods/bucklers)。本类别 19 个本地家族、118 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `bucklers:0` 前缀 | +(175–189) to maximum Life | 1→T11 · 6→T10 · 16→T9 · 24→T8 · 33→T7 · 38→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 70→T1 | T8〔门槛24〕 +(40–59) to maximum Life | 33 |
| `bucklers:1` 前缀 | (39–42)% increased Evasion Rating+(95–136) to Stun Threshold | 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (14–20)% increased Evasion Rating+(14–24) to Stun Threshold | 38 |
| `bucklers:2` 前缀 | +(235–261) to Evasion Rating | 1→T10 · 8→T9 · 16→T8 · 25→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛25〕 +(67–87) to Evasion Rating | 33 |
| `bucklers:3` 前缀 | (101–110)% increased Evasion Rating | 2→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Evasion Rating | 33 |
| `bucklers:4` 前缀 | (25–30)% increased Block chance | 1→T3 · 33→T2 · 65→T1 | T3〔门槛1〕 (15–19)% increased Block chance | 33 |
| `bucklers:5` 前缀 | (101–151) to (152–220) Physical Thorns damage | 1→T7 · 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (11–16) to (17–23) Physical Thorns damage | 38 |
| `bucklers:6` 后缀 | +(24–27)% to Chaos Resistance | 16→T6 · 30→T5 · 44→T4 · 56→T3 · 68→T2 · 81→T1 | T5〔门槛30〕 +(8–11)% to Chaos Resistance | 44 |
| `bucklers:7` 后缀 | +(41–45)% to Cold Resistance | 1→T8 · 14→T7 · 26→T6 · 38→T5 · 50→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛26〕 +(16–20)% to Cold Resistance | 38 |
| `bucklers:8` 后缀 | +(31–33) to Dexterity | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Dexterity | 33 |
| `bucklers:9` 后缀 | Gain Deflection Rating equal to (24–26)% of Evasion Rating | 1→T6 · 16→T5 · 36→T4 · 48→T3 · 66→T2 · 81→T1 | T5〔门槛16〕 Gain Deflection Rating equal to (12–14)% of Evasion Rating | 36 |
| `bucklers:10` 后缀 | +(41–45)% to Fire Resistance | 1→T8 · 12→T7 · 24→T6 · 36→T5 · 48→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛24〕 +(16–20)% to Fire Resistance | 36 |
| `bucklers:11` 后缀 | +(41–45)% to Lightning Resistance | 1→T8 · 13→T7 · 25→T6 · 37→T5 · 49→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛25〕 +(16–20)% to Lightning Resistance | 37 |
| `bucklers:12` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `bucklers:13` 后缀 | +3% to Maximum Chaos Resistance | 68→T3 · 75→T2 · 81→T1 | 无等级合格档 | 68 |
| `bucklers:14` 后缀 | +3% to Maximum Cold Resistance | 68→T3 · 75→T2 · 81→T1 | 无等级合格档 | 68 |
| `bucklers:15` 后缀 | +2% to all Maximum Elemental Resistances | 75→T2 · 81→T1 | 无等级合格档 | 75 |
| `bucklers:16` 后缀 | +3% to Maximum Fire Resistance | 68→T3 · 75→T2 · 81→T1 | 无等级合格档 | 68 |
| `bucklers:17` 后缀 | +3% to Maximum Lightning Resistance | 68→T3 · 75→T2 · 81→T1 | 无等级合格档 | 68 |
| `bucklers:18` 后缀 | +(254–304) to Stun Threshold | 1→T10 · 8→T9 · 15→T8 · 22→T7 · 29→T6 · 36→T5 · 45→T4 · 54→T3 · 63→T2 · 72→T1 | T6〔门槛29〕 +(73–97) to Stun Threshold | 36 |

<a id="charms"></a>

### 护符 Charm charms

来源：[ExileDB 护符 Charm词缀](https://exiledb.com/mods/charms)。本类别 9 个本地家族、51 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `charms:0` 前缀 | Recover (285–350) Life when Used | 1→T8 · 14→T7 · 26→T6 · 36→T5 · 47→T4 · 58→T3 · 67→T2 · 76→T1 | T6〔门槛26〕 Recover (63–92) Life when Used | 36 |
| `charms:1` 前缀 | Recover (230–300) Mana when Used | 1→T8 · 14→T7 · 26→T6 · 36→T5 · 47→T4 · 58→T3 · 67→T2 · 76→T1 | T6〔门槛26〕 Recover (55–75) Mana when Used | 36 |
| `charms:2` 前缀 | Also grants (355–500) Guard | 10→T6 · 21→T5 · 36→T4 · 48→T3 · 60→T2 · 75→T1 | T5〔门槛21〕 Also grants (85–128) Guard | 36 |
| `charms:3` 前缀 | (36–40)% increased Duration | 1→T5 · 20→T4 · 42→T3 · 61→T2 · 78→T1 | T4〔门槛20〕 (21–25)% increased Duration | 42 |
| `charms:4` 后缀 | (31–35)% Chance to gain a Charge when you kill an enemy | 8→T3 · 26→T2 · 45→T1 | T2〔门槛26〕 (26–30)% Chance to gain a Charge when you kill an enemy | 45 |
| `charms:5` 后缀 | (30–32)% reduced Charges per use | 1→T6 · 14→T5 · 34→T4 · 49→T3 · 64→T2 · 83→T1 | T5〔门槛14〕 (18–20)% reduced Charges per use | 34 |
| `charms:6` 后缀 | Gains 0.25 Charges per Second | 8→T3 · 26→T2 · 45→T1 | T2〔门槛26〕 Gains 0.20 Charges per Second | 45 |
| `charms:7` 后缀 | (63–70)% increased Charges gained | 1→T6 · 13→T5 · 33→T4 · 48→T3 · 63→T2 · 82→T1 | T5〔门槛13〕 (31–38)% increased Charges gained | 33 |
| `charms:8` 后缀 | (63–70)% increased Charges | 1→T6 · 12→T5 · 32→T4 · 47→T3 · 62→T2 · 81→T1 | T5〔门槛12〕 (31–38)% increased Charges | 32 |

<a id="crossbows"></a>

### 弩 crossbows

来源：[ExileDB 弩词缀](https://exiledb.com/mods/crossbows)。本类别 25 个本地家族、156 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `crossbows:0` 前缀 | (120–139)% increased Elemental Damage with Attacks | 4→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 81→T1 | T5〔门槛16〕 (48–71)% increased Elemental Damage with Attacks | 33 |
| `crossbows:1` 前缀 | +(551–650) to Accuracy Rating | 8→T10 · 13→T9 · 18→T8 · 26→T7 · 36→T6 · 48→T5 · 58→T4 · 67→T3 · 76→T2 · 82→T1 | T7〔门槛26〕 +(85–123) to Accuracy Rating | 36 |
| `crossbows:2` 前缀 | Adds (112–124) to (168–189) Cold Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (10–14) to (15–23) Cold Damage | 33 |
| `crossbows:3` 前缀 | Adds (135–156) to (205–236) Fire Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (11–17) to (19–28) Fire Damage | 33 |
| `crossbows:4` 前缀 | (75–79)% increased Physical Damage+(175–200) to Accuracy Rating | 8→T8 · 14→T7 · 23→T6 · 38→T5 · 54→T4 · 65→T3 · 70→T2 · 81→T1 | T6〔门槛23〕 (25–34)% increased Physical Damage+(47–72) to Accuracy Rating | 38 |
| `crossbows:5` 前缀 | Adds (1–19) to (310–358) Lightning Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (1–3) to (31–43) Lightning Damage | 33 |
| `crossbows:6` 前缀 | Adds (37–55) to (63–94) Physical Damage | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (8–12) to (15–22) Physical Damage | 33 |
| `crossbows:7` 前缀 | (170–179)% increased Physical Damage | 1→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 75→T2 · 82→T1 | T6〔门槛16〕 (65–84)% increased Physical Damage | 33 |
| `crossbows:8` 后缀 | Loads 2 additional bolts | 55→T2 · 82→T1 | 无等级合格档 | 55 |
| `crossbows:9` 后缀 | +(31–33) to Dexterity | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Dexterity | 33 |
| `crossbows:10` 后缀 | +5 to Level of all Projectile Skills | 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Projectile Skills | 36 |
| `crossbows:11` 后缀 | Gain (69–84) Life per enemy killed | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 77→T1 | T6〔门槛22〕 Gain (10–18) Life per enemy killed | 33 |
| `crossbows:12` 后缀 | Grants 5 Life per Enemy Hit | 8→T4 · 20→T3 · 30→T2 · 40→T1 | T2〔门槛30〕 Grants 4 Life per Enemy Hit | 40 |
| `crossbows:13` 后缀 | Leeches (9–9.9)% of Physical Damage as Life | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (6–6.9)% of Physical Damage as Life | 38 |
| `crossbows:14` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `crossbows:15` 后缀 | +(4.41–5)% to Critical Hit Chance | 1→T6 · 20→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(2.11–2.7)% to Critical Hit Chance | 44 |
| `crossbows:16` 后缀 | +(23–25)% to Critical Damage Bonus | 8→T6 · 21→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(14–16)% to Critical Damage Bonus | 44 |
| `crossbows:17` 后缀 | (17–19)% increased Attack Speed | 1→T5 · 11→T4 · 22→T3 · 30→T2 · 37→T1 | T2〔门槛30〕 (14–16)% increased Attack Speed | 37 |
| `crossbows:18` 后缀 | +(41–60) to Accuracy Rating15% increased Light Radius | 8→T3 · 15→T2 · 30→T1 | T1〔门槛30〕 +(41–60) to Accuracy Rating15% increased Light Radius | 无后续源档 |
| `crossbows:19` 后缀 | Gain (36–45) Mana per enemy killed | 1→T8 · 12→T7 · 23→T6 · 34→T5 · 45→T4 · 56→T3 · 67→T2 · 78→T1 | T6〔门槛23〕 Gain (6–9) Mana per enemy killed | 34 |
| `crossbows:20` 后缀 | Leeches (8–8.9)% of Physical Damage as Mana | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (5–5.9)% of Physical Damage as Mana | 38 |
| `crossbows:21` 后缀 | +(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |
| `crossbows:22` 后缀 | Grenade Skills have +2 Cooldown Uses | 72→T2 · 81→T1 | 无等级合格档 | 72 |
| `crossbows:23` 后缀 | Grenade Skills Fire 2 additional Projectiles | 72→T2 · 81→T1 | 无等级合格档 | 72 |
| `crossbows:24` 后缀 | (33–40)% increased Cooldown Recovery Rate for Grenade Skills | 4→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 81→T1 | T5〔门槛16〕 (9–14)% increased Cooldown Recovery Rate for Grenade Skills | 33 |

<a id="foci"></a>

### 法器 foci

来源：[ExileDB 法器词缀](https://exiledb.com/mods/foci)。本类别 22 个本地家族、140 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `foci:0` 前缀 | (75–89)% increased Chaos Damage | 2→T6 · 8→T5 · 16→T4 · 33→T3 · 46→T2 · 60→T1 | T4〔门槛16〕 (45–54)% increased Chaos Damage | 33 |
| `foci:1` 前缀 | (75–89)% increased Cold Damage | 2→T6 · 8→T5 · 16→T4 · 33→T3 · 46→T2 · 60→T1 | T4〔门槛16〕 (45–54)% increased Cold Damage | 33 |
| `foci:2` 前缀 | (75–89)% increased Fire Damage | 2→T6 · 8→T5 · 16→T4 · 33→T3 · 46→T2 · 60→T1 | T4〔门槛16〕 (45–54)% increased Fire Damage | 33 |
| `foci:3` 前缀 | +(150–164) to maximum Mana | 1→T11 · 6→T10 · 16→T9 · 25→T8 · 33→T7 · 38→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 70→T1 | T8〔门槛25〕 +(35–54) to maximum Mana | 33 |
| `foci:4` 前缀 | (75–89)% increased Lightning Damage | 2→T6 · 8→T5 · 16→T4 · 33→T3 · 46→T2 · 60→T1 | T4〔门槛16〕 (45–54)% increased Lightning Damage | 33 |
| `foci:5` 前缀 | +(81–90) to maximum Energy Shield | 1→T10 · 8→T9 · 16→T8 · 25→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 70→T1 | T7〔门槛25〕 +(31–35) to maximum Energy Shield | 33 |
| `foci:6` 前缀 | (92–100)% increased Energy Shield | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Energy Shield | 33 |
| `foci:7` 前缀 | (39–42)% increased Energy Shield+(33–39) to maximum Mana | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Energy Shield+(9–16) to maximum Mana | 33 |
| `foci:8` 前缀 | (75–89)% increased Spell Physical Damage | 2→T6 · 8→T5 · 16→T4 · 33→T3 · 46→T2 · 60→T1 | T4〔门槛16〕 (45–54)% increased Spell Physical Damage | 33 |
| `foci:9` 前缀 | (75–89)% increased Spell Damage | 1→T6 · 8→T5 · 16→T4 · 33→T3 · 46→T2 · 60→T1 | T4〔门槛16〕 (45–54)% increased Spell Damage | 33 |
| `foci:10` 后缀 | +(24–27)% to Chaos Resistance | 16→T6 · 30→T5 · 44→T4 · 56→T3 · 68→T2 · 81→T1 | T5〔门槛30〕 +(8–11)% to Chaos Resistance | 44 |
| `foci:11` 后缀 | +(41–45)% to Cold Resistance | 1→T8 · 14→T7 · 26→T6 · 38→T5 · 50→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛26〕 +(16–20)% to Cold Resistance | 38 |
| `foci:12` 后缀 | (24–27)% increased Energy Shield Recharge Rate | 48→T3 · 66→T2 · 81→T1 | 无等级合格档 | 48 |
| `foci:13` 后缀 | +(41–45)% to Fire Resistance | 1→T8 · 12→T7 · 24→T6 · 36→T5 · 48→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛24〕 +(16–20)% to Fire Resistance | 36 |
| `foci:14` 后缀 | +2 to Level of all Spell Skills | 10→T2 · 41→T1 | T2〔门槛10〕 +1 to Level of all Spell Skills | 41 |
| `foci:15` 后缀 | (29–32)% increased Cast Speed | 1→T6 · 15→T5 · 30→T4 · 45→T3 · 60→T2 · 70→T1 | T4〔门槛30〕 (17–20)% increased Cast Speed | 45 |
| `foci:16` 后缀 | +(31–33) to Intelligence | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Intelligence | 33 |
| `foci:17` 后缀 | +(41–45)% to Lightning Resistance | 1→T8 · 13→T7 · 25→T6 · 37→T5 · 49→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛25〕 +(16–20)% to Lightning Resistance | 37 |
| `foci:18` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `foci:19` 后缀 | (60–69)% increased Mana Regeneration Rate | 1→T6 · 18→T5 · 29→T4 · 42→T3 · 55→T2 · 79→T1 | T4〔门槛29〕 (30–39)% increased Mana Regeneration Rate | 42 |
| `foci:20` 后缀 | (54–59)% increased Critical Hit Chance for Spells | 11→T5 · 21→T4 · 28→T3 · 41→T2 · 59→T1 | T3〔门槛28〕 (40–46)% increased Critical Hit Chance for Spells | 41 |
| `foci:21` 后缀 | (30–34)% increased Critical Spell Damage Bonus | 8→T5 · 21→T4 · 30→T3 · 44→T2 · 59→T1 | T3〔门槛30〕 (20–24)% increased Critical Spell Damage Bonus | 44 |

<a id="gloves"></a>

### 手套 gloves

来源：[ExileDB 手套词缀](https://exiledb.com/mods/gloves)。本类别 46 个本地家族、295 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `gloves:0` 前缀 | Adds (21–24) to (32–37) Cold damage to Attacks | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (5–6) to (9–11) Cold damage to Attacks | 33 |
| `gloves:1` 前缀 | Adds (25–29) to (37–45) Fire damage to Attacks | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (6–8) to (10–13) Fire damage to Attacks | 33 |
| `gloves:2` 前缀 | +(451–550) to Accuracy Rating | 1→T9 · 11→T8 · 18→T7 · 26→T6 · 36→T5 · 48→T4 · 58→T3 · 67→T2 · 76→T1 | T6〔门槛26〕 +(85–123) to Accuracy Rating | 36 |
| `gloves:3` 前缀 | +(120–149) to maximum Life | 1→T9 · 6→T8 · 16→T7 · 24→T6 · 33→T5 · 38→T4 · 46→T3 · 54→T2 · 60→T1 | T6〔门槛24〕 +(40–59) to maximum Life | 33 |
| `gloves:4` 前缀 | +(105–124) to maximum Mana | 1→T9 · 6→T8 · 16→T7 · 25→T6 · 33→T5 · 38→T4 · 46→T3 · 54→T2 · 60→T1 | T6〔门槛25〕 +(35–54) to maximum Mana | 33 |
| `gloves:5` 前缀 | Adds (1–4) to (60–71) Lightning damage to Attacks | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds 1 to (16–22) Lightning damage to Attacks | 33 |
| `gloves:6` 前缀 | (39–42)% increased Armour+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Armour+(11–19) to maximum Life | 33 |
| `gloves:7` 前缀 | +(160–190) to Armour | 1→T7 · 8→T6 · 16→T5 · 25→T4 · 33→T3 · 46→T2 · 54→T1 | T4〔门槛25〕 +(78–98) to Armour | 33 |
| `gloves:8` 前缀 | (92–100)% increased Armour | 2→T7 · 16→T6 · 35→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Armour | 35 |
| `gloves:9` 前缀 | Adds (12–19) to (22–32) Physical Damage to Attacks | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (2–4) to (5–8) Physical Damage to Attacks | 33 |
| `gloves:10` 前缀 | +(147–176) to Evasion Rating | 1→T7 · 8→T6 · 16→T5 · 25→T4 · 33→T3 · 46→T2 · 54→T1 | T4〔门槛25〕 +(67–87) to Evasion Rating | 33 |
| `gloves:11` 前缀 | (92–100)% increased Evasion Rating | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Evasion Rating | 33 |
| `gloves:12` 前缀 | (39–42)% increased Evasion Rating+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Evasion Rating+(11–19) to maximum Life | 33 |
| `gloves:13` 前缀 | +(48–60) to maximum Energy Shield | 1→T7 · 8→T6 · 16→T5 · 25→T4 · 33→T3 · 46→T2 · 54→T1 | T4〔门槛25〕 +(31–35) to maximum Energy Shield | 33 |
| `gloves:14` 前缀 | (92–100)% increased Energy Shield | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Energy Shield | 33 |
| `gloves:15` 前缀 | (39–42)% increased Energy Shield+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Energy Shield+(11–19) to maximum Life | 33 |
| `gloves:16` 前缀 | +(65–78) to Evasion Rating+(22–25) to maximum Energy Shield | 1→T4 · 16→T3 · 33→T2 · 46→T1 | T3〔门槛16〕 +(11–41) to Evasion Rating+(9–15) to maximum Energy Shield | 33 |
| `gloves:17` 前缀 | (92–100)% increased Evasion and Energy Shield | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Evasion and Energy Shield | 33 |
| `gloves:18` 前缀 | (39–42)% increased Evasion and Energy Shield+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Evasion and Energy Shield+(11–19) to maximum Life | 33 |
| `gloves:19` 前缀 | (92–100)% increased Armour and Energy Shield | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Armour and Energy Shield | 33 |
| `gloves:20` 前缀 | +(72–85) to Armour+(22–25) to maximum Energy Shield | 1→T4 · 16→T3 · 33→T2 · 46→T1 | T3〔门槛16〕 +(17–46) to Armour+(9–15) to maximum Energy Shield | 33 |
| `gloves:21` 前缀 | (39–42)% increased Armour and Energy Shield+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Armour and Energy Shield+(11–19) to maximum Life | 33 |
| `gloves:22` 前缀 | (92–100)% increased Armour and Evasion | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Armour and Evasion | 33 |
| `gloves:23` 前缀 | +(72–85) to Armour+(65–78) to Evasion Rating | 1→T4 · 16→T3 · 33→T2 · 46→T1 | T3〔门槛16〕 +(17–46) to Armour+(11–41) to Evasion Rating | 33 |
| `gloves:24` 前缀 | (39–42)% increased Armour and Evasion+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Armour and Evasion+(11–19) to maximum Life | 33 |
| `gloves:25` 前缀 | (101–110)% increased Armour, Evasion and Energy Shield | 2→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Armour, Evasion and Energy Shield | 33 |
| `gloves:26` 后缀 | +(38–43)% of Armour also applies to Elemental Damage | 1→T5 · 16→T4 · 36→T3 · 48→T2 · 66→T1 | T4〔门槛16〕 +(20–25)% of Armour also applies to Elemental Damage | 36 |
| `gloves:27` 后缀 | +(24–27)% to Chaos Resistance | 16→T6 · 30→T5 · 44→T4 · 56→T3 · 68→T2 · 81→T1 | T5〔门槛30〕 +(8–11)% to Chaos Resistance | 44 |
| `gloves:28` 后缀 | +(41–45)% to Cold Resistance | 1→T8 · 14→T7 · 26→T6 · 38→T5 · 50→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛26〕 +(16–20)% to Cold Resistance | 38 |
| `gloves:29` 后缀 | (30–34)% increased Critical Damage Bonus | 8→T5 · 21→T4 · 31→T3 · 45→T2 · 59→T1 | T4〔门槛21〕 (15–19)% increased Critical Damage Bonus | 31 |
| `gloves:30` 后缀 | +(34–36) to Dexterity | 1→T9 · 11→T8 · 22→T7 · 33→T6 · 44→T5 · 55→T4 · 66→T3 · 74→T2 · 81→T1 | T7〔门槛22〕 +(13–16) to Dexterity | 33 |
| `gloves:31` 后缀 | +(41–45)% to Fire Resistance | 1→T8 · 12→T7 · 24→T6 · 36→T5 · 48→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛24〕 +(16–20)% to Fire Resistance | 36 |
| `gloves:32` 后缀 | +2 to Level of all Melee Skills | 5→T2 · 41→T1 | T2〔门槛5〕 +1 to Level of all Melee Skills | 41 |
| `gloves:33` 后缀 | (14–16)% increased Attack Speed | 1→T4 · 22→T3 · 37→T2 · 60→T1 | T3〔门槛22〕 (8–10)% increased Attack Speed | 37 |
| `gloves:34` 后缀 | (15–18)% increased Rarity of Items found | 3→T3 · 24→T2 · 40→T1 | T2〔门槛24〕 (11–14)% increased Rarity of Items found | 40 |
| `gloves:35` 后缀 | Gain (69–84) Life per enemy killed | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 77→T1 | T6〔门槛22〕 Gain (10–18) Life per enemy killed | 33 |
| `gloves:36` 后缀 | Gain 5 Life per Enemy Hit with Attacks | 8→T4 · 20→T3 · 30→T2 · 40→T1 | T2〔门槛30〕 Gain 4 Life per Enemy Hit with Attacks | 40 |
| `gloves:37` 后缀 | Leech (9–9.9)% of Physical Attack Damage as Life | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leech (6–6.9)% of Physical Attack Damage as Life | 38 |
| `gloves:38` 后缀 | +(41–45)% to Lightning Resistance | 1→T8 · 13→T7 · 25→T6 · 37→T5 · 49→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛25〕 +(16–20)% to Lightning Resistance | 37 |
| `gloves:39` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `gloves:40` 后缀 | Gain (36–45) Mana per enemy killed | 1→T8 · 12→T7 · 23→T6 · 34→T5 · 45→T4 · 56→T3 · 67→T2 · 78→T1 | T6〔门槛23〕 Gain (6–9) Mana per enemy killed | 34 |
| `gloves:41` 后缀 | Leech (8–8.9)% of Physical Attack Damage as Mana | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leech (5–5.9)% of Physical Attack Damage as Mana | 38 |
| `gloves:42` 后缀 | +(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |
| `gloves:43` 后缀 | Gain Deflection Rating equal to (21–23)% of Evasion Rating | 1→T5 · 16→T4 · 36→T3 · 48→T2 · 66→T1 | T4〔门槛16〕 Gain Deflection Rating equal to (12–14)% of Evasion Rating | 36 |
| `gloves:44` 后缀 | (16–19)% increased Energy Shield Recharge Rate | 48→T1 | 无等级合格档 | 48 |
| `gloves:45` 后缀 | +(31–33) to Intelligence | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Intelligence | 33 |

<a id="helmets"></a>

### 头盔 helmets

来源：[ExileDB 头盔词缀](https://exiledb.com/mods/helmets)。本类别 45 个本地家族、285 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `helmets:0` 前缀 | +(451–550) to Accuracy Rating | 1→T9 · 11→T8 · 18→T7 · 26→T6 · 36→T5 · 48→T4 · 58→T3 · 67→T2 · 76→T1 | T6〔门槛26〕 +(85–123) to Accuracy Rating | 36 |
| `helmets:1` 前缀 | +(150–174) to maximum Life | 1→T10 · 6→T9 · 16→T8 · 24→T7 · 33→T6 · 38→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T7〔门槛24〕 +(40–59) to maximum Life | 33 |
| `helmets:2` 前缀 | +(125–149) to maximum Mana | 1→T10 · 6→T9 · 16→T8 · 25→T7 · 33→T6 · 38→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T7〔门槛25〕 +(35–54) to maximum Mana | 33 |
| `helmets:3` 前缀 | (16–19)% increased Rarity of Items found | 10→T3 · 29→T2 · 47→T1 | T2〔门槛29〕 (12–15)% increased Rarity of Items found | 47 |
| `helmets:4` 前缀 | (39–42)% increased Armour+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Armour+(11–19) to maximum Life | 33 |
| `helmets:5` 前缀 | (39–42)% increased Armour+(33–39) to maximum Mana | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Armour+(9–16) to maximum Mana | 33 |
| `helmets:6` 前缀 | +(191–221) to Armour | 1→T8 · 8→T7 · 16→T6 · 25→T5 · 33→T4 · 46→T3 · 54→T2 · 60→T1 | T5〔门槛25〕 +(78–98) to Armour | 33 |
| `helmets:7` 前缀 | (92–100)% increased Armour | 2→T7 · 16→T6 · 35→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Armour | 35 |
| `helmets:8` 前缀 | +(177–207) to Evasion Rating | 1→T8 · 8→T7 · 16→T6 · 25→T5 · 33→T4 · 46→T3 · 54→T2 · 60→T1 | T5〔门槛25〕 +(67–87) to Evasion Rating | 33 |
| `helmets:9` 前缀 | (92–100)% increased Evasion Rating | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Evasion Rating | 33 |
| `helmets:10` 前缀 | (39–42)% increased Evasion Rating+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Evasion Rating+(11–19) to maximum Life | 33 |
| `helmets:11` 前缀 | (39–42)% increased Evasion Rating+(33–39) to maximum Mana | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Evasion Rating+(9–16) to maximum Mana | 33 |
| `helmets:12` 前缀 | +(61–73) to maximum Energy Shield | 1→T8 · 8→T7 · 16→T6 · 25→T5 · 33→T4 · 46→T3 · 54→T2 · 60→T1 | T5〔门槛25〕 +(31–35) to maximum Energy Shield | 33 |
| `helmets:13` 前缀 | (92–100)% increased Energy Shield | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Energy Shield | 33 |
| `helmets:14` 前缀 | (39–42)% increased Energy Shield+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Energy Shield+(11–19) to maximum Life | 33 |
| `helmets:15` 前缀 | (39–42)% increased Energy Shield+(33–39) to maximum Mana | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Energy Shield+(9–16) to maximum Mana | 33 |
| `helmets:16` 前缀 | (92–100)% increased Armour and Evasion | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Armour and Evasion | 33 |
| `helmets:17` 前缀 | +(86–102) to Armour+(79–94) to Evasion Rating | 1→T5 · 16→T4 · 33→T3 · 46→T2 · 54→T1 | T4〔门槛16〕 +(17–46) to Armour+(11–41) to Evasion Rating | 33 |
| `helmets:18` 前缀 | (39–42)% increased Armour and Evasion+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Armour and Evasion+(11–19) to maximum Life | 33 |
| `helmets:19` 前缀 | (39–42)% increased Armour and Evasion+(33–39) to maximum Mana | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Armour and Evasion+(9–16) to maximum Mana | 33 |
| `helmets:20` 前缀 | +(79–94) to Evasion Rating+(26–29) to maximum Energy Shield | 1→T5 · 16→T4 · 33→T3 · 46→T2 · 54→T1 | T4〔门槛16〕 +(11–41) to Evasion Rating+(9–15) to maximum Energy Shield | 33 |
| `helmets:21` 前缀 | (92–100)% increased Evasion and Energy Shield | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Evasion and Energy Shield | 33 |
| `helmets:22` 前缀 | (39–42)% increased Evasion and Energy Shield+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Evasion and Energy Shield+(11–19) to maximum Life | 33 |
| `helmets:23` 前缀 | (39–42)% increased Evasion and Energy Shield+(33–39) to maximum Mana | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Evasion and Energy Shield+(9–16) to maximum Mana | 33 |
| `helmets:24` 前缀 | (92–100)% increased Armour and Energy Shield | 2→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 (27–42)% increased Armour and Energy Shield | 33 |
| `helmets:25` 前缀 | +(86–102) to Armour+(26–29) to maximum Energy Shield | 1→T5 · 16→T4 · 33→T3 · 46→T2 · 54→T1 | T4〔门槛16〕 +(17–46) to Armour+(9–15) to maximum Energy Shield | 33 |
| `helmets:26` 前缀 | (39–42)% increased Armour and Energy Shield+(42–49) to maximum Life | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Armour and Energy Shield+(11–19) to maximum Life | 33 |
| `helmets:27` 前缀 | (39–42)% increased Armour and Energy Shield+(33–39) to maximum Mana | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 78→T1 | T5〔门槛16〕 (14–20)% increased Armour and Energy Shield+(9–16) to maximum Mana | 33 |
| `helmets:28` 前缀 | (101–110)% increased Armour, Evasion and Energy Shield | 2→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Armour, Evasion and Energy Shield | 33 |
| `helmets:29` 后缀 | +(38–43)% of Armour also applies to Elemental Damage | 1→T5 · 16→T4 · 36→T3 · 48→T2 · 66→T1 | T4〔门槛16〕 +(20–25)% of Armour also applies to Elemental Damage | 36 |
| `helmets:30` 后缀 | +(24–27)% to Chaos Resistance | 16→T6 · 30→T5 · 44→T4 · 56→T3 · 68→T2 · 81→T1 | T5〔门槛30〕 +(8–11)% to Chaos Resistance | 44 |
| `helmets:31` 后缀 | +(41–45)% to Cold Resistance | 1→T8 · 14→T7 · 26→T6 · 38→T5 · 50→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛26〕 +(16–20)% to Cold Resistance | 38 |
| `helmets:32` 后缀 | (30–34)% increased Critical Hit Chance | 5→T5 · 20→T4 · 30→T3 · 44→T2 · 58→T1 | T3〔门槛30〕 (20–24)% increased Critical Hit Chance | 44 |
| `helmets:33` 后缀 | +(41–45)% to Fire Resistance | 1→T8 · 12→T7 · 24→T6 · 36→T5 · 48→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛24〕 +(16–20)% to Fire Resistance | 36 |
| `helmets:34` 后缀 | +2 to Level of all Minion Skills | 5→T2 · 41→T1 | T2〔门槛5〕 +1 to Level of all Minion Skills | 41 |
| `helmets:35` 后缀 | +(34–36) to Intelligence | 1→T9 · 11→T8 · 22→T7 · 33→T6 · 44→T5 · 55→T4 · 66→T3 · 74→T2 · 81→T1 | T7〔门槛22〕 +(13–16) to Intelligence | 33 |
| `helmets:36` 后缀 | (15–18)% increased Rarity of Items found | 3→T3 · 24→T2 · 40→T1 | T2〔门槛24〕 (11–14)% increased Rarity of Items found | 40 |
| `helmets:37` 后缀 | (18.1–23) Life Regeneration per second | 1→T8 · 5→T7 · 11→T6 · 17→T5 · 26→T4 · 35→T3 · 47→T2 · 58→T1 | T4〔门槛26〕 (6.1–9) Life Regeneration per second | 35 |
| `helmets:38` 后缀 | +(41–45)% to Lightning Resistance | 1→T8 · 13→T7 · 25→T6 · 37→T5 · 49→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛25〕 +(16–20)% to Lightning Resistance | 37 |
| `helmets:39` 后缀 | +(41–60) to Accuracy Rating15% increased Light Radius | 8→T3 · 15→T2 · 30→T1 | T1〔门槛30〕 +(41–60) to Accuracy Rating15% increased Light Radius | 无后续源档 |
| `helmets:40` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `helmets:41` 后缀 | +(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |
| `helmets:42` 后缀 | +(31–33) to Dexterity | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Dexterity | 33 |
| `helmets:43` 后缀 | Gain Deflection Rating equal to (21–23)% of Evasion Rating | 1→T5 · 16→T4 · 36→T3 · 48→T2 · 66→T1 | T4〔门槛16〕 Gain Deflection Rating equal to (12–14)% of Evasion Rating | 36 |
| `helmets:44` 后缀 | (16–19)% increased Energy Shield Recharge Rate | 48→T1 | 无等级合格档 | 48 |

<a id="jewels"></a>

### 珠宝 jewels

来源：[ExileDB 珠宝词缀](https://exiledb.com/mods/jewels)。本类别 163 个本地家族、320 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `jewels:0` 前缀 | (5–15)% increased Magnitude of Ailments you inflict | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Magnitude of Ailments you inflict | 无后续源档 |
| `jewels:1` 前缀 | (4–6)% increased Area of Effect | 1→T2 · 1→T1 | T1〔门槛1〕 (4–6)% increased Area of Effect | 无后续源档 |
| `jewels:2` 前缀 | Break (5–15)% increased Armour | 1→T2 · 1→T1 | T1〔门槛1〕 Break (5–15)% increased Armour | 无后续源档 |
| `jewels:3` 前缀 | (5–15)% increased Attack Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Attack Damage | 无后续源档 |
| `jewels:4` 前缀 | Banner Skills have (6–16)% increased Area of Effect | 1→T2 · 1→T1 | T1〔门槛1〕 Banner Skills have (6–16)% increased Area of Effect | 无后续源档 |
| `jewels:5` 前缀 | (3–7)% chance to inflict Bleeding on Hit | 1→T2 · 1→T1 | T1〔门槛1〕 (3–7)% chance to inflict Bleeding on Hit | 无后续源档 |
| `jewels:6` 前缀 | (5–15)% increased Magnitude of Bleeding you inflict | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Magnitude of Bleeding you inflict | 无后续源档 |
| `jewels:7` 前缀 | (5–10)% increased Blind Effect | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% increased Blind Effect | 无后续源档 |
| `jewels:8` 前缀 | (5–15)% increased Accuracy Rating with Bows | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Accuracy Rating with Bows | 无后续源档 |
| `jewels:9` 前缀 | (10–20)% increased Damage while you have an active Charm | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Damage while you have an active Charm | 无后续源档 |
| `jewels:10` 前缀 | (5–15)% increased Cold Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Cold Damage | 无后续源档 |
| `jewels:11` 前缀 | Damage Penetrates (5–10)% Cold Resistance | 1→T2 · 1→T1 | T1〔门槛1〕 Damage Penetrates (5–10)% Cold Resistance | 无后续源档 |
| `jewels:12` 前缀 | Companions deal (10–20)% increased Damage | 1→T2 · 1→T1 | T1〔门槛1〕 Companions deal (10–20)% increased Damage | 无后续源档 |
| `jewels:13` 前缀 | Companions have (10–20)% increased maximum Life | 1→T2 · 1→T1 | T1〔门槛1〕 Companions have (10–20)% increased maximum Life | 无后续源档 |
| `jewels:14` 前缀 | (10–20)% increased Magnitude of Damaging Ailments you inflict with Critical Hits | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Magnitude of Damaging Ailments you inflict with Critical Hits | 无后续源档 |
| `jewels:15` 前缀 | (6–16)% increased Damage with Crossbows | 1→T2 · 1→T1 | T1〔门槛1〕 (6–16)% increased Damage with Crossbows | 无后续源档 |
| `jewels:16` 前缀 | (8–12)% increased Area of Effect of Curses | 1→T2 · 1→T1 | T1〔门槛1〕 (8–12)% increased Area of Effect of Curses | 无后续源档 |
| `jewels:17` 前缀 | (2–4)% increased Curse Magnitudes | 1→T2 · 1→T1 | T1〔门槛1〕 (2–4)% increased Curse Magnitudes | 无后续源档 |
| `jewels:18` 前缀 | (10–20)% increased Damage if you have Consumed a Corpse Recently | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Damage if you have Consumed a Corpse Recently | 无后续源档 |
| `jewels:19` 前缀 | (15–25)% increased Damage against Enemies with Fully Broken Armour | 1→T2 · 1→T1 | T1〔门槛1〕 (15–25)% increased Damage against Enemies with Fully Broken Armour | 无后续源档 |
| `jewels:20` 前缀 | (10–20)% increased Damage with Hits against Rare and Unique Enemies | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Damage with Hits against Rare and Unique Enemies | 无后续源档 |
| `jewels:21` 前缀 | Triggered Spells deal (10–18)% increased Spell Damage | 1→T2 · 1→T1 | T1〔门槛1〕 Triggered Spells deal (10–18)% increased Spell Damage | 无后续源档 |
| `jewels:22` 前缀 | (5–15)% increased Elemental Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Elemental Damage | 无后续源档 |
| `jewels:23` 前缀 | (10–15)% faster start of Energy Shield Recharge | 1→T2 · 1→T1 | T1〔门槛1〕 (10–15)% faster start of Energy Shield Recharge | 无后续源档 |
| `jewels:24` 前缀 | Empowered Attacks deal (10–20)% increased Damage | 1→T2 · 1→T1 | T1〔门槛1〕 Empowered Attacks deal (10–20)% increased Damage | 无后续源档 |
| `jewels:25` 前缀 | (5–15)% increased Fire Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Fire Damage | 无后续源档 |
| `jewels:26` 前缀 | Damage Penetrates (5–10)% Fire Resistance | 1→T2 · 1→T1 | T1〔门槛1〕 Damage Penetrates (5–10)% Fire Resistance | 无后续源档 |
| `jewels:27` 前缀 | (30–50)% increased Energy Shield from Equipped Focus | 1→T2 · 1→T1 | T1〔门槛1〕 (30–50)% increased Energy Shield from Equipped Focus | 无后续源档 |
| `jewels:28` 前缀 | (10–20)% increased maximum Energy Shield | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased maximum Energy Shield | 无后续源档 |
| `jewels:29` 前缀 | (10–20)% increased Evasion Rating | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Evasion Rating | 无后续源档 |
| `jewels:30` 前缀 | (10–20)% increased Armour | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Armour | 无后续源档 |
| `jewels:31` 前缀 | (10–20)% increased Hazard Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Hazard Damage | 无后续源档 |
| `jewels:32` 前缀 | Herald Skills deal (15–25)% increased Damage | 1→T2 · 1→T1 | T1〔门槛1〕 Herald Skills deal (15–25)% increased Damage | 无后续源档 |
| `jewels:33` 前缀 | (5–15)% increased Ignite Magnitude | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Ignite Magnitude | 无后续源档 |
| `jewels:34` 前缀 | (15–25)% chance for Attack Hits to apply Incision | 1→T2 · 1→T1 | T1〔门槛1〕 (15–25)% chance for Attack Hits to apply Incision | 无后续源档 |
| `jewels:35` 前缀 | (5–10)% increased Accuracy Rating | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% increased Accuracy Rating | 无后续源档 |
| `jewels:36` 前缀 | (3–7)% increased Block chance | 1→T2 · 1→T1 | T1〔门槛1〕 (3–7)% increased Block chance | 无后续源档 |
| `jewels:37` 前缀 | (6–16)% increased Damage with Bows | 1→T2 · 1→T1 | T1〔门槛1〕 (6–16)% increased Damage with Bows | 无后续源档 |
| `jewels:38` 前缀 | (7–13)% increased Chaos Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (7–13)% increased Chaos Damage | 无后续源档 |
| `jewels:39` 前缀 | (6–16)% increased Damage with Maces | 1→T2 · 1→T1 | T1〔门槛1〕 (6–16)% increased Damage with Maces | 无后续源档 |
| `jewels:40` 前缀 | (6–16)% increased Damage with Quarterstaves | 1→T2 · 1→T1 | T1〔门槛1〕 (6–16)% increased Damage with Quarterstaves | 无后续源档 |
| `jewels:41` 前缀 | (10–20)% increased Totem Life | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Totem Life | 无后续源档 |
| `jewels:42` 前缀 | (5–15)% increased Lightning Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Lightning Damage | 无后续源档 |
| `jewels:43` 前缀 | Damage Penetrates (5–10)% Lightning Resistance | 1→T2 · 1→T1 | T1〔门槛1〕 Damage Penetrates (5–10)% Lightning Resistance | 无后续源档 |
| `jewels:44` 前缀 | (4–8)% increased Effect of your Mark Skills | 1→T2 · 1→T1 | T1〔门槛1〕 (4–8)% increased Effect of your Mark Skills | 无后续源档 |
| `jewels:45` 前缀 | +(1–2) to Maximum Rage | 1→T2 · 1→T1 | T1〔门槛1〕 +(1–2) to Maximum Rage | 无后续源档 |
| `jewels:46` 前缀 | (5–15)% increased Melee Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Melee Damage | 无后续源档 |
| `jewels:47` 前缀 | (10–20)% increased Melee Damage if you've dealt a Projectile Attack Hit in the past eight seconds | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Melee Damage if you've dealt a Projectile Attack Hit in the past eight seconds | 无后续源档 |
| `jewels:48` 前缀 | Minions have (5–8)% increased Area of Effect | 1→T2 · 1→T1 | T1〔门槛1〕 Minions have (5–8)% increased Area of Effect | 无后续源档 |
| `jewels:49` 前缀 | Minions deal (5–15)% increased Damage | 1→T2 · 1→T1 | T1〔门槛1〕 Minions deal (5–15)% increased Damage | 无后续源档 |
| `jewels:50` 前缀 | Minions have (5–15)% increased maximum Life | 1→T2 · 1→T1 | T1〔门槛1〕 Minions have (5–15)% increased maximum Life | 无后续源档 |
| `jewels:51` 前缀 | Offerings have (15–25)% increased Maximum Life | 1→T2 · 1→T1 | T1〔门槛1〕 Offerings have (15–25)% increased Maximum Life | 无后续源档 |
| `jewels:52` 前缀 | (15–25)% increased Parry Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (15–25)% increased Parry Damage | 无后续源档 |
| `jewels:53` 前缀 | (5–15)% increased Global Physical Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Global Physical Damage | 无后续源档 |
| `jewels:54` 前缀 | (5–15)% increased Damage with Plant Skills | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Damage with Plant Skills | 无后续源档 |
| `jewels:55` 前缀 | (5–15)% increased Magnitude of Poison you inflict | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Magnitude of Poison you inflict | 无后续源档 |
| `jewels:56` 前缀 | (15–25)% increased Presence Area of Effect | 1→T2 · 1→T1 | T1〔门槛1〕 (15–25)% increased Presence Area of Effect | 无后续源档 |
| `jewels:57` 前缀 | (5–15)% increased Projectile Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Projectile Damage | 无后续源档 |
| `jewels:58` 前缀 | (10–20)% increased Projectile Damage if you've dealt a Melee Hit in the past eight seconds | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Projectile Damage if you've dealt a Melee Hit in the past eight seconds | 无后续源档 |
| `jewels:59` 前缀 | (4–8)% increased Projectile Speed | 1→T2 · 1→T1 | T1〔门槛1〕 (4–8)% increased Projectile Speed | 无后续源档 |
| `jewels:60` 前缀 | (4–6)% increased bonuses gained from Equipped Quiver | 1→T2 · 1→T1 | T1〔门槛1〕 (4–6)% increased bonuses gained from Equipped Quiver | 无后续源档 |
| `jewels:61` 前缀 | (5–15)% increased Damage while Shapeshifted | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Damage while Shapeshifted | 无后续源档 |
| `jewels:62` 前缀 | (18–32)% increased Armour, Evasion and Energy Shield from Equipped Shield | 1→T2 · 1→T1 | T1〔门槛1〕 (18–32)% increased Armour, Evasion and Energy Shield from Equipped Shield | 无后续源档 |
| `jewels:63` 前缀 | (10–15)% increased Magnitude of Shock you inflict | 1→T2 · 1→T1 | T1〔门槛1〕 (10–15)% increased Magnitude of Shock you inflict | 无后续源档 |
| `jewels:64` 前缀 | (6–16)% increased Damage with Spears | 1→T2 · 1→T1 | T1〔门槛1〕 (6–16)% increased Damage with Spears | 无后续源档 |
| `jewels:65` 前缀 | (10–20)% increased Thorns damage | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Thorns damage | 无后续源档 |
| `jewels:66` 前缀 | (10–18)% increased Totem Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (10–18)% increased Totem Damage | 无后续源档 |
| `jewels:67` 前缀 | (10–20)% increased Damage with Warcries | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Damage with Warcries | 无后续源档 |
| `jewels:68` 前缀 | (5–15)% increased Spell Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Spell Damage | 无后续源档 |
| `jewels:69` 前缀 | (5–10)% increased Withered Magnitude | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% increased Withered Magnitude | 无后续源档 |
| `jewels:70` 前缀 | Upgrades Radius to Medium | 1→T2 · 1→T1 | T1〔门槛1〕 Upgrades Radius to Medium | 无后续源档 |
| `jewels:71` 后缀 | (5–15)% increased chance to inflict Ailments | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased chance to inflict Ailments | 无后续源档 |
| `jewels:72` 后缀 | Gain additional Ailment Threshold equal to (5–15)% of maximum Energy Shield | 1→T2 · 1→T1 | T1〔门槛1〕 Gain additional Ailment Threshold equal to (5–15)% of maximum Energy Shield | 无后续源档 |
| `jewels:73` 后缀 | (10–20)% increased Armour Break Duration | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Armour Break Duration | 无后续源档 |
| `jewels:74` 后缀 | (6–16)% increased Critical Hit Chance for Attacks | 1→T2 · 1→T1 | T1〔门槛1〕 (6–16)% increased Critical Hit Chance for Attacks | 无后续源档 |
| `jewels:75` 后缀 | (10–20)% increased Critical Damage Bonus for Attack Damage | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Critical Damage Bonus for Attack Damage | 无后续源档 |
| `jewels:76` 后缀 | (3–7)% chance to Blind Enemies on Hit with Attacks | 1→T2 · 1→T1 | T1〔门槛1〕 (3–7)% chance to Blind Enemies on Hit with Attacks | 无后续源档 |
| `jewels:77` 后缀 | Banner Skills have (15–25)% increased Duration | 1→T2 · 1→T1 | T1〔门槛1〕 Banner Skills have (15–25)% increased Duration | 无后续源档 |
| `jewels:78` 后缀 | (15–20)% increased Glory generation for Banner Skills | 1→T2 · 1→T1 | T1〔门槛1〕 (15–20)% increased Glory generation for Banner Skills | 无后续源档 |
| `jewels:79` 后缀 | (5–10)% chance to Poison on Hit | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% chance to Poison on Hit | 无后续源档 |
| `jewels:80` 后缀 | (15–25)% increased Curse Duration | 1→T2 · 1→T1 | T1〔门槛1〕 (15–25)% increased Curse Duration | 无后续源档 |
| `jewels:81` 后缀 | (5–10)% increased Bleeding Duration | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% increased Bleeding Duration | 无后续源档 |
| `jewels:82` 后缀 | (2–4)% increased Attack Speed with Bows | 1→T2 · 1→T1 | T1〔门槛1〕 (2–4)% increased Attack Speed with Bows | 无后续源档 |
| `jewels:83` 后缀 | Projectiles have (3–5)% chance to Chain an additional time from terrain | 1→T2 · 1→T1 | T1〔门槛1〕 Projectiles have (3–5)% chance to Chain an additional time from terrain | 无后续源档 |
| `jewels:84` 后缀 | (10–20)% chance to Pierce an Enemy | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% chance to Pierce an Enemy | 无后续源档 |
| `jewels:85` 后缀 | (5–15)% increased Charm Charges gained | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Charm Charges gained | 无后续源档 |
| `jewels:86` 后缀 | (5–15)% increased Charm Effect Duration | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Charm Effect Duration | 无后续源档 |
| `jewels:87` 后缀 | (5–15)% increased Critical Hit Chance | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Critical Hit Chance | 无后续源档 |
| `jewels:88` 后缀 | (10–20)% increased Critical Damage Bonus | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Critical Damage Bonus | 无后续源档 |
| `jewels:89` 后缀 | (10–15)% increased Crossbow Reload Speed | 1→T2 · 1→T1 | T1〔门槛1〕 (10–15)% increased Crossbow Reload Speed | 无后续源档 |
| `jewels:90` 后缀 | (2–4)% increased Attack Speed with Crossbows | 1→T2 · 1→T1 | T1〔门槛1〕 (2–4)% increased Attack Speed with Crossbows | 无后续源档 |
| `jewels:91` 后缀 | (5–15)% faster Curse Activation | 1→T1 | T1〔门槛1〕 (5–15)% faster Curse Activation | 无后续源档 |
| `jewels:92` 后缀 | (2–4)% of Damage is taken from Mana before Life | 1→T2 · 1→T1 | T1〔门槛1〕 (2–4)% of Damage is taken from Mana before Life | 无后续源档 |
| `jewels:93` 后缀 | (5–10)% increased Duration of Damaging Ailments on Enemies | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% increased Duration of Damaging Ailments on Enemies | 无后续源档 |
| `jewels:94` 后缀 | (5–10)% chance to Daze on Hit | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% chance to Daze on Hit | 无后续源档 |
| `jewels:95` 后缀 | Debuffs on you expire (5–10)% faster | 1→T2 · 1→T1 | T1〔门槛1〕 Debuffs on you expire (5–10)% faster | 无后续源档 |
| `jewels:96` 后缀 | (5–10)% increased Duration of Ignite, Shock and Chill on Enemies | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% increased Duration of Ignite, Shock and Chill on Enemies | 无后续源档 |
| `jewels:97` 后缀 | Meta Skills gain (4–8)% increased Energy | 1→T2 · 1→T1 | T1〔门槛1〕 Meta Skills gain (4–8)% increased Energy | 无后续源档 |
| `jewels:98` 后缀 | Damaging Ailments deal damage (3–7)% faster | 1→T2 · 1→T1 | T1〔门槛1〕 Damaging Ailments deal damage (3–7)% faster | 无后续源档 |
| `jewels:99` 后缀 | (5–10)% increased Flask Effect Duration | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% increased Flask Effect Duration | 无后续源档 |
| `jewels:100` 后缀 | (5–15)% increased Mana Recovery from Flasks | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Mana Recovery from Flasks | 无后续源档 |
| `jewels:101` 后缀 | Projectiles have (10–15)% chance for an additional Projectile when Forking | 1→T2 · 1→T1 | T1〔门槛1〕 Projectiles have (10–15)% chance for an additional Projectile when Forking | 无后续源档 |
| `jewels:102` 后缀 | (10–20)% increased Freeze Buildup | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Freeze Buildup | 无后续源档 |
| `jewels:103` 后缀 | (18–32)% increased Freeze Threshold | 1→T2 · 1→T1 | T1〔门槛1〕 (18–32)% increased Freeze Threshold | 无后续源档 |
| `jewels:104` 后缀 | Gain (1–3) Rage when Hit by an Enemy | 1→T2 · 1→T1 | T1〔门槛1〕 Gain (1–3) Rage when Hit by an Enemy | 无后续源档 |
| `jewels:105` 后缀 | (3–5)% increased Cooldown Recovery Rate | 1→T2 · 1→T1 | T1〔门槛1〕 (3–5)% increased Cooldown Recovery Rate | 无后续源档 |
| `jewels:106` 后缀 | (5–15)% increased Life Recovery from Flasks | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Life Recovery from Flasks | 无后续源档 |
| `jewels:107` 后缀 | (10–20)% increased Flammability Magnitude | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Flammability Magnitude | 无后续源档 |
| `jewels:108` 后缀 | (10–20)% increased Elemental Ailment Threshold | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Elemental Ailment Threshold | 无后续源档 |
| `jewels:109` 后缀 | (2–4)% increased Attack Speed | 1→T2 · 1→T1 | T1〔门槛1〕 (2–4)% increased Attack Speed | 无后续源档 |
| `jewels:110` 后缀 | (2–4)% increased Cast Speed | 1→T2 · 1→T1 | T1〔门槛1〕 (2–4)% increased Cast Speed | 无后续源档 |
| `jewels:111` 后缀 | (15–25)% increased Chill Duration on Enemies | 1→T2 · 1→T1 | T1〔门槛1〕 (15–25)% increased Chill Duration on Enemies | 无后续源档 |
| `jewels:112` 后缀 | (5–10)% increased Flask Charges gained | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% increased Flask Charges gained | 无后续源档 |
| `jewels:113` 后缀 | (6–16)% increased Stun Threshold | 1→T2 · 1→T1 | T1〔门槛1〕 (6–16)% increased Stun Threshold | 无后续源档 |
| `jewels:114` 后缀 | (15–25)% increased Stun Threshold if you haven't been Stunned Recently | 1→T2 · 1→T1 | T1〔门槛1〕 (15–25)% increased Stun Threshold if you haven't been Stunned Recently | 无后续源档 |
| `jewels:115` 后缀 | (5–15)% increased Knockback Distance | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Knockback Distance | 无后续源档 |
| `jewels:116` 后缀 | (4–6)% of Skill Mana Costs Converted to Life Costs | 1→T2 · 1→T1 | T1〔门槛1〕 (4–6)% of Skill Mana Costs Converted to Life Costs | 无后续源档 |
| `jewels:117` 后缀 | (10–20)% increased Life Flask Charges gained | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Life Flask Charges gained | 无后续源档 |
| `jewels:118` 后缀 | (5–15)% increased amount of Life Leeched | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased amount of Life Leeched | 无后续源档 |
| `jewels:119` 后缀 | (2–3)% of Damage taken Recouped as Life | 1→T2 · 1→T1 | T1〔门槛1〕 (2–3)% of Damage taken Recouped as Life | 无后续源档 |
| `jewels:120` 后缀 | (5–10)% increased Life Regeneration rate | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% increased Life Regeneration rate | 无后续源档 |
| `jewels:121` 后缀 | (15–25)% increased Stun Buildup with Maces | 1→T2 · 1→T1 | T1〔门槛1〕 (15–25)% increased Stun Buildup with Maces | 无后续源档 |
| `jewels:122` 后缀 | (10–20)% increased Mana Flask Charges gained | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Mana Flask Charges gained | 无后续源档 |
| `jewels:123` 后缀 | Recover (1–2)% of maximum Mana on Kill | 1→T2 · 1→T1 | T1〔门槛1〕 Recover (1–2)% of maximum Mana on Kill | 无后续源档 |
| `jewels:124` 后缀 | (5–15)% increased amount of Mana Leeched | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased amount of Mana Leeched | 无后续源档 |
| `jewels:125` 后缀 | (5–15)% increased Mana Regeneration Rate | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Mana Regeneration Rate | 无后续源档 |
| `jewels:126` 后缀 | Mark Skills have (5–15)% increased Use Speed | 1→T2 · 1→T1 | T1〔门槛1〕 Mark Skills have (5–15)% increased Use Speed | 无后续源档 |
| `jewels:127` 后缀 | Mark Skills have (18–32)% increased Skill Effect Duration | 1→T2 · 1→T1 | T1〔门槛1〕 Mark Skills have (18–32)% increased Skill Effect Duration | 无后续源档 |
| `jewels:128` 后缀 | +1% to Maximum Cold Resistance | 1→T1 | T1〔门槛1〕 +1% to Maximum Cold Resistance | 无后续源档 |
| `jewels:129` 后缀 | +1% to Maximum Fire Resistance | 1→T1 | T1〔门槛1〕 +1% to Maximum Fire Resistance | 无后续源档 |
| `jewels:130` 后缀 | Recover (1–2)% of maximum Life on Kill | 1→T2 · 1→T1 | T1〔门槛1〕 Recover (1–2)% of maximum Life on Kill | 无后续源档 |
| `jewels:131` 后缀 | +1% to Maximum Lightning Resistance | 1→T1 | T1〔门槛1〕 +1% to Maximum Lightning Resistance | 无后续源档 |
| `jewels:132` 后缀 | Minions have (2–4)% increased Attack and Cast Speed | 1→T2 · 1→T1 | T1〔门槛1〕 Minions have (2–4)% increased Attack and Cast Speed | 无后续源档 |
| `jewels:133` 后缀 | Minions have +(7–13)% to Chaos Resistance | 1→T2 · 1→T1 | T1〔门槛1〕 Minions have +(7–13)% to Chaos Resistance | 无后续源档 |
| `jewels:134` 后缀 | Minions have (10–20)% increased Critical Hit Chance | 1→T2 · 1→T1 | T1〔门槛1〕 Minions have (10–20)% increased Critical Hit Chance | 无后续源档 |
| `jewels:135` 后缀 | Minions have (15–25)% increased Critical Damage Bonus | 1→T2 · 1→T1 | T1〔门槛1〕 Minions have (15–25)% increased Critical Damage Bonus | 无后续源档 |
| `jewels:136` 后缀 | Minions have +(5–10)% to all Elemental Resistances | 1→T2 · 1→T1 | T1〔门槛1〕 Minions have +(5–10)% to all Elemental Resistances | 无后续源档 |
| `jewels:137` 后缀 | Minions have (6–16)% additional Physical Damage Reduction | 1→T2 · 1→T1 | T1〔门槛1〕 Minions have (6–16)% additional Physical Damage Reduction | 无后续源档 |
| `jewels:138` 后缀 | (1–2)% increased Movement Speed | 1→T2 · 1→T1 | T1〔门槛1〕 (1–2)% increased Movement Speed | 无后续源档 |
| `jewels:139` 后缀 | Offering Skills have (15–25)% increased Duration | 1→T2 · 1→T1 | T1〔门槛1〕 Offering Skills have (15–25)% increased Duration | 无后续源档 |
| `jewels:140` 后缀 | (10–15)% increased Parried Debuff Duration | 1→T2 · 1→T1 | T1〔门槛1〕 (10–15)% increased Parried Debuff Duration | 无后续源档 |
| `jewels:141` 后缀 | (10–20)% increased Pin Buildup | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Pin Buildup | 无后续源档 |
| `jewels:142` 后缀 | (5–10)% increased Poison Duration | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% increased Poison Duration | 无后续源档 |
| `jewels:143` 后缀 | (10–20)% increased Freeze Buildup with Quarterstaves | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Freeze Buildup with Quarterstaves | 无后续源档 |
| `jewels:144` 后缀 | Gain 1 Rage on Melee Hit | 1→T2 · 1→T1 | T1〔门槛1〕 Gain 1 Rage on Melee Hit | 无后续源档 |
| `jewels:145` 后缀 | (2–4)% increased Skill Speed while Shapeshifted | 1→T2 · 1→T1 | T1〔门槛1〕 (2–4)% increased Skill Speed while Shapeshifted | 无后续源档 |
| `jewels:146` 后缀 | (10–20)% increased chance to Shock | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased chance to Shock | 无后续源档 |
| `jewels:147` 后缀 | (15–25)% increased Shock Duration | 1→T2 · 1→T1 | T1〔门槛1〕 (15–25)% increased Shock Duration | 无后续源档 |
| `jewels:148` 后缀 | (5–10)% increased Skill Effect Duration | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% increased Skill Effect Duration | 无后续源档 |
| `jewels:149` 后缀 | (5–10)% reduced Slowing Potency of Debuffs on You | 1→T2 · 1→T1 | T1〔门槛1〕 (5–10)% reduced Slowing Potency of Debuffs on You | 无后续源档 |
| `jewels:150` 后缀 | (2–4)% increased Attack Speed with Spears | 1→T2 · 1→T1 | T1〔门槛1〕 (2–4)% increased Attack Speed with Spears | 无后续源档 |
| `jewels:151` 后缀 | (10–20)% increased Critical Damage Bonus with Spears | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Critical Damage Bonus with Spears | 无后续源档 |
| `jewels:152` 后缀 | (5–15)% increased Critical Hit Chance for Spells | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Critical Hit Chance for Spells | 无后续源档 |
| `jewels:153` 后缀 | (10–20)% increased Critical Spell Damage Bonus | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Critical Spell Damage Bonus | 无后续源档 |
| `jewels:154` 后缀 | (2–4)% increased Attack Speed with Quarterstaves | 1→T2 · 1→T1 | T1〔门槛1〕 (2–4)% increased Attack Speed with Quarterstaves | 无后续源档 |
| `jewels:155` 后缀 | (10–20)% increased Stun Buildup | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Stun Buildup | 无后续源档 |
| `jewels:156` 后缀 | (15–25)% increased Stun Threshold while Parrying | 1→T2 · 1→T1 | T1〔门槛1〕 (15–25)% increased Stun Threshold while Parrying | 无后续源档 |
| `jewels:157` 后缀 | Gain additional Stun Threshold equal to (5–15)% of maximum Energy Shield | 1→T2 · 1→T1 | T1〔门槛1〕 Gain additional Stun Threshold equal to (5–15)% of maximum Energy Shield | 无后续源档 |
| `jewels:158` 后缀 | (10–20)% increased Totem Placement speed | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Totem Placement speed | 无后续源档 |
| `jewels:159` 后缀 | (5–15)% increased Warcry Cooldown Recovery Rate | 1→T2 · 1→T1 | T1〔门槛1〕 (5–15)% increased Warcry Cooldown Recovery Rate | 无后续源档 |
| `jewels:160` 后缀 | (10–20)% increased Warcry Speed | 1→T2 · 1→T1 | T1〔门槛1〕 (10–20)% increased Warcry Speed | 无后续源档 |
| `jewels:161` 后缀 | (15–25)% increased Effect of Notable Passive Skills in Radius | 1→T1 | T1〔门槛1〕 (15–25)% increased Effect of Notable Passive Skills in Radius | 无后续源档 |
| `jewels:162` 后缀 | (15–25)% increased Effect of Small Passive Skills in Radius | 1→T1 | T1〔门槛1〕 (15–25)% increased Effect of Small Passive Skills in Radius | 无后续源档 |

<a id="life-flasks"></a>

### 生命药剂 life-flasks

来源：[ExileDB 生命药剂词缀](https://exiledb.com/mods/life-flasks)。本类别 12 个本地家族、57 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `life-flasks:0` 前缀 | (93–100)% increased Life RecoveredRemoves 15% of Life Recovered from Mana when used | 13→T5 · 30→T4 · 47→T3 · 64→T2 · 81→T1 | T4〔门槛30〕 (69–76)% increased Life RecoveredRemoves 15% of Life Recovered from Mana when used | 47 |
| `life-flasks:1` 前缀 | 50% reduced Amount RecoveredInstant Recovery | 42→T1 | 无等级合格档 | 42 |
| `life-flasks:2` 前缀 | Grants (75–80)% of Life Recovery to Minions | 10→T5 · 28→T4 · 46→T3 · 64→T2 · 82→T1 | T4〔门槛28〕 Grants (57–62)% of Life Recovery to Minions | 46 |
| `life-flasks:3` 前缀 | (76–80)% increased Amount Recovered | 1→T8 · 11→T7 · 23→T6 · 34→T5 · 46→T4 · 56→T3 · 67→T2 · 83→T1 | T6〔门槛23〕 (51–55)% increased Amount Recovered | 34 |
| `life-flasks:4` 前缀 | (91–100)% more Recovery if used while on Low Life | 2→T5 · 25→T4 · 44→T3 · 63→T2 · 82→T1 | T4〔门槛25〕 (61–70)% more Recovery if used while on Low Life | 44 |
| `life-flasks:5` 前缀 | (66–70)% increased Recovery rate | 1→T6 · 15→T5 · 31→T4 · 46→T3 · 61→T2 · 81→T1 | T5〔门槛15〕 (46–50)% increased Recovery rate | 31 |
| `life-flasks:6` 前缀 | (28–30)% of Recovery applied Instantly | 3→T3 · 27→T2 · 46→T1 | T2〔门槛27〕 (24–27)% of Recovery applied Instantly | 46 |
| `life-flasks:7` 后缀 | (31–35)% Chance to gain a Charge when you kill an enemy | 8→T3 · 26→T2 · 45→T1 | T2〔门槛26〕 (26–30)% Chance to gain a Charge when you kill an enemy | 45 |
| `life-flasks:8` 后缀 | (30–32)% reduced Charges per use | 1→T6 · 14→T5 · 34→T4 · 49→T3 · 64→T2 · 83→T1 | T5〔门槛14〕 (18–20)% reduced Charges per use | 34 |
| `life-flasks:9` 后缀 | Gains 0.25 Charges per Second | 8→T3 · 26→T2 · 45→T1 | T2〔门槛26〕 Gains 0.20 Charges per Second | 45 |
| `life-flasks:10` 后缀 | (63–70)% increased Charges gained | 1→T6 · 13→T5 · 33→T4 · 48→T3 · 63→T2 · 82→T1 | T5〔门槛13〕 (31–38)% increased Charges gained | 33 |
| `life-flasks:11` 后缀 | (63–70)% increased Charges | 1→T6 · 12→T5 · 32→T4 · 47→T3 · 62→T2 · 81→T1 | T5〔门槛12〕 (31–38)% increased Charges | 32 |

<a id="mana-flasks"></a>

### 魔力药剂 mana-flasks

来源：[ExileDB 魔力药剂词缀](https://exiledb.com/mods/mana-flasks)。本类别 11 个本地家族、52 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `mana-flasks:0` 前缀 | (93–100)% increased Mana RecoveredRemoves 15% of Mana Recovered from Life when used | 13→T5 · 30→T4 · 47→T3 · 64→T2 · 81→T1 | T4〔门槛30〕 (69–76)% increased Mana RecoveredRemoves 15% of Mana Recovered from Life when used | 47 |
| `mana-flasks:1` 前缀 | 50% reduced Amount RecoveredInstant Recovery | 42→T1 | 无等级合格档 | 42 |
| `mana-flasks:2` 前缀 | (76–80)% increased Amount Recovered | 1→T8 · 11→T7 · 23→T6 · 34→T5 · 46→T4 · 56→T3 · 67→T2 · 83→T1 | T6〔门槛23〕 (51–55)% increased Amount Recovered | 34 |
| `mana-flasks:3` 前缀 | (91–100)% more Recovery if used while on Low Mana | 2→T5 · 25→T4 · 44→T3 · 63→T2 · 82→T1 | T4〔门槛25〕 (61–70)% more Recovery if used while on Low Mana | 44 |
| `mana-flasks:4` 前缀 | (66–70)% increased Recovery rate | 1→T6 · 15→T5 · 31→T4 · 46→T3 · 61→T2 · 81→T1 | T5〔门槛15〕 (46–50)% increased Recovery rate | 31 |
| `mana-flasks:5` 前缀 | (28–30)% of Recovery applied Instantly | 3→T3 · 27→T2 · 46→T1 | T2〔门槛27〕 (24–27)% of Recovery applied Instantly | 46 |
| `mana-flasks:6` 后缀 | (31–35)% Chance to gain a Charge when you kill an enemy | 8→T3 · 26→T2 · 45→T1 | T2〔门槛26〕 (26–30)% Chance to gain a Charge when you kill an enemy | 45 |
| `mana-flasks:7` 后缀 | (30–32)% reduced Charges per use | 1→T6 · 14→T5 · 34→T4 · 49→T3 · 64→T2 · 83→T1 | T5〔门槛14〕 (18–20)% reduced Charges per use | 34 |
| `mana-flasks:8` 后缀 | Gains 0.25 Charges per Second | 8→T3 · 26→T2 · 45→T1 | T2〔门槛26〕 Gains 0.20 Charges per Second | 45 |
| `mana-flasks:9` 后缀 | (63–70)% increased Charges gained | 1→T6 · 13→T5 · 33→T4 · 48→T3 · 63→T2 · 82→T1 | T5〔门槛13〕 (31–38)% increased Charges gained | 33 |
| `mana-flasks:10` 后缀 | (63–70)% increased Charges | 1→T6 · 12→T5 · 32→T4 · 47→T3 · 62→T2 · 81→T1 | T5〔门槛12〕 (31–38)% increased Charges | 32 |

<a id="one-hand-maces"></a>

### 单手锤 one-hand-maces

来源：[ExileDB 单手锤词缀](https://exiledb.com/mods/one-hand-maces)。本类别 22 个本地家族、150 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `one-hand-maces:0` 前缀 | 攻击元素伤害；(87–100)% increased Elemental Damage with Attacks | 4→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 81→T1 | T5〔门槛16〕 (36–52)% increased Elemental Damage with Attacks | 33 |
| `one-hand-maces:1` 前缀 | 命中值；+(451–550) to Accuracy Rating | 8→T9 · 13→T8 · 18→T7 · 26→T6 · 36→T5 · 48→T4 · 58→T3 · 67→T2 · 76→T1 | T6〔门槛26〕 +(85–123) to Accuracy Rating | 36 |
| `one-hand-maces:2` 前缀 | Adds (72–81) to (110–123) Cold Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (6–9) to (10–16) Cold Damage | 33 |
| `one-hand-maces:3` 前缀 | Adds (88–101) to (133–154) Fire Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (7–11) to (13–19) Fire Damage | 33 |
| `one-hand-maces:4` 前缀 | (75–79)% increased Physical Damage+(175–200) to Accuracy Rating | 8→T8 · 14→T7 · 23→T6 · 38→T5 · 54→T4 · 65→T3 · 70→T2 · 81→T1 | T6〔门槛23〕 (25–34)% increased Physical Damage+(47–72) to Accuracy Rating | 38 |
| `one-hand-maces:5` 前缀 | Adds (1–12) to (202–234) Lightning Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (1–2) to (20–30) Lightning Damage | 33 |
| `one-hand-maces:6` 前缀 | Adds (26–39) to (44–66) Physical Damage | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (6–9) to (11–16) Physical Damage | 33 |
| `one-hand-maces:7` 前缀 | 物理伤害；(170–179)% increased Physical Damage | 1→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 75→T2 · 82→T1 | T6〔门槛16〕 (65–84)% increased Physical Damage | 33 |
| `one-hand-maces:8` 后缀 | +4 to Level of all Melee Skills | 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +1 to Level of all Melee Skills | 36 |
| `one-hand-maces:9` 后缀 | 击败敌人恢复生命；Gain (69–84) Life per enemy killed | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 77→T1 | T6〔门槛22〕 Gain (10–18) Life per enemy killed | 33 |
| `one-hand-maces:10` 后缀 | Grants 5 Life per Enemy Hit | 8→T4 · 20→T3 · 30→T2 · 40→T1 | T2〔门槛30〕 Grants 4 Life per Enemy Hit | 40 |
| `one-hand-maces:11` 后缀 | Leeches (9–9.9)% of Physical Damage as Life | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (6–6.9)% of Physical Damage as Life | 38 |
| `one-hand-maces:12` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `one-hand-maces:13` 后缀 | 暴击率；+(4.41–5)% to Critical Hit Chance | 1→T6 · 20→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(2.11–2.7)% to Critical Hit Chance | 44 |
| `one-hand-maces:14` 后缀 | 暴击伤害加成；+(23–25)% to Critical Damage Bonus | 8→T6 · 21→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(14–16)% to Critical Damage Bonus | 44 |
| `one-hand-maces:15` 后缀 | 攻击速度；(26–28)% increased Attack Speed | 1→T8 · 11→T7 · 22→T6 · 30→T5 · 37→T4 · 45→T3 · 60→T2 · 77→T1 | T5〔门槛30〕 (14–16)% increased Attack Speed | 37 |
| `one-hand-maces:16` 后缀 | +(41–60) to Accuracy Rating15% increased Light Radius | 8→T3 · 15→T2 · 30→T1 | T1〔门槛30〕 +(41–60) to Accuracy Rating15% increased Light Radius | 无后续源档 |
| `one-hand-maces:17` 后缀 | 晕眩积累；Causes (71–80)% increased Stun Buildup | 5→T6 · 20→T5 · 30→T4 · 44→T3 · 58→T2 · 74→T1 | T4〔门槛30〕 Causes (41–50)% increased Stun Buildup | 44 |
| `one-hand-maces:18` 后缀 | (27–30)% increased Stun Duration | 5→T6 · 18→T5 · 30→T4 · 44→T3 · 58→T2 · 71→T1 | T4〔门槛30〕 (17–19)% increased Stun Duration | 44 |
| `one-hand-maces:19` 后缀 | 击败敌人恢复魔力；Gain (36–45) Mana per enemy killed | 1→T8 · 12→T7 · 23→T6 · 34→T5 · 45→T4 · 56→T3 · 67→T2 · 78→T1 | T6〔门槛23〕 Gain (6–9) Mana per enemy killed | 34 |
| `one-hand-maces:20` 后缀 | Leeches (8–8.9)% of Physical Damage as Mana | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (5–5.9)% of Physical Damage as Mana | 38 |
| `one-hand-maces:21` 后缀 | 力量；+(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |

<a id="quarterstaves"></a>

### 长棍 quarterstaves

来源：[ExileDB 长棍词缀](https://exiledb.com/mods/quarterstaves)。本类别 23 个本地家族、158 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `quarterstaves:0` 前缀 | (120–139)% increased Elemental Damage with Attacks | 4→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 81→T1 | T5〔门槛16〕 (48–71)% increased Elemental Damage with Attacks | 33 |
| `quarterstaves:1` 前缀 | +(451–550) to Accuracy Rating | 8→T9 · 13→T8 · 18→T7 · 26→T6 · 36→T5 · 48→T4 · 58→T3 · 67→T2 · 76→T1 | T6〔门槛26〕 +(85–123) to Accuracy Rating | 36 |
| `quarterstaves:2` 前缀 | Adds (112–124) to (168–189) Cold Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (10–14) to (15–23) Cold Damage | 33 |
| `quarterstaves:3` 前缀 | Adds (135–156) to (205–236) Fire Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (11–17) to (19–28) Fire Damage | 33 |
| `quarterstaves:4` 前缀 | (75–79)% increased Physical Damage+(175–200) to Accuracy Rating | 8→T8 · 14→T7 · 23→T6 · 38→T5 · 54→T4 · 65→T3 · 70→T2 · 81→T1 | T6〔门槛23〕 (25–34)% increased Physical Damage+(47–72) to Accuracy Rating | 38 |
| `quarterstaves:5` 前缀 | Adds (1–19) to (310–358) Lightning Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (1–3) to (31–43) Lightning Damage | 33 |
| `quarterstaves:6` 前缀 | Adds (37–55) to (63–94) Physical Damage | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (8–12) to (15–22) Physical Damage | 33 |
| `quarterstaves:7` 前缀 | (170–179)% increased Physical Damage | 1→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 75→T2 · 82→T1 | T6〔门槛16〕 (65–84)% increased Physical Damage | 33 |
| `quarterstaves:8` 后缀 | +(31–33) to Dexterity | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Dexterity | 33 |
| `quarterstaves:9` 后缀 | +5 to Level of all Melee Skills | 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Melee Skills | 36 |
| `quarterstaves:10` 后缀 | +(31–33) to Intelligence | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Intelligence | 33 |
| `quarterstaves:11` 后缀 | Gain (69–84) Life per enemy killed | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 77→T1 | T6〔门槛22〕 Gain (10–18) Life per enemy killed | 33 |
| `quarterstaves:12` 后缀 | Grants 5 Life per Enemy Hit | 8→T4 · 20→T3 · 30→T2 · 40→T1 | T2〔门槛30〕 Grants 4 Life per Enemy Hit | 40 |
| `quarterstaves:13` 后缀 | Leeches (9–9.9)% of Physical Damage as Life | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (6–6.9)% of Physical Damage as Life | 38 |
| `quarterstaves:14` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `quarterstaves:15` 后缀 | +(4.41–5)% to Critical Hit Chance | 1→T6 · 20→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(2.11–2.7)% to Critical Hit Chance | 44 |
| `quarterstaves:16` 后缀 | +(23–25)% to Critical Damage Bonus | 8→T6 · 21→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(14–16)% to Critical Damage Bonus | 44 |
| `quarterstaves:17` 后缀 | (26–28)% increased Attack Speed | 1→T8 · 11→T7 · 22→T6 · 30→T5 · 37→T4 · 45→T3 · 60→T2 · 77→T1 | T5〔门槛30〕 (14–16)% increased Attack Speed | 37 |
| `quarterstaves:18` 后缀 | +(41–60) to Accuracy Rating15% increased Light Radius | 8→T3 · 15→T2 · 30→T1 | T1〔门槛30〕 +(41–60) to Accuracy Rating15% increased Light Radius | 无后续源档 |
| `quarterstaves:19` 后缀 | Causes (71–80)% increased Stun Buildup | 5→T6 · 20→T5 · 30→T4 · 44→T3 · 58→T2 · 74→T1 | T4〔门槛30〕 Causes (41–50)% increased Stun Buildup | 44 |
| `quarterstaves:20` 后缀 | (27–30)% increased Stun Duration | 5→T6 · 18→T5 · 30→T4 · 44→T3 · 58→T2 · 71→T1 | T4〔门槛30〕 (17–19)% increased Stun Duration | 44 |
| `quarterstaves:21` 后缀 | Gain (36–45) Mana per enemy killed | 1→T8 · 12→T7 · 23→T6 · 34→T5 · 45→T4 · 56→T3 · 67→T2 · 78→T1 | T6〔门槛23〕 Gain (6–9) Mana per enemy killed | 34 |
| `quarterstaves:22` 后缀 | Leeches (8–8.9)% of Physical Damage as Mana | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (5–5.9)% of Physical Damage as Mana | 38 |

<a id="quivers"></a>

### 箭袋 quivers

来源：[ExileDB 箭袋词缀](https://exiledb.com/mods/quivers)。本类别 16 个本地家族、100 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `quivers:0` 前缀 | Adds (21–24) to (32–37) Cold damage to Attacks | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (5–6) to (9–11) Cold damage to Attacks | 33 |
| `quivers:1` 前缀 | (51–59)% increased Damage with Bow Skills | 1→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 81→T1 | T5〔门槛16〕 (21–30)% increased Damage with Bow Skills | 33 |
| `quivers:2` 前缀 | Adds (25–29) to (37–45) Fire damage to Attacks | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (6–8) to (10–13) Fire damage to Attacks | 33 |
| `quivers:3` 前缀 | +(451–550) to Accuracy Rating | 1→T9 · 11→T8 · 18→T7 · 26→T6 · 36→T5 · 48→T4 · 58→T3 · 67→T2 · 76→T1 | T6〔门槛26〕 +(85–123) to Accuracy Rating | 36 |
| `quivers:4` 前缀 | Adds (1–4) to (60–71) Lightning damage to Attacks | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds 1 to (16–22) Lightning damage to Attacks | 33 |
| `quivers:5` 前缀 | Adds (12–19) to (22–32) Physical Damage to Attacks | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (2–4) to (5–8) Physical Damage to Attacks | 33 |
| `quivers:6` 前缀 | (42–46)% increased Projectile Speed | 14→T5 · 27→T4 · 41→T3 · 55→T2 · 82→T1 | T4〔门槛27〕 (18–25)% increased Projectile Speed | 41 |
| `quivers:7` 后缀 | +(41–60)% Surpassing chance to fire an additional Arrow | 46→T2 · 80→T1 | 无等级合格档 | 46 |
| `quivers:8` 后缀 | (35–38)% increased Critical Hit Chance for Attacks | 5→T6 · 20→T5 · 30→T4 · 44→T3 · 58→T2 · 72→T1 | T4〔门槛30〕 (20–24)% increased Critical Hit Chance for Attacks | 44 |
| `quivers:9` 后缀 | (35–39)% increased Critical Damage Bonus for Attack Damage | 8→T6 · 21→T5 · 31→T4 · 45→T3 · 59→T2 · 74→T1 | T5〔门槛21〕 (15–19)% increased Critical Damage Bonus for Attack Damage | 31 |
| `quivers:10` 后缀 | (24–26)% chance to Pierce an Enemy | 11→T5 · 26→T4 · 44→T3 · 61→T2 · 77→T1 | T4〔门槛26〕 (15–17)% chance to Pierce an Enemy | 44 |
| `quivers:11` 后缀 | +(31–33) to Dexterity | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Dexterity | 33 |
| `quivers:12` 后缀 | +1 to Level of all Projectile Skills | 5→T1 | T1〔门槛5〕 +1 to Level of all Projectile Skills | 无后续源档 |
| `quivers:13` 后缀 | (14–16)% increased Attack Speed | 1→T4 · 22→T3 · 37→T2 · 60→T1 | T3〔门槛22〕 (8–10)% increased Attack Speed | 37 |
| `quivers:14` 后缀 | Gain (41–53) Life per enemy killed | 1→T6 · 11→T5 · 22→T4 · 33→T3 · 44→T2 · 55→T1 | T4〔门槛22〕 Gain (10–18) Life per enemy killed | 33 |
| `quivers:15` 后缀 | Gain (21–27) Mana per enemy killed | 1→T6 · 12→T5 · 23→T4 · 34→T3 · 45→T2 · 56→T1 | T4〔门槛23〕 Gain (6–9) Mana per enemy killed | 34 |

<a id="rings"></a>

### 戒指 rings

来源：[ExileDB 戒指词缀](https://exiledb.com/mods/rings)。本类别 31 个本地家族、203 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `rings:0` 前缀 | Adds (21–24) to (32–37) Cold damage to Attacks | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (5–6) to (9–11) Cold damage to Attacks | 33 |
| `rings:1` 前缀 | 冰霜伤害；(27–30)% increased Cold Damage | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 65→T2 · 75→T1 | T5〔门槛16〕 (8–12)% increased Cold Damage | 33 |
| `rings:2` 前缀 | +(203–233) to Evasion Rating | 1→T9 · 11→T8 · 16→T7 · 25→T6 · 33→T5 · 46→T4 · 54→T3 · 65→T2 · 70→T1 | T6〔门槛25〕 +(52–79) to Evasion Rating | 33 |
| `rings:3` 前缀 | Adds (25–29) to (37–45) Fire damage to Attacks | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (6–8) to (10–13) Fire damage to Attacks | 33 |
| `rings:4` 前缀 | (27–30)% increased Fire Damage | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 65→T2 · 75→T1 | T5〔门槛16〕 (8–12)% increased Fire Damage | 33 |
| `rings:5` 前缀 | 命中值；+(347–450) to Accuracy Rating | 1→T8 · 11→T7 · 18→T6 · 26→T5 · 36→T4 · 48→T3 · 58→T2 · 67→T1 | T5〔门槛26〕 +(85–123) to Accuracy Rating | 36 |
| `rings:6` 前缀 | (27–30)% increased Chaos Damage | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 65→T2 · 75→T1 | T5〔门槛16〕 (8–12)% increased Chaos Damage | 33 |
| `rings:7` 前缀 | 生命上限；+(100–119) to maximum Life | 1→T8 · 6→T7 · 16→T6 · 24→T5 · 33→T4 · 38→T3 · 46→T2 · 54→T1 | T5〔门槛24〕 +(40–59) to maximum Life | 33 |
| `rings:8` 前缀 | 最大魔力；+(165–179) to maximum Mana | 1→T12 · 6→T11 · 16→T10 · 25→T9 · 33→T8 · 38→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 70→T2 · 75→T1 | T9〔门槛25〕 +(35–54) to maximum Mana | 33 |
| `rings:9` 前缀 | (16–19)% increased Rarity of Items found | 10→T3 · 29→T2 · 47→T1 | T2〔门槛29〕 (12–15)% increased Rarity of Items found | 47 |
| `rings:10` 前缀 | Adds (1–4) to (60–71) Lightning damage to Attacks | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds 1 to (16–22) Lightning damage to Attacks | 33 |
| `rings:11` 前缀 | (27–30)% increased Lightning Damage | 8→T6 · 16→T5 · 33→T4 · 46→T3 · 65→T2 · 75→T1 | T5〔门槛16〕 (8–12)% increased Lightning Damage | 33 |
| `rings:12` 前缀 | Adds (12–19) to (22–32) Physical Damage to Attacks | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (2–4) to (5–8) Physical Damage to Attacks | 33 |
| `rings:13` 后缀 | +(11–13) to all Attributes | 1→T4 · 11→T3 · 22→T2 · 33→T1 | T2〔门槛22〕 +(8–10) to all Attributes | 33 |
| `rings:14` 后缀 | +(15–16)% to all Elemental Resistances | 12→T5 · 26→T4 · 40→T3 · 54→T2 · 68→T1 | T4〔门槛26〕 +(6–8)% to all Elemental Resistances | 40 |
| `rings:15` 后缀 | +(24–27)% to Chaos Resistance | 16→T6 · 30→T5 · 44→T4 · 56→T3 · 68→T2 · 81→T1 | T5〔门槛30〕 +(8–11)% to Chaos Resistance | 44 |
| `rings:16` 后缀 | 冰霜抗性；+(41–45)% to Cold Resistance | 1→T8 · 14→T7 · 26→T6 · 38→T5 · 50→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛26〕 +(16–20)% to Cold Resistance | 38 |
| `rings:17` 后缀 | 敏捷；+(31–33) to Dexterity | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Dexterity | 33 |
| `rings:18` 后缀 | 火焰抗性；+(41–45)% to Fire Resistance | 1→T8 · 12→T7 · 24→T6 · 36→T5 · 48→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛24〕 +(16–20)% to Fire Resistance | 36 |
| `rings:19` 后缀 | (22–24)% increased Cast Speed | 1→T5 · 18→T4 · 35→T3 · 51→T2 · 60→T1 | T4〔门槛18〕 (13–15)% increased Cast Speed | 35 |
| `rings:20` 后缀 | 智慧；+(31–33) to Intelligence | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Intelligence | 33 |
| `rings:21` 后缀 | (15–18)% increased Rarity of Items found | 3→T3 · 24→T2 · 40→T1 | T2〔门槛24〕 (11–14)% increased Rarity of Items found | 40 |
| `rings:22` 后缀 | Gain (41–53) Life per enemy killed | 1→T6 · 11→T5 · 22→T4 · 33→T3 · 44→T2 · 55→T1 | T4〔门槛22〕 Gain (10–18) Life per enemy killed | 33 |
| `rings:23` 后缀 | Leech (7–7.9)% of Physical Attack Damage as Life | 21→T2 · 38→T1 | T2〔门槛21〕 Leech (6–6.9)% of Physical Attack Damage as Life | 38 |
| `rings:24` 后缀 | (13.1–18) Life Regeneration per second | 1→T7 · 5→T6 · 11→T5 · 17→T4 · 26→T3 · 35→T2 · 47→T1 | T3〔门槛26〕 (6.1–9) Life Regeneration per second | 35 |
| `rings:25` 后缀 | 闪电抗性；+(41–45)% to Lightning Resistance | 1→T8 · 13→T7 · 25→T6 · 37→T5 · 49→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛25〕 +(16–20)% to Lightning Resistance | 37 |
| `rings:26` 后缀 | (18–22)% increased Mana Regeneration Rate15% increased Light Radius | 8→T3 · 15→T2 · 30→T1 | T1〔门槛30〕 (18–22)% increased Mana Regeneration Rate15% increased Light Radius | 无后续源档 |
| `rings:27` 后缀 | Gain (21–27) Mana per enemy killed | 1→T6 · 12→T5 · 23→T4 · 34→T3 · 45→T2 · 56→T1 | T4〔门槛23〕 Gain (6–9) Mana per enemy killed | 34 |
| `rings:28` 后缀 | Leech (6–6.9)% of Physical Attack Damage as Mana | 21→T2 · 38→T1 | T2〔门槛21〕 Leech (5–5.9)% of Physical Attack Damage as Mana | 38 |
| `rings:29` 后缀 | (60–69)% increased Mana Regeneration Rate | 1→T6 · 18→T5 · 29→T4 · 42→T3 · 55→T2 · 79→T1 | T4〔门槛29〕 (30–39)% increased Mana Regeneration Rate | 42 |
| `rings:30` 后缀 | 力量；+(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |

<a id="sceptres"></a>

### 权杖 sceptres

来源：[ExileDB 权杖词缀](https://exiledb.com/mods/sceptres)。本类别 22 个本地家族、150 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `sceptres:0` 前缀 | Allies in your Presence deal (21–24) to (32–37) added Attack Cold Damage | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Allies in your Presence deal (5–6) to (9–11) added Attack Cold Damage | 33 |
| `sceptres:1` 前缀 | Allies in your Presence deal (25–29) to (39–45) added Attack Fire Damage | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Allies in your Presence deal (6–8) to (10–13) added Attack Fire Damage | 33 |
| `sceptres:2` 前缀 | Allies in your Presence deal (1–4) to (60–71) added Attack Lightning Damage | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Allies in your Presence deal 1 to (16–22) added Attack Lightning Damage | 33 |
| `sceptres:3` 前缀 | Allies in your Presence deal (12–19) to (22–32) added Attack Physical Damage | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Allies in your Presence deal (2–4) to (5–8) added Attack Physical Damage | 33 |
| `sceptres:4` 前缀 | Allies in your Presence deal (105–119)% increased Damage | 1→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 82→T1 | T6〔门槛16〕 Allies in your Presence deal (45–54)% increased Damage | 33 |
| `sceptres:5` 前缀 | +(150–164) to maximum Mana | 1→T11 · 6→T10 · 16→T9 · 25→T8 · 33→T7 · 38→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 70→T1 | T8〔门槛25〕 +(35–54) to maximum Mana | 33 |
| `sceptres:6` 前缀 | (35–38)% increased Spirit+(42–45) to maximum Mana | 2→T7 · 11→T6 · 26→T5 · 36→T4 · 48→T3 · 58→T2 · 70→T1 | T5〔门槛26〕 (19–22)% increased Spirit+(25–28) to maximum Mana | 36 |
| `sceptres:7` 前缀 | (61–65)% increased Spirit | 1→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 75→T2 · 82→T1 | T6〔门槛16〕 (33–38)% increased Spirit | 33 |
| `sceptres:8` 后缀 | Allies in your Presence have +(17–18)% to all Elemental Resistances | 12→T6 · 26→T5 · 40→T4 · 54→T3 · 68→T2 · 80→T1 | T5〔门槛26〕 Allies in your Presence have +(6–8)% to all Elemental Resistances | 40 |
| `sceptres:9` 后缀 | Allies in your Presence have (35–38)% increased Critical Hit Chance | 11→T6 · 21→T5 · 28→T4 · 41→T3 · 59→T2 · 76→T1 | T4〔门槛28〕 Allies in your Presence have (20–24)% increased Critical Hit Chance | 41 |
| `sceptres:10` 后缀 | Allies in your Presence have (35–39)% increased Critical Damage Bonus | 8→T6 · 21→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 Allies in your Presence have (20–24)% increased Critical Damage Bonus | 44 |
| `sceptres:11` 后缀 | Allies in your Presence have (14–16)% increased Attack Speed | 5→T4 · 20→T3 · 35→T2 · 55→T1 | T3〔门槛20〕 Allies in your Presence have (8–10)% increased Attack Speed | 35 |
| `sceptres:12` 后缀 | Allies in your Presence have (17–20)% increased Cast Speed | 6→T4 · 21→T3 · 36→T2 · 56→T1 | T3〔门槛21〕 Allies in your Presence have (9–12)% increased Cast Speed | 36 |
| `sceptres:13` 后缀 | Allies in your Presence Regenerate (29.1–33) Life per second | 1→T10 · 5→T9 · 11→T8 · 17→T7 · 26→T6 · 35→T5 · 47→T4 · 58→T3 · 68→T2 · 75→T1 | T6〔门槛26〕 Allies in your Presence Regenerate (6.1–9) Life per second | 35 |
| `sceptres:14` 后缀 | +4 to Level of all Minion Skills | 2→T4 · 25→T3 · 55→T2 · 78→T1 | T3〔门槛25〕 +2 to Level of all Minion Skills | 55 |
| `sceptres:15` 后缀 | +(31–33) to Intelligence | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Intelligence | 33 |
| `sceptres:16` 后缀 | (18–22)% increased Mana Regeneration Rate15% increased Light Radius | 8→T3 · 15→T2 · 30→T1 | T1〔门槛30〕 (18–22)% increased Mana Regeneration Rate15% increased Light Radius | 无后续源档 |
| `sceptres:17` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `sceptres:18` 后缀 | (60–69)% increased Mana Regeneration Rate | 1→T6 · 18→T5 · 29→T4 · 42→T3 · 55→T2 · 79→T1 | T4〔门槛29〕 (30–39)% increased Mana Regeneration Rate | 42 |
| `sceptres:19` 后缀 | Minions have (46–50)% increased maximum Life | 2→T6 · 16→T5 · 32→T4 · 48→T3 · 64→T2 · 80→T1 | T5〔门槛16〕 Minions have (26–30)% increased maximum Life | 32 |
| `sceptres:20` 后缀 | (66–80)% increased Presence Area of Effect | 23→T4 · 40→T3 · 56→T2 · 72→T1 | T4〔门槛23〕 (36–45)% increased Presence Area of Effect | 40 |
| `sceptres:21` 后缀 | +(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |

<a id="shields"></a>

### 盾牌 shields

来源：[ExileDB 盾牌词缀](https://exiledb.com/mods/shields)。本类别 32 个本地家族、201 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `shields:0` 前缀 | +(175–189) to maximum Life | 1→T11 · 6→T10 · 16→T9 · 24→T8 · 33→T7 · 38→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 70→T1 | T8〔门槛24〕 +(40–59) to maximum Life | 33 |
| `shields:1` 前缀 | (101–110)% increased Armour and Energy Shield | 2→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Armour and Energy Shield | 33 |
| `shields:2` 前缀 | (39–42)% increased Armour and Energy Shield+(95–136) to Stun Threshold | 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (14–20)% increased Armour and Energy Shield+(14–24) to Stun Threshold | 38 |
| `shields:3` 前缀 | +(128–149) to Armour+(37–42) to maximum Energy Shield | 1→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 +(17–46) to Armour+(9–15) to maximum Energy Shield | 33 |
| `shields:4` 前缀 | (25–30)% increased Block chance | 1→T3 · 33→T2 · 65→T1 | T3〔门槛1〕 (15–19)% increased Block chance | 33 |
| `shields:5` 前缀 | (101–151) to (152–220) Physical Thorns damage | 1→T7 · 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (11–16) to (17–23) Physical Thorns damage | 38 |
| `shields:6` 前缀 | (101–110)% increased Armour and Evasion | 2→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Armour and Evasion | 33 |
| `shields:7` 前缀 | (39–42)% increased Armour and Evasion+(95–136) to Stun Threshold | 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (14–20)% increased Armour and Evasion+(14–24) to Stun Threshold | 38 |
| `shields:8` 前缀 | +(128–149) to Armour+(120–141) to Evasion Rating | 1→T7 · 16→T6 · 33→T5 · 46→T4 · 54→T3 · 60→T2 · 65→T1 | T6〔门槛16〕 +(17–46) to Armour+(11–41) to Evasion Rating | 33 |
| `shields:9` 前缀 | (39–42)% increased Armour+(95–136) to Stun Threshold | 10→T6 · 19→T5 · 38→T4 · 48→T3 · 63→T2 · 74→T1 | T5〔门槛19〕 (14–20)% increased Armour+(14–24) to Stun Threshold | 38 |
| `shields:10` 前缀 | +(249–277) to Armour | 1→T10 · 8→T9 · 16→T8 · 25→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛25〕 +(78–98) to Armour | 33 |
| `shields:11` 前缀 | (101–110)% increased Armour | 2→T8 · 16→T7 · 35→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 (27–42)% increased Armour | 35 |
| `shields:12` 后缀 | +(17–18)% to all Elemental Resistances | 12→T6 · 26→T5 · 40→T4 · 54→T3 · 68→T2 · 80→T1 | T5〔门槛26〕 +(6–8)% to all Elemental Resistances | 40 |
| `shields:13` 后缀 | +(44–50)% of Armour also applies to Elemental Damage | 1→T6 · 16→T5 · 36→T4 · 48→T3 · 66→T2 · 81→T1 | T5〔门槛16〕 +(20–25)% of Armour also applies to Elemental Damage | 36 |
| `shields:14` 后缀 | +(24–27)% to Chaos Resistance | 16→T6 · 30→T5 · 44→T4 · 56→T3 · 68→T2 · 81→T1 | T5〔门槛30〕 +(8–11)% to Chaos Resistance | 44 |
| `shields:15` 后缀 | +(41–45)% to Cold Resistance | 1→T8 · 14→T7 · 26→T6 · 38→T5 · 50→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛26〕 +(16–20)% to Cold Resistance | 38 |
| `shields:16` 后缀 | (24–27)% increased Energy Shield Recharge Rate | 48→T3 · 66→T2 · 81→T1 | 无等级合格档 | 48 |
| `shields:17` 后缀 | +(41–45)% to Fire Resistance | 1→T8 · 12→T7 · 24→T6 · 36→T5 · 48→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛24〕 +(16–20)% to Fire Resistance | 36 |
| `shields:18` 后缀 | +(31–33) to Intelligence | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Intelligence | 33 |
| `shields:19` 后缀 | +(41–45)% to Lightning Resistance | 1→T8 · 13→T7 · 25→T6 · 37→T5 · 49→T4 · 60→T3 · 71→T2 · 82→T1 | T6〔门槛25〕 +(16–20)% to Lightning Resistance | 37 |
| `shields:20` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `shields:21` 后缀 | +3% to Maximum Chaos Resistance | 68→T3 · 75→T2 · 81→T1 | 无等级合格档 | 68 |
| `shields:22` 后缀 | +3% to Maximum Cold Resistance | 68→T3 · 75→T2 · 81→T1 | 无等级合格档 | 68 |
| `shields:23` 后缀 | +2% to all Maximum Elemental Resistances | 75→T2 · 81→T1 | 无等级合格档 | 75 |
| `shields:24` 后缀 | +3% to Maximum Fire Resistance | 68→T3 · 75→T2 · 81→T1 | 无等级合格档 | 68 |
| `shields:25` 后缀 | +3% to Maximum Lightning Resistance | 68→T3 · 75→T2 · 81→T1 | 无等级合格档 | 68 |
| `shields:26` 后缀 | +(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |
| `shields:27` 后缀 | +(254–304) to Stun Threshold | 1→T10 · 8→T9 · 15→T8 · 22→T7 · 29→T6 · 36→T5 · 45→T4 · 54→T3 · 63→T2 · 72→T1 | T6〔门槛29〕 +(73–97) to Stun Threshold | 36 |
| `shields:28` 后缀 | +(31–33) to Dexterity | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Dexterity | 33 |
| `shields:29` 后缀 | Gain Deflection Rating equal to (24–26)% of Evasion Rating | 1→T6 · 16→T5 · 36→T4 · 48→T3 · 66→T2 · 81→T1 | T5〔门槛16〕 Gain Deflection Rating equal to (12–14)% of Evasion Rating | 36 |
| `shields:30` 后缀 | Hits against you have (48–54)% reduced Critical Damage Bonus | 33→T5 · 45→T4 · 58→T3 · 69→T2 · 81→T1 | 无等级合格档 | 33 |
| `shields:31` 后缀 | 8% additional Physical Damage Reduction | 32→T5 · 41→T4 · 53→T3 · 66→T2 · 77→T1 | 无等级合格档 | 32 |

<a id="spears"></a>

### 长矛 spears

来源：[ExileDB 长矛词缀](https://exiledb.com/mods/spears)。本类别 24 个本地家族、162 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `spears:0` 前缀 | (87–100)% increased Elemental Damage with Attacks | 4→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 81→T1 | T5〔门槛16〕 (36–52)% increased Elemental Damage with Attacks | 33 |
| `spears:1` 前缀 | +(451–550) to Accuracy Rating | 8→T9 · 13→T8 · 18→T7 · 26→T6 · 36→T5 · 48→T4 · 58→T3 · 67→T2 · 76→T1 | T6〔门槛26〕 +(85–123) to Accuracy Rating | 36 |
| `spears:2` 前缀 | Adds (72–81) to (110–123) Cold Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (6–9) to (10–16) Cold Damage | 33 |
| `spears:3` 前缀 | Adds (88–101) to (133–154) Fire Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (7–11) to (13–19) Fire Damage | 33 |
| `spears:4` 前缀 | (75–79)% increased Physical Damage+(175–200) to Accuracy Rating | 8→T8 · 14→T7 · 23→T6 · 38→T5 · 54→T4 · 65→T3 · 70→T2 · 81→T1 | T6〔门槛23〕 (25–34)% increased Physical Damage+(47–72) to Accuracy Rating | 38 |
| `spears:5` 前缀 | Adds (1–12) to (202–234) Lightning Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (1–2) to (20–30) Lightning Damage | 33 |
| `spears:6` 前缀 | Adds (26–39) to (44–66) Physical Damage | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (6–9) to (11–16) Physical Damage | 33 |
| `spears:7` 前缀 | (170–179)% increased Physical Damage | 1→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 75→T2 · 82→T1 | T6〔门槛16〕 (65–84)% increased Physical Damage | 33 |
| `spears:8` 后缀 | +(31–33) to Dexterity | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Dexterity | 33 |
| `spears:9` 后缀 | +4 to Level of all Melee Skills | 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +1 to Level of all Melee Skills | 36 |
| `spears:10` 后缀 | +4 to Level of all Projectile Skills | 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +1 to Level of all Projectile Skills | 36 |
| `spears:11` 后缀 | Gain (69–84) Life per enemy killed | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 77→T1 | T6〔门槛22〕 Gain (10–18) Life per enemy killed | 33 |
| `spears:12` 后缀 | Grants 5 Life per Enemy Hit | 8→T4 · 20→T3 · 30→T2 · 40→T1 | T2〔门槛30〕 Grants 4 Life per Enemy Hit | 40 |
| `spears:13` 后缀 | Leeches (9–9.9)% of Physical Damage as Life | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (6–6.9)% of Physical Damage as Life | 38 |
| `spears:14` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `spears:15` 后缀 | +(4.41–5)% to Critical Hit Chance | 1→T6 · 20→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(2.11–2.7)% to Critical Hit Chance | 44 |
| `spears:16` 后缀 | +(23–25)% to Critical Damage Bonus | 8→T6 · 21→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(14–16)% to Critical Damage Bonus | 44 |
| `spears:17` 后缀 | (26–28)% increased Attack Speed | 1→T8 · 11→T7 · 22→T6 · 30→T5 · 37→T4 · 45→T3 · 60→T2 · 77→T1 | T5〔门槛30〕 (14–16)% increased Attack Speed | 37 |
| `spears:18` 后缀 | +(41–60) to Accuracy Rating15% increased Light Radius | 8→T3 · 15→T2 · 30→T1 | T1〔门槛30〕 +(41–60) to Accuracy Rating15% increased Light Radius | 无后续源档 |
| `spears:19` 后缀 | Causes (71–80)% increased Stun Buildup | 5→T6 · 20→T5 · 30→T4 · 44→T3 · 58→T2 · 74→T1 | T4〔门槛30〕 Causes (41–50)% increased Stun Buildup | 44 |
| `spears:20` 后缀 | (27–30)% increased Stun Duration | 5→T6 · 18→T5 · 30→T4 · 44→T3 · 58→T2 · 71→T1 | T4〔门槛30〕 (17–19)% increased Stun Duration | 44 |
| `spears:21` 后缀 | Gain (36–45) Mana per enemy killed | 1→T8 · 12→T7 · 23→T6 · 34→T5 · 45→T4 · 56→T3 · 67→T2 · 78→T1 | T6〔门槛23〕 Gain (6–9) Mana per enemy killed | 34 |
| `spears:22` 后缀 | Leeches (8–8.9)% of Physical Damage as Mana | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (5–5.9)% of Physical Damage as Mana | 38 |
| `spears:23` 后缀 | +(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |

<a id="staves"></a>

### 法杖 staves

来源：[ExileDB 法杖词缀](https://exiledb.com/mods/staves)。本类别 29 个本地家族、185 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `staves:0` 前缀 | Gain (55–60)% of Damage as Extra Cold Damage | 5→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 80→T1 | T5〔门槛16〕 Gain (31–36)% of Damage as Extra Cold Damage | 33 |
| `staves:1` 前缀 | Gain (55–60)% of Damage as Extra Fire Damage | 5→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 80→T1 | T5〔门槛16〕 Gain (31–36)% of Damage as Extra Fire Damage | 33 |
| `staves:2` 前缀 | Gain (55–60)% of Damage as Extra Lightning Damage | 5→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 80→T1 | T5〔门槛16〕 Gain (31–36)% of Damage as Extra Lightning Damage | 33 |
| `staves:3` 前缀 | 火焰伤害；(209–238)% increased Fire Damage | 2→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 81→T1 | T6〔门槛16〕 (89–108)% increased Fire Damage | 33 |
| `staves:4` 前缀 | 最大魔力；+(299–328) to maximum Mana | 1→T11 · 6→T10 · 16→T9 · 25→T8 · 33→T7 · 38→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 70→T1 | T8〔门槛25〕 +(69–108) to maximum Mana | 33 |
| `staves:5` 前缀 | 法术伤害；(209–238)% increased Spell Damage | 1→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 80→T1 | T6〔门槛16〕 (89–108)% increased Spell Damage | 33 |
| `staves:6` 前缀 | (89–98)% increased Spell Damage+(83–90) to maximum Mana | 2→T7 · 11→T6 · 23→T5 · 38→T4 · 48→T3 · 63→T2 · 79→T1 | T5〔门槛23〕 (49–58)% increased Spell Damage+(49–56) to maximum Mana | 38 |
| `staves:7` 前缀 | 冰霜伤害；(209–238)% increased Cold Damage | 2→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 81→T1 | T6〔门槛16〕 (89–108)% increased Cold Damage | 33 |
| `staves:8` 前缀 | (209–238)% increased Lightning Damage | 2→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 81→T1 | T6〔门槛16〕 (89–108)% increased Lightning Damage | 33 |
| `staves:9` 前缀 | (209–238)% increased Chaos Damage | 2→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 81→T1 | T6〔门槛16〕 (89–108)% increased Chaos Damage | 33 |
| `staves:10` 前缀 | (209–238)% increased Spell Physical Damage | 2→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 81→T1 | T6〔门槛16〕 (89–108)% increased Spell Physical Damage | 33 |
| `staves:11` 后缀 | +7 to Level of all Fire Spell Skills | 2→T5 · 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Fire Spell Skills | 36 |
| `staves:12` 后缀 | +(5–6) to Level of all Spell Skills | 5→T4 · 25→T3 · 55→T2 · 78→T1 | T3〔门槛25〕 +3 to Level of all Spell Skills | 55 |
| `staves:13` 后缀 | (91–100)% increased Flammability Magnitude | 15→T5 · 30→T4 · 45→T3 · 60→T2 · 75→T1 | T4〔门槛30〕 (61–70)% increased Flammability Magnitude | 45 |
| `staves:14` 后缀 | 施法速度；(50–52)% increased Cast Speed | 1→T7 · 15→T6 · 30→T5 · 45→T4 · 60→T3 · 70→T2 · 80→T1 | T5〔门槛30〕 (26–31)% increased Cast Speed | 45 |
| `staves:15` 后缀 | 智慧；+(31–33) to Intelligence | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Intelligence | 33 |
| `staves:16` 后缀 | 击败敌人恢复生命；Gain (69–84) Life per enemy killed | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 77→T1 | T6〔门槛22〕 Gain (10–18) Life per enemy killed | 33 |
| `staves:17` 后缀 | (18–22)% increased Mana Regeneration Rate15% increased Light Radius | 8→T3 · 15→T2 · 30→T1 | T1〔门槛30〕 (18–22)% increased Mana Regeneration Rate15% increased Light Radius | 无后续源档 |
| `staves:18` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `staves:19` 后缀 | Gain (36–45) Mana per enemy killed | 1→T8 · 12→T7 · 23→T6 · 34→T5 · 45→T4 · 56→T3 · 67→T2 · 78→T1 | T6〔门槛23〕 Gain (6–9) Mana per enemy killed | 34 |
| `staves:20` 后缀 | 魔力再生率；(90–104)% increased Mana Regeneration Rate | 1→T6 · 18→T5 · 29→T4 · 42→T3 · 55→T2 · 79→T1 | T4〔门槛29〕 (45–59)% increased Mana Regeneration Rate | 42 |
| `staves:21` 后缀 | 法术暴击率；(90–109)% increased Critical Hit Chance for Spells | 11→T6 · 21→T5 · 28→T4 · 41→T3 · 59→T2 · 76→T1 | T4〔门槛28〕 (60–69)% increased Critical Hit Chance for Spells | 41 |
| `staves:22` 后缀 | 法术暴击伤害加成；(53–59)% increased Critical Spell Damage Bonus | 8→T6 · 21→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 (30–36)% increased Critical Spell Damage Bonus | 44 |
| `staves:23` 后缀 | (71–80)% increased Freeze Buildup | 15→T5 · 30→T4 · 45→T3 · 60→T2 · 75→T1 | T4〔门槛30〕 (41–50)% increased Freeze Buildup | 45 |
| `staves:24` 后缀 | +7 to Level of all Cold Spell Skills | 2→T5 · 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Cold Spell Skills | 36 |
| `staves:25` 后缀 | +7 to Level of all Lightning Spell Skills | 2→T5 · 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Lightning Spell Skills | 36 |
| `staves:26` 后缀 | (91–100)% increased chance to Shock | 15→T5 · 30→T4 · 45→T3 · 60→T2 · 75→T1 | T4〔门槛30〕 (61–70)% increased chance to Shock | 45 |
| `staves:27` 后缀 | +7 to Level of all Chaos Spell Skills | 2→T5 · 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Chaos Spell Skills | 36 |
| `staves:28` 后缀 | +7 to Level of all Physical Spell Skills | 2→T5 · 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Physical Spell Skills | 36 |

<a id="talismans"></a>

### Talismans 类 talismans

来源：[ExileDB Talismans 类词缀](https://exiledb.com/mods/talismans)。本类别 23 个本地家族、158 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `talismans:0` 前缀 | (120–139)% increased Elemental Damage with Attacks | 4→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 81→T1 | T5〔门槛16〕 (48–71)% increased Elemental Damage with Attacks | 33 |
| `talismans:1` 前缀 | +(451–550) to Accuracy Rating | 8→T9 · 13→T8 · 18→T7 · 26→T6 · 36→T5 · 48→T4 · 58→T3 · 67→T2 · 76→T1 | T6〔门槛26〕 +(85–123) to Accuracy Rating | 36 |
| `talismans:2` 前缀 | Adds (112–124) to (168–189) Cold Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (10–14) to (15–23) Cold Damage | 33 |
| `talismans:3` 前缀 | Adds (135–156) to (205–236) Fire Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (11–17) to (19–28) Fire Damage | 33 |
| `talismans:4` 前缀 | (75–79)% increased Physical Damage+(175–200) to Accuracy Rating | 8→T8 · 14→T7 · 23→T6 · 38→T5 · 54→T4 · 65→T3 · 70→T2 · 81→T1 | T6〔门槛23〕 (25–34)% increased Physical Damage+(47–72) to Accuracy Rating | 38 |
| `talismans:5` 前缀 | Adds (1–19) to (310–358) Lightning Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (1–3) to (31–43) Lightning Damage | 33 |
| `talismans:6` 前缀 | Adds (37–55) to (63–94) Physical Damage | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (8–12) to (15–22) Physical Damage | 33 |
| `talismans:7` 前缀 | (170–179)% increased Physical Damage | 1→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 75→T2 · 82→T1 | T6〔门槛16〕 (65–84)% increased Physical Damage | 33 |
| `talismans:8` 后缀 | +5 to Level of all Melee Skills | 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Melee Skills | 36 |
| `talismans:9` 后缀 | +(31–33) to Intelligence | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Intelligence | 33 |
| `talismans:10` 后缀 | Gain (69–84) Life per enemy killed | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 77→T1 | T6〔门槛22〕 Gain (10–18) Life per enemy killed | 33 |
| `talismans:11` 后缀 | Grants 5 Life per Enemy Hit | 8→T4 · 20→T3 · 30→T2 · 40→T1 | T2〔门槛30〕 Grants 4 Life per Enemy Hit | 40 |
| `talismans:12` 后缀 | Leeches (9–9.9)% of Physical Damage as Life | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (6–6.9)% of Physical Damage as Life | 38 |
| `talismans:13` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `talismans:14` 后缀 | +(4.41–5)% to Critical Hit Chance | 1→T6 · 20→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(2.11–2.7)% to Critical Hit Chance | 44 |
| `talismans:15` 后缀 | +(23–25)% to Critical Damage Bonus | 8→T6 · 21→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(14–16)% to Critical Damage Bonus | 44 |
| `talismans:16` 后缀 | (26–28)% increased Attack Speed | 1→T8 · 11→T7 · 22→T6 · 30→T5 · 37→T4 · 45→T3 · 60→T2 · 77→T1 | T5〔门槛30〕 (14–16)% increased Attack Speed | 37 |
| `talismans:17` 后缀 | +(41–60) to Accuracy Rating15% increased Light Radius | 8→T3 · 15→T2 · 30→T1 | T1〔门槛30〕 +(41–60) to Accuracy Rating15% increased Light Radius | 无后续源档 |
| `talismans:18` 后缀 | Causes (71–80)% increased Stun Buildup | 5→T6 · 20→T5 · 30→T4 · 44→T3 · 58→T2 · 74→T1 | T4〔门槛30〕 Causes (41–50)% increased Stun Buildup | 44 |
| `talismans:19` 后缀 | (27–30)% increased Stun Duration | 5→T6 · 18→T5 · 30→T4 · 44→T3 · 58→T2 · 71→T1 | T4〔门槛30〕 (17–19)% increased Stun Duration | 44 |
| `talismans:20` 后缀 | Gain (36–45) Mana per enemy killed | 1→T8 · 12→T7 · 23→T6 · 34→T5 · 45→T4 · 56→T3 · 67→T2 · 78→T1 | T6〔门槛23〕 Gain (6–9) Mana per enemy killed | 34 |
| `talismans:21` 后缀 | Leeches (8–8.9)% of Physical Damage as Mana | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (5–5.9)% of Physical Damage as Mana | 38 |
| `talismans:22` 后缀 | +(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |

<a id="two-hand-maces"></a>

### 双手锤 two-hand-maces

来源：[ExileDB 双手锤词缀](https://exiledb.com/mods/two-hand-maces)。本类别 22 个本地家族、150 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `two-hand-maces:0` 前缀 | (120–139)% increased Elemental Damage with Attacks | 4→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 81→T1 | T5〔门槛16〕 (48–71)% increased Elemental Damage with Attacks | 33 |
| `two-hand-maces:1` 前缀 | +(451–550) to Accuracy Rating | 8→T9 · 13→T8 · 18→T7 · 26→T6 · 36→T5 · 48→T4 · 58→T3 · 67→T2 · 76→T1 | T6〔门槛26〕 +(85–123) to Accuracy Rating | 36 |
| `two-hand-maces:2` 前缀 | Adds (112–124) to (168–189) Cold Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (10–14) to (15–23) Cold Damage | 33 |
| `two-hand-maces:3` 前缀 | Adds (135–156) to (205–236) Fire Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (11–17) to (19–28) Fire Damage | 33 |
| `two-hand-maces:4` 前缀 | (75–79)% increased Physical Damage+(175–200) to Accuracy Rating | 8→T8 · 14→T7 · 23→T6 · 38→T5 · 54→T4 · 65→T3 · 70→T2 · 81→T1 | T6〔门槛23〕 (25–34)% increased Physical Damage+(47–72) to Accuracy Rating | 38 |
| `two-hand-maces:5` 前缀 | Adds (1–19) to (310–358) Lightning Damage | 1→T10 · 8→T9 · 16→T8 · 33→T7 · 46→T6 · 54→T5 · 60→T4 · 65→T3 · 75→T2 · 81→T1 | T8〔门槛16〕 Adds (1–3) to (31–43) Lightning Damage | 33 |
| `two-hand-maces:6` 前缀 | Adds (37–55) to (63–94) Physical Damage | 1→T9 · 8→T8 · 16→T7 · 33→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 75→T1 | T7〔门槛16〕 Adds (8–12) to (15–22) Physical Damage | 33 |
| `two-hand-maces:7` 前缀 | (170–179)% increased Physical Damage | 1→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 75→T2 · 82→T1 | T6〔门槛16〕 (65–84)% increased Physical Damage | 33 |
| `two-hand-maces:8` 后缀 | +5 to Level of all Melee Skills | 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Melee Skills | 36 |
| `two-hand-maces:9` 后缀 | Gain (69–84) Life per enemy killed | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 77→T1 | T6〔门槛22〕 Gain (10–18) Life per enemy killed | 33 |
| `two-hand-maces:10` 后缀 | Grants 5 Life per Enemy Hit | 8→T4 · 20→T3 · 30→T2 · 40→T1 | T2〔门槛30〕 Grants 4 Life per Enemy Hit | 40 |
| `two-hand-maces:11` 后缀 | Leeches (9–9.9)% of Physical Damage as Life | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (6–6.9)% of Physical Damage as Life | 38 |
| `two-hand-maces:12` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `two-hand-maces:13` 后缀 | +(4.41–5)% to Critical Hit Chance | 1→T6 · 20→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(2.11–2.7)% to Critical Hit Chance | 44 |
| `two-hand-maces:14` 后缀 | +(23–25)% to Critical Damage Bonus | 8→T6 · 21→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 +(14–16)% to Critical Damage Bonus | 44 |
| `two-hand-maces:15` 后缀 | (26–28)% increased Attack Speed | 1→T8 · 11→T7 · 22→T6 · 30→T5 · 37→T4 · 45→T3 · 60→T2 · 77→T1 | T5〔门槛30〕 (14–16)% increased Attack Speed | 37 |
| `two-hand-maces:16` 后缀 | +(41–60) to Accuracy Rating15% increased Light Radius | 8→T3 · 15→T2 · 30→T1 | T1〔门槛30〕 +(41–60) to Accuracy Rating15% increased Light Radius | 无后续源档 |
| `two-hand-maces:17` 后缀 | Causes (71–80)% increased Stun Buildup | 5→T6 · 20→T5 · 30→T4 · 44→T3 · 58→T2 · 74→T1 | T4〔门槛30〕 Causes (41–50)% increased Stun Buildup | 44 |
| `two-hand-maces:18` 后缀 | (27–30)% increased Stun Duration | 5→T6 · 18→T5 · 30→T4 · 44→T3 · 58→T2 · 71→T1 | T4〔门槛30〕 (17–19)% increased Stun Duration | 44 |
| `two-hand-maces:19` 后缀 | Gain (36–45) Mana per enemy killed | 1→T8 · 12→T7 · 23→T6 · 34→T5 · 45→T4 · 56→T3 · 67→T2 · 78→T1 | T6〔门槛23〕 Gain (6–9) Mana per enemy killed | 34 |
| `two-hand-maces:20` 后缀 | Leeches (8–8.9)% of Physical Damage as Mana | 21→T4 · 38→T3 · 54→T2 · 65→T1 | T4〔门槛21〕 Leeches (5–5.9)% of Physical Damage as Mana | 38 |
| `two-hand-maces:21` 后缀 | +(31–33) to Strength | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Strength | 33 |

<a id="wands"></a>

### 魔杖 wands

来源：[ExileDB 魔杖词缀](https://exiledb.com/mods/wands)。本类别 29 个本地家族、185 个档位行。

| 家族ID与类型 | T1原文效果用于识别 | 最低装等到阶级的全部解锁点 | 装等30最好档与准确效果 | 下一门槛 |
|---|---|---|---|---:|
| `wands:0` 前缀 | (105–119)% increased Chaos Damage | 2→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 81→T1 | T6〔门槛16〕 (45–54)% increased Chaos Damage | 33 |
| `wands:1` 前缀 | Gain (28–30)% of Damage as Extra Cold Damage | 5→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 80→T1 | T5〔门槛16〕 Gain (16–18)% of Damage as Extra Cold Damage | 33 |
| `wands:2` 前缀 | Gain (28–30)% of Damage as Extra Fire Damage | 5→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 80→T1 | T5〔门槛16〕 Gain (16–18)% of Damage as Extra Fire Damage | 33 |
| `wands:3` 前缀 | Gain (28–30)% of Damage as Extra Lightning Damage | 5→T6 · 16→T5 · 33→T4 · 46→T3 · 60→T2 · 80→T1 | T5〔门槛16〕 Gain (16–18)% of Damage as Extra Lightning Damage | 33 |
| `wands:4` 前缀 | +(150–164) to maximum Mana | 1→T11 · 6→T10 · 16→T9 · 25→T8 · 33→T7 · 38→T6 · 46→T5 · 54→T4 · 60→T3 · 65→T2 · 70→T1 | T8〔门槛25〕 +(35–54) to maximum Mana | 33 |
| `wands:5` 前缀 | (105–119)% increased Spell Damage | 1→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 80→T1 | T6〔门槛16〕 (45–54)% increased Spell Damage | 33 |
| `wands:6` 前缀 | (45–49)% increased Spell Damage+(42–45) to maximum Mana | 2→T7 · 11→T6 · 23→T5 · 38→T4 · 46→T3 · 60→T2 · 80→T1 | T5〔门槛23〕 (25–29)% increased Spell Damage+(25–28) to maximum Mana | 38 |
| `wands:7` 前缀 | (105–119)% increased Cold Damage | 2→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 81→T1 | T6〔门槛16〕 (45–54)% increased Cold Damage | 33 |
| `wands:8` 前缀 | (105–119)% increased Fire Damage | 2→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 81→T1 | T6〔门槛16〕 (45–54)% increased Fire Damage | 33 |
| `wands:9` 前缀 | (105–119)% increased Lightning Damage | 2→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 81→T1 | T6〔门槛16〕 (45–54)% increased Lightning Damage | 33 |
| `wands:10` 前缀 | (105–119)% increased Spell Physical Damage | 2→T8 · 8→T7 · 16→T6 · 33→T5 · 46→T4 · 60→T3 · 70→T2 · 81→T1 | T6〔门槛16〕 (45–54)% increased Spell Physical Damage | 33 |
| `wands:11` 后缀 | +5 to Level of all Chaos Spell Skills | 2→T5 · 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Chaos Spell Skills | 36 |
| `wands:12` 后缀 | +4 to Level of all Spell Skills | 5→T4 · 25→T3 · 55→T2 · 78→T1 | T3〔门槛25〕 +2 to Level of all Spell Skills | 55 |
| `wands:13` 后缀 | (33–35)% increased Cast Speed | 1→T7 · 15→T6 · 30→T5 · 45→T4 · 60→T3 · 70→T2 · 80→T1 | T5〔门槛30〕 (17–20)% increased Cast Speed | 45 |
| `wands:14` 后缀 | +(31–33) to Intelligence | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 74→T1 | T6〔门槛22〕 +(13–16) to Intelligence | 33 |
| `wands:15` 后缀 | Gain (69–84) Life per enemy killed | 1→T8 · 11→T7 · 22→T6 · 33→T5 · 44→T4 · 55→T3 · 66→T2 · 77→T1 | T6〔门槛22〕 Gain (10–18) Life per enemy killed | 33 |
| `wands:16` 后缀 | (18–22)% increased Mana Regeneration Rate15% increased Light Radius | 8→T3 · 15→T2 · 30→T1 | T1〔门槛30〕 (18–22)% increased Mana Regeneration Rate15% increased Light Radius | 无后续源档 |
| `wands:17` 后缀 | 35% reduced Attribute Requirements | 24→T5 · 32→T4 · 40→T3 · 52→T2 · 60→T1 | T5〔门槛24〕 15% reduced Attribute Requirements | 32 |
| `wands:18` 后缀 | Gain (36–45) Mana per enemy killed | 1→T8 · 12→T7 · 23→T6 · 34→T5 · 45→T4 · 56→T3 · 67→T2 · 78→T1 | T6〔门槛23〕 Gain (6–9) Mana per enemy killed | 34 |
| `wands:19` 后缀 | (60–69)% increased Mana Regeneration Rate | 1→T6 · 18→T5 · 29→T4 · 42→T3 · 55→T2 · 79→T1 | T4〔门槛29〕 (30–39)% increased Mana Regeneration Rate | 42 |
| `wands:20` 后缀 | (60–73)% increased Critical Hit Chance for Spells | 11→T6 · 21→T5 · 28→T4 · 41→T3 · 59→T2 · 76→T1 | T4〔门槛28〕 (40–46)% increased Critical Hit Chance for Spells | 41 |
| `wands:21` 后缀 | (35–39)% increased Critical Spell Damage Bonus | 8→T6 · 21→T5 · 30→T4 · 44→T3 · 59→T2 · 73→T1 | T4〔门槛30〕 (20–24)% increased Critical Spell Damage Bonus | 44 |
| `wands:22` 后缀 | (71–80)% increased Freeze Buildup | 15→T5 · 30→T4 · 45→T3 · 60→T2 · 75→T1 | T4〔门槛30〕 (41–50)% increased Freeze Buildup | 45 |
| `wands:23` 后缀 | +5 to Level of all Cold Spell Skills | 2→T5 · 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Cold Spell Skills | 36 |
| `wands:24` 后缀 | +5 to Level of all Fire Spell Skills | 2→T5 · 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Fire Spell Skills | 36 |
| `wands:25` 后缀 | +5 to Level of all Lightning Spell Skills | 2→T5 · 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Lightning Spell Skills | 36 |
| `wands:26` 后缀 | +5 to Level of all Physical Spell Skills | 2→T5 · 18→T4 · 36→T3 · 55→T2 · 81→T1 | T4〔门槛18〕 +2 to Level of all Physical Spell Skills | 36 |
| `wands:27` 后缀 | (91–100)% increased Flammability Magnitude | 15→T5 · 30→T4 · 45→T3 · 60→T2 · 75→T1 | T4〔门槛30〕 (61–70)% increased Flammability Magnitude | 45 |
| `wands:28` 后缀 | (91–100)% increased chance to Shock | 15→T5 · 30→T4 · 45→T3 · 60→T2 · 75→T1 | T4〔门槛30〕 (61–70)% increased chance to Shock | 45 |

## 9 数据附件和维护规则

### 完整数据附件

[普通词缀完整档位数据](level-forge-full-affixes.json) 保存所有780家族与4333档。每族包含 `id`、`scope`、`familyLocalIndex`、`side`、`sourceUrl`、完整 `tiers` 和推导的 `level30` 摘要。每个档位保存 `tier`、`sourceTier`、`requiredLevel`、`sourceName`、`sourceEffect`、`sourceLocalId`；原始英文数值范围原样保留，包括复合与多区间效果，附件不将它们简化为一个数。

网页精选数据另存为 `level-lab-data.json`，结构为 `scopes → families → tiers`。其中模板只有一个 `{value}` 占位符，保留 `min`、`max` 与演示精度 `step`；来源权重为 `null`。完整数据与精选数据不可混用：前者适合资料检索，后者适合当前单数值预览，不代表已给所有4333档建立可运行模型。

### 更新时必须做的检查

1. 记录新源的版本、观察日期、来源状态与文件校验值，不能静默覆盖后继续沿用旧来源说明。
2. 比较每族每档的T标签、门槛、阶名与效果，特别检查家族本地序号是否发生重排。旧ID不是永久官方标识，源升级需要显式映射或隔离，不自动按序号套用旧存档。
3. 对每档门槛检查 `门槛−1`、`门槛`、`门槛+1`；对30与31同时检查正式开放和离线预览。
4. 正式发放只能经过开放上限资格门；查看未来档位不修改装备、材料、随机数状态或正式库存。
5. 只有拿到具体底材资格与可信权重后，才扩大“真实可出”或“命中率”表述；未核实的数据继续明确标未知。

### 本次校验结果

生成过程逐一对照源记录校验4333档的家族归属、T标签、最低装等、英文阶名和效果；逐族重算780个装等30摘要，检查未漏族、未漏档、未重复ID。精选池另做473档数值解析核对与6000次家族装等资格比较，检查装等1–100的筛选与源记录一致。所有比较均通过。此处验证的是资料忠实度与推导一致性，不是游戏服务端实测。

## 10 来源与可追溯性

- 完整词缀事实来源：各类别的ExileDB页面，已逐节链接；源快照为0.5.5，构建0.5.5.4.2。本地文件SHA-256记录在数据附件元信息中。[ExileDB版本记录](https://exiledb.com/patches)
- 阶级编号方向：[GGG 0.2.1补丁](https://www.pathofexile.com/forum/view-thread/3787044)。
- 高阶通货系列与机制：[GGG 0.3.0补丁](https://www.pathofexile.com/forum/view-thread/3826682)、[GGG 0.5.0补丁](https://www.pathofexile.com/forum/view-thread/3932540)。
- 通货具体文本与最低等级例外：[PoE2DB物品稀有度](https://poe2db.tw/cn/Item_Rarity)、[PoE2DB最低词缀等级](https://poe2db.tw/cn/Minimum_Modifier_Level)。社区资料不自动升级为官方算法证明。
- 本项目实现边界另见同目录的 《装备装等与高阶通货设计规格》交付文档。本手册负责源事实与资格索引，不擅自定案产出率、交易经济或真实概率。
