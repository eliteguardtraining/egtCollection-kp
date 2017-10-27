import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { bgGrey } from 'universal/styles/colors'
import { imgResponsive } from 'universal/styles/helpers'
import Radium from 'radium'
import { headerStack, bodyStack, accuBold } from 'universal/styles/fonts'

// Images
import check from './images/bullet.png'
import productImage from './images/part4.png'

const styles = {
  container: {
    position: 'relative',
    backgroundColor: bgGrey,
    padding: 50,
    '@media (max-width: 600px)': {
      padding: '50px 20px',
    },
  },
  centerAlign: {
    textAlign: 'center',
  },
  productImage: Object.assign({}, imgResponsive, {
    margin: '2rem auto 1rem auto',
    '@media (max-width: 991px)': {
      maxHeight: 200,
      margin: '0 auto 20px auto',
    },
  }),
  productNumber: {
    marginTop: 20,
    opacity: .5,
    textTransform: 'uppercase',
    fontWeight: accuBold,
    fontFamily: headerStack,
    fontSize: 40,
    lineHeight: '35px',
    '@media (max-width: 600px)': {
      margin: 0,
      fontSize: 30,
      lineHeight: '25px',
    },
  },
  productTitle: {
    textTransform: 'uppercase',
    fontWeight: 600,
    fontFamily: headerStack,
    fontSize: 55,
    lineHeight: '50px',
    '@media (max-width: 600px)': {
      fontSize: 42,
      lineHeight: '38px',
    },
  },
  heres: {
    fontWeight: 700,
    fontFamily: headerStack,
    fontSize: 45,
    margin: '20px 0',
    lineHeight: '50px',
    '@media (max-width: 600px)': {
      fontSize: 35,
      lineHeight: '30px',
    },
  },
  plus: {
    fontWeight: 600,
    textTransform: 'uppercase',
    fontFamily: bodyStack,
    fontSize: 28,
    margin: '30px 0 30px 50px',
    '@media (max-width: 600px)': {
      fontSize: 24,
    },
  },
  normalPrice: {
    opacity: .5,
    textTransform: 'uppercase',
    fontWeight: accuBold,
    fontFamily: headerStack,
    fontSize: 35,
    lineHeight: '40px',
    '@media (max-width: 600px)': {
      fontSize: 26,
      lineHeight: '26px',
    },
    '@media (max-width: 991px)': {
      marginBottom: 40,
    },
  },
  checklistItem: {
    position: 'relative',
    fontFamily: bodyStack,
    fontSize: 20,
    marginTop: 25,
    paddingLeft: 50,
    '@media (max-width: 600px)': {
      fontSize: 16,
    },
  },
  check: {
    width: 28,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  bold: {
    fontWeight: 'bold',
  },
  prodParagraph: {
    fontSize: 17,
    fontFamily: bodyStack,
    '@media (max-width: 620px)': {
      fontSize: 15,
    },
  },
}

@Radium
export default class ProgramOne extends Component {

  render() {

    return (

      <section style={styles.container}>
        <Row>
          <Col xs={12} mdHidden lgHidden>
            <div style={styles.centerAlign}>
              <div style={styles.productNumber}>Part 4</div>
              <div style={styles.productTitle}>Elite Shooting</div>
              <div style={styles.normalPrice}>(Normally $97)</div>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <img src={productImage} style={styles.productImage} alt='Main product' />
          </Col>
          <Col xs={12} md={7}>
            <div className='hidden-xs hidden-sm' style={styles.centerAlign}>
              <div style={styles.productNumber}>Part 4</div>
              <div style={styles.productTitle}>Elite Shooting</div>
              <div style={styles.normalPrice}>(Normally $97)</div>
            </div>
            <p style={styles.prodParagraph}>
              The fastest way to become your team’s go-to Sniper this season, proven by over 9,000 players who have already put these techniques to work.
            </p>
            <p style={styles.prodParagraph}>
              Quickly develop silky-smooth mechanics, a lightning-quick release, and unlimited range using our time-tested "line of power" technique that hard-wires perfect form into your jumper.
            </p>
            <p style={styles.prodParagraph}>
              Normally priced at $97 when it's on sale, get this EGT classic at a fraction of it's retail cost inside your Platinum package today.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div style={styles.heres}>Here's a quick peek at what's inside:</div>
          </Col>
          <Col xs={12}>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  The quickest way to turn your set-shooting into JUMP shooting, and finally release the ball at the top of your jump, just like the pros do
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                Exactly where to focus your eyes when you shoot (hint: it’s not the front OR the back of the rim...)
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  The only way to dramatically speed up your shooting release without ruining your accuracy - making it easy to get shots off at will, even if you only have an inch of space
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                The easiest way to extend your shooting range out to 30+ feet without changing your form or mechanics (and without “heaving” the ball)
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  The “subtle eyes” trick that fools your defender into dropping his hands immediately before you shoot, so that you can get your shot off no matter how tight the defense is playing you
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                The Steph Curry technique that “lulls” your defender to sleep right before you release the ball
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  The super-simple “line of power” method for perfecting your form - no matter how mis-aligned your shooting mechanics are right now
                </span>
              </div>
            </div>
            <div style={styles.plus}>Plus</div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  Separate on any defender... “The 90% Free Throw”... Develop a devastating pull-up jumper... Use screens like the pros... How to “re-wire” your shooting mechanics...
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              ...And much, much more.
            </div>
          </Col>
        </Row>
      </section>

    )
  }
}
