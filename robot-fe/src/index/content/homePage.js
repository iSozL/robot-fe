import React from "react";
import { Link } from "react-router-dom";
import { Divider, Icon, Card } from "antd";
import "./homePage.css";

const SentenceLib = () => {
  const funcData = [
    { icon: "message", name: "浩浩语料库" },
    { icon: "setting", name: "浩浩语句设置" },
    { icon: "gift", name: "彩蛋设置" },
  ];
  return (
    <div>
      <div class="content-header">浩浩语句库</div>
      <Divider />
      <div>
        {funcData.map(item => {
          return (
            <Link to="/sentence">
            <Card style={{ width: "120px", height: "120px", float: "left", marginRight: "20px", marginBottom: "20px" }}>
              <Icon
                type={item.icon}
                style={{ display: "flex", justifyContent: "center", fontSize: "40px", marginBottom: "5px" }}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                {item.name}
              </div>
            </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default SentenceLib;
