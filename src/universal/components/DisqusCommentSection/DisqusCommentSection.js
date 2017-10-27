import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'
import Radium from 'radium'

// Components
import ArrowDown from 'universal/components/ArrowDown/ArrowDown'

// Styles
const styles = {
  contentContainer: {
    textAlign: 'center',
    position: 'relative',
    padding: 50,
    '@media (max-width: 762px)': {
      padding: '50px 20px',
    },
    maxWidth: 900,
    margin: '0 auto',
  },
}

@Radium
export default class DisqusCommentSection extends Component {

  static propTypes = {
    arrowDown: PropTypes.string,
    bgColor: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }

  componentWillMount = () => {
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */

    if (typeof window !== 'undefined') {
      /* eslint-disable */
      const disqusID = this.props.id
      window.disqus_config = function () {
        this.page.url = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = disqusID; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      (function () { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://eliteguardtraining.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();
      /* eslint-enable */
    }

  }

  shouldComponentUpdate = () => false

  render() {

    const {
      arrowDown,
      bgColor,
    } = this.props

    const contentContainerStyles = Object.assign({}, styles.contentContainer, {
      background: bgColor,
    })

    return (
      <div>
        <div style={contentContainerStyles}>
          <Row>
            <ArrowDown color={arrowDown} />
            <Col xs={12}>
              <div id='disqus_thread'></div>
              <noscript>Please enable JavaScript to view the <a href='https://disqus.com/?ref_noscript'>comments powered by Disqus.</a></noscript>
            </Col>
          </Row>
        </div>
        <script id='dsq-count-scr' src='//eliteguardtraining.disqus.com/count.js' async></script>
      </div>
    )
  }
}
