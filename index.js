/**
 * Created on 3/1/16.
 * @author rankun203
 */
'use strict';

let co      = require('co'),
    geetest = require('geetest/gt-sdk'),

    methods = {}, // cached methods
    geeInstance;  // cached geetest instance

/**
 * Init geetest config
 * @param key geetest key
 * @param id geetest id
 */
function init(key, id) {
  geeInstance = geetest(key, id);
  return this;
}

['register', 'validate'].forEach(function each(method) {

  methods[method] = function* () {

    return yield co(function* () {

      return new Promise(function later(ok, fail) {

        geeInstance[method](function later1(err, body) {

          if (err) fail(err);
          ok(body);
        });
      });
    });
  };
});

module.exports.init     = init;
module.exports.register = methods['register'];
module.exports.validate = methods['validate'];
