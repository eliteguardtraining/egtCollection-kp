import React, { PropTypes, Component } from 'react'
import Footer from 'universal/components/Footer/Footer'
import ValidatorPropTypes from 'react-validator-prop-types'
import shallowCompare from 'react-addons-shallow-compare'
import Radium from 'radium'
import calculateOfferState from 'universal/utils/calculateOfferState'

const styles = {
  app: {
    marginTop: 0,
    overflow: 'hidden',
    '@media (min-width: 992px)': {
      marginTop: 0,
    },
  },
}

const onTick = (props) => {
  calculateOfferState(props)
}

@Radium
export default class Promo extends Component {
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

    let appStyles = Object.assign({}, styles.app)

    return (
      <div style={appStyles}>
        <div>
          {React.cloneElement(this.props.children, this.props)}
        </div>
        <Footer />
      </div>
    )
  }
}
