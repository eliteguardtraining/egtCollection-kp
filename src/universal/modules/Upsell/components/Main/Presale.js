import React, { Component, PropTypes } from 'react'
import Logos from '../Logos/Logos'
import MainProduct from '../MainProduct/MainProduct'
import StartDateCountdown from '../StartDateCountdown/StartDateCountdown'
import { orange, bgGrey } from 'universal/styles/colors'
import shallowCompare from 'react-addons-shallow-compare'
import ValidatorPropTypes from 'react-validator-prop-types'

export default class Presale extends Component {
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
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  addToCartTop = () => {
    return this.props.addToCart('top')
  }

  addToCartMiddle = () => {
    return this.props.addToCart('middle')
  }

  addToCartBottom = () => {
    return this.props.addToCart('bottom')
  }

  render() {

    const {
      originalPrice,
      salePrice,
      offerTimeRemaining,
    } = this.props

    return (
      <div>

        <StartDateCountdown
          originalPrice={originalPrice}
          salePrice={salePrice}
          timeRemaining={offerTimeRemaining}
        />

        <MainProduct bgColor={bgGrey} arrowDown={orange} />
        <Logos />

      </div>
    )
  }
}
