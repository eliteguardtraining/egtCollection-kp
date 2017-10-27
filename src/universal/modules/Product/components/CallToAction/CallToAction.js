import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { orange, black, white } from 'universal/styles/colors'
import { headerStack } from 'universal/styles/fonts'
import pxToEm from 'universal/utils/pxToEm'
import { centerBlock, imgResponsive } from 'universal/styles/helpers'
import shallowCompare from 'react-addons-shallow-compare'
import VisibilitySensor from 'react-visibility-sensor'
import { track } from 'universal/utils/analytics'

// Components
import AddToCartButton from 'universal/components/AddToCartButton/AddToCartButton'
import ArrowDown from 'universal/components/ArrowDown/ArrowDown'
import CountDown from 'universal/components/Countdown/Countdown'

// Images
import cards from 'universal/components/AddToCartButton/images/payments.png'
import securePayments from 'universal/images/secure_payments.png'
import leftRightArrows from './images/left_right_arrows_orange.png'
import packshot from 'universal/images/packshot.png'

const baseFontSize = 65

const styles = {
  container: {
    position: 'relative',
    background: 'rgb(244,240,240)',
  },
  ctaContainer: {
    backgroundImage: `url(${leftRightArrows})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% calc(100% - 50px)',
    maxWidth: 800,
    margin: '-50px auto 0 auto',
    textAlign: 'center',
    paddingTop: 60,
    '@media (max-width: 768px)': {
      backgroundImage: 'none',
    },
  },
  section: {
    background: white,
    maxWidth: 1000,
    margin: '0 auto',
    padding: '50px 0 0 0',
    textAlign: 'center',
    fontSize: `${pxToEm(baseFontSize * .5, 16)}rem`,
    '@media (min-width: 375px)': {
      fontSize: `${pxToEm(baseFontSize * .65, 16)}rem`,
    },
    '@media (min-width: 414px)': {
      fontSize: `${pxToEm(baseFontSize * .75, 16)}rem`,
    },
    '@media (min-width: 768px)': {
      fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    },
  },
  packshot: {
    width: 800,
    display: 'block',
    margin: '0 auto 50px auto',
    maxWidth: '90%',
  },
  normalPrice: {
    fontFamily: headerStack,
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: `${pxToEm(65, baseFontSize)}em`,
    color: '#9a9a9a',
    marginTop: '0',
    lineHeight: '.9em',
  },
  priceToday: {
    fontFamily: headerStack,
    fontWeight: 800,
    textTransform: 'uppercase',
    fontSize: `${pxToEm(100, baseFontSize)}em`,
    color: orange,
    lineHeight: '.9em',
  },
  priceDesc: {
    fontFamily: headerStack,
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: `${pxToEm(70, baseFontSize)}em`,
    color: black,
    margin: '5px auto 30px auto',
    lineHeight: '.9em',
    maxWidth: 700,
  },
  blackText: {
    color: black,
    fontWeight: 800,
  },
  img: Object.assign({}, centerBlock, imgResponsive),
  securePayments: {
    maxWidth: '90%',
    margin: '0 auto 40px auto',
  },
}

@Radium
export default class CallToAction extends Component {
  static propTypes = {
    originalPrice: PropTypes.number.isRequired,
    salePrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    /* eslint-disable */
    const {
      originalPrice,
      salePrice,
      discount,
      abandonListId,
      productId,
      dispatch,
      email,
      addToCart,
      experiments,
      offerTimeRemaining,
    } = this.props
    /* eslint-enable */

    const visibilityChange = (isVisible) => {
      isVisible && track('Scrolled to Call To Action')
    }

    return (
      <div style={styles.container}>
        <ArrowDown color={orange} />
        <div style={styles.section}>
          <Row>
            <Col xs={12}>
              <h4 style={styles.normalPrice}>Normally ${originalPrice / 2} Each</h4>
              <h2 style={styles.priceToday}>Right Now ${(salePrice).toFixed(2)} For Both</h2>
              <h3 style={styles.priceDesc}>
                Your {discount}% Discount Ends In...
              </h3>
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
              <img src={packshot} alt='Packshot' style={styles.packshot} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <VisibilitySensor onChange={visibilityChange}>
                <div style={styles.ctaContainer}>
                  <Row>
                    <Col xs={12}>
                      <AddToCartButton
                        yellowRectangle
                        productId={productId}
                        abandonListId={abandonListId}
                        dispatch={dispatch}
                        email={email}
                        addToCart={addToCart}
                        cards={false}
                        circle={false}
                      />
                    </Col>
                  </Row>
                </div>
              </VisibilitySensor>

            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{ textAlign: 'center', marginTop: 40 }}>
              <div>
                <img style={styles.img} src={cards} alt='Payment types' />
              </div>
              <div style={styles.securePayments}>
                <img style={styles.img} src={securePayments} alt='Secure payments' />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
