import React, { PropTypes, Component } from 'react'
import Promo from 'universal/modules/Product/components/Product/Promo'
import { connect } from 'react-redux'
import { ensureState } from 'redux-optimistic-ui'
import shallowCompare from 'react-addons-shallow-compare'
import { _getOfferState } from 'universal/utils/calculateOfferState'
import moment from 'moment'
import GLOBAL_NOW from 'universal/utils/dateOverride'

@connect(mapStateToProps)
export default class PromoContainer extends Component {

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

    const startDate = moment('2017 10 01', 'YYYY MM DD').startOf('day').toDate()
    const endDate = moment('2017 11 12', 'YYYY MM DD').endOf('day').toDate()
    const originalPrice = 67 * 2
    const salePrice = 33.50
    let discount = Math.ceil(100 - (salePrice / originalPrice * 100))
    const productId = 'KPCOMBO3350'
    const productIdVip = 'VIPFREETRIAL'
    const videoId = 'v97efnf3hn'
    let optionsVideoId
    let countdownText

    let promo = {}

    if (startDate) {

      const initialOfferStartDate = startDate
      const initialOfferEndDate = endDate
      const reopenOfferStartDate = moment('2017 12 28', 'YYYY MM DD').startOf('day').toDate()
      const reopenOfferEndDate = moment('2017 12 30', 'YYYY MM DD').endOf('day').toDate()

      promo = {
        promoOffer: true,
        initialOfferStartDate,
        initialOfferEndDate,
        reopenOfferStartDate,
        reopenOfferEndDate,
      }

      // TODO: this needs to be refactored. This is a hacky way to get state.
      // reselect and calculating in mapStateToProps seems promising
      if (this.props.duringInitialOffer === false &&
        this.props.duringReopenOffer === false &&
        this.props.betweenOffers === false &&
        this.props.afterOffers === false) {
        const offerState = _getOfferState(promo)
        this.props = Object.assign({}, this.props, offerState)
      }
    }

    const {
      affiliate,
      backdoor,
      beforeOffer,
      betweenOffers,
      duringInitialOffer,
      duringReopenOffer,
      reopen,
      reopenTwo,
    } = this.props

    let dollarOff = 0

    if (beforeOffer || duringInitialOffer || duringReopenOffer || affiliate || reopen || reopenTwo || backdoor) {

      dollarOff = originalPrice - salePrice
      discount = Math.ceil(100 - (salePrice / originalPrice * 100))
      countdownText = `$${(dollarOff).toFixed(2)} Off Sale <br class="hidden-sm hidden-xs"/> Ends In...`

      if (betweenOffers) {
        countdownText = 'Sale has <br class="hidden-sm hidden-xs"/> Ended...'
      }

    }

    if (beforeOffer) {
      countdownText = 'Sale Begins <br class="hidden-sm hidden-xs"/> In...'
    }

    const product = {
      originalPrice,
      salePrice,
      discount,
      productId,
      productIdVip,
      videoId,
      countdownText,
      optionsVideoId,
      dollarOff,
    }

    return <Promo {...this.props} {...product} {...promo} />
  }
}

function mapStateToProps(state, props) {
  state = ensureState(state)
  const promo = state.get('promo')
  const leads = state.get('leads')
  const lead = leads.get('lead')
  const location = props.location
  const experiments = state.get('experiments')

  const mappedProps = {
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
    ignoreTimer: location.query.special === 'rt' && GLOBAL_NOW.isAfter(moment('2016 12 09', 'YYYY MM DD').startOf('day')) && GLOBAL_NOW.isBefore(moment('2016 12 11', 'YYYY MM DD').endOf('day')),
    backdoor: location.query.special === 'test' || (location.query.special === 'rt' && GLOBAL_NOW.isAfter(moment('2016 12 09', 'YYYY MM DD').startOf('day')) && GLOBAL_NOW.isBefore(moment('2016 12 11', 'YYYY MM DD').endOf('day'))),
    affiliate: location.query.special === 'aff',
    experiments: experiments.get('experiments') || null,
  }

  return mappedProps
}
