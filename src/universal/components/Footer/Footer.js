import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { bodyStack } from 'universal/styles/fonts'
import { white, black } from 'universal/styles/colors'
import shallowCompare from 'react-addons-shallow-compare'
import moment from 'moment'


const styles = {
  footer: {
    backgroundColor: black,
    fontSize: '16px',
    paddingTop: '3em',
    paddingBottom: '4em',
    color: white,
    fontFamily: bodyStack,
    lineHeight: '1.75em',
    fontWeight: 400,
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  },
  disclaimer: {
    marginTop: '2em',
  },
  footerLink: {
    color: white,
    textDecoration: 'underline',
  },
}

@Radium
export default class Footer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const theme = this.props.theme || 'dark'
    let footerStyle
    let footerLinkStyle

    switch (theme) {
      case 'dark':
        footerStyle = styles.footer
        footerLinkStyle = styles.footerLink
        break
      case 'light':
        footerStyle = Object.assign({}, styles.footer, {
          backgroundColor: white,
          color: black,
        })
        footerLinkStyle = Object.assign({}, styles.footerLink, {
          color: black,
        })
        break
      default:
        footerStyle = styles.footer
        break
    }

    return (
      <footer style={footerStyle}>
        <Grid>
          <Row>
            <Col xs={12}>
              <span style={styles.copyright}>Copyright © {moment().format('YYYY')} EliteGuardTraining.com</span> &nbsp;&nbsp;|&nbsp;&nbsp; <a style={footerLinkStyle} href='https://eliteguardtraining.com'>Home</a>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p style={styles.disclaimer}>
                Disclaimer: By using this website, you agree to follow all safety instructions. Elite Guard Training LTD. and its coaches will not be held liable for any damages that may occur from training. Results are not typical, and only represent players who worked very hard.
                You can view our <a style={footerLinkStyle} href='/faqs' target='_blank'>newsletter FAQ here</a>.
                See our <a style={footerLinkStyle} href='/privacy-policy' target='_blank'>privacy policy here</a>.
                Read our <a style={footerLinkStyle} href='/disclaimer' target='_blank'>full disclaimer here</a>.
              </p>
            </Col>
          </Row>
        </Grid>

      </footer>
    )
  }
}
