import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { bgGrey } from 'universal/styles/colors'
import { imgResponsive } from 'universal/styles/helpers'
import Radium from 'radium'
import { headerStack, bodyStack, accuBold } from 'universal/styles/fonts'

// Images
import check from './images/bullet.png'
import productImage from './images/part6.png'

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
              <div style={styles.productNumber}>Part 6</div>
              <div style={styles.productTitle}>Elite Defense</div>
              <div style={styles.normalPrice}>(Normally $97)</div>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <img src={productImage} style={styles.productImage} alt='Main product' />
          </Col>
          <Col xs={12} md={7}>
            <div className='hidden-xs hidden-sm' style={styles.centerAlign}>
              <div style={styles.productNumber}>Part 6</div>
              <div style={styles.productTitle}>Elite Defense</div>
              <div style={styles.normalPrice}>(Normally $97)</div>
            </div>
            <p style={styles.prodParagraph}>
              Arguably the most valuable DVD in our collection, get the complete system for becoming your team's go-to Stopper this season.
            </p>
            <p style={styles.prodParagraph}>
              Learn pro-level techniques for shot blocking, picking the pocket, and giving your man fits with footwork and body angles... Not to mention quickly gaining leader-status with your coach!
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
                  3 "hidden" passes that are left wide open for steals in almost every offensive set
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                The body-angle technique Kobe stole from MJ that nearly doubles your on-ball strength, making it almost impossible for any offensive player to "body" you
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  The easiest way to block nearly every layup that happens within 5 feet of you
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                A simple "bite down" trick that guarantees you don't fall for any embarrassing fakes
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  One thing almost every offensive player does with his dribble that makes it stupid-easy to strip the ball (and, take it the other way for a wide open layup)
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                Where to position yourself to pick off passes when your man doesn’t have the ball
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  The only way to (properly) angle your body for blocked shots if you’re shorter than 6'4"
                </span>
              </div>
            </div>
            <div style={styles.plus}>Plus</div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  The perfect defensive stance... How to make your hands lightning-quick... Easily stay in front of quicker players... How to reverse defensive mistakes... Pro-level footwork techniques...
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
