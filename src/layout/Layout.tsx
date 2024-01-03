import React from "react";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AllState } from "../store/index";
import Header from "./Header";

import myImg from "../assets/react.svg";

const { Content, Sider } = Layout;

const LayoutComponent: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const items = useSelector((state: AllState) => state.system.menus);

  const handleSelectMenu = ({ keyPath }) => {
    navigate(`/${keyPath.reverse().join("/")}`);
  };

  return (
    <Layout hasSider>
      <Sider
        width={239}
        style={{
          overflow: "auto",
          height: "100vh",
          width: "239px",
          maxWidth: "239px",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="w-[239px] h-[60px] bg-[#001529] text-[#fff] border-[0] border-b-[1px] border-solid border-[#000]">
          <img className="h-[60px]" src={myImg} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onClick={handleSelectMenu}
        />
      </Sider>
      <Layout style={{ marginLeft: 239 }}>
        <Header colorBgContainer={colorBgContainer}></Header>
        <Content className="h-[calc(100vh-60px)]">
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
