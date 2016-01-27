'use strict'

let path = require('path')
let Quark = require('proton-hook')
let _ = require('lodash')

module.exports = class ConfigQuark extends Quark {

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
