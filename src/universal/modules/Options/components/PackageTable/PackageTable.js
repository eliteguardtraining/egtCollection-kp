import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { orange, white, black, tableRow, tableRowAlt, successBackground, dangerBackground } from 'universal/styles/colors'
import { headerStack, accuMed, accuBold, accuBlack, bodyStack } from 'universal/styles/fonts'
import { tableResponsive, table, imgResponsive, centerBlock } from 'universal/styles/helpers'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'
import AddToCartButton from 'universal/components/AddToCartButton/AddToCartButton'

import basic from './images/basic2.png'
import vip from './images/vip2.png'
import vipMd from './images/vip2m.png'
import optioncheck from './images/check2.png'
import optionnot from './images/optionnot2.png'
import product from 'universal/images/packshot2.png'

const baseFontSize = 16

const styles = {
  tableResponsive: Object.assign({}, tableResponsive),
  table: Object.assign({}, table, {
    border: '2px solid #e4e4e4',
    backgroundColor: white,
  }),
  topBar: {
    backgroundColor: white,
    color: black,
    fontSize: `${pxToEm(36, baseFontSize)}em`,
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(26)}em`,
    },
    lineHeight: '1.5em',
    verticalAlign: 'middle',
  },
  topBarTH: {
    padding: '1rem',
    textAlign: 'center',
    border: '2px solid #e4e4e4',
    '@media (max-width: 767px)': {
      width: '80px',
    },
  },
  tableRow: {
    backgroundColor: tableRow,
  },
  tableRowAlt: {
    backgroundColor: tableRowAlt,
  },
  tableCell: {
    border: '2px solid #e4e4e4',
    padding: '1rem',
    '@media (max-width: 767px)': {
      padding: '.1rem',
      maxWidth: '160px',
    },
  },
  tableCellTop: {
    border: '2px solid #e4e4e4',
    verticalAlign: 'top',
    padding: '.5rem',
    '@media (max-width: 767px)': {
      padding: '.1rem',
      maxWidth: '50px',
    },
  },
  img: Object.assign({}, centerBlock, {
    verticalAlign: 'middle',
    '@media (max-width: 767px)': {
      maxWidth: 50,
    },
  }),
  headerImg: Object.assign({}, centerBlock, {
    verticalAlign: 'middle',
    '@media (max-width: 767px)': {
      maxWidth: 50,
    },
  }),
  productImg: Object.assign({}, imgResponsive, centerBlock, {
    verticalAlign: 'middle',
    maxHeight: 300,
    marginTop: 20,
    marginBottom: 20,
    '@media (max-width: 767px)': {
      marginTop: 10,
      maxWidth: 75,
    },
  }),
  productImgVip: Object.assign({}, imgResponsive, centerBlock, {
    verticalAlign: 'middle',
    maxHeight: 300,
    marginBottom: '1em',
    '@media (max-width: 767px)': {
      marginTop: 10,
      maxWidth: 75,
    },
  }),
  productTitle: {
    fontSize: `${pxToEm(36, baseFontSize)}em`,
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(26)}em`,
    },
    fontWeight: accuBold,
    marginTop: '0em',
    lineHeight: '1em',
    marginBottom: '0',
    textTransform: 'uppercase',
    textAlign: 'center',
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(24, baseFontSize)}em`,
    },
  },
  h4: {
    fontSize: `${pxToEm(30, baseFontSize)}em`,
    fontWeight: accuMed,
    marginTop: '0em',
    lineHeight: '1em',
    marginBottom: '.5em',
    textAlign: 'center',
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(20, baseFontSize)}em`,
    },
  },
  regularPrice: {
    fontSize: `${pxToEm(42, baseFontSize)}em`,
    fontWeight: accuBold,
    lineHeight: '1em',
    marginLeft: 10,
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(24, baseFontSize)}em`,
      textAlign: 'center',
    },
  },
  h1: {
    fontSize: `${pxToEm(54, baseFontSize)}em`,
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(40)}em`,
    },
    fontWeight: accuBold,
    lineHeight: '1em',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(28, baseFontSize)}em`,
      textAlign: 'center',
    },
  },
  tableTitle: {
    fontSize: `${pxToEm(10, baseFontSize)}em`,
    fontWeight: accuBold,
    lineHeight: '1em',
    marginTop: 0,
    marginBottom: 0,
    textAlign: 'center',
    '@media (min-width: 768px)': {
      fontSize: '1.5em',
    },
    '@media (max-width: 768px)': {
      maxWidth: '80px',
    },
  },
  regPrice: {
    fontSize: `${pxToEm(42, baseFontSize)}em`,
    fontWeight: accuBold,
    lineHeight: '1em',
    marginTop: 0,
    marginBottom: 0,
    textDecoration: 'line-through',
    textAlign: 'center',
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(24, baseFontSize)}em`,
      textAlign: 'center',
    },
  },
  newPrice: {
    fontSize: `${pxToEm(54, baseFontSize)}em`,
    fontWeight: accuBold,
    marginTop: '0em',
    lineHeight: '1em',
    marginBottom: '.1em',
    textAlign: 'center',
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(28, baseFontSize)}em`,
      textAlign: 'center',
    },
  },
  newPriceHighlight: {
    fontSize: `${pxToEm(54, baseFontSize)}em`,
    textTransform: 'uppercase',
    fontWeight: accuBold,
    marginTop: 0,
    lineHeight: '1em',
    marginBottom: '.1em',
    color: orange,
    textAlign: 'center',
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(28, baseFontSize)}em`,
      textAlign: 'center',
    },
  },
  p: {
    fontFamily: bodyStack,
    marginTop: 0,
    marginBottom: '0em',
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(11, baseFontSize)}em`,
      textAlign: 'center',
    },
  },
  successBackground: {
    backgroundColor: successBackground,
    border: '2px solid #e4e4e4',
    verticalAlign: 'top',
    paddingTop: '2em',
  },
  successBackgroundMiddle: {
    backgroundColor: '#ebebeb',
    border: '2px solid #e4e4e4',
    verticalAlign: 'middle',
  },
  dangerBackground: {
    backgroundColor: dangerBackground,
    border: '2px solid #e4e4e4',
    verticalAlign: 'top',
    paddingTop: '2em',
  },
  dangerBackgroundMiddle: {
    backgroundColor: white,
    border: '2px solid #e4e4e4',
    verticalAlign: 'middle',
  },
  button: {
    maxWidth: '100%',
    width: 150,
    fontSize: '1.25em',
    '@media (min-width: 320px)': {
      width: '125px',
      fontSize: '1em',
    },
    '@media (min-width: 768px) and (max-width: 991px)': {
      width: '125px',
      fontSize: '1.25em',
    },
    '@media (min-width: 992px)': {
      width: 175,
      fontSize: '2em',
    },
    '@media (min-width: 1200px)': {
      width: 250,
    },
  },
  includes: {
    marginBottom: '1em',
    fontFamily: bodyStack,
    marginTop: 0,
    fontSize: `${pxToEm(12, baseFontSize)}em`,
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(11, baseFontSize)}em`,
      textAlign: 'center',
    },
  },
  orange: {
    color: orange,
  },
  bestValue: {
    textAlign: 'center',
    color: orange,
    fontWeight: accuBlack,
    fontFamily: headerStack,
    fontStyle: 'italic',
    fontSize: `${pxToEm(27, baseFontSize)}em`,
    marginBottom: 0,
  },
  twoPaymentOption: {
    '@media (min-width: 767px)': {
      minWidth: 200,
    },
  },
}

@Radium
export default class PackageTable extends Component {

  static propTypes = {
    originalPrice: PropTypes.number.isRequired,
    salePrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
    addToCartVip: PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    /* eslint-disable */
    const {
      modalVersion,
      originalPrice,
      salePrice,
      discount,
      addToCart,
      addToCartVip,
      old,
      showButtons = true,
    } = this.props
    /* eslint-enable */

    const originalVIPPrice = 213.95

    return (
      <div style={styles.tableResponsive}>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr style={styles.topBar}>
              <th style={styles.topBarTH}>
                <h2 style={styles.tableTitle}>
                  Get Instant Access
                </h2>
              </th>
              <th style={styles.topBarTH}>
                <img style={styles.headerImg} src={basic} alt='Basic' />
              </th>
              <th style={styles.topBarTH}>
                <img style={styles.headerImg} src={vip} alt='VIP' />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>
                <Grid fluid>
                  <Row>
                    <Col xs={12} md={6}>
                      <img style={styles.productImg} src={product} alt='Elite Jump Training' />
                    </Col>
                    <Col xs={12} md={6}>
                      <h3 style={styles.productTitle}>
                          Elite Dribbing and Scoring 2.0
                      </h3>
                      <h4 style={styles.h4}>
                          With Coach Drew Hanlen
                      </h4>
                      <p style={styles.p}>Claim your 65% package discount on Coach Drew’s Elite Scoring and Elite Dribbling programs</p>
                    </Col>
                  </Row>
                </Grid>
              </td>
              <td style={styles.successBackgroundMiddle}>
                <img style={styles.img} src={optioncheck} alt='Success background middle' />
              </td>
              <td style={styles.successBackgroundMiddle}>
                <img style={styles.img} src={optioncheck} alt='Success background middle 2' />
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                <Grid fluid>
                  <Row>
                    <Col xs={12} md={6}>
                      <img style={styles.productImgVip} src={vipMd} alt='VIP medium' />
                    </Col>
                    <Col xs={12} md={6}>
                      <h3 style={styles.productTitle}>
                        14 Day <span style={styles.orange}>VIP</span> Membership
                      </h3>
                      <h4 style={styles.h4}>Unlimited Access</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <p style={styles.p}>Get 14 days of free access to our VIP coaching program. Includes unlimited access to our entire library of video coaching lessons that cover some of the most advanced tactics in basketball training — from weight training, nutrition, basketball IQ, scoring science, recovery techniques, and advanced perimeter play. If you like it, simply remain a member at our special VIP rate of only $19.95 per month. Of course, you can cancel at any time.</p>
                    </Col>
                  </Row>
                </Grid>
              </td>
              <td style={styles.dangerBackgroundMiddle}>
                <img style={styles.img} src={optionnot} alt='' />
              </td>
              <td style={styles.successBackgroundMiddle}>
                <img style={styles.img} src={optioncheck} alt='' />
              </td>
            </tr>
          </tbody>
          <tfoot style={styles.tfoot}>
            <tr>
              <td style={styles.tableCell}>
                <h2 style={styles.regularPrice}>Normal Price</h2>
              </td>
              <td style={styles.tableCell}>
                <h2 style={styles.regPrice}>${originalPrice}</h2>
              </td>
              <td style={styles.tableCell}>
                <h2 style={styles.regPrice}>${originalVIPPrice}</h2>
              </td>
            </tr>
            <tr>
              <td style={styles.tableCellTop}>
                <h1 style={styles.h1}>Today's Price</h1>
              </td>
              <td style={styles.tableCellTop}>
                <h1 style={styles.newPrice}>${salePrice}</h1>
                {showButtons && <AddToCartButton
                  addToCart={addToCart}
                  circle={false}
                  cards={false}
                  text={'Checkout'}
                  small
                  buttonStyles={styles.button}
                />}
                {salePrice === 77 &&
                  <span>
                    <h4 style={Object.assign({}, styles.bestValue, styles.twoPaymentOption)}>2-Payment Option</h4>
                    <p style={styles.includes}>
                      One payment today, and one payment once you've made your transformation.
                    </p>
                  </span>
                }
              </td>
              <td style={styles.tableCellTop}>
                <h1 style={styles.newPriceHighlight}>${salePrice}</h1>
                {showButtons && <AddToCartButton
                  addToCart={addToCartVip}
                  circle={false}
                  cards={false}
                  text={'Checkout'}
                  small
                  buttonStyles={styles.button}
                />}
                <h4 style={styles.bestValue}>Best Value</h4>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}
