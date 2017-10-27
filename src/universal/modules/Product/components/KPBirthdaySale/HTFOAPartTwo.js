import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import shallowCompare from 'react-addons-shallow-compare'
import { headerStack, bodyStack } from 'universal/styles/fonts'
import { imgResponsive as imgResponsiveRaw } from 'universal/styles/helpers'
import { orange } from 'universal/styles/colors'

// Components
import ArrowDown from 'universal/components/ArrowDown/ArrowDown'

// Images
import dividerImage from './images/divider.png'
import phase1Image from './images/phase1.png'
import phase2Image from './images/phase2.png'
import phase3Image from './images/phase3.png'
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
  dividerImage: Object.assign({}, imgResponsive, {
    padding: '0 0 40px 0',
    '@media (max-width: 767px)': {
      padding: '15px 0',
    },
  }),
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
  altBg: {
    position: 'absolute',
    top: 0,
    left: 15,
    width: 'calc(100% - 30px)',
    height: '100%',
    background: '#f2f1ef',
  },
  orangeEmphasis: {
    fontWeight: 800,
    color: orange,
  },
  whiteEmphasis: {
    fontWeight: 800,
    color: 'white',
  },
  phaseNumber: {
    fontSize: 45,
    fontWeight: 700,
    lineHeight: '.9em',
    textTransform: 'uppercase',
    color: orange,
    '@media (max-width: 767px)': {
      fontSize: 30,
      marginTop: 20,
    },
  },
  phaseName: {
    fontSize: 55,
    '@media (max-width: 767px)': {
      fontSize: 40,
    },
    fontWeight: 800,
    lineHeight: '.9em',
    textTransform: 'uppercase',
  },
  heresWhat: {
    fontSize: 45,
    fontWeight: 600,
    lineHeight: '.9em',
    textTransform: 'uppercase',
    color: orange,
    margin: '40px 0',
    '@media (max-width: 767px)': {
      fontSize: 30,
    },
  },
  phaseImage: Object.assign({}, imgResponsive, {
    margin: '0 auto',
    '@media (max-width: 767px)': {
      margin: '20px auto 0 auto',
    },
  }),
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
          <ArrowDown color={orange} />
          <Col sm={5} xsHidden>
            <img src={phase1Image} style={styles.phaseImage} alt='Phase 1' />
          </Col>
          <Col xs={12} sm={7}>
            <div style={styles.phaseNumber}>Phase 1</div>
            <div style={styles.phaseName}>Attacking The</div>
            <div style={styles.phaseName}>2nd Line of Defense</div>
          </Col>
          <Col xs={12} smHidden mdHidden lgHidden>
            <img src={phase1Image} style={styles.phaseImage} alt='Phase 1' />
          </Col>
          <Col xs={12}>
            <br />
            <div style={styles.proxReg}>The first key to finishing at the rim is being able to read the help defense, so you can set yourself up for an easy finish around the hoop. In phase 1, we’ll arm you with a series of moves that will get you to the rim no matter who’s rotating over to stop you. </div>
            <div style={styles.heresWhat}>Here's What You'll Learn:</div>

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

          </Col>
          <Col xs={12}>
            <img src={dividerImage} style={styles.dividerImage} alt='Divider' />
          </Col>

          <Col xsHidden sm={5}>
            <img src={phase2Image} style={styles.phaseImage} alt='Phase 2' />
          </Col>
          <Col xs={12} sm={7}>
            <div style={styles.phaseNumber}>Phase 2</div>
            <div style={styles.phaseName}>Finishing At</div>
            <div style={styles.phaseName}>The Rim</div>
          </Col>
          <Col xs={12} smHidden mdHidden lgHidden>
            <img src={phase2Image} style={styles.phaseImage} alt='Phase 2' />
          </Col>
          <Col xs={12}>
            <br />
            <div style={styles.proxReg}>Once you’ve beat the 2nd line of defense, you’ll need a soft touch and strong moves that can go over, under, around, and through any big man who stands in your way. In this phase, KP will teach you real finishes that the pros use around the rim.</div>
            <div style={styles.heresWhat}>Here's What You'll Learn:</div>

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
          <Col xs={12}>
            <img src={dividerImage} style={styles.dividerImage} alt='Divider' />
          </Col>

          <Col xsHidden sm={5}>
            <img src={phase3Image} style={Object.assign({}, styles.phaseImage, { marginTop: -10 })} alt='Phase 3' />
          </Col>
          <Col xs={12} sm={7}>
            <div style={styles.phaseNumber}>Phase 3</div>
            <div style={styles.phaseName}>The Ultimate 10 Minute</div>
            <div style={styles.phaseName}>Finishing Workout</div>
          </Col>
          <Col xs={12} smHidden mdHidden lgHidden>
            <img src={phase3Image} style={styles.phaseImage} alt='Phase 3' />
          </Col>
          <Col xs={12}>
            <br />
            <div style={styles.proxReg}>In phase 3, KP will give you his simple finishing circuit for training your touch, your moves, and your finishes — and, most importantly, train you to use them all instinctively, in combination, while attacking the rim under pressure.</div>
            <div style={styles.proxReg}>Simply add this circuit to the beginning of ANY skill workout you’re currently doing, and you’ll see a rapid increase in your overall finishing ability.</div>
          </Col>

        </Row>

      </div>
    )
  }
}
