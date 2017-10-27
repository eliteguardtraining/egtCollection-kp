import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { white } from 'universal/styles/colors'
import { imgResponsive } from 'universal/styles/helpers'
import Radium from 'radium'
import { headerStack, bodyStack, accuBold } from 'universal/styles/fonts'

// Images
import check from './images/bullet.png'
import productImage from './images/part5.png'

const styles = {
  container: {
    position: 'relative',
    backgroundColor: white,
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
              <div style={styles.productNumber}>Part 5</div>
              <div style={styles.productTitle}>Elite Slashing</div>
              <div style={styles.normalPrice}>(Normally $97)</div>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <img src={productImage} style={styles.productImage} alt='Main product' />
          </Col>
          <Col xs={12} md={7}>
            <div className='hidden-xs hidden-sm' style={styles.centerAlign}>
              <div style={styles.productNumber}>Part 5</div>
              <div style={styles.productTitle}>Elite Slashing</div>
              <div style={styles.normalPrice}>(Normally $97)</div>
            </div>
            <p style={styles.prodParagraph}>
              The ultimate guide to beating anybody off the dribble, loaded with pro-level tactics from the Italian Pro League.
            </p>
            <p style={styles.prodParagraph}>
              Develop an unstoppable first step, seamless footwork, and picture-perfect body angles that get you into the lane - and finishing - no matter who’s guarding you.
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
                  The "fast-slow-stop" secret to throwing your defender way off balance, making it easy to blow right by him
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                The deadliest off-the-dribble move in basketball (that’s actually not a move at all...)
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  The Larry Bird body-angle technique for beating quicker, more athletic players off the dribble
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                Why speeding up your first step actually makes you SLOWER off the dribble - and, the simple footwork trick to do instead
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  How to use the big man’s size and strength against him every time you finish at the rim
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                The "slice between" secret to obliterating the second line of defense, making it easy to get all the way to the rim whenever you want to
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  A 3-step footwork series for beating almost any defender off the catch - without having to make a dribble move first
                </span>
              </div>
            </div>
            <div style={styles.plus}>Plus</div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  How to make every dribble stick to your hand... The only off-the-dribble moves you’ll ever need... Deadly counter-moves... Destroy the second line of defense... The nastiest way to change direction on a defender...
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
