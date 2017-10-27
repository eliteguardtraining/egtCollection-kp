import React, { Component } from 'react'
import Radium from 'radium'
import shallowCompare from 'react-addons-shallow-compare'

const divider = {
  border: '0',
  height: '1px',
  backgroundImage: 'linear-gradient(to right, rgba(100, 100, 100, 0), rgba(100, 100, 100, 0.75), rgba(100, 100, 100, 0))',
}

@Radium
export default class Divider extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    return (
      <hr style={divider} />
    )
  }
}
