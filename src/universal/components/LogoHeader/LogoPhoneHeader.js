import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { black } from 'universal/styles/colors'
import Radium from 'radium'
import logo from 'universal/images/logo-fill.png'
import { imgResponsive } from 'universal/styles/helpers'

const styles = {
  navbarHeader: {
    position: 'relative',
    zIndex: 100,
  },
  header: {
    paddingTop: 5,
    background: black,
  },
  brand: Object.assign({}, imgResponsive, {
    paddingTop: '7px',
    paddingBottom: '7px',
    float: 'left',
  }),
}

@Radium
export default class LogoPhoneHeader extends Component {
  render() {

    /* eslint-disable */
    const {
      experiment,
    } = this.props
    /* eslint-enable */

    return (
      <div style={styles.navbarHeader}>
        <header style={styles.header}>
          <Grid>
            <Row>
              <Col xs={12}>
                <img style={styles.brand} src={logo} alt='logo' />
              </Col>
            </Row>
          </Grid>
        </header>
      </div>
    )
  }
}
