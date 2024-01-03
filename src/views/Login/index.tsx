import { ChangeEvent, useState } from "react";
import { Button, Input, message } from "antd";
import { UnlockOutlined, UserOutlined } from "@ant-design/icons";
import "./index.scss";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/user";
import { useNavigate } from "react-router";

export function LoginPage() {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [messageApi, conextHolder] = message.useMessage();

  // 修改用户名
  const handleChangeUserName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUserName(target.value);
  };

  // 修改密码
  const handleChangePwd = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPwd(target.value);
  };

  // 提交
  const handleSub = () => {
    console.log("提交 >>> ", userName, pwd);
    if (userName === "admin" && pwd === "admin123") {
      dispatch(
        setToken({
          userName,
          pwd,
        })
      );
      navigate("/");
    } else {
      messageApi.error("账号或密码错误");
    }
  };
  return (
    <div className="login-page">
      {conextHolder}
      <div className="login-content flex flex-col">
        <Input
          className="w-[320px]"
          defaultValue={userName}
          onChange={handleChangeUserName}
          prefix={<UserOutlined />}
        ></Input>
        <Input
          className="w-[320px]"
          style={{ marginTop: "12px" }}
          type="password"
          prefix={<UnlockOutlined />}
          defaultValue={pwd}
          onChange={handleChangePwd}
        ></Input>
        <Button
          type="primary"
          onClick={handleSub}
          className="w-[120px] mt-[18px] ml-auto"
        >
          登录
        </Button>
      </div>
    </div>
  );
}
