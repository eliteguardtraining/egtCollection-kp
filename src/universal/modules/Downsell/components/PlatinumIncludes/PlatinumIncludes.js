import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { black, bgGrey, orange, white } from 'universal/styles/colors'
import { headerStack, bodyStack } from 'universal/styles/fonts'

// Components
import ArrowDown from 'universal/components/ArrowDown/ArrowDown'
import Countdown from 'universal/components/Countdown/Countdown'

// Images
import check from './images/check.png'
import shirt from './images/shirt.png'
import box from './images/box.png'
import guarantee from './images/guarantee.png'

const styles = {
  section: {
    position: 'relative',
    padding: '100px 0 50px 0',
  },
  includesTitle: {
    fontFamily: headerStack,
    fontWeight: 700,
    fontSize: 40,
    marginBottom: 20,
    '@media (max-width: 767px)': {
      fontSize: 30,
    },
  },
  listItem: {
    fontFamily: bodyStack,
    float: 'left',
    fontSize: 18,
    width: '100%',
    position: 'relative',
    background: bgGrey,
    padding: '15px 10px 15px 60px',
    marginBottom: 10,
    '@media (max-width: 767px)': {
      fontSize: 14,
    },
  },
  listItemDark: {
    fontFamily: bodyStack,
    float: 'left',
    fontSize: 18,
    width: '100%',
    position: 'relative',
    background: black,
    color: white,
    padding: '15px 10px 15px 60px',
    marginBottom: 10,
    fontWeight: 'bold',
    '@media (max-width: 767px)': {
      fontSize: 14,
    },
  },
  check: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50px',
    height: '100%',
    background: orange,
    backgroundImage: `url(${check})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '20px 20px',
    backgroundPosition: 'center',
  },
  listLeft: {
    float: 'left',
  },
  listRight: {
    float: 'right',
    fontWeight: 'bold',
    color: orange,
  },
  blackRow: {
    color: white,
    marginLeft: 0,
    marginBottom: 20,
    background: black,
  },
  image: {
    maxWidth: 'calc(100% + 50px)',
    marginLeft: -30,
  },
  shirtImage: {
    maxHeight: 250,
    marginTop: -10,
    marginBottom: -10,
  },
  boxImage: {
    maxWidth: 'calc(100% + 40px)',
    marginTop: 5,
    marginLeft: -30,
    marginBottom: 10,
  },
  guaranteeImage: {
    width: '100%',
    marginTop: -12,
    marginLeft: -30,
    marginBottom: -15,
  },
  imageOrangeTitle: {
    color: orange,
    fontFamily: headerStack,
    marginTop: 30,
    fontSize: 40,
    textTransform: 'uppercase',
  },
  freeDriFit: {
    fontFamily: headerStack,
    fontWeight: 700,
    fontSize: 60,
    lineHeight: '55px',
  },
  yourGuarantee: {
    textTransform: 'uppercase',
    fontFamily: headerStack,
    fontWeight: 700,
    fontSize: 50,
    lineHeight: '50px',
  },
  whenYouOrder: {
    fontFamily: headerStack,
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '32px',
  },
}

@Radium
export default class PlatinumIncludes extends Component {

  render() {
    return (
      <section style={styles.section} >
        <ArrowDown color={black} />
        <Grid>
          <Row>
            <Col xs={12}>
              <div style={styles.includesTitle}>Your Platinum Training Includes:</div>
            </Col>
          </Row>
          <Row >
            <Col sm={12} md={6} lg={7}>

              <div style={styles.listItem}>
                <div style={styles.check}></div>
                <div style={styles.listLeft}>
                  Elite Guard Training
                </div>
                <div style={styles.listRight}>
                  Normally $197
                </div>
              </div>

              <div style={styles.listItem}>
                <div style={styles.check}></div>
                <div style={styles.listLeft}>
                  Elite Jump Training
                </div>
                <div style={styles.listRight}>
                  Normally $97
                </div>
              </div>

              <div style={styles.listItem}>
                <div style={styles.check}></div>
                <div style={styles.listLeft}>
                  Elite Scoring
                </div>
                <div style={styles.listRight}>
                  Normally $97
                </div>
              </div>

              <div style={styles.listItem}>
                <div style={styles.check}></div>
                <div style={styles.listLeft}>
                  Elite Shooting
                </div>
                <div style={styles.listRight}>
                  Normally $97
                </div>
              </div>

              <div style={styles.listItem}>
                <div style={styles.check}></div>
                <div style={styles.listLeft}>
                  Elite Dribbling & Driving
                </div>
                <div style={styles.listRight}>
                  Normally $97
                </div>
              </div>

              <div style={styles.listItem}>
                <div style={styles.check}></div>
                <div style={styles.listLeft}>
                  Elite Defense
                </div>
                <div style={styles.listRight}>
                  Normally $97
                </div>
              </div>

              <div style={styles.listItem}>
                <div style={styles.check}></div>
                <div style={styles.listLeft}>
                  Elite Undersized
                </div>
                <div style={styles.listRight}>
                  Normally $97
                </div>
              </div>

              <div style={styles.listItem}>
                <div style={styles.check}></div>
                <div style={styles.listLeft}>
                  Elite Guard Training 'X'
                </div>
                <div style={styles.listRight}>
                  Normally $197
                </div>
              </div>

              <div style={styles.listItemDark}>
                <div style={styles.check}></div>
                <div style={styles.listLeft}>
                  BONUS: Dri-Fit Jersey
                </div>
                <div style={styles.listRight}>
                  Normally $49.95
                </div>
              </div>

              <div style={styles.listItemDark}>
                <div style={styles.check}></div>
                <div style={styles.listLeft}>
                  BONUS: XMAS Shipping
                </div>
              </div>

              <div style={styles.listItemDark}>
                <div style={styles.check}></div>
                <div style={styles.listLeft}>
                  100% Money Back Guarantee
                </div>
              </div>

            </Col>
            <Col xsHidden smHidden md={6} lg={5}>

              <Row style={styles.blackRow}>
                <Col md={6}>
                  <img style={styles.shirtImage} src={shirt} alt='Free Jersey' />
                </Col>
                <Col md={6}>
                  <div style={styles.imageOrangeTitle}>Free:</div>
                  <div style={styles.freeDriFit}>DRI-FIT</div>
                  <div style={styles.freeDriFit}>JERSEY</div>
                </Col>
              </Row>

              <Row style={styles.blackRow}>
                <Col md={6}>
                  <img style={styles.boxImage} src={box} alt='XMAS Shipping' />
                </Col>
                <Col md={6}>
                  <div style={Object.assign({}, styles.imageOrangeTitle, { marginTop: 5 })}>XMAS Shipping:</div>
                  <div style={styles.whenYouOrder}>When you order</div>
                  <div style={styles.whenYouOrder}>Before Dec. 8th</div>
                  <div style={{ marginTop: 20 }}>
                    <Countdown inCopy small timeRemaining={this.props.offerTimeRemaining} />
                  </div>
                </Col>
              </Row>

              <Row style={styles.blackRow}>
                <Col md={6}>
                  <img style={styles.guaranteeImage} src={guarantee} alt='Guaranteed' />
                </Col>
                <Col md={6}>
                  <div style={Object.assign({}, styles.imageOrangeTitle, { marginTop: 0 })}>Plus:</div>
                  <div style={styles.yourGuarantee}>Your 100%</div>
                  <div style={styles.yourGuarantee}>Guarantee</div>
                </Col>
              </Row>

            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}
