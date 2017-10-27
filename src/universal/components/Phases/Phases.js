import React, { Component } from 'react'
import Radium from 'radium'
import ArrowDown from 'universal/components/ArrowDown/ArrowDown'
import PhaseOne from './PhaseOne'
import PhaseTwo from './PhaseTwo'
import PhaseThree from './PhaseThree'
import PhaseFour from './PhaseFour'
import PhaseFive from './PhaseFive'
import shallowCompare from 'react-addons-shallow-compare'

const styles = {
  phases: {
    position: 'relative',
  },
}

@Radium
export default class Phases extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const {
      arrowDown,
    } = this.props

    return (
      <div style={styles.phases}>
        {arrowDown && <ArrowDown color={arrowDown} />}
        <PhaseOne />
        <PhaseTwo />
        <PhaseThree />
        <PhaseFour />
        <PhaseFive />
      </div>
    )
  }
}
