import React from 'react';
import logo from 'logo.svg';
import { Button } from 'antd';
import 'App.css';

function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      {/*<header className="App-header">*/}
       <img src={logo} className="App-logo" alt="logo" />
     
    </div>
  );
}

export default App;
