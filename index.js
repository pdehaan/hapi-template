'use strict';

var server = require('./server/index');

server.start((err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Hapi %s server started at %s', server.version, server.info.uri);
});
