import React, { PropTypes, Component } from 'react'
import Radium, { StyleRoot } from 'radium'

@Radium
export default class UciFrameContainer extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    return (
      <StyleRoot>
        <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.contentWindow.min.js' />
        {this.props.children}
      </StyleRoot>
    )
  }
}
