import React, {Component} from 'react';
import './index.less'
import logo from './logo.png'
import WrappedLoginForm from '../../components/login-from'
export default class Login extends Component {
  render () {
    return (
      <div className="login">
        <div className="header">
          <img className="logo" src={logo}/>
          <h2>React项目: 后台管理系统</h2>
        </div>
       <div className="login-form-wrap">
         <h2>用户登录</h2>
         <WrappedLoginForm/>
       </div>
      </div>
    )
  }
}

