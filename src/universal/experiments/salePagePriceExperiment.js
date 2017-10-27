import { setExperiment } from '../ducks/experiments'

export const experimentName = 'EGTX2.0 Sale Page Price'
export const ONE_TIME_PAYMENT = 'One Time $97 Payment'
export const TWO_TIME_PAYMENT = 'Two $97 Payments'

const experimentCookieKey = 'egt.egtx2.sale_page_price'

const variations = {
  ONE_TIME_PAYMENT: (store) => {
    store.dispatch(setExperiment(experimentName, ONE_TIME_PAYMENT))
  },
  TWO_TIME_PAYMENT: (store) => {
    store.dispatch(setExperiment(experimentName, TWO_TIME_PAYMENT))
  },
}

const variationsList = Object.keys(variations)

const getVariation = (value = 0) => {
  return variationsList[value]
}

const shouldActivate = () => {
  return true
}

const config = {
  activate: (req, res, store) => {
    console.log('info', 'checking to see if experiment should be activated')
    if (shouldActivate()) {
      console.log('info', 'matched activation criteria')

      let splitValue = req.cookies && req.cookies[experimentCookieKey]
      if (splitValue) {
        console.log('info', 'cookie exists', { cookie: { name: experimentCookieKey, value: splitValue } })
      } else {
        splitValue = getVariation(Math.floor(Math.random() * variationsList.length))
        res.cookie(experimentCookieKey, splitValue, { maxAge: 900000 })
        console.log('info', 'cookie created successfully', { cookie: { name: experimentCookieKey, value: splitValue } })
      }

      console.log('info', 'split test', { splitValue })
      return variations[splitValue](store)
    } else {
      throw new Error('Experiment did not meet activation requirements.')
    }
  },
  name: experimentName,
}

export default config
