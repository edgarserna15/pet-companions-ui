import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Layout>
          <Home></Home>
        </Layout>
      </MuiThemeProvider>

    );
  }
}

export default App;
