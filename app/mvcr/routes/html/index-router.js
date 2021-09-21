const { Router } = require('express')

const indexCtrl = require('../../controllers/html/index-control')

const indexRouter = new Router()

indexRouter.get('/', indexCtrl.get)

module.exports = indexRouter
