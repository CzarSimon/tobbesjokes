import React, { Component } from 'react';
import Main from './components/main';
import { color, length, font } from './styles/main';
import './App.css';

const style = {
  header: {
    backgroundColor: color.green,
    padding: '0.1px',
    marginBottom: length.button,
    color: color.grey.appBackground,
    fontSize: font.size.large,
  },
  heading: {
    marginBottom: '0px'
  },
  subheading: {
    marginTop: '0px',
    fontSize: font.size.small
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={style.header} className="header">
          <h1 className="App-title" style={style.heading}>Tobbes skämt</h1>
          <p style={style.subheading}>Visdom i vardagen</p>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
