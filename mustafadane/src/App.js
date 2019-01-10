import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        <div id='navbar-container' >
          <div className='navbar'>
            <p>deneme</p>
          </div>
        </div>
        <div id='intro'>
          <div id='crop' >
            <img src='/profile.jpg' id='profile' alt="yep, it's me!" />
          </div>
        </div>
        <div id='section-1'>
            <p>section 1</p>
        </div>
        <div id='section-2'>
          <p>section 2</p>
        </div>
      </div>
    );
  }
}

export default App;
