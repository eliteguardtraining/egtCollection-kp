import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { headerStack, bodyStack, accuMed } from 'universal/styles/fonts'
import { lightGrey } from 'universal/styles/colors'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'
import Section from 'universal/components/Section/Section'

import alanimg from './images/coach.png'

const styles = {
  section: {
    position: 'relative',
    fontSize: `${pxToEm(20)}rem`,
    fontFamily: bodyStack,
    marginBottom: -56,
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  alan: {
    height: 600,
  },
  h1: {
    fontSize: `${pxToEm(50)}em`,
    lineHeight: '60px',
    fontFamily: headerStack,
    marginBottom: 0,
    textAlign: 'center',
  },
  h2: {
    fontSize: `${pxToEm(30)}em`,
    lineHeight: '42px',
    marginBottom: 40,
    fontWeight: accuMed,
    fontFamily: headerStack,
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
}

@Radium
export default class MeetCoachAlan extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    return (
      <Section arrowDown={lightGrey}>
        <div style={styles.section}>
          <Grid>
            <Row>
              <Col xs={12} md={5}>
                <img style={styles.alan} src={alanimg} alt='Coach Alan Stein' id='coach' className='hidden-xs hidden-sm' />
              </Col>
              <Col xs={12} md={7}>
                <h1 style={styles.h1}>Meet Damin Altizer</h1>
                <h2 style={styles.h2}>Who Consistently Creates Beasts In The Backcourt</h2>
                <p>When a pro team needs to kick their point guard production into high gear, Damin Altizer is the first guy they call... For one very specific reason:</p>
                <p>Damin has developed a complete arsenal of advanced point guard tactics that supercharge your back court instincts, offensive skills, and court vision taking you from average up & comer to pro ready point guard.</p>
                <p>Damin is a former All-State point guard and ACC Champion at the University Of Virginia.</p>
                <p style={styles.lastParagraph}>His training resume includes NBA guards, Euro league superstars, D1 standouts and high school All Americans.</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </Section>
    )
  }
}
