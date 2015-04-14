'use strict';

require('babel/register');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: require('./package.json')
  });

  grunt.loadTasks('tasks');
};
