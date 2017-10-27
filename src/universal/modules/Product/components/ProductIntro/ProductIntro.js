import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import PhoneNumber from 'universal/components/PhoneNumber/PhoneNumber'
import Radium from 'radium'
import shallowCompare from 'react-addons-shallow-compare'
import { imgResponsive } from 'universal/styles/helpers'
import { black, orange, white } from 'universal/styles/colors'
import { headerStack } from 'universal/styles/fonts'

// Images
import logo from './images/egtLogo.png'
import introBGSmall from 'universal/images/intro-bg-sm.png'
import bg from './images/bg.png'
import bballTopLeft from './images/bball_top_left.png'
import bballTopRight from './images/bball_top_right.png'
import kp from './images/kp.png'
import emblem from './images/emblem.png'

const styles = {
  Intro: {
    position: 'relative',
    backgroundColor: black,
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no repeat',
    backgroundPosition: 'center center',
    textAlign: 'center',
    position: 'relative',
    padding: '10px 0 50px 0',
    fontFamily: headerStack,
    textTransform: 'uppercase',
    color: white,
    fontSize: 10,
    '@media (max-width: 767px)': {
      fontSize: 6,
      backgroundImage: `url(${introBGSmall})`,
    },
  },
  header: {
    zIndex: 5,
  },
  brand: Object.assign({}, imgResponsive, {
    paddingTop: 10,
    paddingBottom: 20,
    display: 'inline-block',
    maxWidth: 140,
  }),
  imagesLayer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  headerImg: {
    position: 'absolute',
    top: 0,
    maxHeight: '100%',
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
  topLeft: {
    left: 0,
  },
  topRight: {
    right: 0,
  },
  playerImg: {
    '@media (max-width: 999px)': {
      display: 'none',
    },
    '@media (min-width: 767px) and (max-width: 1179px)': {
      maxWidth: 300,
    },
    '@media (min-width: 1180px) and (max-width: 1399px)': {
      maxWidth: 360,
    },
    '@media (min-width: 1400px)': {
      maxWidth: 410,
    },
    height: 'auto',
    top: 'auto',
    bottom: 0,
  },
  playerImgLeft: {
    left: 0,
  },
  playerImgRight: {
    right: 50,
    bottom: 50,
  },
  orange: {
    color: orange,
  },
  title1: {
    fontWeight: 300,
    fontSize: '5em',
    lineHeight: '1em',
    letterSpacing: '10px',
  },
  title2: {
    fontWeight: 800,
    fontSize: '11em',
    lineHeight: '0.85em',
  },
  spacer: {
    height: 20,
  },
}

@Radium
export default class ProductIntro extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    const {
      transparentBg,
    } = this.props

    let introStyles = styles.Intro

    if (transparentBg) {
      introStyles = Object.assign({}, introStyles, {
        background: 'transparent',
        backgroundImage: 'none',
      })
    }

    return (
      <section style={introStyles}>
        <header style={styles.header}>

          <img src={bballTopLeft} style={Object.assign({}, styles.headerImg, styles.topLeft)} alt='BBall Top Left' />
          <img src={bballTopRight} style={Object.assign({}, styles.headerImg, styles.topRight)} alt='BBall Top Right' />
          <img src={kp} style={Object.assign({}, styles.headerImg, styles.playerImg, styles.playerImgLeft)} alt='KP' />
          <img src={emblem} style={Object.assign({}, styles.headerImg, styles.playerImg, styles.playerImgRight)} alt='Emblem' />

          <Grid fluid>
            <Row>
              <Col xs={12}>
                <img style={styles.brand} src={logo} alt='logo' />
                <PhoneNumber />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div style={styles.title1}>Start Your Season Strong:<div style={styles.spacer} /></div>
                <div style={styles.title2}><span style={styles.orange}>Become The Most</span></div>
                <div style={styles.title2}>Dangerous Scoring Threat</div>
                <div style={styles.title2}><span style={styles.orange}>On Your Team</span></div>
                <div style={styles.title1}><div style={styles.spacer} />With Coach KP Potts</div>
              </Col>
            </Row>
          </Grid>

          <div className='clearfix'></div>
        </header>
      </section>
    )
  }
}
