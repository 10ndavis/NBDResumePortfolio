import React, { Component } from 'react';
import Header from './components/Header.js';
import NavIcons from './components/NavIcons.js';
import About from './components/About.js';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <NavIcons />
        <About />
      </div>
    );
  }
}

export default App;
