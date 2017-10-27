import React, { Component } from 'react'
import { bgGrey } from 'universal/styles/colors'
import Radium from 'radium'
import headerImg from './images/checkout-tabs-leftactive.png'

const styles = {
  navbarHeader: {
    position: 'relative',
    zIndex: 20,
  },
  header: {
    paddingTop: 5,
    backgroundColor: bgGrey,
    backgroundImage: `url(${headerImg})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    height: 64,
    '@media (max-width: 991px)': {
      height: 40,
    },
  },
}

@Radium
export default class LogoPhoneHeader extends Component {
  render() {

    /* eslint-disable */
    const {
      experiment,
    } = this.props
    /* eslint-enable */

    return (
      <div style={styles.navbarHeader}>
        <header style={styles.header}>
        </header>
      </div>
    )
  }
}
