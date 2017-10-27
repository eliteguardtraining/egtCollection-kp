import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import PhoneNumber from 'universal/components/PhoneNumber/PhoneNumber'
import Radium from 'radium'
import shallowCompare from 'react-addons-shallow-compare'
import { imgResponsive } from 'universal/styles/helpers'
import { black, white, orange } from 'universal/styles/colors'
import { headerStack, accuBold, accuMed } from 'universal/styles/fonts'
import pxToEm from 'universal/utils/pxToEm'
import introBG from 'universal/images/intro-bg.png'
import introBGSmall from 'universal/images/intro-bg-sm.png'
import logo from './images/egtLogo.png'

const styles = {
  Intro: {
    backgroundColor: black,
    backgroundImage: `url(${introBG})`,
    backgroundSize: '100% 100%',
    textAlign: 'center',
    position: 'relative',
    '@media (max-width: 767px)': {
      backgroundImage: `url(${introBGSmall})`,
    },
  },
  header: {
    position: 'relative',
    zIndex: 5,
  },
  brand: Object.assign({}, imgResponsive, {
    paddingTop: '7px',
    paddingBottom: '14px',
    float: 'left',
  }),
  imagesLayer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  rightIntroImg: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
  },
  bigDude: {
    height: '100%',
  },
  introTextH3: {
    fontFamily: headerStack,
    fontSize: `${pxToEm(60)}rem`,
    fontWeight: accuMed,
    textTransform: 'uppercase',
    lineHeight: '.75em',
    color: white,
    marginTop: '1em',
    marginBottom: 0,
  },
  introTextH1: {
    fontFamily: headerStack,
    fontSize: `${pxToEm(110)}rem`,
    fontWeight: accuBold,
    textTransform: 'uppercase',
    lineHeight: '.85em',
    color: orange,
    marginTop: 0,
    marginBottom: '.1em',
  },
  introTextH2: {
    fontFamily: headerStack,
    fontSize: `${pxToEm(95)}rem`,
    fontWeight: accuBold,
    textTransform: 'uppercase',
    lineHeight: '.85em',
    color: white,
    marginTop: -10,
    marginBottom: 0,
    paddingBottom: '1em',
  },
}


@Radium
export default class OptionsIntro extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    return (
      <section style={styles.Intro}>
        <header style={styles.header}>
          <Grid>
            <Row>
              <Col xs={6} md={4} mdOffset={2}>
                <img style={styles.brand} src={logo} alt='logo' />
              </Col>
              <Col xs={6} md={4}>
                <PhoneNumber float='right' />
              </Col>
            </Row>
          </Grid>
        </header>
        <div>
          <h1 style={styles.introTextH1}>
            Which package
          </h1>
          <h2 style={styles.introTextH2}>
            is right for you?
          </h2>
        </div>

      </section>
    )
  }
}
