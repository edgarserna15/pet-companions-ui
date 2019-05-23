import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ButtonAppBar from './ButtonAppBar';

const Layout = (props) => {

  return (
    <>
      <CssBaseline />
      <ButtonAppBar />
      {props.children}
    </>
  )
}

export default Layout;
