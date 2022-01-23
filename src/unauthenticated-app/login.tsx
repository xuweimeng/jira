import * as React from "react";
import { useAuth } from "context/auth-context";

const LoginScreen = () => {
  const { login, user } = useAuth();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };
  console.log("user", user);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" placeholder="用户名" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" placeholder="用户名" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};

export default LoginScreen;
