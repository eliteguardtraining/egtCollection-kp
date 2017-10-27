import { Map } from 'immutable'

export const SET_IDENTITY = 'SET_IDENTITY'
export const SET_PROMO = 'SET_PROMO'

const initialState = Map({
  identity: '',
  promo: '',
})

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_IDENTITY:
      return state.merge({
        identity: action.identity,
      })
    case SET_PROMO:
      return state.merge({
        promo: action.promo,
      })
    default:
      return state
  }
}

export function setIdentity(identity) {
  return {
    type: SET_IDENTITY,
    identity,
  }
}

export function setPromo(promo) {
  return {
    type: SET_PROMO,
    promo,
  }
}
