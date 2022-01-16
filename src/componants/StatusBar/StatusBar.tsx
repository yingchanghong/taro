import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import './StatusBar.less';
export default class StatusBar extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<View className='statusBar' style={{height:this.props.height,background:`${this.props.bg}`}}>
      </View>
			// <View className='statusBar' style={{height:this.props.height,background:`rgba(0,191,255,${this.props.opacity})`}}>
      // </View>
		)
	}
}