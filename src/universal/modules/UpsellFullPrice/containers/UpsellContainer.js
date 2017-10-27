import React, { PropTypes, Component } from 'react'
import Promo from 'universal/modules/UpsellFullPrice/components/Upsell/Upsell'
import { connect } from 'react-redux'
import { ensureState } from 'redux-optimistic-ui'
import shallowCompare from 'react-addons-shallow-compare'
import moment from 'moment'
import GLOBAL_NOW from 'universal/utils/dateOverride'

// Images
const headerImgLeft = 'https://dphk75aogf7d9.cloudfront.net/elite-dribbling-scoring/header_left.png'
const headerImgRight = 'https://dphk75aogf7d9.cloudfront.net/elite-dribbling-scoring/header_right.png'

@connect(mapStateToProps)
export default class UpsellContainer extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    jumpType: PropTypes.string,
    email: PropTypes.string,
    affiliate: PropTypes.bool,
    abandon: PropTypes.bool,
  }

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    const originalPrice = 67
    const salePrice = 67
    const discount = Math.ceil(100 - (salePrice / originalPrice * 100))
    const productId = 'PPHTBAOD67'
    const productIdVip = 'VIPFREETRIAL'
    const abandonListId = null
    const videoId = 'rm2vzpyvor'
    let optionsVideoId
    let countdownText

    const promo = {}

    const images = {
      headerImgLeft,
      headerImgRight,
    }

    const product = {
      originalPrice,
      salePrice,
      discount,
      productId,
      productIdVip,
      abandonListId,
      videoId,
      countdownText,
      optionsVideoId,
    }

    return <Promo {...this.props} {...product} {...promo} {...images} />
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
    createdAsAbandon: lead.get('createdAsAbandon') || false,
    split: lead.get('split') || 0,
    email: lead.get('email') || location.query.contact || location.query['contact_fields[email]'] || undefined,
    leadId: lead.get('id'),
    offerTimeRemaining: promo.get('offerTimeRemaining'),
    beforeOffer: promo.get('beforeOffer'),
    duringInitialOffer: promo.get('duringInitialOffer'),
    duringReopenOffer: promo.get('duringReopenOffer'),
    betweenOffers: promo.get('betweenOffers'),
    afterOffers: promo.get('afterOffers'),
    abandoned: location.query.special === 'ab' && GLOBAL_NOW.isAfter(moment('2017 08 01', 'YYYY MM DD').startOf('day')) && GLOBAL_NOW.isBefore(moment('2017 08 23', 'YYYY MM DD').endOf('day')),
    ignoreTimer: location.query.special === 'rt' && GLOBAL_NOW.isAfter(moment('2016 12 09', 'YYYY MM DD').startOf('day')) && GLOBAL_NOW.isBefore(moment('2016 12 11', 'YYYY MM DD').endOf('day')),
    backdoor: location.query.special === 'test' || (location.query.special === 'rt' && GLOBAL_NOW.isAfter(moment('2016 12 09', 'YYYY MM DD').startOf('day')) && GLOBAL_NOW.isBefore(moment('2016 12 11', 'YYYY MM DD').endOf('day'))),
    affiliate: location.query.special === 'aff',
    experiments: experiments.get('experiments') || null,
  }

  return mappedProps
}
