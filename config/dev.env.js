'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  STARFINDER_MOBS_API_ROOT: '"http://localhost:5000"'
})
