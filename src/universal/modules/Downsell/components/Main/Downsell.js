import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { bgGrey, white } from 'universal/styles/colors'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'
import ValidatorPropTypes from 'react-validator-prop-types'

// Components
import Attention from 'universal/components/Attention/Attention'
import CallToAction from 'universal/modules/Downsell/components/CallToAction/CallToAction'
import Guarantee from 'universal/components/Guarantee/GuaranteeLarge'
import MainProduct from '../MainProduct/MainProduct'
import Logos from 'universal/components/Logos/Logos'
import EGTX2Downsell from '../EGTX2Downsell/EGTX2Downsell'

const styles = {
  heresHow: {
    color: white,
    textTransform: 'uppercase',
    fontWeight: 700,
    lineHeight: '.9em',
    marginTop: -5,
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: `${pxToEm(70)}rem`,
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(36)}rem`,
      marginBottom: 5,
    },
  },
  xFactorInGame: {
    color: '#aaa',
    textTransform: 'uppercase',
    fontWeight: 700,
    lineHeight: '.9em',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    fontSize: `${pxToEm(60)}rem`,
    '@media (max-width: 767px)': {
      fontWeight: 500,
      fontSize: `${pxToEm(32)}rem`,
    },
  },
  whiteEmphasis: {
    color: 'white',
    fontWeight: 800,
  },
  just7: {
    textTransform: 'uppercase',
    fontWeight: 700,
    lineHeight: '1em',
    fontSize: `${pxToEm(50)}rem`,
    '@media (max-width: 767px)': {
      fontWeight: 500,
      fontSize: `${pxToEm(28)}rem`,
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

    const {
      addToCart,
      backdoor,
      beforeOffer,
      originalPrice,
      salePrice,
      discount,
      duringReopenOffer,
      ignoreTimer,
      afterOffers,
      dispatch,
      productId,
      email,
    } = this.props

    return (
      <div>

        <Attention theme='grey' pureText>
          <div style={styles.heresHow}>Here's How You Can Unlock</div>
          <div style={styles.xFactorInGame}>The <span style={styles.whiteEmphasis}>X Factor</span> In Your Game</div>
          <div style={styles.just7}>In Just 7 Short Days</div>
        </Attention>

        <MainProduct bgColor={bgGrey} arrowDown='rgb(50,50,50)' />

        <Logos />

        <EGTX2Downsell
          salePrice={salePrice}
        />

        <Guarantee theme='dark' />

        <CallToAction
          afterOffers={afterOffers}
          backdoor={backdoor}
          duringReopenOffer={duringReopenOffer}
          beforeOffer={beforeOffer}
          dispatch={dispatch}
          originalPrice={originalPrice}
          salePrice={salePrice}
          discount={discount}
          ignoreTimer={ignoreTimer}
          productId={productId}
          email={email}
          addToCart={addToCart}
        />

      </div>
    )
  }
}
