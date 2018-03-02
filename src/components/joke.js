import React, { Component } from 'react'
import tobbe0 from '../assets/tobbe-0.png';
import tobbe1 from '../assets/tobbe-1.png';
import tobbe2 from '../assets/tobbe-2.png';
import tobbe3 from '../assets/tobbe-3.png';
import { length, font } from '../styles/main';

const style = {
  card: {
    padding: length.large
  },
  text: {
    fontSize: font.size.medium
  }
}

export default class Joke extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      images: [tobbe0, tobbe1, tobbe2, tobbe3]
    }
  }
  
  render = () => {
    const idx = Math.floor(Math.random() * this.state.images.length)
    return (
      <div style={style.card} className="card">
        <img src={this.state.images[idx]} alt="Tobbe" />
        <p style={style.text}>{this.props.joke.text}</p>
        <p style={style.text}>{this.props.joke.punchline}</p>
      </div>
    )
  }
  
}
