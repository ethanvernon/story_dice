import React, { Component } from 'react';
import {Body} from './Body';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-title">
          <h1 style={{marginBottom:0}}>
            Adventure Prep
          </h1>
          <h4 style={{marginTop:5, marginBottom:10}}>
          with Story Dice
          </h4>
        </div>
        <Body/>
      </div>
    );
  }
}

export default App;
