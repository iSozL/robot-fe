import React from "react";
import { Upload, Button, Icon } from "antd";

const UploadFiles = () => {
  const fileList = [];

  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture",
    defaultFileList: [...fileList]
  };
  return (
    <div>
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Upload
        </Button>
      </Upload>
    </div>
  );
};

export default UploadFiles;
