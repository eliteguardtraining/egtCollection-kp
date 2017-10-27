import PromoContainer from 'universal/modules/UpsellFullPrice/containers/UpsellContainer'
import Main from 'universal/modules/UpsellFullPrice/components/Main/Main'

export default store => { // eslint-disable-line
  return {
    path: '/special/full-price',
    component: PromoContainer,
    indexRoute: {
      component: Main,
    },
    childRoutes: [
      {
        path: '/products/kp-beat-anybody',
        component: Main,
      },
    ],
  }
}
