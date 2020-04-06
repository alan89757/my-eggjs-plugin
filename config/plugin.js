
const path = require("path");

exports.ext = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-ext')
}

exports.start = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-start')
}

exports.middleware = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-middleware')
}

exports.alanschedule = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-schedule')
}