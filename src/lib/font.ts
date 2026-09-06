import { asset } from "./asset";

/**
 * 注册两套字体：
 * - Baloo 2：拉丁/数字圆体（自带 600 / 800 字重）
 * - 源泉圆体 GenSenRounded2：中文圆体（OFL 授权，见 public/assets/fonts/OFL-GenSenRounded2.txt）
 *
 * 两者用 unicode-range 切分：拉丁走 Baloo 2，中日韩与中文标点走源泉圆体，
 * 互不抢占，也不需要给元素单独指定字体。
 *
 * 字体文件位于 public/assets/fonts/；src 走 asset() 解析，
 * 兼容 base: './' 的部署场景。
 */
export function registerFonts(): void {
  const latin =
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FEFF";

  const cjk =
    "U+4E00-9FFF, U+3400-4DBF, U+3000-303F, U+FF00-FFEF, U+00B7, U+2013-2014, U+2018-2019, U+2026, U+21BA, U+2212, U+2661, U+2665, U+2709, U+2726";

  const face = (family: string, weight: number, file: string, range: string) =>
    `@font-face {
  font-family: "${family}";
  font-style: normal;
  font-weight: ${weight};
  font-display: swap;
  src: url("${asset(file)}") format("woff2");
  unicode-range: ${range};
}`;

  const style = document.createElement("style");
  style.textContent = [
    face("Baloo 2", 600, "fonts/baloo2-600.woff2", latin),
    face("Baloo 2", 800, "fonts/baloo2-800.woff2", latin),
    face("GenSen Rounded", 400, "fonts/gensen-rounded-400.woff2", cjk),
    face("GenSen Rounded", 700, "fonts/gensen-rounded-700.woff2", cjk),
  ].join("\n");
  document.head.appendChild(style);
}
