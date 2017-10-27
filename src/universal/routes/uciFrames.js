/* eslint-disable no-unused-vars */
export default store => {
  return {
    path: '/iframes',
    getComponent: async (location, cb) => {
      const component = await System.import('universal/modules/Product/components/_uciFrames/UciFrameContainer')
      cb(null, component)
    },
    childRoutes: [
      {
        path: 'meet-coach-kp',
        getComponent: async (location, cb) => {
          const component = await System.import('universal/modules/Product/components/_uciFrames/MeetCoachKP')
          cb(null, component)
        },
      },
      {
        path: 'learn-list',
        getComponent: async (location, cb) => {
          const component = await System.import('universal/modules/Product/components/_uciFrames/LearnList')
          cb(null, component)
        },
      },
      {
        path: 'guarantee',
        getComponent: async (location, cb) => {
          const component = await System.import('universal/modules/Product/components/_uciFrames/Guarantee')
          cb(null, component)
        },
      },
    ],
  }
}
