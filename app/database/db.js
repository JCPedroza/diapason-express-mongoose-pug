const { connect } = require('mongoose')

const { dbOptions } = require('./db-config')

const initialize = () => {
  const { DBURL } = process.env
  const debugFun = () => console.log(`DB connected to ${DBURL}`)

  connect(DBURL, dbOptions, debugFun)
}

module.exports = {
  initialize
}
