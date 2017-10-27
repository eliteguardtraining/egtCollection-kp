import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { mutedText } from 'universal/styles/colors'
import { headerStack } from 'universal/styles/fonts'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

import slam from './images/slam.png'
import dime from './images/dime.png'
import espn from './images/espn.png'
import b from './images/b.png'
import beakerlogo from './images/beakerlogo.png'
import mcdonalds from './images/mcdonalds.png'

const styles = {
  logos: {
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: '1.5rem',
    paddingLeft: 20,
    paddingRight: 20,
    position: 'relative',
  },
  logo: {
    padding: '5px 20px 10px 20px',
    width: 'calc(20% - 40px)',
    minWidth: 120,
  },
  h6: {
    fontSize: `${pxToEm(24)}rem`,
    fontFamily: headerStack,
    color: mutedText,
    textTransform: 'uppercase',
    marginBottom: 0,
    letterSpacing: '5px',
    '@media (max-width: 767px)': {
      margin: '-20px 0 20px 0',
    },
  },
}

@Radium
export default class Logos extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    return (
      <section style={styles.logos}>
        <Row>
          <Col xs={12}>
            <h6 style={styles.h6}>As Featured On:</h6>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <img style={styles.logo} src={slam} alt='SLAM' />
            <img style={styles.logo} src={dime} alt='Dime' />
            <img style={styles.logo} src={espn} alt='ESPN' />
            <img style={styles.logo} src={b} alt='b' />
            <img style={styles.logo} src={beakerlogo} alt='o' />
            <img style={styles.logo} src={mcdonalds} alt="McDonald's" />
          </Col>
        </Row>
      </section>
    )
  }
}
