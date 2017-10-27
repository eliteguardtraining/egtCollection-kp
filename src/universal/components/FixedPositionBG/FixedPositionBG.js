import React, { Component } from 'react'
import Radium from 'radium'

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: 'black',
    backgroundSize: 'cover',
    backgroundRepeat: 'no repeat',
    backgroundPosition: 'center center',
  },
}

@Radium
export default class FixedPositionBG extends Component {

  shouldComponentUpdate() {
    return false
  }

  render() {

    const {
      url,
    } = this.props

    const containerStyles = Object.assign({}, styles.container, {
      backgroundImage: `url(${url})`,
    })

    return (
      <div style={containerStyles} />
    )
  }
}
