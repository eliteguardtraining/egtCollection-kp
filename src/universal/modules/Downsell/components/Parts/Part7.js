import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { white } from 'universal/styles/colors'
import { imgResponsive } from 'universal/styles/helpers'
import Radium from 'radium'
import { headerStack, bodyStack, accuBold } from 'universal/styles/fonts'

// Images
import check from './images/bullet.png'
import productImage from './images/part7.png'

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
              <div style={styles.productNumber}>Part 7</div>
              <div style={styles.productTitle}>Elite Undersized</div>
              <div style={styles.normalPrice}>(Normally $67)</div>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <img src={productImage} style={styles.productImage} alt='Main product' />
          </Col>
          <Col xs={12} md={7}>
            <div className='hidden-xs hidden-sm' style={styles.centerAlign}>
              <div style={styles.productNumber}>Part 7</div>
              <div style={styles.productTitle}>Elite Undersized</div>
              <div style={styles.normalPrice}>(Normally $67)</div>
            </div>
            <p style={styles.prodParagraph}>
              A mandatory program for our best under-6'4" Elites. Learn how to use your "undersize" as an advantage and sneak into the gaps in the defense that bigger players can't get to.
            </p>
            <p style={styles.prodParagraph}>
              You'll discover pro league tactics for breaking anybody down off the dribble, finishing in the lane over taller players, and making that big dude in the lane look foolish for ever thinking he could stop you.
            </p>
            <p style={styles.prodParagraph}>
              Normally priced at $67 when it's on sale, get this EGT classic at a fraction of it's retail cost inside your Platinum package today.
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
                The "small gap" technique for quickly identifying and slipping into cracks in the defense that bigger players can't get to (or, sometimes, even see!)
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
              The Damian Lillard trick for making your first step more explosive than bigger guards' - using nothing but the angle of your body
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  The "magic square" that smaller players can easily get into - and wreck havoc from - without trouble from bigger, taller players
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                3 passes every undersized player must make to play at the professional level (these are the passes that make scouts go "OH!")
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  An easy footwork trick to make on defense that nearly eliminates any size advantage bigger, more athletic players have over you
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                Exactly where (and how) to release the ball for the quickest possible release speed, so that you can get your shot off at will against any defender - no matter what size he is
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  The 7 deadliest moves you can make on the perimeter, along the baseline, and in the lane, if you're shorter than 6'4"
                </span>
              </div>
            </div>
            <div style={styles.plus}>Plus</div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  Shoot the perfect floater... Split multiple levels of defense... Finish over anyone... The deadliest crossover dribble ever... Make your defender look silly...
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
