'use strict'

class GameController {
  index({ request, response }) {
    response.send('hello world response')
  }
}

module.exports = GameController
