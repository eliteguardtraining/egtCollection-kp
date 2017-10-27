import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import pxToEm from 'universal/utils/pxToEm'
import { centerBlock, imgResponsive } from 'universal/styles/helpers'
import { button, activeButton } from 'universal/styles/buttons'
import { headerStack } from 'universal/styles/fonts'

import buttonBg from './images/button-circle-bg.png'
import paymentTypes from './images/payments.png'

const baseFontSize = 65

const styles = {
  buttonContainer: {
    width: '90%',
    marginTop: '-.5em',
    paddingTop: '.5em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonDisabled: {
    cursor: 'not-allowed',
  },
  buttonContainerCircle: {
    width: '90%',
    backgroundPosition: 'center top',
    backgroundImage: `url(${buttonBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginTop: '-.5em',
    paddingTop: '.5em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button,
  activeButton,
  payments: Object.assign({
    marginTop: '1rem',
  }, centerBlock, imgResponsive),
  securePayments: {
    fontSize: `${pxToEm(36, baseFontSize)}em`,
    textAlign: 'center',
    fontFamily: headerStack,
    textTransform: 'uppercase',
    lineHeight: '1.5em',
  },
}

@Radium
export default class AddToCartButton extends Component {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    text: PropTypes.string,
    circle: PropTypes.bool,
    small: PropTypes.bool,
  }

  static defaultProps = {
    text: 'Add To Cart',
    circle: true,
    small: false,
  }

  handleAddToCart = () => {
    const { disabled, addToCart } = this.props
    if (!disabled) {
      return addToCart()
    }
  }

  render() {

    /* eslint-disable */
    const {
      active,
      activeText,
      addToCart,
      backdoor,
      cards,
      circle,
      disabled,
      securePayments,
      small,
      text,
      contained,
      yellowRectangle,
    } = this.props
    /* eslint-enable */

    let buttonText = active ? activeText : text
    let buttonStyles = Object.assign({}, active ? styles.activeButton : styles.button, this.props.buttonStyles)
    let buttonContainer = circle ? styles.buttonContainerCircle : styles.buttonContainer

    if (small) {
      buttonContainer = Object.assign({}, buttonContainer, {
        paddingTop: '.8em',
        paddingBottom: '.8em',
      })
      buttonStyles = Object.assign({}, buttonStyles, {
        '@media (max-width: 991px)': {
          maxWidth: '100%',
          fontSize: '1em',
        },
        '@media (max-width: 767px)': {
          maxWidth: '100%',
          fontSize: '.9em',
        },
      })
    }

    if (yellowRectangle) {
      buttonStyles = Object.assign({}, buttonStyles, {
        borderRadius: 5,
        background: 'none',
        backgroundColor: '#ffb900',
        ':hover': {
          textDecoration: 'none',
          backgroundColor: '#ffce00',
          backgroundImage: 'none',
        },
      })
    }

    if (contained) {
      buttonStyles = Object.assign({}, buttonStyles, {
        maxWidth: 'calc(100% - 200px)',
        '@media (max-width: 768px)': {
          maxWidth: 'calc(100% - 120px)',
        },
      })
    }

    return (
      <div style={buttonContainer}>
        <a style={!disabled && !backdoor ? buttonStyles : Object.assign({}, buttonStyles, styles.buttonDisabled)} onTouchTap={this.handleAddToCart}>
          {buttonText}
        </a>
        {cards ? <img style={styles.payments} src={paymentTypes} alt='Payments Accepted' /> : null}
        {securePayments ? <h4 style={styles.securePayments}>100% Secure Payments</h4> : null}
      </div>
    )
  }
}
