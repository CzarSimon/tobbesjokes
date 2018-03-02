import React, { Component } from 'react';
import Joke from './joke';
import PreviousButton from './previous-button';
import NextButton from './next-button';
import jokes from '../data/jokes';
import { length } from '../styles/main';

const style = {
  landscape: {
    width: "40%",
    marginLeft: "30%"
  },
  portrait: {
    width: '90%',
    marginLeft: '5%'
  },
  buttonGroup: {
    display: 'flex',
    marginTop: length.large
  }
}

const portraitMode = () => {
  const { innerHeight, innerWidth } = window
  return innerHeight >= innerWidth
}

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentJoke: 0,
      isPortrait: portraitMode()
    }
  }
  
  updateDimensions = () => {
    this.setState({
      ...this.state,
      isPortrait: portraitMode()
    });
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateStockData)
  }

  nextJoke = () => {
    this.setState({
      currentJoke: this.state.currentJoke + 1
    })
  }

  previusJoke = () => {
    this.setState({
      currentJoke: this.state.currentJoke - 1
    })
  }

  render = () => {
    const { isPortrait, currentJoke } = this.state;
    const joke = jokes[currentJoke];
    return (
      <div style={(isPortrait) ? style.portrait : style.landscape}>
        <Joke joke={joke} />
        <div style={style.buttonGroup}>
          <PreviousButton 
            visible={currentJoke > 0}
            action={this.previusJoke} />
          <NextButton 
            visible={currentJoke < (jokes.length - 1)} 
            action={this.nextJoke} />
        </div>
      </div>
    );
  }

}
