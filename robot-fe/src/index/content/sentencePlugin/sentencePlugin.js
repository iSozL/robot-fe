import React from "react";
import { Divider, Row, Col, Button, Icon } from "antd";
import UploadBox from "../../../components/uploadBox";
import InputBox from "../../../components/inputBox"

class SentencePlugin extends React.Component {
  render() {
    // input框数据
    const addData = ["问题", "回答"]
    const changeData = ["问题", "回答"]
    const deleteData = ["回答"]
    
    return (
      <div>
        <div className="content-header">浩浩语句库/插件</div>
        <Divider />
        <Row>
          <Col span={3}>
            <UploadBox />
          </Col>
          <Col span={3}>
            <InputBox type="add" title="新增问答" buttonType="default" iconType="question" content={addData} />
          </Col>
          <Col span={3}>
            <InputBox type="change" title="修改问答" buttonType="primary" iconType="edit" content={changeData} />
          </Col>
          <Col span={3}>
            <InputBox type="delete" title="删除问答" buttonType="danger" iconType="close" content={deleteData} />
          </Col>
        </Row>
      </div>
    );
  }
}
export default SentencePlugin;
