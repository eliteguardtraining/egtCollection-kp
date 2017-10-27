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
    backgroundImage: `url(${bgFadeTopBottom}`,
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat',
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
              <div style={styles.title2}>And <span style={styles.orange}>SAVE ${dollarOff}</span> when you order right now</div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              PRICE TABLe
            </Col>
          </Row>
        </Grid>
        <div style={styles.guaranteeBg}>
          <Guarantee transparent />
        </div>
      </div>
    )
  }
}
