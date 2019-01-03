import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import teal from '@material-ui/core/colors/teal';

import MainPage from './MainPage/MainPage';

let theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    // type: 'dark',
    primary: deepPurple,
    secondary: teal
    // text: {
    //   primary: '#c2c2c2'
    // }
  },
  status: {
    danger: 'red'
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <MainPage />
      </MuiThemeProvider>
    );
  }
}

export default App;
