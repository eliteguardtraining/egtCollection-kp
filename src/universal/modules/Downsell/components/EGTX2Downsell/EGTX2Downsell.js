import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import shallowCompare from 'react-addons-shallow-compare'
import { imgResponsive as imgResponsiveRaw } from 'universal/styles/helpers'
import { orange } from 'universal/styles/colors'
import { headerStack, bodyStack } from 'universal/styles/fonts'

// Components
import ArrowDown from 'universal/components/ArrowDown/ArrowDown'
import Attention from 'universal/components/Attention/Attention'

// Images
import unlockImage from './images/unlock.png'
import x7Image from './images/x7.png'
import checkmarkImage from './images/checkmark.png'

// Styles
const imgResponsive = Object.assign({}, imgResponsiveRaw, {
  margin: '0 auto',
})
const styles = {
  contentContainer: {
    maxWidth: 1000,
    margin: '0 auto',
    background: 'white',
    position: 'relative',
  },
  altBg: {
    position: 'absolute',
    top: 0,
    left: 15,
    width: 'calc(100% - 30px)',
    height: '100%',
    background: '#f2f1ef',
  },
  section: {
    position: 'relative',
    padding: 50,
    textAlign: 'center',
    fontFamily: headerStack,
  },
  proxBold: {
    fontFamily: bodyStack,
    fontSize: 22,
    '@media (max-width: 767px)': {
      fontSize: 16,
    },
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: '1.275em',
  },
  proxReg: {
    fontFamily: bodyStack,
    fontSize: 20,
    '@media (max-width: 767px)': {
      fontSize: 14,
    },
    textAlign: 'left',
    margin: '7px 0 25px 0',
    lineHeight: '1.275em',
  },
  orangeEmphasis: {
    fontWeight: 800,
    color: orange,
  },
  whiteEmphasis: {
    color: 'white',
    fontWeight: 800,
  },
  getAccess: {
    color: '#aaa',
    textTransform: 'uppercase',
    fontWeight: 700,
    lineHeight: '1em',
    marginTop: 20,
    fontSize: 38,
    '@media (max-width: 767px)': {
      fontWeight: 500,
      fontSize: 28,
    },
  },
  theXFactor: {
    textTransform: 'uppercase',
    fontWeight: 800,
    lineHeight: '1em',
    fontSize: 68,
    '@media (max-width: 767px)': {
      fontWeight: 500,
      fontSize: 46,
    },
  },
  forJust7: {
    color: '#aaa',
    textTransform: 'uppercase',
    fontWeight: 700,
    lineHeight: '1em',
    fontSize: 54,
    '@media (max-width: 767px)': {
      fontWeight: 500,
      fontSize: 40,
    },
  },
  xFactorUnlocked: {
    textTransform: 'uppercase',
    fontWeight: 700,
    lineHeight: '1em',
    fontSize: 54,
    margin: '25px 0',
    '@media (max-width: 767px)': {
      fontWeight: 500,
      fontSize: 40,
    },
  },
  insideYoull: {
    color: '#aaa',
    textTransform: 'uppercase',
    fontWeight: 700,
    lineHeight: '1em',
    fontSize: 60,
    marginTop: 20,
    '@media (max-width: 767px)': {
      fontWeight: 500,
      fontSize: 40,
    },
  },
  checklistItem: {
    textAlign: 'left',
    fontFamily: bodyStack,
    position: 'relative',
    padding: '0 0 0 70px',
    margin: '20px 0 30px 0',
    fontSize: 22,
    '@media (max-width: 767px)': {
      fontSize: 16,
      padding: '0 0 0 50px',
    },
  },
  checkmarkImage: {
    position: 'absolute',
    top: 5,
    left: 0,
    maxWidth: 40,
    '@media (max-width: 767px)': {
      maxWidth: 30,
    },
  },
  checklistTitle: {
    fontWeight: 'bold',
  },
}

@Radium
export default class EGTX2PartOne extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    const {
      salePrice,
    } = this.props

    return (
      <div style={styles.contentContainer}>

        <ArrowDown color='#efeeec' />
        <Attention theme='dark'>
          <div style={styles.getAccess}>Get Access To Phase 1 Of EGT X</div>
          <div style={styles.theXFactor}>The X Factor: Unlocked</div>
          <div style={styles.forJust7}>For Just ${salePrice} Today</div>
        </Attention>

        <Row style={styles.section}>
          <ArrowDown color='#000' />
          <Col xs={12}>
            <img src={unlockImage} style={imgResponsive} alt='Unlock' />
            <div style={styles.xFactorUnlocked}>The X Factor Unlocked</div>
            <div style={styles.proxReg}>In your first 7 days on the program, you’ll go through a series of exercises that will give you real, tangible experiences of “The X Factor.”</div>
            <div style={styles.proxReg}>You won’t just understand it — you’ll literally <span style={styles.proxBold}>EXPERIENCE</span> it in your mind and in your body, over and over until the feeling is undeniable. These exercises will unlock the “X Factor” inside of you, and open you up to the TRUE potential of your basketball mind.</div>
            <div style={styles.proxReg}>You’ll receive one video each day for 7 days, and each video will walk you through a new X Factor exercise.</div>
            <br />
            <img src={x7Image} style={imgResponsive} alt='X7' />
          </Col>
        </Row>

        <Attention theme='dark'>
          <ArrowDown color='#fff' />
          <div style={styles.insideYoull}><span style={styles.whiteEmphasis}>Inside,</span> You'll Learn:</div>
        </Attention>

        <Row style={styles.section}>
          <ArrowDown color='#000' />
          <div style={styles.altBg} />
          <Col xs={12}>
            <div style={styles.checklistItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <div style={styles.checklistTitle}>How to instantly relax your pre-game nerves and anxiety so you walk onto the court with confidence and a dominant presence, every single game</div>
            </div>
            <div style={styles.checklistItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <div style={styles.checklistTitleNonBold}>A simple “tweak” you can make to your mental “frame” so that you command the respect and attention of everyone in the gym when you play</div>
            </div>
            <div style={styles.checklistItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <div style={styles.checklistTitle}>How to instantly cure being “trapped in your head” during games and STOP worrying what your coach and teammates are thinking of you, once and for all</div>
            </div>
            <div style={styles.checklistItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <div style={styles.checklistTitleNonBold}>How to let the full power of your skill set shine through every time you step on the floor, without fear or holding back</div>
            </div>
            <div style={styles.checklistItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <div style={styles.checklistTitle}>How to develop natural basketball IQ, and why some players can see plays BEFORE they even happen</div>
            </div>
            <div style={styles.checklistItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <div style={styles.checklistTitleNonBold}>An easy way to instantly increase you shooting accuracy using nothing but your mind</div>
            </div>
            <div style={styles.checklistItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <div style={styles.checklistTitle}>
                How to train your mind to sink into “The Zone” nearly at will
                <br />
                <br />
                ...AND MUCH, MUCH MORE.
              </div>
            </div>
            <br />
          </Col>
        </Row>

      </div >
    )
  }
}
