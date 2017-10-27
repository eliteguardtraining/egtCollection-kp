import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { black, bgGrey } from 'universal/styles/colors'
import { headerStack, accuBold } from 'universal/styles/fonts'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

import victorImg from './images/Victor.png'
import bradleyBealImg from './images/Bradley-Beal.png'
import jordanClarkson from './images/jordanClarkson.jpeg'
import zachLaVine from './images/zachLavine2.jpeg'
import terrenceImg from './images/Terrence.png'
import andrewWiggins from './images/andrewWiggins.jpeg'

const baseFontSize = 50

const playerBase = {
  position: 'absolute',
  maxWidth: 275,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: 'rgb(255,255,255)',
  transform: 'rotate(-7deg)',
  msTransform: 'rotate(-7deg)',
  MozTransform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)',
  OTransform: 'rotate(-7deg)',
  WebkitTransition: 'all 0.2s linear',
  transition: 'all 0.2s linear',
  WebkitTransformStyle: 'preserve-3d',
  boxShadow: '1px 1px 3px rgba(0,0,0,0.2)',
  msFilter: '"progid:DXImageTransform.Microsoft.dropshadow(OffX=1,OffY=1,Color=#33000000,Positive=true)"',
  filter: 'progid:DXImageTransform.Microsoft.dropshadow(OffX=1,OffY=1,Color=#33000000,Positive=true)',
  ':hover': {
    zIndex: 10,
    transform: 'rotate(0deg)',
    msTransform: 'rotate(0deg)',
    MozTransform: 'rotate(0deg)',
    WebkitTransform: 'rotate(0deg)',
    OTransform: 'rotate(0deg)',
    WebkitTransition: 'all 0.2s linear',
    transition: 'all 0.2s linear',
  },
  '@media (max-width: 991px)': {
    maxWidth: 200,
  },
  '@media (max-width: 480px)': {
    maxWidth: 192,
  },
  '@media (max-width: 321px)': {
    width: 138,
  },
}

const styles = {
  section: {
    position: 'relative',
    fontWeight: accuBold,
    fontSize: `${pxToEm(baseFontSize - 20, 16)}rem`,
    fontFamily: headerStack,
    color: black,
    paddingTop: '1.5em',
    paddingBottom: '2em',
    textAlign: 'center',
    backgroundColor: bgGrey,
    '@media (min-width: 768px)': {
      fontSize: `${pxToEm(baseFontSize - 10, 16)}rem`,
    },
    '@media (min-width: 992px)': {
      fontSize: `${pxToEm(baseFontSize, 16)}rem`,
    },
  },
  h1: {
    marginTop: 0,
    marginBottom: '1em',
    fontWeight: accuBold,
    fontSize: '1em',
    lineHeight: '1em',
  },
  collage: {
    position: 'relative',
    height: 815,
    '@media (max-width: 991px)': {
      height: 440,
    },
    '@media (max-width: 480px)': {
      height: 992,
    },
    '@media (max-width: 320px)': {
      height: 680,
    },
  },
  playerName: {
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 0,
    fontSize: '.7em',
    lineHeight: '1em',
  },
  playerTeam: {
    textAlign: 'center',
    marginTop: 0,
    marginBottom: '0',
    fontSize: '.5em',
    lineHeight: '1em',
    fontStyle: 'italic',
  },
  player1: Object.assign({}, playerBase, {
    WebkitTransform: 'rotate(5deg)',
    msTransform: 'rotate(5deg)',
    transform: 'rotate(5deg)',
    left: '1%',
  }),
  player2: Object.assign({}, playerBase, {
    WebkitTransform: 'rotate(1deg)',
    msTransform: 'rotate(1deg)',
    transform: 'rotate(1deg)',
    left: '25%',
    marginTop: '14%',
    '@media (max-width: 550px)': {
      WebkitTransform: 'rotate(1deg)',
      msTransform: 'rotate(1deg)',
      transform: 'rotate(1deg)',
      left: '47%',
      marginTop: '7%',
    },
    '@media (max-width: 320px)': {
      right: '0%',
    },
  }),
  player3: Object.assign({}, playerBase, {
    WebkitTransform: 'rotate(-10deg)',
    msTransform: 'rotate(-10deg)',
    transform: 'rotate(-10deg)',
    left: '71%',
    '@media (max-width: 550px)': {
      WebkitTransform: 'rotate(-12deg)',
      msTransform: 'rotate(-12deg)',
      transform: 'rotate(-12deg)',
      left: '4%',
      marginTop: '74%',
    },
  }),
  player4: Object.assign({}, playerBase, {
    WebkitTransform: 'rotate(-6deg)',
    msTransform: 'rotate(-6deg)',
    transform: 'rotate(-6deg)',
    marginTop: '34%',
    left: '1%',
    '@media (max-width: 550px)': {
      WebkitTransform: 'rotate(-6deg)',
      msTransform: 'rotate(-6deg)',
      transform: 'rotate(-6deg)',
      marginTop: '96%',
      left: '51%',
    },
  }),
  player5: Object.assign({}, playerBase, {
    WebkitTransform: 'rotate(-4deg)',
    msTransform: 'rotate(-4deg)',
    transform: 'rotate(-4deg)',
    left: '48%',
    marginTop: '11%',
    maxWidth: 310,
    '@media (max-width: 550px)': {
      WebkitTransform: 'rotate(-4deg)',
      msTransform: 'rotate(-4deg)',
      transform: 'rotate(-4deg)',
      left: '3%',
      marginTop: '149%',
    },
  }),
  player6: Object.assign({}, playerBase, {
    WebkitTransform: 'rotate(-4deg)',
    msTransform: 'rotate(-4deg)',
    transform: 'rotate(-4deg)',
    left: '73%',
    marginTop: '37%',
    '@media (max-width: 550px)': {
      WebkitTransform: 'rotate(-4deg)',
      msTransform: 'rotate(-4deg)',
      transform: 'rotate(-4deg)',
      left: '51%',
      marginTop: '167%',
    },
  }),
  playerImg: {
    maxWidth: '100%',
    maxHeight: '100%',
    filter: 'gray',
    WebkitFilter: 'grayscale(100%)',
    ':hover': {
      filter: 'url("data:image/svg+xml;utf8,<svg xmlns=\\\'http://www.w3.org/2000/svg\\\'><filter id=\\\'grayscale\\\'><feColorMatrix type=\\\'matrix\\\' values=\\\'1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0\\\'/></filter></svg>#grayscale")',
      WebkitFilter: 'grayscale(0%)',
    },
  },
}


@Radium
export default class PlayersWorkedWith extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const players = [
      {
        name: 'Victor Oladipo',
        team: 'Oklahoma City Thunder',
        img: victorImg,
      },
      {
        name: 'Bradley Beal',
        team: 'Washington Wizards',
        img: bradleyBealImg,
      },
      {
        name: 'Terrence Ross',
        team: 'Toronto Raptors',
        img: terrenceImg,
      },
      {
        name: 'Zach LaVine',
        team: 'Minnesota Timberwolves',
        img: zachLaVine,
      },
      {
        name: 'Jordan Clarkson',
        team: 'Los Angeles Lakers',
        img: jordanClarkson,
      },
      {
        name: 'Andrew Wiggins',
        team: 'Minnesota Timberwolves',
        img: andrewWiggins,
      },
    ]

    let count = 0

    return (
      <section style={styles.section}>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 style={styles.h1}>
                Just A Few Of The Pros Coaches Alan & Drew <br />
                Work With On A Regular Basis&#8230;
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div style={styles.collage}>

                {players.map((player) => {
                  count = count + 1

                  return (
                    <span key={`player${count}`} style={styles[`player${count}`]}>
                      <img key={`player${count}img`} style={styles.playerImg} src={player.img} alt={player.name} />
                      <h4 style={styles.playerName}>{player.name}</h4>
                      <h5 style={styles.playerTeam}>{player.team}</h5>
                    </span>
                  )
                })}

              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}
