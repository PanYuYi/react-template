import { Button, Layout } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { removeToken } from "@/store/user";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

import userLogo from "@/assets/itman.png";

const { Header } = Layout;

interface Iprops {
  colorBgContainer: string;
}

export default function HeaderComp({ colorBgContainer }: Iprops) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nowTime, setNowTime] = useState(dayjs().format("YYYY-MM-DD HH:mm:ss"));

  useEffect(() => {
    const timerId = setInterval(() => {
      setNowTime(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  // 退出登录
  const handleLoginOut = () => {
    dispatch(removeToken());
    navigate("/login");
  };
  return (
    <Header
      style={{ height: "60px", padding: 0, background: colorBgContainer }}
    >
      <div className="h-full flex justify-end items-center pr-[8px]">
        <span className="mr-[18px]">{nowTime}</span>
        <Button type="link" onClick={handleLoginOut}>
          退出登录
        </Button>
        <img
          src={userLogo}
          className="w-[54px] h-[48px] rounded-[50%] border-[#ccc] border-solid border-[1px]"
        ></img>
      </div>
    </Header>
  );
}
