export default defineAppConfig({
  pages: ["pages/index/index", "pages/detail/detail", "pages/my/my"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        // 未点击时显示的图片
        iconPath: "pages/img/index.png",
        // 点击后显示的图片
        selectedIconPath: "pages/img/index2.png",
      },
      {
        pagePath: "pages/my/my",
        text: "我的",
        iconPath: "pages/img/index.png",
        selectedIconPath: "pages/img/index2.png",
      },
    ],
  },
});
