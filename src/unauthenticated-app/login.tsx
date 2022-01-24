import * as React from "react";
import { useAuth } from "context/auth-context";
import { Form, Button, Input } from "antd";

const { Item } = Form;
const LoginScreen = () => {
  const { login, user } = useAuth();
  const onSubmit = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <Form onFinish={onSubmit}>
      <Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: "用户名不能为空！" }]}
      >
        <Input type="text" placeholder="用户名" />
      </Item>
      <Item
        label="密码"
        name="password"
        rules={[{ required: true, message: "用户名不能为空！" }]}
      >
        <Input type="password" placeholder="用户名" />
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Item>
    </Form>
  );
};

export default LoginScreen;
