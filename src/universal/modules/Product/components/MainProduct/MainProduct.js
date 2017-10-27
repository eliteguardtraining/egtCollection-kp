import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { white, orange } from 'universal/styles/colors'
import { imgResponsive, centerBlock } from 'universal/styles/helpers'
import shallowCompare from 'react-addons-shallow-compare'
import Radium from 'radium'
import { headerStack } from 'universal/styles/fonts'

// Components
import ArrowDown from 'universal/components/ArrowDown/ArrowDown'
import CountDown from 'universal/components/Countdown/Countdown'

// Images
import productImage from 'universal/images/packshot.png'
import shadow from './images/bg-shadow.png'

const styles = {
  mainProduct: {
    position: 'relative',
    backgroundColor: white,
    backgroundImage: `url(${shadow})`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'bottom',
    fontFamily: headerStack,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 10,
    '@media (max-width: 767px)': {
      fontSize: 6,
    },
  },
  productImage: Object.assign({}, imgResponsive, centerBlock, {
    paddingBottom: 40,
    maxWidth: 900,
    width: '100%',
    '@media (max-width: 414px)': {
      marginTop: 50,
      paddingBottom: 30,
    },
  }),
  textContainer: {
    margin: '40px 0 20px 0',
  },
  title1: {
    fontSize: '7.5em',
    lineHeight: '1em',
    fontWeight: 800,
  },
  title2: {
    fontSize: '5.5em',
    lineHeight: '1em',
    fontWeight: 600,
  },
  orange: {
    color: orange,
  },
}

@Radium
export default class MainProduct extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const {
      arrowDown,
      bgColor,
      discount,
      offerTimeRemaining,
    } = this.props

    let mainProductStyle = styles.mainProduct
    if (bgColor) {
      mainProductStyle.backgroundColor = bgColor
    }

    return (
      <span>
        <section style={mainProductStyle}>
          {arrowDown && <ArrowDown color={arrowDown} />}
          <Grid>
            <Row>
              <Col xs={12} style={styles.textContainer}>
                <div style={styles.title1}><span style={styles.orange}>Get</span> {discount}% Off <span style={styles.orange}>Both</span></div>
                <div style={styles.title2}>Of KP's Top Programs Until...</div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <CountDown
                  inline
                  timeRemaining={offerTimeRemaining}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <img src={productImage} style={styles.productImage} alt='Main product' />
              </Col>
            </Row>
          </Grid>
        </section>
      </span>
    )
  }
}
