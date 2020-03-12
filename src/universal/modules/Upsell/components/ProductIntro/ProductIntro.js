import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import IntroVideo from 'universal/components/IntroVideo/IntroVideo'
import shallowCompare from 'react-addons-shallow-compare'
import { imgResponsive } from 'universal/styles/helpers'
import { black } from 'universal/styles/colors'
import { track, VIDEO_PLAYED, VIDEO_PAUSED, VIDEO_CROSSED_TIME, VIDEO_ENDED } from 'universal/utils/analytics'
import introBGSmall from 'universal/images/intro-bg-sm.png'
import logo from './images/egtLogo.png'

// Images
const headerBg = 'https://dphk75aogf7d9.cloudfront.net/egt-x-2/bg.png'

const styles = {
  Intro: {
    backgroundColor: black,
    backgroundImage: `url(${headerBg})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no repeat',
    backgroundPosition: 'center center',
    textAlign: 'center',
    position: 'relative',
    padding: '10px 0 50px 0',
    '@media (max-width: 767px)': {
      backgroundImage: `url(${introBGSmall})`,
    },
  },
  header: {
    position: 'relative',
    zIndex: 5,
  },
  brand: Object.assign({}, imgResponsive, {
    paddingTop: 10,
    paddingBottom: 20,
    display: 'inline-block',
    maxWidth: 140,
  }),
  imagesLayer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  headerImg: {
    position: 'absolute',
    top: 0,
    height: '100%',
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
  headerImgLeft: {
    left: 0,
  },
  headerImgRight: {
    right: 0,
  },
  playerImg: {
    '@media (max-width: 999px)': {
      display: 'none',
    },
    '@media (min-width: 767px) and (max-width: 1179px)': {
      maxWidth: 300,
    },
    '@media (min-width: 1180px) and (max-width: 1399px)': {
      maxWidth: 360,
    },
    '@media (min-width: 1400px)': {
      margin: '0 40px',
      maxWidth: 410,
    },
    height: 'auto',
    top: 'auto',
    bottom: 0,
  },
}

@Radium
export default class ProductIntro extends Component {

  componentDidMount() {
    const that = this

    /* eslint-disable */
    window._wq = window._wq || []
    _wq.push({
      '_all': function (video) {

        const analyticsData = {
          videoId: video._hashedId,
          jumpType: that.props.jumpType,
        }

        // play
        video.bind('play', () => {
          track(VIDEO_PLAYED, analyticsData)
        })

        // pause
        video.bind('pause', () => {
          track(VIDEO_PAUSED, analyticsData)
        })

        // crosstime on:
        // 70 seconds
        // 230 seconds
        // 430 seconds
        const times = [70, 230, 430]
        times.map((time) => {
          video.bind('crosstime', time, function () {
            track(VIDEO_CROSSED_TIME, Object.assign({}, analyticsData, { time }))
          })
        })

        // ended
        video.bind('end', function () {
          track(VIDEO_ENDED, analyticsData)
        })

      }
    })
    /* eslint-enable */

  }

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    /* eslint-disable */
    const {
      videoId,
      headerImgLeft,
      headerImgRight,
      playerLeft,
      playerRight,
      transparentBg,
    } = this.props
    /* eslint-enable */

    let introStyles = styles.Intro

    if (transparentBg) {
      introStyles = Object.assign({}, introStyles, {
        background: 'transparent',
        backgroundImage: 'none',
      })
    }

    return (
      <section style={introStyles}>
        <header style={styles.header}>
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <img style={styles.brand} src={logo} alt='logo' />
              </Col>
            </Row>

          </Grid>

          <div className='clearfix'></div>
        </header>

        <IntroVideo videoId={videoId} />
      </section>
    )
  }
}
