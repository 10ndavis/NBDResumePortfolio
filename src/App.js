import React, { Component } from 'react';
import Header from './components/Header.js';
import NavIcons from './components/NavIcons.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Resume from './components/Resume.js';
import Network from './components/Network.js';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <NavIcons />
        <About />
        <Skills />
        <Resume />
        <Network />
      </div>
    );
  }
}

export default App;
