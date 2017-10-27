import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { white, orange } from 'universal/styles/colors'
import shallowCompare from 'react-addons-shallow-compare'
import Radium from 'radium'
import { headerStack } from 'universal/styles/fonts'

// Components
import Guarantee from 'universal/components/Guarantee/GuaranteeLarge'

// Images
import bgFadeTopBottom from './images/bg_fade_top_bottom.png'
import priceTableDesktop from './images/price_table_desktop.png'


const styles = {
  container: {
    fontFamily: headerStack,
    color: white,
    textAlign: 'center',
    fontSize: 10,
    padding: '30px 0',
    '@media (max-width: 767px)': {
      fontSize: 6,
    },
  },
  orange: {
    color: orange,
  },
  title1: {
    fontSize: '6em',
    lineHeight: '1em',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  title2: {
    color: '#b4b4b4',
    fontSize: '4.2em',
    lineHeight: '1em',
    fontWeight: 700,
  },
  guaranteeBg: {
    padding: '30px 10px',
    backgroundImage: `url(${bgFadeTopBottom})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  },
  priceTableDesktop: {
    margin: '40px 30px 10px 30px',
    maxWidth: 'calc(100% - 60px)',
    width: 1000,
    '@media (max-width: 767px)': {
      margin: '40px 0 10px 0',
      maxWidth: '100%',
    },
  },
}

@Radium
export default class PriceTable extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    const { dollarOff } = this.props

    return (
      <div style={styles.container}>
        <Grid>
          <Row>
            <Col xs={12}>
              <div style={styles.title1}>Get Both Of KP's Top Programs Today</div>
              <div style={styles.title2}>And <span style={styles.orange}>SAVE ${dollarOff.toFixed(2)}</span> when you order right now</div>
            </Col>
          </Row>
          {dollarOff === 100.5 &&
            <Row>
              <Col xs={12}>
                <img style={styles.priceTableDesktop} src={priceTableDesktop} alt='Price Table' />
              </Col>
            </Row>
          }
        </Grid>
        <div style={styles.guaranteeBg}>
          <Guarantee transparent />
        </div>
      </div>
    )
  }
}
