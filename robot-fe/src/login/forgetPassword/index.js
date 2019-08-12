import React from "react";
import { Modal, Button, Input } from "antd";
import api from "../../utils/apiUtils";

class Forget extends React.Component {
  state = { visible: false, username: null };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  hideModal = () => {
    const datas = {
      username: this.state.username
    }
    api
      .fetchData("api/user/forgot_password", "post", datas)
      .then(
        res => {
          console.log(res.data)
        }
      );
    this.setState({
      visible: false
    });
  };

  getUsername = e => {
    let _username = e.target.value;
    this.setState({
      username: _username
    });
  };

  render() {
    return (
      <div>
        <a type="primary" onClick={this.showModal}>
          忘记密码
        </a>
        <Modal
          title="忘记密码"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <Input
            placeholder="请输入用户名"
            value={this.state.username}
            onChange={this.getUsername}
          />
        </Modal>
      </div>
    );
  }
}
export default Forget;
