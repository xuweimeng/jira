import React, { useState } from 'react';
import RejisterScreen from 'unauthenticated-app/register';
import LoginScreen from 'unauthenticated-app/login';

const UnauthenticatedApp = () => {
  const [isRegister, setIsgister] = useState(false)

  return <>
    {
      isRegister?<RejisterScreen />: <LoginScreen />
    }
    <button onClick={() => setIsgister(!isRegister)}>切换至{isRegister?'登录': '注册'}</button>
  </>
}

export default UnauthenticatedApp;