import React, { PropTypes, Component } from 'react'
import Footer from 'universal/components/Footer/Footer'
import ValidatorPropTypes from 'react-validator-prop-types'
import shallowCompare from 'react-addons-shallow-compare'
import Radium from 'radium'
import calculateOfferState from 'universal/utils/calculateOfferState'
import FloatingCountdown from 'universal/components/FloatingCountdown/FloatingCountdown'
import SaleEnded from 'universal/components/SaleEnded/SaleEnded'
import BeforeSale from 'universal/components/BeforeSale/BeforeSale'


const styles = {
  app: {
    marginTop: 131,
    overflow: 'hidden',
    background: 'black',
    '@media (min-width: 992px)': {
      marginTop: 0,
    },
  },
}

const onTick = (props) => {
  calculateOfferState(props)
}

@Radium
export default class Product extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    dispatch: PropTypes.func.isRequired,
    promoOffer: PropTypes.bool,
    initialOfferStartDate: ValidatorPropTypes.date,
    initialOfferEndDate: ValidatorPropTypes.date,
    reopenOfferStartDate: ValidatorPropTypes.date,
    reopenOfferEndDate: ValidatorPropTypes.date,
    originalPrice: PropTypes.number.isRequired,
    salePrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    duringInitialOffer: PropTypes.bool.isRequired,
    duringReopenOffer: PropTypes.bool.isRequired,
    offerTimeRemaining: PropTypes.number.isRequired,
    betweenOffers: PropTypes.bool.isRequired,
    afterOffers: PropTypes.bool.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  startTimer() {

    const {
      promoOffer,
    } = this.props

    const that = this

    if (promoOffer && !this.timer) {
      setTimeout(() => {
        onTick(that.props)
      }, 1)

      this.timer = setInterval(() => {
        onTick(that.props)
      }, 1000)
    }
  }

  render() {
    if (__CLIENT__) {
      this.startTimer()
    }

    const {
      affiliate,
      afterOffers,
      backdoor,
      beforeOffer,
      betweenOffers,
      countdownText,
      ignoreTimer,
      offerTimeRemaining,
    } = this.props

    const appStyles = Object.assign({}, styles.app)

    if (afterOffers || affiliate) {
      appStyles.marginTop = 0
    }

    const showTimeRemaining = true
    const showZeroTimeRemaining = !affiliate && !ignoreTimer && betweenOffers
    const showBeforeSale = beforeOffer
    const showSaleEnded = (betweenOffers || afterOffers) && !backdoor

    return (
      <div style={!ignoreTimer ? appStyles : Object.assign({}, appStyles, { marginTop: 0 })}>
        <div>
          {React.cloneElement(this.props.children, this.props)}
        </div>
        {showBeforeSale && <BeforeSale />}
        {showTimeRemaining ? <FloatingCountdown timeRemaining={offerTimeRemaining} text={countdownText} /> : null}
        {showZeroTimeRemaining ? <FloatingCountdown timeRemaining={0} text={countdownText} /> : null}
        {showSaleEnded && <SaleEnded />}
        <Footer />
      </div>
    )
  }
}
