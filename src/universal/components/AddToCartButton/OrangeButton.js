import React, { Component } from 'react'
import Radium from 'radium'
import { white } from 'universal/styles/colors'
import { headerStack, accuBold } from 'universal/styles/fonts'

import oldButtonBg from 'universal/images/orange-button-bg.gif'

const styles = {
  orangeButton: {
    width: '100%',
    display: 'block',
    textAlign: 'center',
    textTransform: 'none',
    verticalAlign: 'middle',

    color: white,
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontStyle: 'italic',
    fontSize: '1em',
    lineHeight: '1em',
    minHeight: '1.6em',

    marginTop: '0',
    marginBottom: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '.2em',
    outline: 'none',

    border: '1px solid #b92407',
    borderRadius: '5px',

    backgroundImage: `url(${oldButtonBg})`,
    backgroundPosition: 'left top',

    cursor: 'pointer',
    ':hover': {
      backgroundPosition: 'left -110px',
      textDecoration: 'none',
    },
  },
}

@Radium
export default class OrangeButton extends Component {
  static defaultProps = {
    text: 'Add To Cart',
    small: false,
  }

  render() {
    const {
      addToCart,
      text,
      small,
    } = this.props

    let buttonStyles = Object.assign({}, styles.orangeButton, this.props.buttonStyles)

    if (small) {
      buttonStyles = Object.assign({}, buttonStyles, {
        '@media (max-width: 991px)': {
          maxWidth: '100%',
          fontSize: '.7em',
        },
        '@media (max-width: 767px)': {
          maxWidth: '100%',
          fontSize: '.7em',
        },
      })
    }

    return (
      <a style={buttonStyles} onTouchTap={addToCart}>
        {text}
      </a>
    )
  }
}
