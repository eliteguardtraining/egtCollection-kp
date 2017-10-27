/* eslint-disable no-unused-vars */
export default store => {
  return {
    path: '/',
    // component: PromoContainer,
    getComponent: async (location, cb) => {
      const component = await System.import('universal/modules/Product/containers/Product/PromoContainer')
      cb(null, component)
    },
    getIndexRoute: async (location, cb) => {
      const component = await System.import('universal/modules/Product/components/Main/Main')
      cb(null, { component })
    },
    childRoutes: [
      {
        path: 'options',
        getComponent: async (location, cb) => {
          const component = await System.import('universal/modules/Options/components/Main/Main')
          cb(null, component)
        },
      },
    ],
  }
}
