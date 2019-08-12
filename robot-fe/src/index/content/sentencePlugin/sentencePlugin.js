import React from "react";
import { Divider } from "antd";
import UploadBox from "../../../components/uploadBox";

class SentencePlugin extends React.Component {
  render() {
    return (
      <div>
        <div className="content-header">浩浩语句库/插件</div>
        <Divider />
        <UploadBox />
      </div>
    );
  }
}
export default SentencePlugin;
