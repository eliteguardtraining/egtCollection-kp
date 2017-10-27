import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { orange, black } from 'universal/styles/colors'
import { headerStack, bodyStack, proxReg, accuBold } from 'universal/styles/fonts'
import { centerBlock, imgResponsive } from 'universal/styles/helpers'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'
import Section from 'universal/components/Section/Section'

import img from './images/Screen-1.png'

const baseFontSize = 20

const styles = {
  section: {
    fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    fontFamily: bodyStack,
    fontWeight: proxReg,
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  h3: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    color: black,
    fontSize: `${pxToEm(47, baseFontSize)}em`,
    textAlign: 'center',
    marginBottom: '.25em',
    marginTop: '.25em',
    lineHeight: '1em',
  },
  h1: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(47, baseFontSize)}em`,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '.5em',
    lineHeight: '1em',
    color: orange,
  },
  img: Object.assign({}, centerBlock, imgResponsive),
  p: {
    fontFamily: bodyStack,
    textAlign: 'center',
    fontSize: '1em',
  },
}

@Radium
export default class DownsellProduct extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const {
      product,
    } = this.props
    return (
      <Section customStyles={styles.section} even>
        <Grid>
          <Row>
            <Col xs={12} lg={10} lgOffset={1}>

              <Grid fluid>
                <Row>
                  <Col sm={5}>
                    <img style={styles.img} src={product.img} alt='' />
                  </Col>
                  <Col sm={7}>
                    <h3 style={styles.h3}>{product.subtitle}</h3>
                    <h1 style={styles.h1}>{product.title}</h1>
                    <p style={styles.p}>{product.description}</p>
                  </Col>
                </Row>
              </Grid>

            </Col>
          </Row>
        </Grid>
      </Section>
    )
  }
}
