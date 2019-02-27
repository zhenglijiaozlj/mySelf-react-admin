import React, {Component} from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  message
} from 'antd';
const {Item}=Form
 class LoginForm extends Component {
   checkPassword =(rule, value, callback)=>{
     if(!value){
       callback('密码不可以为空')
     }else if (value.length<4){
       callback('密码最少4位数')
     }else if (value.length>11){
       callback('密码最多11位数')
     }else{
       callback()
     }
   }
   handleSubmit =(e)=>{
     const {validateFields,resetFields}=this.props.form
     e.preventDefault();
    // 检测数据是否验证成功
    validateFields((error, values) => {
       if (!error) {
       //  校验通过
       }else{
         resetFields(['password'])
         const errMsg= Object.values(error).reduce((pre,curr)=>{
              return pre+curr.errors[0].message+''
         },'')
         message.error(errMsg)
       }
     });
   }
  render () {
    const { getFieldDecorator,} = this.props.form;
    return (
      <Form className="login-form" onClick={this.handleSubmit}>
        <Item>
          {getFieldDecorator('userName', {
            rules: [
              { required: true, message: '请输入用户名' },
              {min:4,message:'用户名长度大于4位'},
              {max:11,message:'用户名长度小于11位'}
              ],
          })(
            <Input prefix={<Icon type="user"/>} placeholder="用户名" />
          )}
        </Item>
        <Item>
          {getFieldDecorator('password', {
            rules: [
              {validator:this.checkPassword}
            ],
          })(
            <Input placeholder="密码" prefix={<Icon type="safety" />}/>
          )}

        </Item>
        <Item>
          <Button type="primary" htmlType='submit' className='login-button'>登录</Button>
        </Item>
      </Form>
    )
  }
}
const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm

