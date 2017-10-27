import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { orange, white } from 'universal/styles/colors'
import { headerStack, accuBold } from 'universal/styles/fonts'
import { centerBlock, imgResponsive } from 'universal/styles/helpers'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

import speed from './images/speed.png'
import strength from './images/strength.png'
import spring from './images/spring.png'

const baseFontSize = 20

const styles = {
  header: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(36, baseFontSize)}em`,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: '2em',
    marginBottom: '1.5em',
    lineHeight: '1em',
  },
  img: Object.assign({}, centerBlock, imgResponsive),
  p: {
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  },
  number: {
    width: '1.5em',
    height: '1.5em',
    background: orange,
    borderRadius: '50%',
    display: 'inline-block',
    position: 'absolute',
    left: 0,
    right: 0,
    color: white,
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '1.5em',
  },
  typeHeader: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(36, baseFontSize)}em`,
    textTransform: 'uppercase',
    lineHeight: '1em',
  },
  typeHeaderSmall: {
    display: 'block',
    color: orange,
    fontSize: `${pxToEm(30, 36)}em`,
    marginTop: '.5em',
  },
}

@Radium
export default class WhatsYourJumpType extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const types = [
      {
        type: 'Speed',
        img: speed,
      },
      {
        type: 'Strength',
        img: strength,
      },
      {
        type: 'Spring',
        img: spring,
      },
    ]

    let counter = 0

    return (

      <Grid>

        <Row>
          <Col xs={12}>
            <h2 style={styles.header}>Which Jumping Type Are YOU?</h2>
          </Col>
        </Row>

        <Row>

          {types.map((type) => {
            counter = counter + 1
            let imgStyle = styles.img

            if (counter === 3) {
              imgStyle = Object.assign({}, styles.img, {
                marginTop: '-2em',
                '@media (max-width: 767px)': {
                  marginTop: 'auto',
                },
              })
            }

            return (
              <Col key={`type${counter}`} xs={12} sm={4}>
                <Grid fluid>
                  <Row>
                    <span style={styles.number}>{counter}</span>
                    <Col xs={12} md={4}>
                      <img style={imgStyle} src={type.img} alt={type.type} />
                    </Col>
                    <Col xs={12} md={8}>
                      <h2 style={styles.typeHeader}>
                        <small style={styles.typeHeaderSmall}>Type {counter}:</small>
                        {type.type} Type
                      </h2>
                    </Col>
                  </Row>
                </Grid>
              </Col>
            )
          })}

        </Row>
        <Row>
          <Col xs={12}>
            <p className='jumping-type-text'>That’s why, when you first join EJT, Alan will give you his simple, proven system for discovering your own individual “Jumping Type” in less than 3 minutes. And, once you know your jumping type, Alan will show you the exact training program you should be using — for that Jumping Type — to skyrocket your jumping power.</p>
            <p><strong>Knowing your Jumping Type is like unlocking the secret code to your true jumping potential —</strong> once you unlock it, adding explosive power becomes effortless.</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
