'use strict';
/* eslint space-before-function-paren: 0 */
/* eslint-env es6 */

var assert = require('assert');
var nodeWeixinExpressSession = require('../lib');
var req = {
  session: {
    id: 1
  }
};

describe('node-weixin-express-session', function() {
  it('should get an error without a request!', function() {
    var errored = false;
    try {
      nodeWeixinExpressSession.get(null, 'key', function() {

      });
    } catch (e) {
      errored = true;
      assert.equal(e.name, 'AssertionError');
    }
    assert.equal(true, errored);
  });

  it('should get an error with no session!', function() {
    var errored = false;
    try {
      nodeWeixinExpressSession.get({}, 'key', function() {

      });
    } catch (e) {
      errored = true;
      assert.equal(e.name, 'AssertionError');
    }
    assert.equal(true, errored);
  });

  it('should get an error without an ID!', function() {
    var errored = false;
    try {
      nodeWeixinExpressSession.get({
        session: null
      }, 'key', function() {});
    } catch (e) {
      errored = true;
      assert.equal(e.name, 'AssertionError');
    }
    assert.equal(true, errored);
  });

  it('should get an error because of id not set!', function() {
    var errored = false;
    try {
      nodeWeixinExpressSession.get({
        session: {
          id: null
        }
      }, 'key', function() {});
    } catch (e) {
      errored = true;
      assert.equal(e.name, 'AssertionError');
    }
    assert.equal(true, errored);
  });

  it('should get an error because of id value not set!', function() {
    var errored = false;
    try {
      nodeWeixinExpressSession.get({
        session: {
          id: 1
        }
      }, 'key', function() {});
    } catch (e) {
      errored = true;
      assert.equal(e.name, 'AssertionError');
    }
    assert.equal(true, errored);
  });

  it('should set an error without a request!', function() {
    var errored = false;
    try {
      nodeWeixinExpressSession.set(null, 'key', 1, function() {});
    } catch (e) {
      errored = true;
      assert.equal(e.name, 'AssertionError');
    }
    assert.equal(true, errored);
  });

  it('should set an error without a session!', function() {
    var errored = false;
    try {
      nodeWeixinExpressSession.set({}, 'key', 1, function() {});
    } catch (e) {
      errored = true;
      assert.equal(e.name, 'AssertionError');
    }
    assert.equal(true, errored);
  });

  it('should set an error without an id!', function() {
    var errored = false;
    try {
      nodeWeixinExpressSession.set({
        session: {}
      }, 'key', 1, function() {});
    } catch (e) {
      errored = true;
      assert.equal(e.name, 'AssertionError');
    }
    assert.equal(true, errored);
  });

  it('should set an error without a request!', function() {
    var errored = false;
    try {
      nodeWeixinExpressSession.set({
        session: {
          id: null
        }
      }, 'key', 1, function() {});
    } catch (e) {
      errored = true;
      assert.equal(e.name, 'AssertionError');
    }
    assert.equal(true, errored);
  });

  it('should be able to set and get!', function(done) {
    nodeWeixinExpressSession.set(req, 'key', 1, function() {
      nodeWeixinExpressSession.get(req, 'key', function(value) {
        assert(value, 1);
        done();
      });
    });
  });
});
