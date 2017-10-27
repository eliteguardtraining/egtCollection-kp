import React, { Component } from 'react'
import Radium from 'radium'
import { orange } from 'universal/styles/colors'

// Images
import logo from 'universal/images/loader_logo.png'

const styles = {
  loaderContainer: {
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    transition: 'all .2s ease',
    backgroundColor: orange,
    zIndex: 99999,
  },
  logo: {
    position: 'absolute',
    top: 'calc(50% - 70px)',
    left: 'calc(50% - 70px)',
    maxWidth: 140,
    maxHeight: 140,
  },
}
const loaderStyle = `
  .loader {
    z-index: 99999;
    font-size: 10px;
    position: absolute;
    top: calc(50% - 100px);
    left: calc(50% - 100px);
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  .loader, .loader:after {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

@Radium
export default class Loader extends Component {
  render() {
    return (
      <div className='loader-container' style={styles.loaderContainer}>
        <style>
          {
            loaderStyle
          }</style>
        <div className='loader'></div>
        <img style={styles.logo} src={logo} alt='Elite Guard Training'></img>
      </div>
    )
  }
}
