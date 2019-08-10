import React from 'react';
import { Divider } from "antd";
import UploadFile from '../../../components/uploadFiles';

const Egg = () => {
  return(
    <div>
      <div class="content-header">浩浩回答彩蛋/插件</div>
      <Divider />
      <UploadFile />
    </div>
  )
}
export default Egg;