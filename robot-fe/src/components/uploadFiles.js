// import React from "react";
// import { Upload, Button, Icon } from "antd";

// const UploadFiles = () => {
//   const fileList = [];

//   const props = {
//     action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//     listType: "picture",
//     defaultFileList: [...fileList]
//   };
//   return (
//     <div>
//       <Upload {...props}>
//         <Button>
//           <Icon type="upload" /> 上传文件
//         </Button>
//       </Upload>
//     </div>
//   );
// };

// export default UploadFiles;
import React from "react"
import { Upload, Button, Icon, message, Input } from 'antd';
import url from "../utils/url"
import axios from 'axios';

const { TextArea } = Input;
class UploadFiles extends React.Component {
  state = {
    fileList: [],
    uploading: false,
    file_name: ""
  };
  setFilename = (e) => {
    this.setState({
      file_name: e.target.value
    })
  }
  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('file', file);
    });
    formData.append('file_name', this.state.file_name)
    console.log(this.state.file_name)
    this.setState({
      uploading: true,
    });

    axios.post(`${url}/excel/upload`, formData).then(
      res => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        if (res.data.status === 1) {
          message.success(res.data.message);
        } else {
          message.error(res.data.message)
        }
      }
    ).catch(
      error => {
        console.log(error)
      }
    )
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <div>
        <div style={{fontWeight: 1000, marginBottom: 10}}>
          文件名称: <Input placeholder="文件名称" style={{width: 200,marginLeft: 20}} onChange={this.setFilename} />
        </div>
        <div style={{fontWeight: 1000, marginBottom: 20}}>
          文件描述: <TextArea placeholder="不多于20字" style={{width: 200, marginLeft: 20}} autosize={{maxRows: 2}} maxLength="20" />
        </div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> 选择文件
          </Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? '上传中' : '开始上传'}
        </Button>
      </div>
    );
  }
}

export default UploadFiles
