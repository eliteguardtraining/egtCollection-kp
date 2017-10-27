import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { orange, white } from 'universal/styles/colors'
import { headerStack, bodyStack, proxReg } from 'universal/styles/fonts'
import { centerBlock, imgResponsive } from 'universal/styles/helpers'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

import guarantee from './images/seal_chrome.png'

const baseFontSize = 20

const defaultStyles = {
  section: {
    position: 'relative',
    fontSize: 10,
    paddingTop: `${pxToEm(38, baseFontSize)}em`,
    paddingBottom: `${pxToEm(36, baseFontSize)}em`,
    fontFamily: bodyStack,
    fontWeight: proxReg,
    color: white,
    backgroundColor: orange,
    textAlign: 'center',
    maxWidth: 920,
    margin: '0 auto',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  },
  title1: {
    color: white,
    fontFamily: headerStack,
    fontWeight: 800,
    fontSize: '6em',
    lineHeight: '1em',
  },
  title2: {
    color: white,
    fontFamily: headerStack,
    fontWeight: 700,
    fontSize: '3.5em',
    lineHeight: '1em',
    textTransform: 'uppercase',
  },
  p: {
    fontSize: '1.8em',
    marginTop: 20,
  },
  img: Object.assign({}, centerBlock, imgResponsive, {
    '@media (max-width: 767px)': {
      marginTop: 20,
    },
  }),
}

@Radium
export default class GuaranteeLarge extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    const {
      transparent,
    } = this.props

    const styles = defaultStyles
    let sectionStyles = defaultStyles.section
    let img = guarantee

    if (transparent) {
      sectionStyles = Object.assign({}, defaultStyles.section, {
        backgroundColor: 'transparent',
      })
    }

    return (
      <section style={sectionStyles}>
        <Row>
          <Col xs={12} sm={9}>
            <h1 style={styles.title1}>The 1-Year EGT Guarantee</h1>
            <h1 style={styles.title2}>365 Days of Results, Or We Pay For Your Program</h1>
            <div style={styles.p}>Feel safe and secure as you place your order, knowing that you can get a full refund any time in the next year, if you decide you don’t like the training.</div>
            <div style={styles.p}>We’ve been offering this guarantee for over 7 years, and less than 3% of our players ever take us up on it — because our programs work. So start training now, with the confidence that you’re finally about to get the results you’ve been looking for. We guarantee it.</div>
          </Col>
          <Col xs={12} sm={3}>
            <img style={styles.img} src={img} alt='' />
          </Col>
        </Row>
      </section>
    )
  }
}
