const { model, Schema } = require('mongoose')

const { schemaOptions, modelNames } = require('./model-config')

const title = {
  type: String,
  required: true,
  minlength: 1,
  maxlength: 256
}

const author = {
  type: String,
  required: true,
  minlength: 1,
  maxlength: 128
}

const year = {
  type: Number,
  default: -1,
  min: -1,
  max: 10000,
  validate: {
    validator: (num) => Number.isInteger(num),
    message: 'Year must be an integer'
  }
}

const isActive = {
  type: Boolean,
  default: false
}

const song = {
  title,
  author,
  year,
  isActive
}

const songSchema = new Schema(song, schemaOptions)

const songModel = model(modelNames.song, songSchema)

module.exports = songModel
