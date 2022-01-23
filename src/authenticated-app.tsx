import React from "react";
import ProjectListScreen from "screens";
import { useAuth } from "context/auth-context";
import { logout } from './auth-provider';


const AuthenticatedApp = () => {
  const {logout} = useAuth()
  return <>
  <button onClick={logout}>登出</button>
  <ProjectListScreen />
  </>;
};

export default AuthenticatedApp;
