import PromoContainer from 'universal/modules/ProductFullPrice/containers/Product/PromoContainer'
import Main from 'universal/modules/ProductFullPrice/components/Main/Main'

export default store => { // eslint-disable-line
  return {
    path: '/full-price',
    component: PromoContainer,
    indexRoute: {
      component: Main,
    },
    childRoutes: [
      {
        path: '/products/kp-finishing',
        component: Main,
      },
    ],
  }
}
