/* eslint-disable */

import winston from 'winston'

const experiments = []

export default function startExperiments(req, res, defaultAction, store) {
  // apply experiments
  experiments.map((experiment) => {
    winston.log('applying app experiment', { experimentName: experiment.name })
    try {
      experiment.activate(req, res, store, winston)
    } catch (e) {
      winston.log('info', 'Experiment did not meet activation requirements.', { experimentName: experiment.name })
    }
  })

  // Activate redirect experiment
  if (typeof redirectExperiment !== 'undefined') {
    winston.log('info', 'starting redirect experiment')
    try {
      redirectExperiment.activate(req, res, store)
    } catch (e) {
      winston.log('info', 'Experiment did not meet activation requirements.')
    }
  }

  winston.log('info', 'running default action')
  return defaultAction(req, res, store)
}
