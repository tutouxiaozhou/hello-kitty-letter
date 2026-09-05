/** 解析 public/assets 下素材的相对路径（兼容 base: './' 的部署场景）。 */
export const asset = (file: string): string =>
  `${import.meta.env.BASE_URL}assets/${file}`;
