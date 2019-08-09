import React from "react";
import { Divider } from 'antd';
import UploadFiles from '../../../components/uploadFiles'
class SentencePlugin extends React.Component {
  render() {
    return (
      <div>
        <div class="content-header">浩浩语句库/插件</div>
        <Divider />
        <UploadFiles />
      </div>
    );
  }
}
export default SentencePlugin;
