window.TOOLS_DATA = {
  "characters": [
    { "id":"lamp", "em":"🌌", "name":"银河电灯",          "weapon":"lens",    "desc":"初始武器：🔎考据镜" },
    { "id":"fish", "em":"🐟", "name":"邮电鱼",            "weapon":"report",  "desc":"初始武器：🗑️举报光环" },
    { "id":"ad",   "em":"📢", "name":"ADsurrrfbOᴗ0ಣrd.",  "weapon":"chain",   "desc":"初始武器：⛓️证据链" },
    { "id":"civ",  "em":"🗡️", "name":"Civyar",            "weapon":"scissors","desc":"初始武器：✂️截图剪刀" }
  ],
  "weapons": [
    {
      "id":"lens","em":"🔎","name":"考据镜",
      "desc":"自动锁定最近的目标",
      "type":"projectile",
      "base":{ "cooldown":0.55,"damage":1,"speed":420,"life":1.2,"count":1,"pierce":0 },
      "perLevel":{ "damage":1,"cooldownMult":0.93 },
      "maxLevel":6
    },
    {
      "id":"scissors","em":"✂️","name":"截图剪刀",
      "desc":"高速穿透，一发剪穿一串兔子洞",
      "type":"projectile",
      "base":{ "cooldown":1.5,"damage":2,"speed":520,"life":0.8,"count":1,"pierce":3 },
      "perLevel":{ "damage":1,"pierce":1 },
      "maxLevel":5
    },
    {
      "id":"report","em":"🗑️","name":"举报",
      "desc":"周身范围持续抹除烂点",
      "type":"aura",
      "base":{ "tick":0.5,"radius":85,"damage":1 },
      "perLevel":{ "radius":10,"damage":1 },
      "maxLevel":5
    },
    {
      "id":"chain","em":"⛓️","name":"证据链",
      "desc":"环状旋转，撞到的烂点持续掉血",
      "type":"orbit",
      "base":{ "count":2,"radius":70,"rot":3,"damage":1 },
      "perLevel":{ "count":1,"radius":8,"damage":1 },
      "maxLevel":5
    },
    {
      "id":"rollback","em":"⏪","name":"回档",
      "desc":"每14秒向四周发出一圈冲击波，清屏救命",
      "type":"nova",
      "base":{ "cooldown":14,"damage":4,"count":22,"speed":300,"life":1.1 },
      "perLevel":{ "damage":2,"cooldownMult":0.88 },
      "maxLevel":4
    }
  ],
  "passives": [
    { "id":"dmg","em":"🔨","name":"实锤","desc":"所有伤害 +1","perLevel":{"flatDamage":1},"maxLevel":5 },
    { "id":"rate","em":"⏱️","name":"手速训练","desc":"攻击间隔 -15%","perLevel":{"cooldownMult":0.85},"maxLevel":5 },
    { "id":"multi","em":"🧵","name":"多线程考据","desc":"同时锁定 +1 个目标","perLevel":{"count":1},"maxLevel":2 },
    { "id":"spd","em":"👟","name":"考据狂的执念","desc":"移动速度 +12%","perLevel":{"moveMult":0.12},"maxLevel":3 },
    { "id":"hp","em":"🍪","name":"玩家反馈","desc":"生命上限 +20 并回满","perLevel":{"maxhp":20},"maxLevel":3 },
    { "id":"magnet","em":"🧲","name":"证据吸引","desc":"拾取范围 +40%","perLevel":{"magnetMult":0.4},"maxLevel":3 },
    { "id":"xp","em":"⭐","name":"社区声望","desc":"获得经验 +15%","perLevel":{"xpMult":0.15},"maxLevel":3 },
    { "id":"armor","em":"🪞","name":"防杠护盾","desc":"受到伤害 -8%","perLevel":{"armor":0.08},"maxLevel":3 }
  ]
};
