import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { headerStack, bodyStack } from 'universal/styles/fonts'
import { black, mutedText } from 'universal/styles/colors'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

// Components
import Section from 'universal/components/Section/Section'

// Images
import coachImg from './images/coach.png'

const styles = {
  section: {
    position: 'relative',
    fontSize: `${pxToEm(20)}rem`,
    fontFamily: bodyStack,
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  coachImg: {
    maxWidth: '100%',
    maxHeight: 600,
    display: 'block',
    margin: '0 auto',
  },
  collageImg: {
    display: 'block',
    margin: '30px auto 60px auto',
    maxWidth: '100%',
  },
  h1: {
    color: mutedText,
    opacity: .55,
    textTransform: 'uppercase',
    fontSize: `${pxToEm(50)}em`,
    lineHeight: '60px',
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(40)}em`,
      lineHeight: '50px',
    },
    fontFamily: headerStack,
    marginBottom: 0,
    textAlign: 'center',
  },
  small: {
    fontStyle: 'italic',
    textAlign: 'center',
    display: 'inline-block',
    marginTop: '1em',
  },
  lastParagraph: {
    marginBottom: 60,
  },
  bold: {
    fontWeight: 'bold',
  },
}

@Radium
export default class ChangedTheWorld extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    return (
      <Section arrowDown={black}>
        <div style={styles.section}>
          <Grid>
            <Row>
              <Col xs={12} md={5}>
                <h1 style={Object.assign({}, styles.h1, { marginBottom: 30 })} className='hidden-md hidden-lg'>8 Programs That Changed The Basketball Training World Forever</h1>
                <img style={styles.coachImg} src={coachImg} alt='Coach Alan Stein' id='coach' />
              </Col>
              <Col xs={12} md={7}>
                <h1 style={styles.h1} className='hidden-xs hidden-sm'>8 Programs That Changed The Basketball Training World Forever</h1>
                <p><span style={styles.bold}>In 2017, the original Elite Guard Training programs —</span> my life’s work, and programs that changed the basketball training world forever — will be retired, and the next wave of EGT training, from coaches like <span style={styles.bold}>Drew Hanlen, Damin Altizer, Alan Stein, and KP Potts</span>, will take the spotlight. </p>
                <p style={styles.bold}>This Platinum package is your last chance to grab your copy of those programs before they’re locked back inside the vault for good. </p>

              </Col>
            </Row>
          </Grid>
        </div>
      </Section>
    )
  }
}
