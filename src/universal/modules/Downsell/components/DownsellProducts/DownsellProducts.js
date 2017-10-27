import React, { Component } from 'react'
import Radium from 'radium'
import { Grid, Row, Col } from 'react-bootstrap'
import shallowCompare from 'react-addons-shallow-compare'
import { orange, black, white, bgGrey, mutedText } from 'universal/styles/colors'
import { headerStack, accuBlack, accuMed } from 'universal/styles/fonts'
import { track, ADDED_TO_CART } from 'universal/utils/analytics'
import { addToAbandonList } from '../../../../ducks/abandon'

// Components
import AddToCartButton from 'universal/components/AddToCartButton/AddToCartButton'

// Images
import cards from 'universal/components/AddToCartButton/images/payments.png'
import eliteScoring from './images/elite-scoring.png'
import eliteDribbling from './images/elite-dribbling.png'
import bothProducts from './images/both.png'

const styles = {
  downsellProducts: {
    borderTop: `8px solid ${orange}`,
    textAlign: 'center',
    padding: '30px 0',
  },
  productRow: {
    margin: '0 0 20px 0',
  },
  greyBg: {
    maxWidth: 400,
    backgroundColor: bgGrey,
    padding: 15,
    margin: '0 auto 20px auto',
  },
  blackBg: {
    outline: `4px solid ${orange}`,
    maxWidth: 400,
    backgroundColor: black,
    color: white,
    padding: 15,
    margin: '0 auto 20px auto',
  },
  productTitle: {
    fontFamily: headerStack,
    fontWeight: accuBlack,
    fontSize: 47,
    lineHeight: '40px',
    color: orange,
    textTransform: 'uppercase',
  },
  willBe: {
    color: mutedText,
    fontFamily: headerStack,
    fontWeight: accuMed,
    fontSize: 32,
    textTransform: 'uppercase',
  },
  img: {
    maxWidth: '100%',
    maxHeight: 220,
  },
  button: {
    marginTop: 20,
    marginRight: 'auto',
    marginBottom: 10,
    marginLeft: 'auto',
    fontSize: 30,
  },
  securePayments: {
    fontSize: 36,
    textAlign: 'center',
    fontFamily: headerStack,
    textTransform: 'uppercase',
    lineHeight: '1.5em',
  },
}

@Radium
export default class DownsellProducts extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  addToCart = (productId) => {

    /* eslint-disable */
    const {
      email,
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

  render() {

    /* eslint-disable */
    const {
      products,
      abandonListId,
      dispatch,
      email,
    } = this.props
    /* eslint-enable */

    const addScoringToCart = () => this.addToCart('EGTSCORING2.0')
    const addDribblingToCart = () => this.addToCart('EGTDRIBBLING2.0')
    const addBothToCart = () => this.addToCart('EGTEDS2.0DS')

    return (
      <div style={styles.downsellProducts}>

        <Grid>
          <Row style={styles.productRow}>
            <Col xs={12} md={4}>
              <div style={styles.greyBg}>
                <h3 style={styles.productTitle}>Elite Scoring</h3>
                <img style={styles.img} src={eliteScoring} alt='Elite Scoring' />
                <div style={styles.willBe}>Will Be $97</div>
                <div style={styles.productTitle}>Today Just $33.50</div>
                <AddToCartButton
                  addToCart={addScoringToCart}
                  abandonListId={abandonListId}
                  dispatch={dispatch}
                  email={email}
                  circle={false}
                  buttonStyles={styles.button}
                />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div style={styles.greyBg}>
                <h3 style={styles.productTitle}>Elite Dribbling</h3>
                <img style={styles.img} src={eliteDribbling} alt='Elite Dribbling' />
                <div style={styles.willBe}>Will Be $97</div>
                <div style={styles.productTitle}>Today Just $33.50</div>
                <AddToCartButton
                  addToCart={addDribblingToCart}
                  productId={'elitescoring'}
                  abandonListId={abandonListId}
                  dispatch={dispatch}
                  email={email}
                  circle={false}
                  buttonStyles={styles.button}
                />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div style={styles.blackBg}>
                <h3 style={styles.productTitle}>Both Programs</h3>
                <img style={styles.img} src={bothProducts} alt='Both Products' />
                <div style={Object.assign({}, styles.willBe, { color: white })}>Will Be $97 Each</div>
                <div style={styles.productTitle}>Today Just $67</div>
                <AddToCartButton
                  addToCart={addBothToCart}
                  abandonListId={abandonListId}
                  dispatch={dispatch}
                  email={email}
                  circle={false}
                  buttonStyles={styles.button}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <img src={cards} alt='Payment types' />
              <h4 style={styles.securePayments}>100% Secure Payments</h4>
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
}
