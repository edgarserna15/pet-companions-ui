import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pet Companion</h1>
        <Home></Home>
      </div>
    );
  }
}

export default App;