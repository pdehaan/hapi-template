'use strict';

var {get} = require('hapi-helpers');

exports.routes = [
  get('/', null, require('../controllers/home').home)
];
