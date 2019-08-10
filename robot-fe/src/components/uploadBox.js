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
        >
        <div style={{fontWeight: 1000, marginBottom: 10}}>
          文件名称: <Input placeholder="文件名称" style={{width: 200,marginLeft: 20}} />
        </div>
        <div style={{fontWeight: 1000, marginBottom: 20}}>
          文件描述: <TextArea placeholder="不多于20字" style={{width: 200, marginLeft: 20}} autosize={{maxRows: 2}} maxLength="20" />
        </div>
        <div style={{fontWeight: 1000, marginBottom: 10}}>
          <UploadFiles />
        </div>
        </Modal>
      </div>
    );
  }
}
export default UploadBox;