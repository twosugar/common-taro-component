/*
 * @Author: laguan
 * @Date: 2020-05-15 10:51:38
 * @LastEditors: laguan
 * @LastEditTime: 2020-05-15 18:21:55
 */ 
import Taro, { PureComponent } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui';
import CatPage from './components/CatPage/index';
import Layout from '@/components/Layout/index';
import './index.scss';

export default class Home extends PureComponent {
    constructor() {
        super();
        this.state = { 
            current: 0
        }
    }

    changeTab(index) {
        this.setState({current: index})
    }

    config = {
        navigationBarTitleText: '首页'
    }

    render() {
        return (
            <Layout>
                <AtTabs
                  current={this.state.current}
                  scroll
                  tabList={[
                    { title: '猫咪' },
                    { title: '狗狗' },
                  ]}
                  onClick={(e) => this.changeTab(e)}
                >
                <AtTabsPane current={this.state.current} index={0}>
                    <CatPage></CatPage>
                </AtTabsPane>
                <AtTabsPane current={this.state.current} index={1}>
                    <View>标签页二的内容</View>
                </AtTabsPane>
                </AtTabs>
            </Layout>
        )
    }
}