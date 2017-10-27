import React, { Component } from 'react'
import { syncLead, syncLeadByEmail } from '../../ducks/leads'
import leadStorageOptions from '../../utils/leadStorageOptions'

const { emailIdKey } = leadStorageOptions

export default leadIdKey => ComposedComponent => {
  return class TokenizedComp extends Component {
    componentWillMount() {
      if (__CLIENT__) {

        // First look for contact query param, eg eliteguardtraining.com?contact=bob@example.com
        if (this.props.location && this.props.location.query && this.props.location.query.contact) {
          return syncLeadByEmail(this.props.dispatch, { email: this.props.location.query.contact })
        }

        // Then look for contact_fields param, eg eliteguardtraining.com?contact_fields[email]=bob@example.com
        if (this.props.location && this.props.location.query && this.props.location.query['contact_fields[email]']) {
          return syncLeadByEmail(this.props.dispatch, { email: this.props.location.query['contact_fields[email]'] })
        }

        // Fallback to localstorage
        let leadEmail = null
        let leadId = null

        if (localStorage) {
          leadEmail = localStorage.getItem(emailIdKey)
          leadId = localStorage.getItem(leadIdKey)
        }

        if (leadEmail) {
          return syncLeadByEmail(this.props.dispatch, { email: leadEmail })
        }

        if (leadId) {
          return syncLead(this.props.dispatch, { id: leadId })
        }

      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
}
