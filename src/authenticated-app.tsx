import React from "react";
import ProjectListScreen from "screens";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import {Dropdown, Menu, Space} from 'antd'
import { AlipayOutlined, DownOutlined } from "@ant-design/icons";
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
          <Dropdown overlay={
            <Menu>
              <Menu.Item key="logout">
              <a onClick={logout}>登出</a>
              </Menu.Item>
            </Menu>
          }>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Hover me <DownOutlined />
            </a>
          </Dropdown>
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
  padding: 0 3.2rem;
  border-bottom: 1px solid #f2f2f2;
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
