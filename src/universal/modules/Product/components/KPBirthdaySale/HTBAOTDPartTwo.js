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
            <div style={styles.phaseName}>The Blow-Bye</div>
            <div style={styles.phaseName}>Series</div>
          </Col>
          <Col xs={12} smHidden mdHidden lgHidden>
            <img src={phase1Image} style={styles.phaseImage} alt='Phase 1' />
          </Col>
          <Col xs={12}>
            <br />
            <div style={styles.proxReg}>In phase one, we’ll arm you with a series of straight-up attacks that will beat your man in two dribbles or less. These moves will get you quick buckets, so they should be your FIRST option, every time you size up your man on the perimeter.</div>
            <div style={styles.heresWhat}>Here's What You'll Learn:</div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Slashing Science: </span>
              <span style={styles.proxReg}>The perfect point of attack within any offensive set that allows you to slice to the hoop with minimal trouble from help defense</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Body Angle 101: </span>
              <span style={styles.proxReg}>How to use hip and shoulder angles to cut off your defender’s range of movement, making him helpless to your attack</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Off-Hand Trickery: </span>
              <span style={styles.proxReg}>The subtle little one-hand move that has become a secret weapon for the best slashers in basketball</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Unstoppable First Step: </span>
              <span style={styles.proxReg}>An easy footwork “tweak” that can as much as double your first step speed</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Simplest Move In Basketball: </span>
              <span style={styles.proxReg}>The ultimate first-option move every time you size up your defender for an attack </span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>And much, much more...</span>
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
            <div style={styles.phaseName}>The Go-To</div>
            <div style={styles.phaseName}>Series</div>
          </Col>
          <Col xs={12} smHidden mdHidden lgHidden>
            <img src={phase2Image} style={styles.phaseImage} alt='Phase 2' />
          </Col>
          <Col xs={12}>
            <br />
            <div style={styles.proxReg}>Now that you have a simple series of moves to blow by your defender in one or two dribbles… We can start making you SHIFTY. In Phase 2, KP will add a series of dribble moves to your arsenal that will shake even the toughest defenders.</div>
            <div style={styles.heresWhat}>Here's What You'll Learn:</div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Super-Hesi: </span>
              <span style={styles.proxReg}>The quickest way to “freeze” any defender and leave him rocking on his heels as you sail by him to the rim</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Anti-Cross: </span>
              <span style={styles.proxReg}>A subtle tweak you can make to any crossover move that makes it much (much) harder to defend</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Head Fake-Fake: </span>
              <span style={styles.proxReg}>The “big secret” to getting a defender to bite HARD on every head fake you throw (KP’s guys flat-out embarrass defenders with this one)</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Make Him Look Silly: </span>
              <span style={styles.proxReg}>How to use your defender’s momentum against him so that the harder he tries to stop you, the SILLIER he looks when he bites</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Classic Crossover: </span>
              <span style={styles.proxReg}>How to master the most effective off the dribble move of all time, and its variations</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>And much, much more...</span>
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
            <div style={styles.phaseName}>The Counter</div>
            <div style={styles.phaseName}>Series</div>
          </Col>
          <Col xs={12} smHidden mdHidden lgHidden>
            <img src={phase3Image} style={styles.phaseImage} alt='Phase 3' />
          </Col>
          <Col xs={12}>
            <br />
            <div style={styles.proxReg}>In the final phase, KP will teach you the big secret to becoming completely unstoppable off the dribble — knowing how to counter, every time your defender stops your first move.</div>
            <div style={styles.heresWhat}>Here's What You'll Learn:</div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>Counter Instinct: </span>
              <span style={styles.proxReg}>How to instinctively know which counter move to make, based on where (and how) your defender stops you</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Reverse-Move: </span>
              <span style={styles.proxReg}>How slashers like Steph & Kyrie turn go-to-moves into “decoy” moves that create wide open attack angles for drives and pull-ups</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Picture Perfect Stop & Pop: </span>
              <span style={styles.proxReg}>How to know exactly when to turn the corner on your defender… And, when to stop and pull up for your jumper</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Cross-Counter: </span>
              <span style={styles.proxReg}>How to turn the classic crossover into a deadly counter move, any time your first move is taken away</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>The Super-Counter: </span>
              <span style={styles.proxReg}>How KP teaches his pros to master their counters and become some of the top off-the-dribble players in the world</span>
            </div>

            <div style={styles.checkmarkItem}>
              <img src={checkmarkImage} style={styles.checkmarkImage} alt='Check' />
              <span style={styles.proxBold}>And much, much more...</span>
            </div>

          </Col>

        </Row>

      </div>
    )
  }
}
