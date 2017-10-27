import moment from 'moment'

// This is the global date override, import it wherever needed
const dateOverride = typeof window !== 'undefined' ? window.location.search.indexOf('view_as_date') : -1
export default dateOverride > -1 ? moment(window.location.search.slice((dateOverride + 13), (dateOverride + 23)) + ' 10:00') : moment()
