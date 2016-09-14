'use strict'

let path = require('path')
let Quark = require('proton-quark')
let _ = require('lodash')

/**
 * @class ServicesQuark
 * @classdesc This quark is for instance services
 * @author Luis Hernandez
 */
class ConfigQuark extends Quark {

  constructor(proton) {
    super(proton)
  }

  /**
   * @override
   * @method configure
   * @description Ask if the proton.app.config object exist, if not exist
   * the method create the proton.app.config object
   * @author Luis Hernandez
   */
  configure() {
    if (!this.proton.app.config)
      this.proton.app.config = {}
  }

  initialize() {
    this.proton.app.config = this._configurations
  }


  /**
   * @method configurations
   * @description This method get the export value of each config present
   * in the config folder
   * @author Luis Hernandez
   * @return {Array} - All configurations exported values as an array
   */
  get _configurations() {
    const configPath = path.join(this.proton.app.path, '/config')
    return require('require-all')(configPath)
  }

}

module.exports = ConfigQuark
