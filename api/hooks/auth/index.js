'use strict';

var Marlinspike = require('marlinspike');

class Auth extends Marlinspike {
  constructor (sails) {
    super(sails, module)
  }

  configure () {
    sails.services.passport.loadStrategies()
  }
}

module.exports = Marlinspike.createSailsHook(Auth);
