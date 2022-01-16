import { Component, useState } from "react";
import { View, Text, ScrollView } from "@tarojs/components";
import "./index.less";
import Taro from "@tarojs/taro";
import Head from "../../componants/StatusBar/StatusBar";
export default class Index extends Component {
  public allHeight: number;
  constructor(props: any) {
    super(props);
    this.state = {
      opacity: 0.5,
			bg: "rgba(0,191,255,.95)",
			list: [],
    };
  }
  componentWillMount() {}

	componentDidMount() {
		interface o {
			title: string,
			intorduce:string
		}
		const l: o[] =[]
		for (let i = 0; i < 10; i++){
			const r:any = {articalId:i,time:'2021年12月',pre:12,like:22,discus:222,title:`我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题${i}`,content:'大家好，这里是安徽卫视大家好，这里是安徽卫视大家好，这里是安徽卫视大家好，这里是安徽卫视大家好，这里是安徽卫视大家好，这里是安徽卫视'}
			l.push(r);
		}
		this.setState({
			list: l
		}, () => {
		});
	}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onPageScroll(e) {
    const { scrollTop } = e;
    if (scrollTop > this.allHeight && this.state.opacity !== 1) {
      this.setState({
        // opacity: 1,
        bg: "rgba(255,255,255,1)",
      });
    } else if (scrollTop < this.allHeight && this.state.opacity !== 0) {
      this.setState({
        // opacity: 0.5,
        bg: "rgba(0,191,255,.95)",
      });
    }
	}
	/**
	 * @description跳转详情页
	 * @param {number} id 文章id
	 * @return {*} 
	 */
	toDetail(id: number): void{
		Taro.navigateTo({
			url: `../detail/detail?articalId=${id}`,
		});
	};
  render() {
    this.allHeight = Taro.getApp().$app.allBar;
    return (
			<View className="container">
        <Head height={this.allHeight} bg={this.state.bg} />
        <View
          className="fixed"
          style={{
            background: this.state.bg,
            position: "fixed",
            top: this.allHeight,
          }}
        >
          {/* <View className="fixed" style={{background:`rgba(0,191,255,${this.state.opacity})`,position:'fixed',top:this.allHeight}}> */}
          <View className="container_search">
            <View className="container_search_input"></View>
          </View>
          <ScrollView
            className="container_tops"
            scrollWithAnimation={true}
            enableFlex={true}
            scrollX={true}
          >
            <Text>问答</Text>
            <Text>推荐</Text>
            <Text>随笔</Text>
            <Text>前端</Text>
            <Text>问题</Text>
            <Text>后端</Text>
            <Text>算法</Text>
          </ScrollView>
        </View>
        {/* <View className="header" style={{ height: this.allHeight + 'px',background:`rgba(0,191,255,${this.state.opacity})`,transition:'all .5s',zIndex:999}}></View> */}
        <ScrollView style={{ marginTop: `${this.allHeight + 140}px` }}>
					<View className="container_list">
						{this.state.list.map(item => {
							return <View className="container_list_item" onClick={ ()=>this.toDetail(item.articalId)}>
								<View className="container_list_item_title">{item.title}</View>
								<View className="container_list_item_content">{item.content}</View>
								<View className="container_list_item_count">
									<View className="count">
										<Text>{item.pre}阅读 </Text>
										<Text>{item.like}点赞 </Text>
										<Text>{item.discus}评论</Text>
									</View>
									<View className="time">
										<Text>{item.time}</Text>
									</View>
								</View>
							</View>
						})}
          </View>
        </ScrollView>
      </View>
    );
  }
}
