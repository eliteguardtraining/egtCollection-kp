import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { bgGrey, white, orange, black } from 'universal/styles/colors'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'
import ValidatorPropTypes from 'react-validator-prop-types'

// Components
import Attention from 'universal/components/Attention/Attention'
import ArrowDown from 'universal/components/ArrowDown/ArrowDown'
import CallToAction from '../CallToAction/CallToAction'
import Guarantee from 'universal/components/Guarantee/GuaranteeLarge'
import MainProduct from '../MainProduct/MainProduct'
import MainProductAlt from '../MainProductAlt/MainProductAlt'
import HTFOAPartOne from '../HTFOA/HTFOAPartOne'
import HTFOAPartTwo from '../HTFOA/HTFOAPartTwo'

const styles = {
  blackText: {
    color: black,
  },
  howToBecome: {
    color: white,
    textTransform: 'uppercase',
    fontWeight: 800,
    lineHeight: '.9em',
    marginTop: -5,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    fontSize: `${pxToEm(105)}rem`,
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(40)}rem`,
    },
  },
  finisherAround: {
    textTransform: 'uppercase',
    fontWeight: 800,
    lineHeight: '.9em',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    fontSize: `${pxToEm(80)}rem`,
    '@media (max-width: 767px)': {
      lineHeight: '38px',
      fontWeight: 500,
      fontSize: `${pxToEm(32)}rem`,
    },
  },
  heresHow: {
    padding: '25px 0 10px 0',
    textTransform: 'uppercase',
    fontSize: 70,
    fontWeight: 700,
    '@media (max-width: 767px)': {
      fontSize: 30,
    },
  },
}

@Radium
export default class LongSale extends Component {
  static propTypes = {
    initialOfferStartDate: ValidatorPropTypes.date,
    initialOfferEndDate: ValidatorPropTypes.date,
    reopenOfferStartDate: ValidatorPropTypes.date,
    reopenOfferEndDate: ValidatorPropTypes.date,
    originalPrice: PropTypes.number,
    salePrice: PropTypes.number,
    discount: PropTypes.number,
    offerTimeRemaining: PropTypes.number,
    duringInitialOffer: PropTypes.bool,
    duringReopenOffer: PropTypes.bool,
    dispatch: PropTypes.func,
    productId: PropTypes.string,
    email: PropTypes.string,
    betweenOffers: PropTypes.bool,
    afterOffers: PropTypes.bool,
    addToCart: PropTypes.func,
  }

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    return (
      <div>

        <Attention pureText>
          <div style={styles.howToBecome}>How To Break Anybody</div>
          <div style={styles.finisherAround}>Down Off The Dribble And</div>
          <div style={styles.finisherAround}><span style={styles.blackText}>Get To The Rim At Will</span></div>
        </Attention>

        <MainProduct bgColor={bgGrey} arrowDown={orange} />

        <HTFOAPartOne />

        <MainProductAlt />

        <Attention pureText>
          <ArrowDown color='#f9f9f8' />
          <div style={styles.heresHow}>Here's How It Works</div>
        </Attention>

        <HTFOAPartTwo />

        <Guarantee theme='dark' />

        <CallToAction
          {...this.props}
        />

      </div>
    )
  }
}
