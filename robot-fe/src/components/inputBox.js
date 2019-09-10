import React from "react";
import { Modal, Button, Input, Icon, message } from "antd";
import api from "../utils/apiUtils";
import url from "../utils/url";

const { TextArea } = Input;
class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      data: ""
    };
  }
  addQuestion() {
    api.mainData(`${url}/excel`, "post", this.state.data).then(res => {
      if (res.data.status == 1) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    });
  }
  delete() {
    /* 
       对于这个为什么拿的是question参数
       因为写的时候是第一个input框是question,第二个是answer,但是delete只需要回答,但是我又不想再做判断,
       所以拿到question的数据实际上是填的回答
    */
    let datas = {
      answer: [this.state.question]
    };
    api.mainData(`${url}/excel`, "delete", datas).then(res => {
      if (res.data.status == 1) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    });
  }
  change() {
    api.mainData(`${url}/excel`, "put", this.state.data).then(res => {
      if (res.data.status == 1) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    });
  }
  download() {
    // 这里的file_name与delete的同理
    const downloadData = {file_name: this.state.question};
    console.log(downloadData)
    api.mainData(`${url}/excel/download?${downloadData}`, "get").then(res => {
      if (res.data.status == 1) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    });
  }

  // onChange性能不会很低吗？
  getData = e => {
    e.preventDefault();
    // id 用来区别填写问题和回答的框
    if (e.target.id === "0") {
      this.setState({
        question: e.target.value
      });
    } else {
      this.setState({
        answer: e.target.value
      });
    }
    this.setState({
      data: {
        question: [this.state.question],
        answer: [this.state.answer]
      }
    });
  };
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
    if (this.props.type === "add") {
      this.addQuestion();
    } else if (this.props.type === "delete") {
      this.delete();
    } else if (this.props.type === "change") {
      this.change();
    } else if (this.props.type === "download") {
      this.download();
    }
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type={this.props.buttonType} onClick={this.showModal}>
          <Icon type={this.props.iconType} />
          {this.props.title}
        </Button>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={400}
          cancelText={"取消"}
          okText={"完成"}
        >
          {this.props.content.map((item, index) => {
            return (
              <div style={{ fontWeight: 1000, marginBottom: 10 }} key={index}>
                {item}:
                <Input
                  style={{ width: 200, marginLeft: 20 }}
                  id={String(index)}
                  onChange={this.getData}
                />
              </div>
            );
          })}
        </Modal>
      </div>
    );
  }
}
export default InputBox;
