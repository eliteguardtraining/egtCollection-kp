import React, { Component, PropTypes } from 'react'
import DownsellIntro from '../DownsellIntro/DownsellVideoIntro'
import Downsell from './Downsell'
import { addToAbandonList } from '../../../../ducks/abandon'
import shallowCompare from 'react-addons-shallow-compare'
import ValidatorPropTypes from 'react-validator-prop-types'
import { track, page, ADDED_TO_CART, DOWNSELL_PAGE } from 'universal/utils/analytics'

// Components
import FixedPositionBG from 'universal/components/FixedPositionBG/FixedPositionBG'
import BeforeSale from 'universal/components/BeforeSale/BeforeSale'
import SaleEnded from 'universal/components/SaleEnded/SaleEnded'
import FloatingCountdown from 'universal/components/FloatingCountdown/FloatingCountdown'

export default class Main extends Component {
  static propTypes = {
    initialOfferStartDate: ValidatorPropTypes.date,
    initialOfferEndDate: ValidatorPropTypes.date,
    reopenOfferStartDate: ValidatorPropTypes.date,
    reopenOfferEndDate: ValidatorPropTypes.date,
    originalPrice: PropTypes.number,
    salePrice: PropTypes.number,
    downsellPrice: PropTypes.number,
    discount: PropTypes.number,
    offerTimeRemaining: PropTypes.number,
    duringInitialOffer: PropTypes.bool,
    duringReopenOffer: PropTypes.bool,
    dispatch: PropTypes.func,
    downsellProductId: PropTypes.string,
    abandonListId: PropTypes.number,
    email: PropTypes.string,
    betweenOffers: PropTypes.bool,
    afterOffers: PropTypes.bool,
  }

  state = { optionsModalV1Open: false, optionsModalV2Open: false }

  componentDidMount() {

    /* eslint-disable */
    const {
    downsellPrice,
      salePrice,
      abandoned,
      affiliate,
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringReopenOffer,
      duringInitialOffer,
      leadId,
      experiments
  } = this.props
    /* eslint-enable */

    const gaProduct = 'KP Finishing Downsell'

    // const experimentVariation = experiments.get(optionsExperiment);
    // track(VIEWED_EXPERIMENT, {optionsExperiment, experimentVariation});

    page(DOWNSELL_PAGE, {
      gaProduct,
    })

  }

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  addToCart = () => {

    /* eslint-disable */
    const {
      email,
      abandonListId,
      productId,
      originalPrice,
      salePrice,
      experiments,
      dispatch,
      leadId,
      afterOffers,
      betweenOffers,
      duringReopenOffer,
      duringInitialOffer,
    } = this.props
    /* eslint-enable */

    let checkoutUrl = `/checkout/?id=${productId}`
    if (leadId) {
      const leadQuery = `&userId=${leadId}`
      checkoutUrl = `${checkoutUrl}${leadQuery}`
    }

    const phaseOfSale = afterOffers ? 'After offers' : betweenOffers ? 'Between offers' : duringReopenOffer ? 'During reopen offer' : duringInitialOffer ? 'During initial offer' : 'Before offers'
    track(ADDED_TO_CART, {
      addedProducts: productId,
      userId: leadId,
      phase: phaseOfSale,
    })

    if (email) {

      /* eslint-disable */
      const data = {
        email,
        abandonListId,
        productId,
      }
      /* eslint-enable */

      const contactQuery = `&contact=${this.props.email}`
      if (contactQuery) {
        checkoutUrl = `${checkoutUrl}${contactQuery}`
      }

      addToAbandonList(this.props.dispatch, data)
    }

    return document.location = checkoutUrl
  }

  closeModal2 = () => {
    this.setState({
      optionsModalV2Open: false,
    })
  }

  render() {

    /* eslint-disable */
    const {
      betweenOffers,
      beforeOffer,
      afterOffers,
      videoId,
      jumpType,
      experiments,
      headerText,
      headerImgLeft,
      headerImgRight,
      playerLeft,
      playerRight,
      productId,
      productIdVip,
      offerTimeRemaining,
      abandoned,
      countdownText,
    } = this.props
    /* eslint-enable */

    const showTimeRemaining = offerTimeRemaining && !betweenOffers

    return (
      <div>

        {beforeOffer && <BeforeSale />}
        {showTimeRemaining && <FloatingCountdown abandoned={abandoned} timeRemaining={offerTimeRemaining} text={countdownText} />}
        {(betweenOffers || afterOffers) && <SaleEnded />}

        <FixedPositionBG
          url='https://dphk75aogf7d9.cloudfront.net/egt-x-2/bg.png'
        />

        <DownsellIntro
          videoId={videoId}
          transparentBg
        />
        <Downsell {...this.props} addToCart={this.addToCart} />

      </div>
    )
  }
}
