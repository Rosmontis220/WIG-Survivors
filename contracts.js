/* ═══════════════════════════════════════════════════
 * 危机合约 · 数据接口（参考《明日方舟》危机合约）
 * 通关普通模式后解锁；每次进入消耗 CONTRACT_DATA.cost 碎片。
 * 每个词条含分数 score，强化/弱化类词条分三档难度（+10%/+20%/+30%）。
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
  contracts: [
    /* ── 强化烂点（三档难度 +10%/+30%/+50%）── */
    { "id":"c001","em":"💪","name":"烂点打鸡血","tags":["敌人"],
      "tiers":[
        { "score":25, "desc":"所有烂点生命 +10%", "mods":{"enemyHpMult":1.1} },
        { "score":50, "desc":"所有烂点生命 +20%", "mods":{"enemyHpMult":1.2} },
        { "score":90, "desc":"所有烂点生命 +30%", "mods":{"enemyHpMult":1.3} } ] },
    { "id":"c002","em":"🔥","name":"烂点狂暴化","tags":["敌人"],
      "tiers":[
        { "score":25, "desc":"所有烂点伤害 +10%", "mods":{"enemyDmgMult":1.1} },
        { "score":50, "desc":"所有烂点伤害 +20%", "mods":{"enemyDmgMult":1.2} },
        { "score":90, "desc":"所有烂点伤害 +30%", "mods":{"enemyDmgMult":1.3} } ] },
    { "id":"c003","em":"👟","name":"烂点不喘气","tags":["敌人"],
      "tiers":[
        { "score":25, "desc":"所有烂点速度 +10%", "mods":{"enemySpdMult":1.1} },
        { "score":50, "desc":"所有烂点速度 +20%", "mods":{"enemySpdMult":1.2} },
        { "score":80, "desc":"所有烂点速度 +30%", "mods":{"enemySpdMult":1.3} } ] },
    { "id":"c004","em":"📈","name":"烂点井喷","tags":["敌人"],
      "tiers":[
        { "score":30, "desc":"刷怪间隔 -10%", "mods":{"spawnEveryMult":0.9} },
        { "score":60, "desc":"刷怪间隔 -20%", "mods":{"spawnEveryMult":0.8} },
        { "score":100,"desc":"刷怪间隔 -30%", "mods":{"spawnEveryMult":0.7} } ] },
    { "id":"c005","em":"💀","name":"烂点精英化","tags":["敌人"],
      "tiers":[
        { "score":30, "desc":"精英烂点概率 +10%", "mods":{"eliteChanceMult":1.1} },
        { "score":60, "desc":"精英烂点概率 +20%", "mods":{"eliteChanceMult":1.2} },
        { "score":90, "desc":"精英烂点概率 +30%", "mods":{"eliteChanceMult":1.3} } ] },
    /* ── 弱化玩家（三档难度 +10%/+30%/+50%）── */
    { "id":"c006","em":"🍩","name":"WIG猎人断粮","tags":["玩家"],
      "tiers":[
        { "score":20, "desc":"生命上限 -10", "mods":{"playerHpMax":-10} },
        { "score":45, "desc":"生命上限 -20", "mods":{"playerHpMax":-20} },
        { "score":75, "desc":"生命上限 -30", "mods":{"playerHpMax":-30} } ] },
    { "id":"c007","em":"🦵","name":"WIG猎人腿软","tags":["玩家"],
      "tiers":[
        { "score":20, "desc":"移动速度 -10%", "mods":{"playerSpdMult":0.9} },
        { "score":45, "desc":"移动速度 -20%", "mods":{"playerSpdMult":0.8} },
        { "score":70, "desc":"移动速度 -30%", "mods":{"playerSpdMult":0.7} } ] },
    { "id":"c008","em":"🗑️","name":"证据被吞","tags":["玩家"],
      "tiers":[
        { "score":30, "desc":"所有伤害 -10%", "mods":{"playerDmgMult":0.9} },
        { "score":60, "desc":"所有伤害 -20%", "mods":{"playerDmgMult":0.8} },
        { "score":95, "desc":"所有伤害 -30%", "mods":{"playerDmgMult":0.7} } ] },
    { "id":"c009","em":"⭐","name":"社区掉粉","tags":["玩家"],
      "tiers":[
        { "score":20, "desc":"获得经验 -10%", "mods":{"xpMult":0.9} },
        { "score":45, "desc":"获得经验 -20%", "mods":{"xpMult":0.8} },
        { "score":70, "desc":"获得经验 -30%", "mods":{"xpMult":0.7} } ] },
    { "id":"c010","em":"🧲","name":"磁铁没电","tags":["玩家"],
      "tiers":[
        { "score":20, "desc":"拾取范围 -10%", "mods":{"playerMagnetMult":-0.1} },
        { "score":45, "desc":"拾取范围 -20%", "mods":{"playerMagnetMult":-0.2} },
        { "score":70, "desc":"拾取范围 -30%", "mods":{"playerMagnetMult":-0.3} } ] },
    /* ── 特殊机制 ── */
    { "id":"c011","em":"👑","name":"ARG酱狂暴","tags":["特殊"],
      "tiers":[
        { "score":75, "desc":"Boss 生命 +50%、伤害 +50%", "mods":{"bossBuffs":{"hpMult":1.5,"dmgMult":1.5}} } ] },
    { "id":"c012","em":"⏳","name":"线索过期","tags":["特殊"],
      "tiers":[
        { "score":60, "desc":"经验碎片 15 秒后消失", "mods":{"gemLife":15} } ] },
    { "id":"c013","em":"🔗","name":"短链加速","tags":["特殊"],
      "tiers":[
        { "score":40, "desc":"短链冲刺间隔减半", "mods":{"enemyDashEveryMult":0.5} } ] },
    { "id":"c014","em":"🐰","name":"烂点增殖","tags":["特殊"],
      "tiers":[
        { "score":50, "desc":"复读机与兔子洞分裂数量 ×2", "mods":{"splitCountMult":2} } ] },
    { "id":"c015","em":"🖼️","name":"假线索成灾","tags":["特殊"],
      "tiers":[
        { "score":30, "desc":"EXIF假数据掉落的假线索 ×2", "mods":{"fakeDropMult":2} } ] }
  ]
};
