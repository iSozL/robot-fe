import React from "react";
import { Modal, Button, Input, Icon } from "antd";
import api from "../utils/apiUtils";

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
    api.mainData("url:8002/excel", 'post', this.state.data).then(
      res => {
        console.log(res)
      }
    )
  }
  delete() {
    api.mainData("url:8002/excel", "delete", this.state.data).then(
      res => {
        console.log(res)
      }
    )
  }
  change() {
    api.mainData("url:8002/excel", "put", this.state.data).then(
      res => {
        console.log(res)
      }
    )
  }

  // onChange性能不会很低吗？
  getData = e => {
    e.preventDefault();
    if(e.target.id === "0") {
      this.setState({
        question: e.target.value
      })
    } else {
      this.setState({
        answer: e.target.value
      })
    }
    this.setState({
      data: {
        "question": [this.state.question],
        "answer": [this.state.answer]
      }
    })
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
    if(this.props.type === "add") {
      this.addQuestion()
    } else if (this.props.type === "delete") {
      this.delete()
    } else if(this.props.type === "change") {
      this.change()
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
          okText={"确定"}
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
