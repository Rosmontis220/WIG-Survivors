/* ═══════════════════════════════════════════════════
 * 危机合约 · 数据接口（参考《明日方舟》危机合约）
 * 通关普通模式后解锁；每次进入消耗 CONTRACT_DATA.cost 碎片。
 * 词条 mods 支持以下简单键位（实现阶段接入）：
 *   enemyHpMult        所有烂点生命 ×
 *   enemyDmgMult       所有烂点伤害 ×
 *   enemySpdMult       所有烂点速度 ×
 *   spawnEveryMult     刷怪间隔 ×（<1 更密集）
 *   playerHpMax        玩家生命上限 ±
 *   playerSpdMult      玩家移速 ×
 *   playerDmgMult      玩家伤害 ×
 *   xpMult             经验获取 ×
 *   playerMagnetMult   拾取范围 ±（加法）
 *   bossBuffs          Boss 增益 { hpMult, dmgMult }
 * 特殊机制词条（禁回复、反转操作、弹幕强化等）后续补充。
 * ═══════════════════════════════════════════════════ */
window.CONTRACT_DATA = {
  cost: 50,                  // 每次进入消耗的碎片数量
  unlockKey: "darg_clear",   // 通关标记（localStorage key，通关普通模式时写入 "1"）
  maxContracts: 3,           // 单局最多可选的词条数量
  contracts: [
    /* ── 强化所有烂点 ── */
    { "id":"c001","em":"💪","name":"烂点打鸡血",
      "desc":"所有烂点的生命 +50%","tags":["敌人"],
      "mods":{"enemyHpMult":1.5} },
    { "id":"c002","em":"🔥","name":"烂点狂暴化",
      "desc":"所有烂点的伤害 +40%","tags":["敌人"],
      "mods":{"enemyDmgMult":1.4} },
    { "id":"c003","em":"👟","name":"烂点不喘气",
      "desc":"所有烂点的速度 +30%","tags":["敌人"],
      "mods":{"enemySpdMult":1.3} },
    { "id":"c004","em":"📈","name":"烂点井喷",
      "desc":"刷怪间隔 -20%，烂点更密集","tags":["敌人"],
      "mods":{"spawnEveryMult":0.8} },
    { "id":"c005","em":"🧱","name":"烂点加厚",
      "desc":"所有烂点的生命 +100%（经验不变）","tags":["敌人"],
      "mods":{"enemyHpMult":2} },
    /* ── 弱化玩家 ── */
    { "id":"c006","em":"🍩","name":"WIG猎人断粮",
      "desc":"生命上限 -30","tags":["玩家"],
      "mods":{"playerHpMax":-30} },
    { "id":"c007","em":"🦵","name":"WIG猎人腿软",
      "desc":"移动速度 -20%","tags":["玩家"],
      "mods":{"playerSpdMult":0.8} },
    { "id":"c008","em":"🗑️","name":"证据被吞",
      "desc":"所有伤害 -25%","tags":["玩家"],
      "mods":{"playerDmgMult":0.75} },
    { "id":"c009","em":"⭐","name":"社区掉粉",
      "desc":"获得经验 -30%","tags":["玩家"],
      "mods":{"xpMult":0.7} },
    { "id":"c010","em":"🧲","name":"磁铁没电",
      "desc":"拾取范围 -40%","tags":["玩家"],
      "mods":{"playerMagnetMult":-0.4} },
    /* ── Boss ── */
    { "id":"c011","em":"👑","name":"ARG酱狂暴",
      "desc":"Boss 生命 +50%、伤害 +50%","tags":["Boss"],
      "mods":{"bossBuffs":{"hpMult":1.5,"dmgMult":1.5}} }
  ]
};
