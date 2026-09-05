import { asset } from "./lib/asset";

/** 婚礼流程条目（图标为三丽鸥扁平风原创 SVG 组件名） */
export interface ScheduleItem {
  no: string;
  time: string;
  title: string;
  desc: string;
  icon: "flag" | "rings" | "camera" | "cake" | "gift";
}

/** 一起来的朋友们（三丽鸥官方角色头像） */
export interface Friend {
  name: string;
  latin: string;
  face: string;
  wish: string;
}

export const INVITATION = {
  /** 新人（演示名，禁止真实姓名） */
  couple: { a: "阿澄", b: "小满" },
  date: "2026-10-06",
  dateLunar: "农历八月廿六 · 星期二",
  venue: "云栖礼堂 · 星洲厅",
  address: "演示城市 · 云栖路 88 号",

  /** 首屏：Kitty 的对话气泡 + 蝴蝶结封印 */
  hero: {
    kicker: "HELLO KITTY WEDDING LETTER",
    title: "Kitty 为你送来一封喜帖",
    bubbleAsk: "要来参加阿澄和小满的婚礼吗？",
    bubbleYes: "耶！那就 10 月 6 日，云栖礼堂见哦！",
    yesBtn: "好呀！",
    againBtn: "再问一次",
    bowHint: "点一下蝴蝶结封印",
  },

  /** 邀请词 = Kitty 写的信（60–120 字） */
  letter: {
    body: "妈妈常说，有好事就要和最好的朋友分享——所以我带来了全世界最好的消息：阿澄和小满，要结婚啦！那天会有我亲手烤的苹果派、冰冰的牛奶，还有开满院子的花。请一定要来哦，你的笑容，就是给新人最好的礼物。",
    from: "—— 你们的朋友 Hello Kitty",
  },

  /** 日程 */
  schedule: [
    {
      no: "01",
      time: "12:30",
      title: "迎宾签到",
      desc: "在门口的欢迎板前签到，领取小礼物一颗，甜甜的一天从现在开始。",
      icon: "flag",
    },
    {
      no: "02",
      time: "14:00",
      title: "誓约仪式",
      desc: "交换誓约与戒指。听说 Daniel 看到这一幕，也会感动得说不出话。",
      icon: "rings",
    },
    {
      no: "03",
      time: "15:00",
      title: "合影留念",
      desc: "和新人拍一张照片吧，要笑得像苹果一样甜。",
      icon: "camera",
    },
    {
      no: "04",
      time: "17:30",
      title: "婚宴开席",
      desc: "苹果派、草莓蛋糕和牛奶，全都管够——妈妈的手艺值得期待。",
      icon: "cake",
    },
    {
      no: "05",
      time: "20:30",
      title: "温馨送客",
      desc: "收到回礼再回家，路上小心，今晚的梦里也要甜甜的。",
      icon: "gift",
    },
  ] as ScheduleItem[],

  /** 朋友们 */
  friends: {
    title: "他们也会来哦",
    sub: " Kitty 的朋友们全体出席，就差你了",
    list: [
      { name: "丹尼尔", latin: "Dear Daniel", face: asset("ip/face-daniel.png"), wish: "我看着 Kitty 筹备这场婚礼的样子，就像看见当年的我们。到时见，兄弟。" },
      { name: "美乐蒂", latin: "My Melody", face: asset("ip/face-mymelody.png"), wish: "我会戴上最粉色的小帽子去！甜品台记得给我留草莓的那块～" },
      { name: "玉桂狗", latin: "Cinnamoroll", face: asset("ip/face-cinnamon.png"), wish: "我会飞在队伍最前面带路，谁都不会迟到哒！" },
      { name: "酷洛米", latin: "Kuromi", face: asset("ip/face-kuromi.png"), wish: "别误会，我才不是想来吃蛋糕的……好吧，是。祝幸福！" },
      { name: "布丁狗", latin: "Pompompurin", face: asset("ip/face-pompompurin.png"), wish: "布丁已经准备好了！比婚礼蛋糕还可爱的那种（我自己评的）。" },
      { name: "帕恰狗", latin: "Pochacco", face: asset("ip/face-pochacco.png"), wish: "运动会上赢过你们的两个人，这次要在人生比赛里一起冲线啦！" },
      { name: "山姆企鹅", latin: "Tuxedosam", face: asset("ip/face-tuxedosam.png"), wish: "我熨好了最体面的领结。婚礼快乐，敬友谊与爱情！" },
      { name: "大眼蛙", latin: "Keroppi", face: asset("ip/face-keroppi.png"), wish: "池塘边听来的好消息要大声呱呱宣布：新婚快乐！！" },
    ] as Friend[],
  },

  /** 地点与交通 */
  venueInfo: {
    transportTitle: "怎么来教堂最方便",
    transport: [
      "地铁 2 号线「云栖站」B 口，步行约 400 米",
      "公交 88 路 / 206 路「云栖礼堂」站，下车即达",
      "自驾：礼堂北侧地面停车场，凭本页请柬免费停车",
    ],
    service: "一楼休息区备有茶水与点心——像 Kitty 家的厨房一样温暖",
  },

  /** RSVP = 回函明信片 */
  rsvp: {
    intro: "把这张回函明信片寄给 Kitty 吧，她数着日子等你的答复。",
    attendanceLabel: "出席情况",
    yes: "一定到场",
    no: "心领啦",
    nameLabel: "你的名字",
    namePlaceholder: "怎么称呼你？",
    countLabel: "同行人数（含本人）",
    wishesLabel: "给新人的祝福（选填）",
    wishesPlaceholder: "写一句甜甜的祝福…",
    submit: "寄出回函明信片",
    sending: "明信片正在路上……",
    successTitle: "收到你的祝福啦！",
    successDesc: "Kitty 已经把回函贴在冰箱上啦，10 月 6 日见！",
    privacy: "记录仅保存在本机浏览器（纯前端演示），不会发送任何数据。",
    reset: "重新填写",
    rows: {
      status: "状态",
      count: "同行人数",
      name: "寄件人",
      wishes: "祝福",
      attending: "一定到场",
      absent: "心领啦",
      empty: "—",
    },
    errors: {
      name: "明信片上还没有你的名字哦！",
    },
    postmark: "云栖邮便 · 2026.10.06",
  },

  /** 页脚固定两行 */
  fanNote: "本页面为非官方粉丝作品，与原 IP 权利方无关",
  demoNote: "页面人名、日期、地点均为演示资料",
};

export type Invitation = typeof INVITATION;
