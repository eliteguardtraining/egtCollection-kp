import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import shallowCompare from 'react-addons-shallow-compare'
import { orange } from 'universal/styles/colors'
import { headerStack } from 'universal/styles/fonts'
import { imgResponsive as imgResponsiveRaw } from 'universal/styles/helpers'

// Components
import Video from 'universal/components/Video/Video'

// Images
import bgFadeTopBottom from './images/bg_fade_top_bottom.png'
import arrowsImage from './images/arrows.png'

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
  blackBg: {
    backgroundImage: `url(${bgFadeTopBottom})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    position: 'relative',
    zIndex: 1,
  },
  orangeText: {
    color: orange,
  },
  orangeEmphasis: {
    fontWeight: 800,
    color: orange,
  },
  blackEmphasis: {
    fontWeight: 800,
  },
  egtX2ArrowsImg: Object.assign({}, imgResponsive, {
    maxHeight: 360,
  }),
  prodIntro: {
    paddingTop: 50,
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
      fontSize: 30,
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
  videoContainer: {
    padding: '20px 0 0 0',
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
      <div style={styles.blackBg}>
        <div style={Object.assign({}, styles.contentContainer, { background: 'transparent' })}>
          <Row>
            <Col xs={12}>
              <img src={arrowsImage} style={styles.egtX2ArrowsImg} alt='EGT X 2.0' />
              <div style={styles.prodIntro}>
                <div style={styles.introducing}>Program #2</div>
                <div style={styles.videoContainer}>
                  <Video videoId='mtxcj73k4j' />
                </div>
                <div style={styles.htfoab}>How To Finish Over Anybody</div>
                <div style={styles.withCoach}>With Coach KP Potts</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
