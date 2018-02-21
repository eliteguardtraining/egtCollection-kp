import React, { PropTypes, Component } from 'react'
import Downsell from '../components/Downsell/Downsell'
import { connect } from 'react-redux'
import { ensureState } from 'redux-optimistic-ui'
import shallowCompare from 'react-addons-shallow-compare'
import { _getOfferState } from 'universal/utils/calculateOfferState'
import moment from 'moment'

// Images
import downsellProductShot from '../images/downsell_packshot.png'

@connect(mapStateToProps)
export default class DownsellContainer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    jumpType: PropTypes.string,
    email: PropTypes.string,
    affiliate: PropTypes.bool,
  }

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    const startDate = moment('2017 07 06', 'YYYY MM DD').startOf('day').toDate()
    const endDate = moment('2017 08 08', 'YYYY MM DD').endOf('day').toDate()
    const originalPrice = 846
    const salePrice = 7
    const discount = 100 - Math.ceil(salePrice / originalPrice * 100)
    const productId = 'EGTX2PHASE1'
    const productIdVip = 'VIPFREETRIAL'
    const videoId = 'um5ni2s9mh'
    let optionsVideoId
    let countdownText
    const productShot = downsellProductShot
    /* eslint-disable */

    let promo = {}

    if (startDate) {
      const initialOfferStartDate = startDate
      const initialOfferEndDate = endDate
      const reopenOfferStartDate = moment('2017 11 27', 'YYYY MM DD').startOf('day').toDate()
      const reopenOfferEndDate = moment('2017 11 29', 'YYYY MM DD').endOf('day').toDate()

      promo = {
        promoOffer: true,
        initialOfferStartDate,
        initialOfferEndDate,
        reopenOfferStartDate,
        reopenOfferEndDate
      };

      // TODO: this needs to be refactored. This is a hacky way to get state.
      // reselect and calculating in mapStateToProps seems promising
      if (this.props.duringInitialOffer === false &&
        this.props.duringReopenOffer === false &&
        this.props.betweenOffers === false &&
        this.props.afterOffers === false) {
        let offerState = _getOfferState(promo);
        this.props = Object.assign({}, this.props, offerState);
      }
    }

    let {
      email,
      beforeOffer,
      duringInitialOffer,
      duringReopenOffer,
      betweenOffers,
      afterOffers,
      affiliate,
      reopen,
      reopenTwo,
      dispatch,
    } = this.props

    countdownText = 'Sale Ends In...'

    const product = {
      originalPrice,
      salePrice,
      discount,
      productId,
      productIdVip,
      videoId,
      countdownText,
      optionsVideoId,
      productShot,
    }

    return <Downsell {...this.props} {...product} {...promo} />
  }
}

function mapStateToProps(state, props) {
  state = ensureState(state)
  const promo = state.get('promo')
  const leads = state.get('leads')
  const lead = leads.get('lead')
  const location = props.location
  const experiments = state.get('experiments')

  let mappedProps = {
    jumpType: lead.get('jumpType'),
    createdAt: lead.get('createdAt') ? new Date(lead.get('createdAt')) : null,
    split: lead.get('split') || 0,
    email: lead.get('email') || location.query.contact || location.query['contact_fields[email]'] || undefined,
    leadId: lead.get('id'),
    offerTimeRemaining: promo.get('offerTimeRemaining'),
    beforeOffer: promo.get('beforeOffer'),
    duringInitialOffer: promo.get('duringInitialOffer'),
    duringReopenOffer: promo.get('duringReopenOffer'),
    betweenOffers: promo.get('betweenOffers'),
    afterOffers: promo.get('afterOffers'),
    affiliate: (location.query.special === 'aff') ? true : false,
    experiments: experiments.get('experiments') || null,
  }

  return mappedProps
}
