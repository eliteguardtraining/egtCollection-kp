import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { white } from 'universal/styles/colors'
import { imgResponsive } from 'universal/styles/helpers'
import Radium from 'radium'
import { headerStack, bodyStack, accuBold } from 'universal/styles/fonts'

// Images
import check from './images/bullet.png'
import productImage from './images/part3.png'

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
              <div style={styles.productNumber}>Part 3</div>
              <div style={styles.productTitle}>Elite Scoring</div>
              <div style={styles.normalPrice}>(Normally $97)</div>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <img src={productImage} style={styles.productImage} alt='Main product' />
          </Col>
          <Col xs={12} md={7}>
            <div className='hidden-xs hidden-sm' style={styles.centerAlign}>
              <div style={styles.productNumber}>Part 3</div>
              <div style={styles.productTitle}>Elite Scoring</div>
              <div style={styles.normalPrice}>(Normally $97)</div>
            </div>
            <p style={styles.prodParagraph}>
              The same system our top Elites have used to add add an additional 9-12 PPG (and sometimes a lot more) to their scoring averages.
            </p>
            <p style={styles.prodParagraph}>
              Learn how to break down the toughest defenses, overwhelm your defender with a full arsenal of offensive weapons, and gain nearly unlimited scoring power.
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
                  A simple trick that guarantees your teammates pass you the ball whenever you get open on the perimeter
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                How to use “decoy” attacks that fool your defender into thinking he knows exactly what you’re going to do ahead of time... Before you hit him with the one thing he never saw coming
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  The Carmelo Anthony technique for “tightening”all of your offensive moves into one seamless arsenal
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                How to break your scoring down into a mathematical formula that nearly guarantees you the perfect number of jumpers, drives and midrange attacks each game
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  One thing to do the FIRST time you touch the ball, every single game
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                The "defender control" technique that tells you exactly what he’s going to do before he does it - so that you can counter with the perfect move, every time
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  A simple trick to “fool-proof”your fakes, making sure he bites every time you make a move
                </span>
              </div>
            </div>
            <div style={styles.plus}>Plus</div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  Picture-perfect footwork... Build an arsenal of jabs and fakes... Master the midrange game... Develop your go-to-move... The “straight line” attack...
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
