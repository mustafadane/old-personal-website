import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import {Motion, spring} from 'react-motion';


class App extends Component {
  constructor(){
    super()
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        <header>
          <div className="left">
            <h1>Mustafa Dane</h1>
          </div>
          <nav>
            <div className="nav-item">
              <a href="#">About</a>
            </div>
            <div className="nav-item">
              <a href='#'>Projects</a>
            </div>
            <div className="nav-item">
              <a href='#'>Contact</a>
            </div>
          </nav>
        </header>
        <section id="intro">
          <Motion
            defaultStyle={{opacity: 0}}
            style={{opacity: spring(1, {stiffness:50})}}
          >
            {
              style => (
                <div id="crop" style={{opacity: style.opacity}}>
                  <img src="/profile.jpg" id="profile" alt="yep, it's me!" />
                </div>
              )
            }
          </Motion>
          <div id="pitch">
            <Motion defaultStyle={{x: -2000, opacity:0}} style={{x: spring(this.state.show ? 10 : 10, {stiffness: 20, damping: 26}), opacity: spring(1)}}>
              {style => <div style={{transform: `translate(${style.x}px)`, opacity: style.opacity}} >This is a sample animation</div>}
            </Motion>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </section>
        <div id="section-1">
          <p>section 1</p>
        </div>
        <div id="section-2">
          <p>section 2</p>
        </div>
      </div>
    );
  }
}

export default App;
