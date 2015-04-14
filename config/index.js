'use strict';

var fs = require('fs');
var path = require('path');

var convict = require('convict');

var schema = {
  env: {
    doc: 'The applicaton environment.',
    format: [
      'production',
      'development',
      'test'
    ],
    'default': 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    'default': 0,
    env: 'PORT'
  }
};

var conf = convict(schema);

var env = conf.get('env');
var envConfig = path.join(__dirname, `${env}.json`);
if (fs.existsSync(envConfig)) {
  conf.loadFile(envConfig);
}

conf.validate();

module.exports = conf;
