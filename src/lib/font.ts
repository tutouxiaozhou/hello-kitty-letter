import { asset } from "./asset";

/**
 * 注册 Baloo 2（拉丁/数字圆体）。
 * 字体文件位于 public/assets/fonts/；src 走 asset() 解析，
 * 兼容 base: './' 的部署场景。
 */
export function registerBalooFont(): void {
  const ranges =
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FEFF";
  const style = document.createElement("style");
  style.textContent = `
@font-face {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("${asset("fonts/baloo2-600.woff2")}") format("woff2");
  unicode-range: ${ranges};
}
@font-face {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url("${asset("fonts/baloo2-800.woff2")}") format("woff2");
  unicode-range: ${ranges};
}`;
  document.head.appendChild(style);
}
