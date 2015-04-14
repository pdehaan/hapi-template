'use strict';

var Hapi = require('hapi');

var cfg = require('../config/index');
var utils = require('../lib/utils');

var routes = require('./routes/index').routes;
var views = require('./views/index');

var server = new Hapi.Server();
server.connection({
  port: cfg.get('port')
});

if (utils.isDevelopment) {
  server.register({
    register: require('lout')
  }, (err) => {
    if (err) {
      return console.error(err);
    }
  });
}

server.route(routes);
server.views(views);

module.exports = server;
