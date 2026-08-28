window.ENEMY_DATA = {
  hpScalePerMinute: 0.5,
  bossTime: 300,          // ★ 5分钟出Boss
  boss: {
    "em":"👑","name":"ARG酱",
    "hp":300,"dmg":12,"spd":42,"r":30,"xp":0,   // ★ 血量下调适配短局
    "behavior":"chase","behaviorParams":{},
    "bio":"她说她做的东西不是烂，是深度。"
  },

  enemies: {
    "page": {
      "em":"📄","name":"过期公告",
      "hp":2,"spd":38,"dmg":8,"r":16,"xp":1,
      "behavior":"chase","behaviorParams":{},"onDeath":null,
      "bio":"最后更新：2019年。它还在按时推送。"
    },
    "bot": {
      "em":"🤖","name":"广告bot",
      "hp":1,"spd":55,"dmg":6,"r":14,"xp":1,
      "behavior":"chase","behaviorParams":{},"onDeath":null,
      "bio":"点击领取iPhone 15！点击领取iPhone 15！"
    },
    "repost": {
      "em":"💬","name":"复读机",
      "hp":2,"spd":42,"dmg":7,"r":15,"xp":1,
      "behavior":"chase","behaviorParams":{},
      "onDeath":{"type":"split","into":"repost_small","count":2,"hpMult":0.4},
      "bio":"催更。催更。催更。催更。"
    },
    "repost_small": {
      "em":"💬","name":"小复读机",
      "hp":1,"spd":60,"dmg":4,"r":10,"xp":0,
      "behavior":"chase","behaviorParams":{},"onDeath":null,
      "bio":"催更。"
    },
    "link": {
      "em":"🔗","name":"短链",
      "hp":1,"spd":26,"dmg":10,"r":14,"xp":1,
      "behavior":"dash","behaviorParams":{"every":2.4,"dashSpd":280,"dashTime":0.5},
      "onDeath":null,
      "bio":"该链接已被访问9527次。它会突然弹到你脸上。"
    },
    "rabbit": {
      "em":"🐰","name":"兔子洞",
      "hp":4,"spd":30,"dmg":8,"r":18,"xp":2,
      "behavior":"chase","behaviorParams":{},
      "onDeath":{"type":"split","into":"rabbit_mid","count":2,"hpMult":0.6},
      "bio":"A指向B，B指向C，C又指向A。打死一层还有一层。"
    },
    "rabbit_mid": {
      "em":"🐰","name":"兔子洞·中层",
      "hp":2,"spd":34,"dmg":6,"r":14,"xp":1,
      "behavior":"chase","behaviorParams":{},
      "onDeath":{"type":"split","into":"rabbit_kid","count":2,"hpMult":0.6},
      "bio":"第二层。"
    },
    "rabbit_kid": {
      "em":"🐰","name":"兔子洞·底层",
      "hp":1,"spd":40,"dmg":4,"r":10,"xp":1,
      "behavior":"chase","behaviorParams":{},"onDeath":null,
      "bio":"最底层。里面什么都没有。"
    },
    "clown": {
      "em":"🤡","name":"小丑页",
      "hp":3,"spd":18,"dmg":12,"r":16,"xp":2,
      "behavior":"ambush","behaviorParams":{"trigger":170,"wakeSpd":90},
      "onDeath":null,
      "bio":"它躺在地上装死。你靠近的瞬间，它跳起来。"
    },
    "base64": {
      "em":"🔐","name":"Base64",
      "hp":3,"spd":24,"dmg":8,"r":16,"xp":3,
      "behavior":"chase","behaviorParams":{},"onDeath":null,
      "shield":{"layers":2,"hp":3},
      "bio":"解码第三层，还是短链。先打掉它的编码层。"
    },
    "table": {
      "em":"🧮","name":"乱码表格",
      "hp":3,"spd":20,"dmg":6,"r":16,"xp":2,
      "behavior":"shooter","behaviorParams":{"range":250,"fireEvery":1.7,"bulletSpd":150,"bulletDmg":6},
      "onDeath":null,
      "bio":"jfkdlajfkldsjfklsd——它保持距离，朝你吐乱码。"
    },
    "image": {
      "em":"🖼️","name":"黑色图片",
      "hp":2,"spd":48,"dmg":8,"r":15,"xp":2,
      "behavior":"chase","behaviorParams":{},"onDeath":null,
      "ghost":true,
      "bio":"全黑的图片。它几乎是隐形的。"
    },
    "noise": {
      "em":"🎵","name":"白噪音",
      "hp":6,"spd":16,"dmg":5,"r":17,"xp":3,
      "behavior":"chase","behaviorParams":{},"onDeath":null,
      "aura":{"radius":130,"slow":0.5},
      "bio":"频谱图上写着：NOTHING。靠近它，连走都走不动。"
    },
    "exif": {
      "em":"📷","name":"EXIF假数据",
      "hp":2,"spd":36,"dmg":7,"r":15,"xp":1,
      "behavior":"chase","behaviorParams":{},
      "onDeath":{"type":"dropFake","count":2},
      "bio":"GPS: 0.0°N, 0.0°E。死了也会留下假线索。"
    },
    "painter": {
      "em":"📝","name":"画饼楼主",
      "hp":8,"spd":30,"dmg":5,"r":16,"xp":4,
      "behavior":"healer","behaviorParams":{"holdDist":220,"healEvery":2.5,"radius":160,"amount":2},
      "onDeath":null,
      "bio":"等我整理好再发。——它一直在给别的烂点回血。先杀它。"
    },
    "paywall": {
      "em":"💸","name":"付费墙",
      "hp":20,"spd":22,"dmg":10,"r":20,"xp":8,
      "behavior":"greedy","behaviorParams":{"gemDetect":500},
      "onDeath":null,
      "bio":"VIP ¥99/月。它把地上的线索都吞进自己肚子里回血。"
    },
    "ghost": {
      "em":"👻","name":"廉价恐怖",
      "hp":5,"spd":34,"dmg":9,"r":16,"xp":4,
      "behavior":"chase","behaviorParams":{},"onDeath":null,
      "aura":{"radius":230,"invert":true},
      "bio":"凌晨3点，你的手机突然震动。靠近它，你的操作会开始不受控制。"
    }
  },

  "waves": [   // ★ 压缩到300秒
    { "t":0,   "types":["page"],                                     "every":1.1,  "batch":1 },
    { "t":40,  "types":["page","bot"],                               "every":0.9,  "batch":1 },
    { "t":80,  "types":["page","bot","repost"],                      "every":0.75, "batch":2 },
    { "t":125, "types":["page","bot","repost","link","rabbit"],      "every":0.65, "batch":2 },
    { "t":170, "types":["bot","repost","link","rabbit","clown","base64"], "every":0.6, "batch":2 },
    { "t":215, "types":["repost","link","rabbit","clown","base64","table","image","exif"], "every":0.55, "batch":3 },
    { "t":250, "types":["link","rabbit","base64","table","image","noise","exif","painter"], "every":0.5, "batch":3 },
    { "t":280, "types":["clown","base64","table","image","noise","painter","paywall","ghost"], "every":0.45, "batch":3 }
  ]
};
