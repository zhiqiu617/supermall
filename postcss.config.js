/* 配置postcss-px-to-viewport 插件对转换时的设置 */

module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,     // 视窗的宽度（对应的是设计稿的宽度，此处是按照iPhone6设置的）
      viewportHeight: 667,     // 视窗的高度（对应设计稿的高度，也可以不配置）
      unitPrecision: 5,     // 指定 px 转换为视窗单位值的小数位数（由于转换时无法整除）
      viewportUnit: 'vw',     // 指定需要转换成的视窗单位，一般使用宽度vw
      selectorBlackList: ['ignore', 'tab-bar'],     // 指定不需要转换的类，数组元素是类名
      exclude: [/Tabbar/],     // 指定不需要转换的文件，需要写正则表达式（一个或用数组组合的多个正则）
      minPixelValue: 1,     // 最小转换值，此处表示小于或等于 1px 的不需要转换
      mediaQuery: false     // 允许在媒体查询中转换 px
    }
  }
}
