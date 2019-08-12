import React from "react";
import { Input, Tooltip, Icon, Checkbox, Button, message, Spin } from "antd";
import "./index.css";
import api from "../utils/apiUtils";
import Forget from "../login/forgetPassword/index";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.userChange = this.userChange.bind(this);
    this.passwdChange = this.passwdChange.bind(this);
    this.autoLogin = this.autoLogin.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      username: "",
      password: "",
      remember_me: true,
    };
  }
  userChange(e) {
    const _username = e.target.value;
    this.setState({ username: _username });
  }
  passwdChange(e) {
    const _password = e.target.value;
    this.setState({ password: _password });
  }
  autoLogin(e) {
    this.setState({ remember_me: !this.state.remember_me });
  }
  login() {
    if(this.state.username && this.state.password) {
      const datas = {
        username: this.state.username,
        password: this.state.password,
        remember_me: this.state.remember_me
      };
      api.fetchData("api/user/login", "post", datas).then(
        res => {
          if (res.status === 200) {
            window.localStorage.setItem("username", res.data.truename);
            window.localStorage.setItem("userImage", res.data.photo);
            window.localStorage.setItem("token", res.headers.authorization);
            this.props.history.push("/");
            console.log(res)
            message.success("登录成功")
          } else {
            message.error(res.data.message) 
          }
        },
        error => {
          message.error(error.message.toString())
        }
      );
    } else {
      message.warning("请输入用户名或密码")
    }
  }
  render() {
    return (
      <div className="container">
        <div className="login-title">浩浩机器人</div>
        <div className="login-tip">账户密码登录</div>
        <Input
          className="input-style"
          onChange={this.userChange}
          value={this.state.username}
          placeholder="邮箱(老US可用用户名)"
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          suffix={
            <Tooltip title="邮箱">
              <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <Input
          className="input-style"
          onChange={this.passwdChange}
          placeholder="请输入密码"
          prefix={<Icon type="unlock" style={{ color: "rgba(0,0,0,.25)" }} />}
          suffix={
            <Tooltip title="密码">
              <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
          type="password"
        />
        <div>
          <Checkbox
            className="input-style"
            checked={this.state.remember_me}
            onChange={this.autoLogin}
          >
            自动登录
          </Checkbox>
          <Forget />
        </div>
        <Button type="primary" block onClick={this.login}>
          登录
        </Button>
      </div>
    );
  }
}
export default Login;
