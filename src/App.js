import React, { Component } from 'react';
import './App.css';
import CatImage from './CatImage';
import SideBar from './SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CatImage />
        <SideBar />
      </div>
    );
  }
}

export default App;
