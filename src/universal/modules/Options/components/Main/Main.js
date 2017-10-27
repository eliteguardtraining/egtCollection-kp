import React, { Component, PropTypes } from 'react'
import OptionsBigTextIntro from '../OptionsIntro/OptionsBigTextIntro'
import Guarantee from 'universal/components/Guarantee/Guarantee'
import PackageTable from '../PackageTable/PackageTable'
import SamePrice from '../SamePrice/SamePrice'
import CallToAction from '../CallToAction/CallToAction'
import Testimonial from '../Testimonial/Testimonial'
import Section from 'universal/components/Section/Section'
import { track, CLICKED_CHECKOUT } from 'universal/utils/analytics'
import { black } from 'universal/styles/colors'
import { Grid, Row, Col } from 'react-bootstrap'
import BeforeSale from 'universal/components/BeforeSale/BeforeSale'
import SaleEnded from 'universal/components/SaleEnded/SaleEnded'
import shallowCompare from 'react-addons-shallow-compare'
import ValidatorPropTypes from 'react-validator-prop-types'
import { addToAbandonList } from '../../../../ducks/abandon'

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
    abandonListId: PropTypes.number,
    email: PropTypes.string,
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  addToCart = () => {

    /* eslint-disable */
    const {
      email,
      abandonListId,
      originalPrice,
      salePrice,
      abandoned,
      affiliate,
      beforeOffers,
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringReopenOffer,
      duringInitialOffer,
      leadId,
      dispatch,
      productId,
    } = this.props
    /* eslint-enable */

    track(CLICKED_CHECKOUT, {
      salePrice,
      abandoned,
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
      const data = {
        email,
        abandonListId,
        productId,
      }

      const contactQuery = `&contact=${this.props.email}`
      if (contactQuery) {
        checkoutUrl = `${checkoutUrl}${contactQuery}`
      }

      addToAbandonList(this.props.dispatch, data)
    }

    return document.location = checkoutUrl
  }

  addToCartVip = () => {

    /* eslint-disable */
    const {
      email,
      abandonListId,
      originalPrice,
      salePrice,
      abandoned,
      affiliate,
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringReopenOffer,
      duringInitialOffer,
      leadId,
      dispatch,
      productId,
      productIdVip,
    } = this.props
    /* eslint-enable */

    track(CLICKED_CHECKOUT, {
      salePrice,
      abandoned,
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
      const data = {
        email,
        abandonListId,
        productIdVip,
      }

      const contactQuery = `&contact=${this.props.email}`
      if (contactQuery) {
        checkoutUrl = `${checkoutUrl}${contactQuery}`
      }

      addToAbandonList(this.props.dispatch, data)
    }

    return document.location = checkoutUrl
  };

  render() {

    /* eslint-disable */
    const {
      abandoned,
      backdoor,
      beforeOffer,
      afterOffers,
      originalPrice,
      salePrice,
      discount,
      videoId,
      experiments,
    } = this.props
    /* eslint-enable */

    return (
      <div>

        {!abandoned && !backdoor && afterOffers && <SaleEnded />}
        {!abandoned && !backdoor && beforeOffer && <BeforeSale />}

        <OptionsBigTextIntro videoId={videoId} />

        <Section arrowDown={black} theme='grey'>
          <Grid>
            <Row>
              <Col xs={12}>
                <PackageTable originalPrice={originalPrice}
                  salePrice={salePrice}
                  discount={discount}
                  addToCart={this.addToCart}
                  addToCartVip={this.addToCartVip}
                  showButtons={false}
                />
              </Col>
            </Row>
          </Grid>
        </Section>

        <div>
          <Section>
            <Grid>
              <Row>
                <Col xs={12}>
                  <SamePrice />
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section theme='black'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Testimonial />
                </Col>
              </Row>
            </Grid>
          </Section>
          <Guarantee />
        </div>


        <Section>
          <Grid>
            <Row>
              <Col xs={12}>
                <CallToAction originalPrice={originalPrice}
                  salePrice={salePrice}
                  discount={discount}
                  addToCart={this.addToCart}
                  addToCartVip={this.addToCartVip}
                />
              </Col>
            </Row>
          </Grid>
        </Section>

      </div>
    )
  }
}
