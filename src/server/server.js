import { SocketCluster } from 'socketcluster'
import os from 'os'
import { jwtSecret } from './secrets'
import path from 'path'
import './logging'
import winston from 'winston'

const numCpus = os.cpus().length

export const options = {
  authKey: jwtSecret,
  logLevel: 1,
  // change this to scale vertically
  workers: 1 || numCpus,
  brokers: 1,
  port: process.env.PORT || 3000,
  appName: 'EGT Promo',
  allowClientPublish: false,
  initController: path.join(__dirname, '/init.js'),
  workerController: path.join(__dirname, '/worker.js'),
  brokerController: path.join(__dirname, '/broker.js'),
  socketChannelLimit: 1000,
  rebootWorkerOnCrash: false,
}

winston.log('info', 'Server Initializing', {
  workers: options.workers,
  brokers: options.brokers,
  port: options.port,
  appName: options.appName,
})

/* eslint-disable no-new */
new SocketCluster(options)
