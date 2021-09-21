const http = require('http')

const app = require('../app/app')

const server = http.createServer(app)

const initialize = () => {
  const { PORT } = process.env
  const debugFun = () => console.log(`Server listening to port ${PORT}`)

  server.listen(PORT, debugFun)
}

module.exports = {
  initialize
}
