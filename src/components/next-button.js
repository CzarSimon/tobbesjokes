import React, { Component } from 'react';
import { length, color, font } from '../styles/main';

const style = {
  button: {
    fontSize: font.size.medium,
    padding: length.small,
    height: length.button,
    marginLeft: '6%',
    marginTop: '0',
    flex: 1
  },
  space: {
    color: color.grey.appBackground,
    padding: length.small,
    height: length.large,
    marginLeft: '6%',
    flex: 1
  }
}

export default class NextButton extends Component {
  render = () => (
    (this.props.visible) ?
      <p 
        onClick={this.props.action} 
        className="card" style={style.button}>next</p> :
        <div style={style.space}>"should not be visible"</div>
  )
}
