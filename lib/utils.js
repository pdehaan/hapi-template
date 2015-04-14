'use strict';

var cfg = require('../config/index');

var env = cfg.get('env');

exports.isDevelopment = (env === 'development');
exports.isProduction = (env === 'production');
exports.isTest = (env === 'test');
