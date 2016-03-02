/**
 * Created on 3/1/16.
 * @author rankun203
 */
'use strict';

let co      = require('co'),
    geetest = require('geetest/gt-sdk'),

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

module.exports.init     = init;
module.exports.register = function* () {
  return yield co(function* () {

    return new Promise(function later(ok, fail) {
      geeInstance.register(function later1(err, body) {
        if (err) fail(err);
        ok(body);
      });
    });
  });
};

module.exports.validate = function* (config) {
  return yield co(function* () {

    return new Promise(function later(ok, fail) {
      geeInstance.validate(config, function later1(err, body) {
        if (err) fail(err);
        ok(body);
      });
    });
  });
};
