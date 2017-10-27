import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { headerStack, bodyStack } from 'universal/styles/fonts'
import { orange } from 'universal/styles/colors'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

// Components
import Section from 'universal/components/Section/Section'

// Images
import coachImg from './images/coach.png'
import collageImg from './images/collage.png'

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
}

@Radium
export default class MeetCoachAlan extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    return (
      <Section arrowDown={orange}>
        <div style={styles.section}>
          <Grid>
            <Row>
              <Col xs={12} md={5}>
                <h1 style={Object.assign({}, styles.h1, { marginBottom: 30 })} className='hidden-md hidden-lg'>Meet Drew Hanlen</h1>
                <img style={styles.coachImg} src={coachImg} alt='Coach Alan Stein' id='coach' />
              </Col>
              <Col xs={12} md={7}>
                <h1 style={styles.h1} className='hidden-xs hidden-sm'>Meet Drew Hanlen</h1>
                <p>Drew has spent the last half-decade cementing himself as the go-to-guy for NBA players who want to rapidly improve their performance in games.</p>
                <p>He now boasts one of the most impressive client lists in all of basketball, working year-round with players like Bradley Beal, Andrew Wiggins, David Lee, Dwight Howard, Jordan Clarkson, D’Angelo Russel, Zach Lavine, and countless other NBA stars.</p>
                <p>Bottom line: When it comes to completely transforming your in-game performance, Drew is the best on the planet.</p>
                <img style={styles.collageImg} src={collageImg} alt='Collage' />
              </Col>
            </Row>
          </Grid>
        </div>
      </Section>
    )
  }
}
