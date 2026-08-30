/* ═══════════════════════════════════════════════════
 * 危机合约 · 数据接口（参考《明日方舟》危机合约）
 * 通关普通模式后解锁；每次进入消耗 CONTRACT_DATA.cost 碎片。
 * 每个词条含分数 score（按难度调整），强化/弱化类词条分三档难度。
 * 词条 mods 支持以下键位（实现阶段接入）：
 *   enemyHpMult        所有烂点生命 ×
 *   enemyDmgMult       所有烂点伤害 ×
 *   enemySpdMult       所有烂点速度 ×
 *   spawnEveryMult     刷怪间隔 ×（<1 更密集）
 *   eliteChanceMult    精英烂点概率 ×
 *   playerHpMax        玩家生命上限 ±（加法）
 *   playerSpdMult      玩家移速 ×
 *   playerDmgMult      玩家伤害 ×
 *   xpMult             经验获取 ×
 *   playerMagnetMult   拾取范围 ±（加法）
 *   gemLife            经验碎片存活秒数（0=不消失）
 *   enemyDashEveryMult 短链冲刺间隔 ×
 *   splitCountMult     分裂数量 ×
 *   fakeDropMult       假线索掉落数量 ×
 *   bossBuffs          Boss 增益 { hpMult, dmgMult }
 * ═══════════════════════════════════════════════════ */
window.CONTRACT_DATA = {
  cost: 50,                  // 每次进入消耗的碎片数量
  unlockKey: "darg_clear",   // 通关标记（localStorage key，通关普通模式时写入 "1"）
  maxContracts: 3,           // 单局最多可选的词条数量
  contracts: [
    /* ── 强化烂点（三档难度）── */
    { "id":"c001","em":"💪","name":"烂点打鸡血","tags":["敌人"],
      "tiers":[
        { "score":50,  "desc":"所有烂点生命 +50%",  "mods":{"enemyHpMult":1.5} },
        { "score":100, "desc":"所有烂点生命 +100%", "mods":{"enemyHpMult":2} },
        { "score":180, "desc":"所有烂点生命 +200%", "mods":{"enemyHpMult":3} } ] },
    { "id":"c002","em":"🔥","name":"烂点狂暴化","tags":["敌人"],
      "tiers":[
        { "score":50,  "desc":"所有烂点伤害 +40%",  "mods":{"enemyDmgMult":1.4} },
        { "score":100, "desc":"所有烂点伤害 +80%",  "mods":{"enemyDmgMult":1.8} },
        { "score":180, "desc":"所有烂点伤害 +150%", "mods":{"enemyDmgMult":2.5} } ] },
    { "id":"c003","em":"👟","name":"烂点不喘气","tags":["敌人"],
      "tiers":[
        { "score":50,  "desc":"所有烂点速度 +30%",  "mods":{"enemySpdMult":1.3} },
        { "score":100, "desc":"所有烂点速度 +60%",  "mods":{"enemySpdMult":1.6} },
        { "score":160, "desc":"所有烂点速度 +100%", "mods":{"enemySpdMult":2} } ] },
    { "id":"c004","em":"📈","name":"烂点井喷","tags":["敌人"],
      "tiers":[
        { "score":60,  "desc":"刷怪间隔 -20%", "mods":{"spawnEveryMult":0.8} },
        { "score":120, "desc":"刷怪间隔 -35%", "mods":{"spawnEveryMult":0.65} },
        { "score":200, "desc":"刷怪间隔 -50%", "mods":{"spawnEveryMult":0.5} } ] },
    { "id":"c005","em":"💀","name":"烂点精英化","tags":["敌人"],
      "tiers":[
        { "score":60,  "desc":"精英烂点概率 ×2", "mods":{"eliteChanceMult":2} },
        { "score":120, "desc":"精英烂点概率 ×4", "mods":{"eliteChanceMult":4} },
        { "score":180, "desc":"精英烂点概率 ×8", "mods":{"eliteChanceMult":8} } ] },
    /* ── 弱化玩家（三档难度）── */
    { "id":"c006","em":"🍩","name":"WIG猎人断粮","tags":["玩家"],
      "tiers":[
        { "score":40,  "desc":"生命上限 -30",  "mods":{"playerHpMax":-30} },
        { "score":90,  "desc":"生命上限 -60",  "mods":{"playerHpMax":-60} },
        { "score":150, "desc":"生命上限 -100", "mods":{"playerHpMax":-100} } ] },
    { "id":"c007","em":"🦵","name":"WIG猎人腿软","tags":["玩家"],
      "tiers":[
        { "score":40,  "desc":"移动速度 -20%", "mods":{"playerSpdMult":0.8} },
        { "score":90,  "desc":"移动速度 -35%", "mods":{"playerSpdMult":0.65} },
        { "score":140, "desc":"移动速度 -50%", "mods":{"playerSpdMult":0.5} } ] },
    { "id":"c008","em":"🗑️","name":"证据被吞","tags":["玩家"],
      "tiers":[
        { "score":60,  "desc":"所有伤害 -25%", "mods":{"playerDmgMult":0.75} },
        { "score":120, "desc":"所有伤害 -45%", "mods":{"playerDmgMult":0.55} },
        { "score":190, "desc":"所有伤害 -65%", "mods":{"playerDmgMult":0.35} } ] },
    { "id":"c009","em":"⭐","name":"社区掉粉","tags":["玩家"],
      "tiers":[
        { "score":40,  "desc":"获得经验 -30%", "mods":{"xpMult":0.7} },
        { "score":90,  "desc":"获得经验 -50%", "mods":{"xpMult":0.5} },
        { "score":140, "desc":"获得经验 -70%", "mods":{"xpMult":0.3} } ] },
    { "id":"c010","em":"🧲","name":"磁铁没电","tags":["玩家"],
      "tiers":[
        { "score":40,  "desc":"拾取范围 -40%", "mods":{"playerMagnetMult":-0.4} },
        { "score":90,  "desc":"拾取范围 -60%", "mods":{"playerMagnetMult":-0.6} },
        { "score":140, "desc":"拾取范围 -80%", "mods":{"playerMagnetMult":-0.8} } ] },
    /* ── Boss ── */
    { "id":"c011","em":"👑","name":"ARG酱狂暴","tags":["Boss"],
      "tiers":[
        { "score":150, "desc":"Boss 生命 +50%、伤害 +50%", "mods":{"bossBuffs":{"hpMult":1.5,"dmgMult":1.5}} } ] },
    /* ── 特殊机制 ── */
    { "id":"c012","em":"⏳","name":"线索过期","tags":["特殊"],
      "tiers":[
        { "score":120, "desc":"经验碎片 15 秒后消失", "mods":{"gemLife":15} } ] },
    { "id":"c013","em":"🔗","name":"短链加速","tags":["特殊"],
      "tiers":[
        { "score":80, "desc":"短链冲刺间隔减半", "mods":{"enemyDashEveryMult":0.5} } ] },
    { "id":"c014","em":"🐰","name":"烂点增殖","tags":["特殊"],
      "tiers":[
        { "score":100, "desc":"复读机与兔子洞分裂数量 ×2", "mods":{"splitCountMult":2} } ] },
    { "id":"c015","em":"🖼️","name":"假线索成灾","tags":["特殊"],
      "tiers":[
        { "score":60, "desc":"EXIF假数据掉落的假线索 ×2", "mods":{"fakeDropMult":2} } ] }
  ]
};
