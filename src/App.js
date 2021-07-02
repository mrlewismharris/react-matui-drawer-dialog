
import React from 'react';
import MainAppBar from './components/MainAppbar/MainAppbar';
import './App.css';
import MainDrawer from './components/Drawer/Drawer';

function App() {

  return (
    <React.Fragment>
      <MainAppBar title="Titlebar"/>
      <MainDrawer open={true}/>
    </React.Fragment>
  );
}

export default App;
