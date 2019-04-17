import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

const Layout = (props) => {

  return (
    <>
      <CssBaseline />
      {props.children}
    </>
  )
}

export default Layout;
