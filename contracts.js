/* ═══════════════════════════════════════════════════
 * 危机合约 · 数据接口（参考《明日方舟》危机合约）
 * 通关普通模式后解锁；每次进入消耗 CONTRACT_DATA.cost 碎片。
 * 词条（contracts）为空，后续按下方示例结构填充。
 * ═══════════════════════════════════════════════════ */
window.CONTRACT_DATA = {
  cost: 50,                  // 每次进入消耗的碎片数量
  unlockKey: "darg_clear",   // 通关标记（localStorage key，通关普通模式时写入 "1"）
  maxContracts: 3,           // 单局最多可选的词条数量
  contracts: [
    /* 词条示例结构（后续按此格式填充）：
    {
      id: "c001",
      em: "💀",
      name: "词条名称",
      desc: "效果说明文字",
      tags: ["敌人", "生存"],
      mods: {                       // 实际效果键值，实现阶段接入
        enemyHpMult: 1.5,           // 敌人生命 ×1.5
        enemyDmgMult: 1.2,          // 敌人伤害 ×1.2
        enemySpdMult: 1.1,          // 敌人速度 ×1.1
        spawnEveryMult: 0.8,        // 刷怪间隔缩短
        playerSpdMult: 0.85,        // 玩家移速 ×0.85
        playerHpMax: -20,           // 玩家生命上限 -20
        noHeal: true,               // 禁止回复
        bossBuffs: {}               // Boss 专属增益
      }
    }
    */
  ]
};
