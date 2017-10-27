import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import TimeUnit from './TimeUnit'
import shallowCompare from 'react-addons-shallow-compare'
import createMarkup from 'universal/utils/createMarkup'
import { headerStack } from 'universal/styles/fonts'
import { white, orange } from 'universal/styles/colors'

const styles = {
  countdown: {
    textAlign: 'center',
    transform: 'translateZ(0)',
  },
  p: {
    color: white,
    fontFamily: headerStack,
    marginTop: 0,
    fontSize: '1.3rem',
    marginBottom: '.5em',
    lineHeight: '1em',
  },
}

const minute = 60
const hour = 60 * minute
const day = 24 * hour

@Radium
export default class Countdown extends Component {
  static propTypes = {
    inline: PropTypes.bool,
    timeRemaining: PropTypes.number.isRequired,
    text: PropTypes.string,
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const {
      abandoned,
      inline,
      inCopy,
      text,
      underlineColor,
      small,
    } = this.props

    let {
      timeRemaining,
    } = this.props

    if (inCopy) {
      styles.countdown.background = orange
      styles.countdown.display = 'inline-block'
      styles.countdown.paddingTop = 5
      styles.countdown.paddingBottom = 10
    }

    const days = Math.floor(timeRemaining / day) || 0
    timeRemaining = timeRemaining % day
    const hours = Math.floor(timeRemaining / hour) || 0
    timeRemaining = timeRemaining % hour
    const minutes = Math.floor(timeRemaining / minute) || 0
    timeRemaining = timeRemaining % minute
    const seconds = timeRemaining || 0

    return (
      <div style={styles.countdown}>
        {text ? <p style={styles.p} dangerouslySetInnerHTML={createMarkup(text)} /> : null}
        {!abandoned &&
          <span>
            <TimeUnit inCopy={inCopy} small={small} inline={inline} unit={'Days'} number={days} underlineColor={underlineColor} />
            <TimeUnit inCopy={inCopy} small={small} inline={inline} unit={'Hours'} number={hours} underlineColor={underlineColor} />
            <TimeUnit inCopy={inCopy} small={small} inline={inline} unit={'Minutes'} number={minutes} underlineColor={underlineColor} />
            <TimeUnit inCopy={inCopy} small={small} inline={inline} unit={'Seconds'} number={seconds} underlineColor={underlineColor} />
          </span>
        }
      </div>
    )
  }
}
