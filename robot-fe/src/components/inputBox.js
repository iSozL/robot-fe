import React from "react";
import { Modal, Button, Input, Icon } from 'antd';
import api from "../utils/apiUtils";
import url from "../utils/url"

const { TextArea } = Input;
class InputBox extends React.Component {
  constructor(props) {
    super(props)
  }
  // addQuestion() {
  //   api.fetchData(`${url}:8002/excel`, 'post', data).then(
  //     res => {
  //       console.log(res.data)
  //     }
  //   )
  // }
  getData = e => {
    console.log(e.target)
  }
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type={this.props.buttonType} onClick={this.showModal}>
          <Icon type={this.props.iconType} />{this.props.title}
        </Button>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={400}
          cancelText={"取消"}
          okText={"确定"}
        >
        {this.props.content.map((item, index) => {
          return(
            <div style={{fontWeight: 1000, marginBottom: 10}} key={index}>
              {item}: <Input placeholder={item} style={{width: 200, marginLeft: 20}} id={String(index)} onChange={this.getData} />
            </div>
          )
        })}
        </Modal>
      </div>
    );
  }
}
export default InputBox;