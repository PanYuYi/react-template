import React from "react";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AllState } from "../store/index";

import { removeToken } from "@/store/user";

const { Header, Content, Sider } = Layout;

const LayoutComponent: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const items = useSelector((state: AllState) => state.system.menus);

  const handleLoginOut = () => {
    dispatch(removeToken());
    navigate("/login");
  };

  const handleSelectMenu = ({ item, key, keyPath, domEvent }) => {
    console.log(
      "item, key, keyPath, domEvent >>>>>  ",
      item,
      key,
      keyPath,
      domEvent
    );

    navigate(`/${keyPath}`);
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
        <div className="w-[239px] h-[60px] bg-[#001529] text-[#fff] border-width-[1px] border-[#f00]">
          这是大logo的地方
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onClick={handleSelectMenu}
        />
      </Sider>
      <Layout style={{ marginLeft: 239 }}>
        <Header
          style={{ height: "60px", padding: 0, background: colorBgContainer }}
          className="flex justify-end"
        >
          <Button onClick={handleLoginOut}>退出登录</Button>
        </Header>
        <Content className="h-[calc(100vh-60px)]">
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
