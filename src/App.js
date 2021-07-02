import React, { useState } from 'react';
import MainAppBar from './components/MainAppbar/MainAppbar';
import './App.css';
import MainDrawer from './components/MainDrawer/MainDrawer';
import PopupDialog from 'components/PopupDialog/PopupDialog';

function App() {

  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);
  const [popupWindowOpen, setPopupWindowOpen] = useState(false);

  return (
    <React.Fragment>
      <MainAppBar title="Titlebar" openDrawer={ () => setMainDrawerOpen(true) } />
      <MainDrawer open={ mainDrawerOpen } onClose={ () => setMainDrawerOpen(false) } openDialog={ () => setPopupWindowOpen(true) } />
      <PopupDialog open={ popupWindowOpen } onClose={ () => setPopupWindowOpen(false) } />
    </React.Fragment>
  );
}

export default App;
