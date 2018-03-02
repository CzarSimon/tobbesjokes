import React, { Component } from 'react';
import { length, color, font } from '../styles/main';

const style = {
  button: {
    fontSize: font.size.medium,
    padding: length.small,
    height: length.button,
    margin: '0',
    flex: 1
  },
  space: {
    color: color.grey.appBackground,
    padding: length.small,
    height: length.large,
    margin: '0',
    flex: 1
  }
}

export default class PreviousButton extends Component {
  render = () => (
    (this.props.visible) ?
      <p 
        onClick={this.props.action} 
        className="card"
        style={style.button}>previous</p> : 
        <div style={style.space}>"should not be visible"</div>
  )
}
