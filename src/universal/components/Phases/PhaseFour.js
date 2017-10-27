import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { orange, black, bgGrey } from 'universal/styles/colors'
import { headerStack, bodyStack, proxSemiBold, proxReg, accuBold } from 'universal/styles/fonts'
import { centerBlock, imgResponsive } from 'universal/styles/helpers'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

import img from './images/phase4.png'

const baseFontSize = 20

const styles = {
  section: {
    backgroundColor: bgGrey,
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
    fontWeight: proxSemiBold,
    marginBottom: 3,
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
export default class PhaseFour extends Component {
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
                    <div style={styles.title}>Transition Attacks</div>
                    <div style={styles.subtitle}>Split the defense wide open to create effortless transition plays</div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6} md={4} mdOffset={2}>
                    <div style={styles.items}>
                      <div style={styles.item}><div style={styles.number}>24.</div> 2 on 1 to Elbow</div>
                      <div style={styles.item}><div style={styles.number}>25.</div> 1 on 1 to Trailer</div>
                      <div style={styles.item}><div style={styles.number}>26.</div> Jump Stop Slide</div>
                      <div style={styles.item}><div style={styles.number}>27.</div> Off Big's Back</div>
                      <div style={styles.item}><div style={styles.number}>28.</div> Fake Mid-Range</div>
                      <div style={styles.item}><div style={styles.number}>29.</div> Eyes on Eyes</div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <img style={styles.img} src={img} alt='' />
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
