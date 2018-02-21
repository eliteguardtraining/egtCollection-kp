import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import shallowCompare from 'react-addons-shallow-compare'

// Components
import Countdown from './Countdown'

const styles = {
  countdown: {
    paddingTop: '1em',
    paddingRight: '1em',
    paddingLeft: '1em',
    paddingBottom: 0,
  },
}

@Radium
export default class FloatingCountdown extends Component {
  static propTypes = {
    timeRemaining: PropTypes.number.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const {
      timeRemaining,
      text,
    } = this.props
    return (
      <div style={styles.countdown}>
        <Countdown timeRemaining={timeRemaining} text={text} />
      </div>
    )
  }
}
