require('dotenv').config()

const { join } = require('path')

const express = require('express')
const morgan = require('morgan')

const db = require('./database/db')

const indexRouter = require('./mvcr/routes/html/index-router')

const app = express()

db.initialize()

app.set('views', join(__dirname, '/mvcr/views'))
app.set('view engine', 'pug')

// app.use(express.static('./public/'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))

app.use('/', indexRouter)
app.use('/index', indexRouter)

module.exports = app
