import React, { useState } from 'react';
import MainAppBar from './components/MainAppbar/MainAppbar';
import './App.css';
import MainDrawer from './components/Drawer/Drawer';

function App() {

  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);

  function handleMainDrawerOpen(setIsOpen) {
    setMainDrawerOpen(setIsOpen);
  }

  return (
    <React.Fragment>
      <MainAppBar title="Titlebar" openDrawer={ () => handleMainDrawerOpen(true) } />
      <MainDrawer open={ mainDrawerOpen } onClose={ () => handleMainDrawerOpen(false) }/>
    </React.Fragment>
  );
}

export default App;
