'use strict';

var path = require('path');

var nunjucks = require('nunjucks-hapi');

var viewPath = path.join(__dirname, 'templates');

var env = nunjucks.configure(viewPath);
env.addGlobal('basetemplate', '_layout.html');
env.addFilter('toUpper', (str) => {
  return str.toUpperCase();
});

// set up templates with the same view path
module.exports = {
  engines: {
    html: nunjucks
  },
  path: viewPath
};
