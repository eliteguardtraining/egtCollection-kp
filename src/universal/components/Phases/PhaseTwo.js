import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { orange, black, bgGrey } from 'universal/styles/colors'
import { headerStack, bodyStack, proxReg, proxSemiBold, accuBold } from 'universal/styles/fonts'
import { centerBlock, imgResponsive } from 'universal/styles/helpers'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

import img from './images/phase2.png'

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
    width: 25,
  },
}

@Radium
export default class PhaseTwo extends Component {
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
                    <div style={styles.title}>Attacking The Middle</div>
                    <div style={styles.subtitle}>Hit the perfect opening in the defense on every set for easy fnishes at the rim, dump-down and kick-out assists, mid-range pull ups, runners and floaters</div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6} md={4} mdOffset={2}>
                    <div style={styles.items}>
                      <div style={styles.item}><div style={styles.number}>6.</div> Middle Penetration to Dump Down</div>
                      <div style={styles.item}><div style={styles.number}>7.</div> Middle Penetration to Corner</div>
                      <div style={styles.item}><div style={styles.number}>8.</div> Middle Penetration Fill Top</div>
                      <div style={styles.item}><div style={styles.number}>9.</div> Penetrate & Fill</div>
                      <div style={styles.item}><div style={styles.number}>10.</div> Penetrate to Kick Up</div>
                      <div style={styles.item}><div style={styles.number}>11.</div> Penetrate to Backdoor</div>
                      <div style={styles.item}><div style={styles.number}>12.</div> Dribble At & Back Door</div>
                      <div style={styles.item}><div style={styles.number}>13.</div> Dribble At to Dribble Hand Off</div>
                      <div style={styles.item}><div style={styles.number}>14.</div> Fake Screen Away</div>
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
