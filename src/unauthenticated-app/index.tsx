import React, { useState } from "react";
import RejisterScreen from "unauthenticated-app/register";
import LoginScreen from "unauthenticated-app/login";
import { Button, Card } from "antd";

const UnauthenticatedApp = () => {
  const [isRegister, setIsgister] = useState(false);

  return (
    <Card style={{width: '500px', margin: '10% auto 0'}}>
      {isRegister ? <RejisterScreen /> : <LoginScreen />}
      <Button type="primary" onClick={() => setIsgister(!isRegister)}>
        切换至{isRegister ? "登录" : "注册"}
      </Button>
    </Card>
  );
};

export default UnauthenticatedApp;
