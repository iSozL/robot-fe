import react from "react";
import axios from "axios";

// 判断图片是否有效
function testImg(url) {
  var xmlHttp;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open("Get", url, false);
  xmlHttp.send();
  return xmlHttp.status !== 200 ? false : true;
}
export default testImg;
