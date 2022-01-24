import React, { useState } from "react";
import RejisterScreen from "unauthenticated-app/register";
import LoginScreen from "unauthenticated-app/login";
import { Button, Card, Divider } from "antd";
import styled from '@emotion/styled'

const UnauthenticatedApp = () => {
  const [isRegister, setIsgister] = useState(false);

  return (
    <Container>
      <ShadowCard>
        {isRegister ? <RejisterScreen /> : <LoginScreen />}
        <Divider  />
        <a onClick={() => setIsgister(!isRegister)}>
          {isRegister ? "已有账号？直接登录" : "注册新账号"}
        </a>
      </ShadowCard>
    </Container>
  );
};

const ShadowCard = styled(Card)`
width: 40rem;
min-height: 56rem;
padding: 3.2rem 4rem;
border-radious: 0.3rem;
box-sizing: border-box;
box-shadow: rgba(0,0,0,0.1) 0 0 10px;
text-align: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh
`

export default UnauthenticatedApp;
