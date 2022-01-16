import { Component } from "react";
import "./app.less";
import taro from "@tarojs/taro";
class App extends Component {
  device: TaroGeneral.ENV_TYPE;
  statusBar: number; // 状态栏高度
  allBar: number; // 总高度
  btnBar: number; // 按钮高度
  constructor(name = 12) {
    super(name);
    this.device = taro.getEnv();
    try {
      const s = taro.getSystemInfoSync();
      this.statusBar = s.statusBarHeight;
    } catch (e) {
      console.log(e);
    }
    const { top, height } = taro.getMenuButtonBoundingClientRect();
    this.allBar = (top - this.statusBar) * 2 + height + this.statusBar;
    this.btnBar = (top - this.statusBar) * 2 + height;
  }
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
