import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { white, black } from 'universal/styles/colors'
import { headerStack, bodyStack } from 'universal/styles/fonts'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

import issacRight from './images/issacRight.png'
import videoFrame from './images/VIDEO-FRAME.png'

const styles = {
  section: {
    position: 'relative',
    fontSize: `${pxToEm(20)}rem`,
    fontFamily: bodyStack,
    paddingTop: `${pxToEm(50, 20)}em`,
    paddingBottom: `${pxToEm(50, 20)}em`,
    backgroundColor: black,
    color: white,
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  issac: {
    position: 'absolute',
    top: 0,
    right: '-15%',
    height: '100%',
  },
  h1: {
    fontSize: `${pxToEm(50, 20)}em`,
    fontFamily: headerStack,
    textAlign: 'center',
    lineHeight: '1em',
    textTransform: 'uppercase',
  },
  h3: {
    fontSize: `${pxToEm(36, 20)}em`,
    fontFamily: headerStack,
    textAlign: 'center',
    lineHeight: '1em',
    marginBottom: '.75em',
    textTransform: 'uppercase',
  },
  videoFrame: {
    maxWidth: 624,
    margin: '0 auto 20px',
    padding: 15,
    background: `#232323 url(${videoFrame}) no-repeat`,
    '@media (max-width: 768px)': {
      maxWidth: '90%',
    },
  },
  wistia_responsive_padding: {
    padding: '56.25% 0 0 0',
    position: 'relative',
  },
  wistia_responsive_wrapper: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  wistia_embed: {
    height: '100%',
    width: '100%',
  },
  youtube: {
    height: '100%',
    width: '100%',
  },
}

@Radium
export default class MeetSirIssac extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    return (
      <section style={styles.section}>
        <img style={styles.issac} src={issacRight} alt='' className='issac-img' />
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <h1 style={styles.h1}>Meet Sir Issac</h1>
              <h3 style={styles.h3}>He’ll Be Your Elite Jump Training Tour Guide...</h3>
              <p>Standing at only 5’10”, “Sir” Issac White holds the crown as one of the best dunkers on the planet today. Issac finishes dunks that NBA players — who stand half a foot taller — can only dream of, which is why we brought him in to demonstrate the Elite Jump Training workouts — and, to show you what life is like above the rim...</p>

              <div style={styles.videoFrame}>
                <div style={styles.wistia_responsive_padding} className='wistia_responsive_wrapper'>
                  <div style={styles.wistia_responsive_wrapper} className='wistia_responsive_wrapper'>
                    <div style={styles.wistia_embed} className='wistia_embed videoFoam=true' >
                      <iframe style={styles.youtube} src='https://www.youtube.com/embed/JYrToIRypkE' frameBorder='0' allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}
