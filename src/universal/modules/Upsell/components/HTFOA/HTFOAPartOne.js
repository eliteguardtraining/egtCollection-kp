import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import shallowCompare from 'react-addons-shallow-compare'
import { imgResponsive as imgResponsiveRaw } from 'universal/styles/helpers'
import { orange } from 'universal/styles/colors'
import { headerStack, bodyStack } from 'universal/styles/fonts'

// Components
import ArrowDown from 'universal/components/ArrowDown/ArrowDown'
import Logos from 'universal/components/Logos/Logos'

// Images
import dividerImage from './images/divider.png'
import kpImage from './images/kp.png'
import arrowsImage from './images/arrows.png'
import testimonial1Image from './images/testimonial1.png'
import testimonial2Image from './images/testimonial2.png'
import testimonial3Image from './images/testimonial3.png'
import testimonial4Image from './images/testimonial4.png'
import testimonial5Image from './images/testimonial5.png'

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
    padding: '50px 30px',
    textAlign: 'center',
    fontFamily: headerStack,
  },
  blackBg: {
    background: 'black',
    position: 'relative',
    zIndex: 1,
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
    lineHeight: '1.2em',
  },
  dividerImage: Object.assign({}, imgResponsive, {
    padding: '50px 0',
    '@media (max-width: 767px)': {
      padding: '25px 0',
    },
  }),
  kpImage: Object.assign({}, imgResponsive, {
    '@media (max-width: 767px)': {
      marginBottom: 20,
    },
  }),
  egtX2ArrowsImg: Object.assign({}, imgResponsive, {
    padding: '0 0 30px 0',
    maxHeight: 360,
  }),
  orangeText: {
    color: orange,
  },
  meetCoachKP: {
    textTransform: 'uppercase',
    fontWeight: 800,
    lineHeight: '.9em',
    fontSize: 80,
    '@media (max-width: 767px)': {
      fontSize: 46,
    },
    margin: '0 0 30px 0',
  },
  notJustBasketball: {
    fontSize: 80,
    fontWeight: 800,
    padding: '5px 0',
    lineHeight: '.9em',
    '@media (max-width: 767px)': {
      fontSize: 46,
    },
  },
  whyAreSome: {
    textTransform: 'uppercase',
    fontWeight: 600,
    lineHeight: '.9em',
    fontSize: 42,
    margin: '0 0 50px 0',
    '@media (max-width: 767px)': {
      fontSize: 34,
    },
  },
  naturals: {
    color: orange,
    fontWeight: 800,
  },
  xfactorBreakdownTitle: {
    textTransform: 'uppercase',
    fontWeight: 600,
    lineHeight: '.9em',
    fontSize: 42,
    margin: '50px 0 30px 0',
    '@media (max-width: 767px)': {
      fontSize: 34,
    },
  },
  xfactorTitleEmphasis: {
    color: orange,
    fontWeight: 800,
  },
  breakdownBullet: {
    position: 'relative',
    textAlign: 'left',
    padding: '0 20px 20px 30px',
    fontFamily: bodyStack,
    fontSize: 20,
    '@media (max-width: 767px)': {
      fontSize: 14,
    },
    fontWeight: 'bold',
  },
  bulletPoint: {
    position: 'absolute',
    top: 5,
    left: 0,
  },
  canYouReally: {
    lineHeight: '.9em',
    fontWeight: 800,
    fontSize: 80,
    '@media (max-width: 767px)': {
      fontSize: 50,
    },
  },
  fromThePros: {
    lineHeight: '.9em',
    fontWeight: 700,
    fontSize: 60,
    textTransform: 'uppercase',
    marginBottom: 20,
    '@media (max-width: 767px)': {
      fontSize: 38,
    },
  },
  orangeEmphasis: {
    fontWeight: 800,
    color: orange,
  },
  blackEmphasis: {
    fontWeight: 800,
  },
  memberTestimonial: {
    position: 'relative',
    padding: '10px 0 0 140px',
    '@media (max-width: 767px)': {
      padding: '10px 0 0 80px',
    },
    textAlign: 'left',
    minHeight: 120,
    fontFamily: bodyStack,
  },
  testimonialPlaceholderImage: {
    position: 'absolute',
    top: 10,
    left: 20,
    maxWidth: 100,
    '@media (max-width: 767px)': {
      maxWidth: 60,
      left: 0,
    },
  },
  memberTestimonialContent: {
    fontStyle: 'italic',
    maxWidth: 740,
    fontSize: 20,
    '@media (max-width: 767px)': {
      fontSize: 14,
    },
    margin: '10px 0 5px 0',
  },
  memberTestimonialContentSig: {
    fontSize: 20,
    margin: '15px 0',
    '@media (max-width: 767px)': {
      fontSize: 14,
    },
    fontWeight: 'bold',
  },
  prodIntro: {
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: headerStack,
    '@media (max-width: 767px)': {
      paddingBottom: 40,
    },
  },
  introducing: {
    lineHeight: '0.9em',
    color: orange,
    fontWeight: 700,
    fontSize: 60,
    '@media (max-width: 767px)': {
      fontSize: 24,
    },
  },
  htfoab: {
    lineHeight: '0.9em',
    fontWeight: 800,
    fontSize: 95,
    '@media (max-width: 767px)': {
      fontSize: 35,
    },
  },
  withCoach: {
    lineHeight: '0.9em',
    opacity: 0.8,
    fontWeight: 600,
    fontSize: 65,
    '@media (max-width: 767px)': {
      fontSize: 22,
    },
  },
}

@Radium
export default class HTFOAPartOne extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    return (
      <div style={styles.contentContainer}>

        <Row style={styles.section}>
          <ArrowDown color='#efeeec' />
          <Col xs={12} sm={6}>
            <div className='hidden-sm hidden-md hidden-lg'>
              <div style={styles.meetCoachKP}>Meet <span style={styles.orangeText}>Coach KP</span></div>
            </div>
            <img src={kpImage} style={styles.kpImage} alt='Coach Taylor' />
          </Col>
          <Col xs={12} sm={6}>
            <div className='hidden-xs'>
              <div style={styles.meetCoachKP}>Meet <span style={styles.orangeText}>Coach KP</span></div>
            </div>

            <div style={styles.proxReg}>Since retiring his pro career (Ireland, FIBA), KP has trained players at every level of the game, from high school to the NBA.</div>
            <div style={styles.proxReg}>His client roster includes some of the most dangerous guards to come out of the Bay area, including Aaron Gordon (Magic), Patti Mills (Spurs), and Jared Cunningham (Bucks), as well as YouTube sensation and Oakland basketball legend Kiwi Gardener.</div>
            <div style={styles.proxReg}>Bottom line, KP creates some of the scariest perimeter guards on the planet. If you’re a point guard or shooting guard looking to play at the highest levels of basketball, learning from KP is a must.</div>

          </Col>
        </Row>

        <Logos />

        <Row style={styles.section}>
          <div style={styles.altBg} />
          <Col xs={12}>
            <div style={styles.fromThePros}>What The <span style={styles.orangeEmphasis}>Pros</span> Say About Training With KP:</div>
          </Col>
          <Col xs={12}>
            <div style={styles.memberTestimonial}>
              <img src={testimonial1Image} style={styles.testimonialPlaceholderImage} alt='Testimonial' />
              <div style={styles.memberTestimonialContent}>“KP knows how to get you better at the highest level. He focuses on the details of the game that you need to be great.”</div>
              <div style={styles.memberTestimonialContentSig}>Aaron Gordon - <span style={styles.orangeText}>Orlando Magic</span></div>
            </div>
          </Col>
          <Col xs={12}>
            <img src={dividerImage} style={imgResponsive} alt='Divider' />
          </Col>
          <Col xs={12}>
            <div style={styles.memberTestimonial}>
              <img src={testimonial2Image} style={styles.testimonialPlaceholderImage} alt='Testimonial' />
              <div style={styles.memberTestimonialContent}>“I was the 1st person to go through KP’s full program. He took my game to a whole new height.”</div>
              <div style={styles.memberTestimonialContentSig}>Kiwi Gardener - <span style={styles.orangeText}>ASEAN League Pro</span></div>
            </div>
          </Col>
          <Col xs={12}>
            <img src={dividerImage} style={imgResponsive} alt='Divider' />
          </Col>
          <Col xs={12}>
            <div style={styles.memberTestimonial}>
              <img src={testimonial3Image} style={styles.testimonialPlaceholderImage} alt='Testimonial' />
              <div style={styles.memberTestimonialContent}>“KP’s training is hands-on and game specific. The concepts he teaches get me game IQ and game conditioning at once. Love KP’s workouts during my offseason!”</div>
              <div style={styles.memberTestimonialContentSig}>Brittany Boys - <span style={styles.orangeText}>WNBA Liberty</span></div>
            </div>
          </Col>
          <Col xs={12}>
            <img src={dividerImage} style={imgResponsive} alt='Divider' />
          </Col>
          <Col xs={12}>
            <div style={styles.memberTestimonial}>
              <img src={testimonial4Image} style={styles.testimonialPlaceholderImage} alt='Testimonial' />
              <div style={styles.memberTestimonialContent}>“I’ve been working out with KP for the past 7 summers. He designs workouts for exactly what my game needs. The PG mentality he brings me is invaluable.”</div>
              <div style={styles.memberTestimonialContentSig}>Paris Austin - <span style={styles.orangeText}>D1 Junior</span></div>
            </div>
          </Col>
          <Col xs={12}>
            <img src={dividerImage} style={imgResponsive} alt='Divider' />
          </Col>
          <Col xs={12}>
            <div style={styles.memberTestimonial}>
              <img src={testimonial5Image} style={styles.testimonialPlaceholderImage} alt='Testimonial' />
              <div style={styles.memberTestimonialContent}>“KP’s training got me ready for my return to the NBA. He pays attention to the details and really pushed me to another level.”</div>
              <div style={styles.memberTestimonialContentSig}>Patty Mills - <span style={styles.orangeText}>San Antonio Spurs</span></div>
            </div>
          </Col>
        </Row>

        <div style={{ marginBottom: -40 }} />

        <Row>
          <Col xs={12}>
            <div style={styles.blackBg}>
              <img src={arrowsImage} style={styles.egtX2ArrowsImg} alt='EGT X 2.0' />
              <div style={styles.prodIntro}>
                <div style={styles.introducing}>Introducing...</div>
                <div style={styles.htfoab}>How To Beat Anybody</div>
                <div style={styles.htfoab}>Off The Dribble</div>
                <div style={styles.withCoach}>With Coach KP Potts</div>
              </div>
            </div>
          </Col>
        </Row>

      </div >
    )
  }
}
