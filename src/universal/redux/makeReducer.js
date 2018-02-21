import { reducer as form } from 'redux-form'
import { compose } from 'redux'
import { combineReducers } from 'redux-immutablejs'
import navigator from '../ducks/navigator'
import leads from '../ducks/leads'
import promo from '../ducks/promo'
import experiments from '../ducks/experiments'
import analytics from '../ducks/analytics'
import cart from '../ducks/cart'
import { routing } from './routing'

const currentReducers = {
  leads,
  navigator,
  routing,
  form,
  promo,
  experiments,
  analytics,
  cart,
}

export default (newReducers, reducerEnhancers) => {
  Object.assign(currentReducers, newReducers)
  const reducer = combineReducers({ ...currentReducers })
  if (reducerEnhancers) {
    return Array.isArray(reducerEnhancers) ? compose(...reducerEnhancers)(reducer) : reducerEnhancers(reducer)
  }
  return reducer
}
