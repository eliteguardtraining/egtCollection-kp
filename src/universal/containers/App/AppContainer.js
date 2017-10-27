import React, { PropTypes, Component } from 'react'
import App from '../../components/App/App'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { connect } from 'react-redux'
import leadStorageOptions from 'universal/utils/leadStorageOptions'
import syncLead from '../../decorators/syncLead/syncLead'
import Radium, { Style, StyleRoot } from 'radium'
import normalize from 'radium-normalize'
import { styles as bsStyles } from 'universal/styles/bootstrapStyles'
import { setSuperProps, timing } from 'universal/utils/analytics'
import Loader from 'universal/components/Loader/Loader'

injectTapEventPlugin()
@connect(mapStateToProps)
@syncLead(leadStorageOptions.leadId)
@Radium
export default class AppContainer extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    radiumConfig: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const {
      utm_source,
    } = this.props

    // Feature detects Navigation Timing API support.
    if (window.performance) {
      // Gets the number of milliseconds since page load
      // (and rounds the result since the value must be an integer).
      const timeSincePageLoad = Math.round(performance.now())

      // Sends the timing hit to Google Analytics.
      timing('AppContainer', 'mounted', timeSincePageLoad)
    }

    const superProps = {}
    if (utm_source) {
      superProps.utm_source = utm_source
    }

    setSuperProps(superProps)

  }

  render() {
    return (
      <StyleRoot>
        <Loader />
        <Style rules={normalize} />
        <Style rules={bsStyles} />
        <App {...this.props} />
      </StyleRoot>
    )
  }
}

function mapStateToProps(state, props) {
  const experiments = state.get('experiments')

  return {
    radiumConfig: { userAgent: state.getIn(['navigator', 'userAgent']) },
    lead: state.getIn('leads', 'lead'),
    experiments: experiments.get('experiments') || null,
    utm_source: props.location.query.source || props.location.query.utm_source,
    utm_term: props.location.query.keyword || props.location.query.utm_term,
    utm_campaign: props.location.query.utm_campaign,
    utm_content: props.location.query.utm_content,
  }
}
