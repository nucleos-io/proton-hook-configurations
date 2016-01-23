'use strict'

let path = require('path')
let Hook = require('proton-hook')
let _ = require('lodash')

module.exports = class ConfigHook extends Hook {

  constructor(proton) {
    super(proton)
  }

  configure() {
    if (!this.proton.app.config)
      this.proton.app.config = {}
    return true
  }

  initialize() {
    let configPath = path.join(this.proton.app.path, '../config')
    this.proton.app.config = require('require-all')(configPath)
  }



}
