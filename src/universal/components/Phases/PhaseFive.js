import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { orange, black } from 'universal/styles/colors'
import { headerStack, bodyStack, proxReg, accuBold, proxSemiBold } from 'universal/styles/fonts'
import { centerBlock, imgResponsive } from 'universal/styles/helpers'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

import img from './images/phase5.png'

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
    paddingTop: 50,
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
export default class PhaseOne extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    /* eslint-disable */
    const {
      phase,
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
                    <div style={styles.title}>Reading & Reacting On Defense</div>
                    <div style={styles.subtitle}>Simple ways to know exactly what your man is going to do next, and force him into making a different move</div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <img style={styles.img} src={img} alt='' />
                  </Col>
                  <Col sm={6}>
                    <div style={styles.items}>
                      <div style={styles.item}><div style={styles.number}>30.</div> Stunt</div>
                      <div style={styles.item}><div style={styles.number}>31.</div> Trace</div>
                      <div style={styles.item}><div style={styles.number}>32.</div> Activate</div>
                      <div style={styles.item}><div style={styles.number}>33.</div> Sprint</div>
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
