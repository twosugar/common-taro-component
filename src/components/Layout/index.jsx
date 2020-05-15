import Taro, { PureComponent } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components'
import { AtButton, AtMessage } from 'taro-ui';
import LoginBg from '@/assets/img/login-bg.png'
import './index.scss';

export default class Home extends PureComponent {
    constructor() {
      super();
      this.state = {
        isOpened: false
      }
    }

    componentDidMount() {
      this.checkLogin();
    }

    checkLogin() {
      Taro.checkSession({
        success: () => {
          //session_key 未过期，并且在本生命周期一直有效
        },
        fail: () => {
          // session_key 已经失效，需要重新执行登录流程
          this.setState({ isOpened: true })
        }
      })
    }

    loginApp() {
      Taro.login({
          success: (res) => {
            if (res.code) {
              //发起网络请求
              this.setState({ isOpened: false })
              Taro.atMessage({
                'message': '登录成功',
                'type': 'success',
              })
            } else {
              Taro.atMessage({
                'message': '登录失败',
                'type': 'error',
              })
            }
          }
      })
    }

    closeDialog() {
      this.setState({ isOpened: false })
    }

    render() {
      const { isOpened } = this.state;
      return (
        <View className='login-page-layout'>
          {this.props.children}
          <AtMessage />
          {
            isOpened ? <View className='login-card'>
            <Image src={LoginBg} style={{width: '500rpx', height: '500rpx'}}></Image>
            <AtButton type='primary' size='small' onClick={() => this.loginApp()}>立即登录</AtButton>
            <Text className='next-time-button' onClick={() => this.closeDialog()}>下次再说</Text>
          </View> : null
          }
          
        </View>
      )
    }
}