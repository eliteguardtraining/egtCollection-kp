import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { bgGrey } from 'universal/styles/colors'
import { imgResponsive } from 'universal/styles/helpers'
import Radium from 'radium'
import { headerStack, bodyStack, accuBold } from 'universal/styles/fonts'

// Images
import check from './images/bullet.png'
import productImage from './images/part2.png'

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
              <div style={styles.productNumber}>Part 2</div>
              <div style={styles.productTitle}>Elite Jump Training</div>
              <div style={styles.normalPrice}>(Normally $97)</div>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <img src={productImage} style={styles.productImage} alt='Main product' />
          </Col>
          <Col xs={12} md={7}>
            <div className='hidden-xs hidden-sm' style={styles.centerAlign}>
              <div style={styles.productNumber}>Part 2</div>
              <div style={styles.productTitle}>Elite Jump Training</div>
              <div style={styles.normalPrice}>(Normally $97)</div>
            </div>
            <p style={styles.prodParagraph}>
              EGT's more-explosive "other half." Used by over 8,000 Elites who have added up to 12 inches to their vertical jump, and finally dunked for the first time... Not to mention injecting pounds of explosive force into every move they make on the court.
            </p>
            <p style={styles.prodParagraph}>
              The program comes complete with year-round programs that can be customized for any age, season, and playing level.
            </p>
            <p style={styles.prodParagraph}>
              Normally priced at $97, get the complete system at a fraction of it's retail cost inside your Platinum package today.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div style={styles.heres}>Here's exactly what you're getting:</div>
          </Col>
          <Col xs={12}>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  The entire year-round training system, including 12-week Offseason, Preseason, Inseason, and Youth programs.
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                A complete exercise library, filmed at the famous Underground Strength Gym in New Jersey, and jam-packed with exercise demonstrations for every move you'll use in the program.
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                <span style={styles.bold}>
                  Full-color printouts of every workout in the program (even the warmups and cooldowns) that you can easily pack up and take with you to the gym.
                </span>
              </div>
            </div>
            <div style={styles.checklistItem}>
              <img style={styles.check} src={check} alt='checkmark' />
              <div style={styles.checkCopy}>
                Instant access to the online version of the program within our members area right after you order - so you can start training just minutes from now.
              </div>
            </div>
          </Col>
        </Row>
      </section>

    )
  }
}
