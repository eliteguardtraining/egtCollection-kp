import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import PhoneNumber from 'universal/components/PhoneNumber/PhoneNumber'
import Radium from 'radium'
import shallowCompare from 'react-addons-shallow-compare'
import { imgResponsive } from 'universal/styles/helpers'
import { black, white, orange } from 'universal/styles/colors'
import { headerStack, accuBlack } from 'universal/styles/fonts'
import pxToEm from 'universal/utils/pxToEm'

const headerBg = 'https://dphk75aogf7d9.cloudfront.net/elite-dribbling-scoring/header_bg.png'
import logo from './images/egtLogo.png'

const styles = {
  Intro: {
    backgroundImage: `url(${headerBg})`,
    backgroundColor: black,
    backgroundSize: 'cover',
    textAlign: 'center',
    position: 'relative',
    paddingBottom: 50,
  },
  header: {
    position: 'relative',
    zIndex: 5,
  },
  brand: Object.assign({}, imgResponsive, {
    paddingTop: '7px',
    paddingBottom: '14px',
    float: 'right',
    '@media (min-width: 768px)': {
      float: 'right',
    },
  }),
  headerImg: {
    position: 'absolute',
    top: 0,
    zIndex: 0,
    height: '100%',
    '@media (max-width: 1279px)': {
      display: 'none',
    },
  },
  headerImgLeft: {
    left: 0,
  },
  headerImgRight: {
    right: 0,
  },
  bigDude: {
    height: '100%',
  },
  introTextH3: {
    fontFamily: headerStack,
    fontSize: `${pxToEm(120)}em`,
    '@media (max-width: 768px)': {
      fontSize: `${pxToEm(90)}em`,
    },
    '@media (max-width: 500px)': {
      fontSize: `${pxToEm(70)}em`,
    },
    fontWeight: accuBlack,
    textTransform: 'uppercase',
    lineHeight: '.75em',
    color: white,
    marginTop: 0,
    marginBottom: 0,
  },
  introTextH1: {
    fontFamily: headerStack,
    fontSize: `${pxToEm(165)}em`,
    '@media (max-width: 768px)': {
      fontSize: `${pxToEm(120)}em`,
    },
    '@media (max-width: 500px)': {
      fontSize: `${pxToEm(100)}em`,
    },
    fontWeight: accuBlack,
    textTransform: 'uppercase',
    lineHeight: '.9em',
    color: orange,
    marginTop: 0,
    marginBottom: 10,
  },
  introTextH2: {
    fontFamily: headerStack,
    fontSize: `${pxToEm(120)}em`,
    '@media (max-width: 768px)': {
      fontSize: `${pxToEm(90)}em`,
    },
    '@media (max-width: 500px)': {
      fontSize: `${pxToEm(70)}em`,
    },
    fontWeight: accuBlack,
    textTransform: 'uppercase',
    lineHeight: '1em',
    color: white,
    marginTop: -10,
    marginBottom: 0,
    paddingBottom: '.4em',
  },
}


@Radium
export default class OptionsIntro extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    /* eslint-disable */
    const {
      videoId,
      headerText,
      headerImgLeft,
      headerImgRight,
    } = this.props
    /* eslint-enable */

    return (
      <section style={styles.Intro}>
        <header style={styles.header}>
          <Grid>
            <Row>
              <Col xs={6} md={4} mdOffset={2}>
                <img style={styles.brand} src={logo} alt='logo' />
              </Col>
              <Col xs={6} md={4}>
                <PhoneNumber float='left' />
              </Col>
            </Row>
          </Grid>
        </header>
        <div style={styles.header}>
          <h3 style={styles.introTextH3}>
            Get a Massive
          </h3>
          <h1 style={styles.introTextH1}>
            65% Off
          </h1>
          <h2 style={styles.introTextH2}>
            Your Choice Of...
          </h2>
        </div>

      </section>
    )
  }
}
