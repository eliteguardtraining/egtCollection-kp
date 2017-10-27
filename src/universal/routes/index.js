/* eslint-disable global-require */

import AppContainer from 'universal/containers/App/AppContainer'

export default store => {
  return {
    component: AppContainer,
    childRoutes: [
      require('./promo')(store),
      require('./downsell')(store),
      require('./upsell')(store),
      require('./notFound'),
    ],
  }
}
