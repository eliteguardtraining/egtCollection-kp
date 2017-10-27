import React, { Component } from 'react'
import { black } from 'universal/styles/colors'
import Radium from 'radium'
import logo from 'universal/images/logo-fill.png'
import { imgResponsive } from 'universal/styles/helpers'

const styles = {
  navbarHeader: {
    position: 'relative',
    zIndex: 100,
  },
  header: {
    paddingTop: 5,
    background: black,
    textAlign: 'center',
  },
  brand: Object.assign({}, imgResponsive, {
    display: 'inline-block',
  }),
}

@Radium
export default class NavbarHeader extends Component {
  render() {

    /* eslint-disable */
    const {
      experiment,
    } = this.props
    /* eslint-enable */

    return (
      <div style={styles.navbarHeader}>
        <header style={styles.header}>
          <img style={styles.brand} src={logo} alt='logo' />
        </header>
      </div>
    )
  }
}
