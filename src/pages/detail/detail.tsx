import { Component } from 'react';
import { View, Text, ScrollView, Image, RichText } from '@tarojs/components';
import { getCurrentInstance } from '@tarojs/taro';
import './detail.less';
export default class Deatil extends Component {
	constructor(props) {
		super(props);
		interface D {
			authorName: string,
			authorPhoto: string,
			creatTime: string,
			isLike:boolean,
		}
		this.state = {
			detail: {
				title: '为什么学习前端开发?',
				authorName: '李四',
				authorPhoto: 'https://img1.baidu.com/it/u=692039251,1489520768&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
				creatTime: '2021年11月',
				isLike: false,
				content: `<div>你好世界</div><p style="color:red;">hello world</p>`,
			}
		}
	};
	componentWillMount() {
		const params = getCurrentInstance().router?.params;
		console.log(params);
		
	}
	likeChange() {
		const detail = this.state.detail;
		detail.isLike = !detail.isLike
		this.setState({
			detail,
		});
		console.log(this.state.detail);
	}
	render() {
		return (
			<ScrollView className="detail">
				<View className="detail_title">{this.state.detail.title}</View>
				<View className="detail_author">
					<View className="detail_author_info">
						<Image src={this.state.detail.authorPhoto}></Image>
						<View className="info">
							<View className="name">{ this.state.detail.authorName}</View>
							<View className="time">{ this.state.detail.creatTime}</View>
						</View>
					</View>
					<View onClick={()=>this.likeChange()} className="detail_author_like">{ this.state.detail.isLike?'已关注':'+关注'}</View>
				</View>
				<View className="detail_content">
					<RichText nodes={this.state.detail.content} />
				</View>
			</ScrollView>
		)
	}
}