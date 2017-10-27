import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { orange, black } from 'universal/styles/colors'
import { headerStack, bodyStack, proxSemiBold, proxReg, accuBold } from 'universal/styles/fonts'
import { centerBlock, imgResponsive } from 'universal/styles/helpers'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

import img from './images/phase3.png'

const baseFontSize = 20

const styles = {
  section: {
    position: 'relative',
    fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    paddingTop: `${pxToEm(40, baseFontSize)}em`,
    paddingBottom: `${pxToEm(40, baseFontSize)}em`,
    fontFamily: bodyStack,
    fontWeight: proxReg,
    color: black,
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  img: Object.assign({}, centerBlock, imgResponsive),
  title: {
    textAlign: 'center',
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(50, baseFontSize)}em`,
    color: orange,
  },
  subtitle: {
    textAlign: 'center',
    margin: '0 auto 30px auto',
    maxWidth: 700,
    fontWeight: proxSemiBold,
    fontSize: `${pxToEm(24, baseFontSize)}em`,
    lineHeight: '25px',
  },
  items: {
    paddingTop: 15,
  },
  item: {
    marginBottom: 3,
    fontWeight: proxSemiBold,
    fontSize: `${pxToEm(20, baseFontSize)}em`,
  },
  number: {
    color: orange,
    fontStyle: 'italic',
    fontWeight: 600,
    display: 'inline-block',
    width: 28,
  },
}


@Radium
export default class PhaseThree extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    /* eslint-disable */
    const {
      phase,
      count,
    } = this.props
    /* eslint-enable */

    return (
      <section style={styles.section}>
        <Grid>
          <Row>
            <Col xs={12} >
              <Grid fluid>
                <Row>
                  <Col xs={12}>
                    <div style={styles.title}>Working The Ball Screen</div>
                    <div style={styles.subtitle}>How to read every ball screen defender perfectly, and know where (and how) to attack at their weakest point</div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <img style={styles.img} src={img} alt='' />
                  </Col>
                  <Col sm={6}>
                    <div style={styles.items}>
                      <div style={styles.item}><div style={styles.number}>15.</div> Ball Screen Hedge & Score</div>
                      <div style={styles.item}><div style={styles.number}>16.</div> Ball Screen Split & Score</div>
                      <div style={styles.item}><div style={styles.number}>17.</div> Ball Screen Reject</div>
                      <div style={styles.item}><div style={styles.number}>18.</div> Ball Screen Dig</div>
                      <div style={styles.item}><div style={styles.number}>19.</div> Ball Screen Roll, Pop & Pass</div>
                      <div style={styles.item}><div style={styles.number}>20.</div> Ball Screen to Snake Dribble</div>
                      <div style={styles.item}><div style={styles.number}>21.</div> Ball Screen to Back Pedal Attack</div>
                      <div style={styles.item}><div style={styles.number}>22.</div> Ball Screen to Rim Run</div>
                      <div style={styles.item}><div style={styles.number}>23.</div> Ball Screen ICED with Short Roll</div>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}
