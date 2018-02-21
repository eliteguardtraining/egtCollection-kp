import React, { Component, PropTypes } from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import ValidatorPropTypes from 'react-validator-prop-types'
import { track, page, ADDED_TO_CART, PROMO_PAGE } from 'universal/utils/analytics'

// Components
import ProductIntro from '../ProductIntro/ProductIntro'
import LongSale from './LongSale'

export default class Main extends Component {

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
  }

  state = { optionsModalV2Open: false }

  componentDidMount() {

    const {
      originalPrice,
      salePrice,
      affiliate,
      betweenOffers,
      afterOffers,
      duringReopenOffer,
      duringInitialOffer,
    } = this.props

    let gaProduct = 'KP Sale'
    if (salePrice === originalPrice) {
      gaProduct = `${gaProduct} ${originalPrice}`
    } else {
      gaProduct = `${gaProduct} ${salePrice}`
    }
    if (duringReopenOffer) {
      gaProduct = `${gaProduct} Reopen`
    }
    if (affiliate) {
      gaProduct = `${gaProduct} Aff`
    }

    const phase = afterOffers ? 'After offers' : betweenOffers ? 'Between offers' : duringReopenOffer ? 'During reopen offer' : duringInitialOffer ? 'During initial offer' : 'Before offers'
    page(PROMO_PAGE, {
      salePrice,
      affiliate,
      gaProduct,
      phase,
    })

  }

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  addToCart = () => {

    const {
      email,
      betweenOffers,
      afterOffers,
      duringReopenOffer,
      duringInitialOffer,
      leadId,
      productId,
    } = this.props

    let checkoutUrl = `/checkout/?id=${productId}`
    if (leadId) {
      const leadQuery = `&userId=${leadId}`
      checkoutUrl = `${checkoutUrl}${leadQuery}`
    }

    let optionsUrl = '/options?'

    if (this.props.location.query.special === 'rt') {
      optionsUrl += '&special=rt'
    }

    if (this.props.location.query.special === 'test') {
      optionsUrl += '&special=test'
    }

    const phaseOfSale = afterOffers ? 'After offers' : betweenOffers ? 'Between offers' : duringReopenOffer ? 'During reopen offer' : duringInitialOffer ? 'During initial offer' : 'Before offers'
    track(ADDED_TO_CART, {
      addedProducts: productId,
      userId: leadId,
      phase: phaseOfSale,
    })

    if (email) {
      const contactQuery = `&contact=${this.props.email}`
      if (contactQuery) {
        checkoutUrl = `${checkoutUrl}${contactQuery}`
      }
    }

    return document.location = checkoutUrl

  }

  render() {

    const {
      jumpType,
      headerImgLeft,
      headerImgRight,
      playerLeft,
      playerRight,
      videoId,
    } = this.props

    return (
      <div>

        <ProductIntro
          videoId={videoId}
          jumpType={jumpType}
          headerImgLeft={headerImgLeft}
          headerImgRight={headerImgRight}
          playerLeft={playerLeft}
          playerRight={playerRight}
        />

        <LongSale {...this.props} addToCart={this.addToCart} />

      </div>
    )
  }
}
