# Hello Kitty 信笺婚礼请柬（Hello Kitty Letter Wedding Invitation）

以 Hello Kitty 信笺为载体的婚礼请柬单页演示。整页 = Kitty 亲手写给你的喜帖，三丽鸥红白粉波点视觉：

- **首屏**：白色花边邀请卡 + 卡顶可点击的**红色大蝴蝶结封印**（点一下拆封：蝴蝶结歪头 + 爱心迸发 + Kitty 气泡从提问「要来参加婚礼吗？」切换成「耶！那就 10 月 6 日见哦！」）；Kitty 官方立绘（蓝背带裤+苹果+牛奶）轻摇出场。
- **邀请词**：粉色横线信纸，落款「你们的朋友 Hello Kitty」。
- **日程**：花边菜单卡（01–05），配三丽鸥扁平风原创小图标（旗帜/戒指/相机/蛋糕/礼物）。
- **朋友墙**：8 位伙伴**官方头像**（丹尼尔、美乐蒂、玉桂狗、酷洛米、布丁狗、帕恰狗、山姆企鹅、大眼蛙）。
- **地点**：原创扁平小教堂插画（红屋顶+心形彩窗+塔顶蝴蝶结）+ 爱心交通列表。
- **RSVP**：回函明信片——右上角 Kitty 官方头像邮票，提交后盖下「云栖邮便」圆形邮戳，成功态 + 伙伴头像欢呼行。
- 全站配色：Kitty 红 `#E8385D` / 樱粉 `#FFB1C8` / 奶白，波点墙纸底 + 花边卡片 + 底部实体投影；拉丁与数字使用 Baloo 2 圆体。

技术栈：Vite + React 18 + TypeScript，无 UI 框架、无路由、纯 CSS。纯前端本地状态，**不发生任何网络请求**。

## 常用命令

```bash
npm install --no-audit --no-fund
npm run dev       # 本地开发
npm run build     # 产出 dist/（tsc + vite build）
npm run preview   # 预览构建产物
```

## 如何换新人信息

所有页面文案均读取自 `src/config.ts` 的 `INVITATION` 对象，**只改配置即可换租户，不需要动组件**：

| 字段 | 说明 |
| --- | --- |
| `couple.a` / `couple.b` | 新人名（首屏、气泡台词联动） |
| `date` / `dateLunar` | 婚礼日期与农历 |
| `venue` / `address` | 场地与地址 |
| `hero` | 首屏 kicker / 标题 / 气泡两句台词 / 按钮文案 / 蝴蝶结提示 |
| `letter` | 信件正文与落款（建议正文 60–120 字） |
| `schedule[]` | 流程条目：`no`、`time`、`title`、`desc`、`icon`（`flag|rings|camera|cake|gift`） |
| `friends` | 朋友墙标题与头像列表（`name`/`latin`/`face`） |
| `venueInfo` | 交通列表与休息区文案 |
| `rsvp` | RSVP 全部文案与校验提示（含邮戳文字） |
| `fanNote` / `demoNote` | 页脚固定两行 |

## 素材来源清单

Hello Kitty 主视觉与 9 张角色头像均为三丽鸥日本官网素材，已本地化，逐项 URL 见 [public/assets/ip/README.md](public/assets/ip/README.md)。

以下视觉为**原创绘制**（无外部素材）：大蝴蝶结封印与页脚蝴蝶结、爱心彩纸、日程小图标、小教堂插画、邮戳。字体 Baloo 2（OFL）仅取拉丁子集本地化。

## 无障碍与适配

- 触控目标 ≥ 44px，交互控件均带 `aria-label` / `aria-pressed` / `role`；气泡与提交状态用 `role="status"` + `aria-live` 播报。
- 全站动画（Kitty 摇摆、爱心迸发、明信片漂浮、邮戳盖下、伙伴欢呼）尊重 `prefers-reduced-motion`：CSS 关键帧被压平，JS 动画自动跳最终态。
- 中文正文使用系统字体栈（PingFang SC / Noto Sans SC 等）；拉丁与数字使用 Baloo 2 圆体。
- 边界兜底：超长姓名 `overflow-wrap: anywhere` 并限 16 字，人数步进 1–6 边界禁用，空祝福显示「—」，姓名为空提交给出错误提示。
