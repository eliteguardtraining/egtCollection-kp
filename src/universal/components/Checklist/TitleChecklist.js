import React, { Component } from 'react'
import Radium from 'radium'
import shallowCompare from 'react-addons-shallow-compare'
import checklistImg from './images/aionecheck.png'

const styles = {
  ul: {
    paddingLeft: 0,
  },
  li: {
    background: `url(${checklistImg}) no-repeat left 12px`,
    padding: '16px 0 10px 50px',
    listStyle: 'none',
    margin: 0,
  },
  liAlt: {
    background: `url(${checklistImg}) no-repeat left 12px`,
    padding: '16px 0 10px 50px',
    listStyle: 'none',
    margin: 0,
    fontWeight: 'bold',
  },
}

@Radium
export default class TitleChecklist extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const {
      items,
      stripe,
      titles,
    } = this.props
    let count = 0


    return (
      <ul style={styles.ul}>
        {items.map((item) => {
          let liStyle = styles.li
          count = count + 1
          if (stripe) {
            liStyle = count % 2 === 0 ? styles.li : styles.liAlt
          }

          if (titles) {
            liStyle = Object.assign({}, liStyle, {
              textTransform: 'uppercase',
              fontSize: 25,
            })
          }

          return (
            <li key={count} style={liStyle}>{item}</li>
          )
        })}
      </ul>
    )
  }
}
