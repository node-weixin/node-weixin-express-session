'use strict';
var assert = require('assert');
var session = require('node-weixin-session');

session.registerSet(function setSessionConf(req, key, value, next) {
  assert(req);
  assert(req.session);
  assert(req.session.id);
  assert(key);
  var id = req.session.id;
  if (!req.session[id]) {
    req.session[id] = {};
  }
  req.session[id][key] = value;
  next();
});

session.registerGet(function getSessionConf(req, key, next) {
  assert(req);
  assert(req.session);
  assert(req.session.id);

  var id = req.session.id;
  assert(req.session[id]);
  assert(req.session[id][key]);
  return next(req.session[id][key]);
});

module.exports = session;
