import React, { Component } from 'react';
import Header from './components/Header.js';
import Skills from './components/Skills.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Skills />
      </div>
    );
  }
}

export default App;
