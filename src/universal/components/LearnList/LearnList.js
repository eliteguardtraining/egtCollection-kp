import React, { Component } from 'react'
import Radium from 'radium'
import { orange } from 'universal/styles/colors'
import { bodyStack, accuBold } from 'universal/styles/fonts'
import shallowCompare from 'react-addons-shallow-compare'
import checklistImg from 'universal/images/arrow-right-bullet.png'

const styles = {
  ul: {
    paddingLeft: 0,
    marginTop: '0em',
  },
  li: {
    backgroundImage: `url(${checklistImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px 18px',
    padding: '16px 0 10px 50px',
    listStyle: 'none',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  contentStyle: {
    fontFamily: bodyStack,
  },
  orangeTitle: {
    color: orange,
    fontFamily: bodyStack,
    textTransform: 'uppercase',
    fontWeight: accuBold,
  },
}

@Radium
export default class Checklist extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const {
      items,
      textAlign,
      minHeight,
    } = this.props
    let count = 0

    let ulStyle = styles.ul
    if (textAlign) {
      ulStyle = Object.assign({}, ulStyle, {
        textAlign,
      })
    }

    if (minHeight) {
      ulStyle = Object.assign({}, ulStyle, {
        minHeight,
      })
    }

    return (
      <ul style={ulStyle}>
        {items.map((item) => {
          let liStyle = styles.li
          let contentStyle = styles.contentStyle
          count = count + 1

          if (item.emphasiseContent) {
            contentStyle = Object.assign({}, {
              textTransform: 'uppercase',
              fontWeight: accuBold,
              letterSpacing: '.01px',
            })
          }

          return (
            <li key={`checklist-item-${count}`} style={liStyle}><span style={styles.orangeTitle}>{item.title}</span> <span style={contentStyle}>{item.content}</span></li>
          )
        })}
      </ul>
    )
  }
}
