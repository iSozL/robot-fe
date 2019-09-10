import React from "react";
import { Modal, Button, Input, Icon } from 'antd';
import UploadFiles from './uploadFiles'

const { TextArea } = Input;
class UploadBox extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          <Icon type="to-top" />上传文件
        </Button>
        <Modal
          title="上传文件"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={400}
          footer={null}
        >
        <div style={{fontWeight: 1000, marginBottom: 10}}>
          <UploadFiles />
        </div>
        </Modal>
      </div>
    );
  }
}
export default UploadBox;