import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { white, bgGrey, orange } from 'universal/styles/colors'
import { headerStack, bodyStack, proxReg, accuBold } from 'universal/styles/fonts'
import { centerBlock, imgResponsive } from 'universal/styles/helpers'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

import guarantee from './images/seal-big.png'
import guaranteeDark from './images/guaranteeDark.png'

const baseFontSize = 20

const stylesLight = {
  contentContainer: {
    maxWidth: 1000,
    margin: '0 auto',
  },
  section: {
    position: 'relative',
    fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    paddingTop: `${pxToEm(38, baseFontSize)}em`,
    paddingBottom: `${pxToEm(36, baseFontSize)}em`,
    fontFamily: bodyStack,
    fontWeight: proxReg,
    backgroundColor: bgGrey,
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  },
  h1: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(68, baseFontSize)}em`,
    marginBottom: '0',
    lineHeight: '1em',
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(36, baseFontSize)}em`,
    },
  },
  p: {
    marginTop: '.5em',
    marginBottom: 0,
  },
  img: Object.assign({}, centerBlock, imgResponsive, {
    maxHeight: 200,
    '@media (max-width: 767px)': {
      marginTop: 20,
    },
  }),
}

/* eslint-disable */
const stylesDark = {
  contentContainer: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '0 30px',
  },
  section: {
    position: 'relative',
    fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    paddingTop: `${pxToEm(38, baseFontSize)}em`,
    paddingBottom: `${pxToEm(36, baseFontSize)}em`,
    fontFamily: bodyStack,
    fontWeight: proxReg,
    color: white,
    backgroundColor: orange,
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  },
  h1: {
    color: white,
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(52, baseFontSize)}em`,
    marginBottom: '0',
    lineHeight: '1em',
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(36, baseFontSize)}em`,
    },
  },
  p: {
    marginTop: '.5em',
    marginBottom: 0,
    fontSize: 18,
  },
  img: Object.assign({}, centerBlock, imgResponsive, {
    '@media (max-width: 767px)': {
      marginTop: 30,
    },
  }),
}
/* eslint-disable */

@Radium
export default class GuaranteeLarge extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    /* eslint-disable */
    const {
      contained,
      theme,
    } = this.props
    /* eslint-enable */

    let styles = stylesLight
    let img = guarantee

    if (theme === 'dark') {
      styles = stylesDark
      img = guaranteeDark
    }

    return (
      <section style={styles.section}>

        <div style={styles.contentContainer}>
          <Row>
            <Col xs={12} sm={8}>
              <h1 style={styles.h1}>The 1 Year EGT Guarantee</h1>
              <p style={styles.p}>
                Feel completely safe and secure as you place your order, knowing you can get a full refund at any time in the next year if you decide the program isn't for you.
                </p>
              <p style={styles.p}>
                Just shoot us a quick email at helpdesk@eliteguardtraining.com, or call us at 1-866-259-2456 and we’ll give you every penny back, no questions asked.
              </p>
            </Col>
            <Col xs={12} sm={4}>
              <img style={styles.img} src={img} alt='' />
            </Col>
          </Row>
        </div>

      </section>
    )
  }
}
