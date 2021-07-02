import React, { useState } from 'react';
import MainAppBar from './components/MainAppbar/MainAppbar';
import './App.css';
import MainDrawer from './components/MainDrawer/MainDrawer';
import PopupDialog from 'components/PopupDialog/PopupDialog';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#191919'
    },
    secondary: {
      main: '#1976d2'
    }
  }
})

function App() {

  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);
  const [popupWindowOpen, setPopupWindowOpen] = useState(false);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <MainAppBar title="MainAppBar" openDrawer={ () => setMainDrawerOpen(true) } />
        <MainDrawer open={ mainDrawerOpen } onClose={ () => setMainDrawerOpen(false) } openDialog={ () => setPopupWindowOpen(true) } />
        <PopupDialog open={ popupWindowOpen } onClose={ () => setPopupWindowOpen(false) } />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
