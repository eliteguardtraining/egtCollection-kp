import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import Section from 'universal/components/Section/Section'
import { orange } from 'universal/styles/colors'
import { headerStack, bodyStack, accuBold, accuBlack } from 'universal/styles/fonts'
import { imgResponsive, centerBlock } from 'universal/styles/helpers'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'
import Checklist from 'universal/components/Checklist/Checklist'

const baseFontSize = 50

const styles = {
  section: {
    fontSize: `${pxToEm(baseFontSize)}rem`,
    fontFamily: bodyStack,
  },
  h1: {
    fontSize: '1em',
    fontFamily: headerStack,
    fontWeight: accuBold,
    textAlign: 'center',
    lineHeight: '1em',
    marginBottom: '.25em',
  },
  img: Object.assign({}, imgResponsive, centerBlock, {
    marginTop: '.65em',
  }),
  em: {
    fontWeight: accuBlack,
    color: orange,
    fontSize: `${(6 / 5)}em`,
    marginRight: 5,
  },
}

@Radium
export default class SmartSkills extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render() {

    const itemsLeft = [
      'Shooting off the catch',
      'Shooting off the dribble',
      'Change of pace',
      'Change of direction',
      'Advanced pivot work',
      'Body angles',
      'Attack angles',
      'Change of pace',
      'Decoy moves',
      'Counter moves',
    ]
    const itemsRight = [
      'Off-hand protection',
      'Finishing touch',
      'Step backs and step throughs',
      'Advanced finishing around the rim',
      'Bounce-to-pocket speed',
      'Ball-to-pocket speed',
      'Peripheral court vision',
      'Beating the second line of defense',
      'Free throw shooting',
      'Offensive & defensive instincts',
    ]

    return (
      <Section customStyles={styles.section} veryTight>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 style={styles.h1}>
                <em style={styles.em}>Plus,</em> Master The &#8220;Small Skills&#8221; <br />
                That Separate The Best In The World From The Pretenders
              </h1>
            </Col>
            <Col xs={12} sm={6} lg={4} lgOffset={2} md={5} mdOffset={1}>
              <Checklist items={itemsLeft} symbol='leftArrow' titles />
            </Col>
            <Col xs={12} sm={6}>
              <Checklist items={itemsRight} symbol='leftArrow' titles />
            </Col>
          </Row>
        </Grid>
      </Section>
    )
  }
}
