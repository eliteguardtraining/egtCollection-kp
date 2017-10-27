import React, { Component } from 'react'
import { bgGrey } from 'universal/styles/colors'
import Radium from 'radium'
import limitedOffer from './images/limitedOffer.png'
import { imgResponsive } from 'universal/styles/helpers'

const styles = {
  navbarHeader: {
    position: 'relative',
    zIndex: 100,
  },
  header: {
    background: bgGrey,
    textAlign: 'center',
  },
  brand: Object.assign({}, imgResponsive, {
    display: 'inline-block',
  }),
}

@Radium
export default class LimitedOffer extends Component {
  render() {

    /* eslint-disable */
    const {
      experiment,
    } = this.props
    /* eslint-enable */

    return (
      <div style={styles.navbarHeader}>
        <header style={styles.header}>
          <img style={styles.brand} src={limitedOffer} alt='Limited Offer!' />
        </header>
      </div>
    )
  }
}
