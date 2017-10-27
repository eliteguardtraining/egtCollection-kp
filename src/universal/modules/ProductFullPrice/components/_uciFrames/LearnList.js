import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import shallowCompare from 'react-addons-shallow-compare'
import { headerStack, bodyStack } from 'universal/styles/fonts'

import checkmarkImage from './images/checkmark.png'

// Styles
const styles = {
  contentContainer: {
    maxWidth: 1000,
    margin: '0 auto',
    background: 'white',
    '@media (min-width: 767px)': {
      padding: '0 40px',
    },
  },
  section: {
    position: 'relative',
    padding: '50px 30px',
    textAlign: 'center',
    fontFamily: headerStack,
  },
  proxBold: {
    fontFamily: bodyStack,
    fontSize: 20,
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
    margin: '30px 0 7px 0',
    lineHeight: '1.275em',
  },
  checkmarkItem: {
    margin: '0 0 30px 0',
    padding: '0 0 0 50px',
    position: 'relative',
    textAlign: 'left',
  },
  checkmarkImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    maxWidth: 30,
  },
}

@Radium
export default class EGTX2PartOne extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    return (
      <div style={styles.contentContainer}>
        <Row style={styles.section}>
          <Col xs={12}>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Reading The Help Defense: </span>
              <span style={styles.proxReg}>How to know exactly how the help defense will rotate BEFORE you beat your defender, so you always know which finishing move to make</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Making STRONG Moves: </span>
              <span style={styles.proxReg}>The easiest way to be strong with the ball on every attack, so no defender can strip you on your way to the rim</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>In & Out Series: </span>
              <span style={styles.proxReg}>A lightning-quick attack that leaves defenders rocking on their heels before you sail by them for an easy finish</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Short Hesi Series: </span>
              <span style={styles.proxReg}>How to master the “short” hesi that makes every help defender lunge to stop your jump shot — leaving you wide open to attack the rim</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Spin Series: </span>
              <span style={styles.proxReg}>The proper way to perform the spin move so that you can combine and counter it with any other move or finish in your arsenal</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Advanced Euro Stepping: </span>
              <span style={styles.proxReg}>How PRO-level guards to do the classic euro-step to create maximum separation against help defenders</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Beating The 3RD LINE Of Defense: </span>
              <span style={styles.proxReg}>How to read and react to any extra defense that might rotate to stop you… AND, the 3 passes you MUST be able to make if you get stopped on your way to the rim</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Finisher’s Touch: </span>
              <span style={styles.proxReg}>How to master your touch around the rim so that every finish becomes automatic</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Using English: </span>
              <span style={styles.proxReg}>How to spin the ball off the backboard from any angle to make sure it kisses perfectly off the glass, every time</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Protecting v.s. Extending: </span>
              <span style={styles.proxReg}>Exactly how to read shot blockers so you know exactly when to protect the ball and finish strong through contact — and, when to extend the ball and finish smoothly beyond his outstretched hand</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Quick Finish: </span>
              <span style={styles.proxReg}>A sneaky finish for small guards that tricks the big man into mis-timing his jump, so that the ball is on the glass and through the hoop before he gets a chance to contest you</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Hard Finish: </span>
              <span style={styles.proxReg}>How to use your body to protect the ball as you finish through contact — and, how to easily draw fouls for and-1 plays</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Reverse Finishing: </span>
              <span style={styles.proxReg}>A slight twist on the classical reverse finish that makes it much, much more difficult to block</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Floater: </span>
              <span style={styles.proxReg}>3 simple steps to mastering one of the most important finishes an undersized guard can add to his arsenal — the floater</span>
            </div>

          </Col>
        </Row>

      </div>
    )
  }
}
