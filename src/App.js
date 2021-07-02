import React, { useState } from 'react';
import MainAppBar from './components/MainAppbar/MainAppbar';
import './App.css';
import MainDrawer from './components/MainDrawer/MainDrawer';

function App() {

  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);

  return (
    <React.Fragment>
      <MainAppBar title="Titlebar" openDrawer={ () => setMainDrawerOpen(true) } />
      <MainDrawer open={ mainDrawerOpen } onClose={ () => setMainDrawerOpen(false) }/>
    </React.Fragment>
  );
}

export default App;
