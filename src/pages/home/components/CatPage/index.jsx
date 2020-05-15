/*
 * @Author: laguan
 * @Date: 2020-05-15 10:51:38
 * @LastEditors: laguan
 * @LastEditTime: 2020-05-15 18:04:07
 */ 
import Taro, { PureComponent } from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';

export default class CatPage extends PureComponent {
    constructor() {
        super();
    }

    render() {
        return (
            <View className='cat-page'>
                <View className='box-container'>
                    <View className='card-item'>1111</View>
                </View>
            </View>
        )
    }
}