import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { Dialog } from 'material-ui'
import { headerStack, accuBlack, accuBold, accuMed, proxReg, proxSemiBold, bodyStack } from 'universal/styles/fonts'
import { track, CLICKED_CHECKOUT } from 'universal/utils/analytics'
import { white, darkGrey, orange } from 'universal/styles/colors'
import shallowCompare from 'react-addons-shallow-compare'
import ValidatorPropTypes from 'react-validator-prop-types'

import yesBtnBg from './images/yes_btn_bg.png'
import noBtnBg from './images/no_btn_bg.png'
import vipEmblem from './images/vip_emblem.png'
import basicEmblem from './images/basic_emblem.png'

const styles = {
  chromeContainer: {
    borderRadius: 30,
    padding: 2,
    background: 'linear-gradient(to bottom, rgba(230,230,230,1) 0%, rgba(168,168,168,1) 26%, rgba(217,217,217,1) 50%, rgba(227,227,227,1) 51%, rgba(148,141,140,1) 71%, rgba(214,214,214,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#e6e6e6\', endColorstr=\'#d6d6d6\', GradientType=0 )',
  },
  container: {
    position: 'relative',
    backgroundColor: orange,
    borderRadius: 28,
    overflow: 'visible',
    margin: '0 auto',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontFamily: headerStack,
    fontWeight: accuMed,
    fontSize: '80px',
    '@media (max-width: 767px)': {
      fontSize: '40px',
    },
    padding: 0,
    backgroundColor: 'transparent',
  },
  vip: {
    color: white,
    fontWeight: accuBlack,
  },
  yesContainer: {
    WebkitFilter: 'brightness(0.95)',
    ':hover': {
      WebkitFilter: 'brightness(1.05)',
    },
    cursor: 'pointer',
    position: 'relative',
    backgroundImage: `url(${yesBtnBg})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    width: 'calc(100% + 40px)',
    marginLeft: '-20px',
    marginBottom: 5,
    padding: '20px 30px',
    '@media (max-width: 300px)': {
      minHeight: 140,
    },
    '@media (min-width: 301px) and (max-width: 360px)': {
      minHeight: 170,
    },
    '@media (min-width: 361px) and (max-width: 400px)': {
      minHeight: 180,
    },
    '@media (min-width: 401px) and (max-width: 460px)': {
      minHeight: 210,
    },
    '@media (min-width: 461px) and (max-width: 560px)': {
      minHeight: 250,
    },
    '@media (min-width: 561px)': {
      minHeight: 265,
    },
  },
  bigYes: {
    color: orange,
    fontFamily: headerStack,
    fontWeight: accuBlack,
    fontSize: 150,
    lineHeight: '100px',
    height: 135,
    textShadow: '2px 2px 0px rgba(190, 190, 190, 1)',
    '@media (min-width: 301px) and (max-width: 360px)': {
      fontSize: 80,
      lineHeight: '40px',
      height: 70,
    },
    '@media (min-width: 361px) and (max-width: 400px)': {
      fontSize: 90,
      lineHeight: '50px',
      height: 80,
    },
    '@media (min-width: 401px) and (max-width: 460px)': {
      fontSize: 110,
      lineHeight: '60px',
      height: 95,
    },
    '@media (min-width: 461px) and (max-width: 560px)': {
      fontSize: 120,
      lineHeight: '70px',
      height: 105,
    },
  },
  bigYesSubtitle: {
    maxWidth: 260,
    lineHeight: '26px',
    textAlign: 'center',
    fontFamily: bodyStack,
    fontSize: 26,
    fontWeight: proxSemiBold,
    '@media (min-width: 301px) and (max-width: 360px)': {
      lineHeight: '14px',
      maxWidth: 140,
      fontSize: 14,
    },
    '@media (min-width: 361px) and (max-width: 400px)': {
      lineHeight: '16px',
      maxWidth: 170,
      fontSize: 16,
    },
    '@media (min-width: 401px) and (max-width: 460px)': {
      lineHeight: '18px',
      maxWidth: 180,
      fontSize: 18,
    },
    '@media (min-width: 461px) and (max-width: 560px)': {
      maxWidth: 200,
      fontSize: 19,
    },
  },
  fourteenDay: {
    display: 'inline-block',
    color: orange,
    fontWeight: accuBold,
  },
  subtitleFirstRow: {
    maxHeight: 28,
    overflow: 'hidden',
  },
  subtitleSecondRow: {
    height: 18,
    lineHeight: '16px',
  },
  subtitleThirdRow: {
    fontWeight: accuBold,
  },
  vipEmblem: {
    position: 'absolute',
    top: 20,
    right: 10,
    maxWidth: 200,
    '@media (min-width: 301px) and (max-width: 360px)': {
      maxWidth: 110,
    },
    '@media (min-width: 361px) and (max-width: 400px)': {
      maxWidth: 130,
    },
    '@media (min-width: 401px) and (max-width: 460px)': {
      maxWidth: 150,
    },
    '@media (min-width: 461px) and (max-width: 560px)': {
      maxWidth: 170,
    },
  },
  noContainer: {
    WebkitFilter: 'brightness(0.9)',
    ':hover': {
      WebkitFilter: 'brightness(1.1)',
    },
    cursor: 'pointer',
    color: white,
    backgroundImage: `url(${noBtnBg})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    width: 'calc(100% + 40px)',
    marginLeft: '-20px',
    padding: '20px 30px',
    '@media (max-width: 300px)': {
      minHeight: 60,
      padding: '10px 20px',
    },
    '@media (min-width: 301px) and (max-width: 360px)': {
      minHeight: 80,
      padding: '10px 20px',
    },
    '@media (min-width: 361px) and (max-width: 400px)': {
      minHeight: 90,
      padding: '10px 20px',
    },
    '@media (min-width: 401px) and (max-width: 460px)': {
      minHeight: 90,
      padding: '10px 20px',
    },
    '@media (min-width: 461px) and (max-width: 560px)': {
      minHeight: 110,
    },
    '@media (min-width: 561px)': {
      minHeight: 120,
    },
  },
  bigNo: {
    display: 'inline-block',
    fontSize: 80,
    lineHeight: '60px',
    fontFamily: headerStack,
    fontWeight: accuBlack,
    color: darkGrey,
    textShadow: '2px 2px 0px rgba(70, 70, 70, 1)',
    '@media (min-width: 301px) and (max-width: 360px)': {
      fontSize: 45,
      lineHeight: '30px',
      marginTop: 5,
    },
    '@media (min-width: 361px) and (max-width: 400px)': {
      fontSize: 50,
      lineHeight: '40px',
    },
    '@media (min-width: 401px) and (max-width: 460px)': {
      fontSize: 60,
      lineHeight: '50px',
    },
    '@media (min-width: 461px) and (max-width: 560px)': {
      lineHeight: '55px',
      fontSize: 65,
    },
  },
  bigNoSubtitle: {
    color: darkGrey,
    fontSize: 18,
    fontFamily: bodyStack,
    display: 'inline-block',
    margin: '0 10px',
    '@media (max-width: 360px)': {
      fontSize: 12,
    },
    '@media (min-width: 361px) and (max-width: 560px)': {
      fontSize: 14,
    },
  },
  disclaimer: {
    color: white,
    fontFamily: bodyStack,
    fontWeight: proxReg,
    marginTop: 20,
    zIndex: 99999,
    width: '100%',
    padding: '25px 50px 25px 50px',
    '@media (max-width: 767px)': {
      marginTop: 0,
      padding: '10px 20px 20px 20px',
      fontSize: '12px',
    },
  },
  basicEmblem: {
    float: 'right',
    maxHeight: 75,
    '@media (max-width: 400px)': {
      marginTop: 5,
      maxHeight: 40,
    },
    '@media (min-width: 401px) and (max-width: 560px)': {
      maxHeight: 60,
    },
  },
  disclaimerBold: {
    fontWeight: proxSemiBold,
  },
}

@Radium
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
    betweenOffers: PropTypes.bool,
    afterOffers: PropTypes.bool,
    dispatch: PropTypes.func,
    productId: PropTypes.string,
    productIdVip: PropTypes.string,
    email: PropTypes.string,
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  addToCart = () => {

    const {
      email,
      salePrice,
      affiliate,
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringReopenOffer,
      duringInitialOffer,
      leadId,
      productId,
    } = this.props

    track(CLICKED_CHECKOUT, {
      salePrice,
      affiliate,
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringInitialOffer,
      duringReopenOffer,
      productId,
      userId: leadId,
      vip: false,
    })

    let checkoutUrl = `/checkout/?id=${productId}`

    if (email) {
      const contactQuery = `&contact=${this.props.email}`
      if (contactQuery) {
        checkoutUrl = `${checkoutUrl}${contactQuery}`
      }
    }

    return document.location = checkoutUrl
  }

  addToCartVip = () => {

    const {
      email,
      salePrice,
      affiliate,
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringReopenOffer,
      duringInitialOffer,
      leadId,
      productId,
      productIdVip,
    } = this.props

    track(CLICKED_CHECKOUT, {
      salePrice,
      affiliate,
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringInitialOffer,
      duringReopenOffer,
      productId,
      userId: leadId,
      vip: true,
    })

    let checkoutUrl = `https://eliteguardtraining.com/checkout/?id=${productId},${productIdVip}`

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
      isOpen,
      closeModal,
    } = this.props

    return (
      <Dialog
        onRequestClose={closeModal}
        contentClassName='classHackModal'
        contentStyle={{
          maxWidth: 480,
        }}
        bodyStyle={{
          marginTop: -50,
          padding: '0',
          overflow: 'visible',
        }}
        actions={null}

        open={isOpen}
        autoScrollBodyContent
      >

        <style dangerouslySetInnerHTML={{ __html: '.classHackModal > div:first-child { border-radius: 30px !important; max-width: 440px !important; margin-left: auto; margin-right: auto; }' }} />

        <div style={styles.chromeContainer}>
          <div style={styles.container}>

            <div style={styles.title}>
              WANT <span style={styles.vip}>VIP</span> ACCESS?
            </div>

            <div key='yes-container' style={styles.yesContainer} onTouchTap={this.addToCartVip}>
              <div style={styles.bigYes}>YES,</div>
              <div style={styles.bigYesSubtitle}>
                <div style={styles.subtitleFirstRow}><div style={styles.fourteenDay}>14 DAY VIP</div> Free Trial</div>
                <div style={styles.subtitleSecondRow}>+</div>
                <div style={styles.subtitleThirdRow}>ELITE SHOOTING 2.0</div>
              </div>
              <img style={styles.vipEmblem} src={vipEmblem} alt='VIP Emblem' />
            </div>

            <div key='no-container' style={styles.noContainer} onTouchTap={this.addToCart}>
              <div style={styles.bigNo}>NO,</div>
              <div style={styles.bigNoSubtitle}>
                I only want<br />
                ELITE SHOOTING 2.0
              </div>
              <img style={styles.basicEmblem} src={basicEmblem} alt='Basic Emblem' />
            </div>

            <div style={styles.disclaimer}>
              VIP Trial period valid for 14 days only, therafter your membership will renew at the special VIP rate of <span style={styles.disclaimerBold}>only 19.95 a month</span>. Cancel at any time.
            </div>

          </div>
        </div>

      </Dialog>
    )
  }
}
