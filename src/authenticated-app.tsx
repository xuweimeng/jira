import React from "react";
import ProjectListScreen from "screens";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import {Space} from 'antd'
import { AlipayOutlined } from "@ant-design/icons";
const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Space size={20}>
          <HeaderLeftIcon />
          <HeaderLeftItem>项目</HeaderLeftItem>
          <HeaderLeftItem>用户</HeaderLeftItem>
          </Space>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  /* display: grid; */
  height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderLeftItem = styled.div`
 font-weight: bold;
 font-size: 2rem;
`;
const HeaderLeftIcon = styled(AlipayOutlined)`
  font-size: 3rem;
  color: #1890ff;
`;
const HeaderRight = styled.div``;
const Main = styled.main`
  grid-area: main;
`;

export default AuthenticatedApp;
