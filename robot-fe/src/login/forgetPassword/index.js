import React from "react";
import { Modal, Input, message } from "antd";
import api from "../../utils/apiUtils";

class Forget extends React.Component {
  state = { visible: false, username: null };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  confirmModal = () => {
    const datas = {
      username: this.state.username
    };
    if (this.state.username) {
      api.fetchData("api/user/forgot_password", "post", datas).then(res => {
        message.success(res.data.message);
      }, error => {
        message.error(error.message.toString())
      })
    } else {
      console.log("请输入用户名")
    }
  };
  cancelModal = () => {
    this.setState({
      visible: false
    });
  }

  getUsername = e => {
    let _username = e.target.value;
    this.setState({
      username: _username
    });
  };

  render() {
    return (
      <div style={{ float: "right" }}>
        <a type="primary" onClick={this.showModal}>
          忘记密码
        </a>
        <Modal
          title="忘记密码"
          visible={this.state.visible}
          onOk={this.confirmModal}
          onCancel={this.cancelModal}
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
