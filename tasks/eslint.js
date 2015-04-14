'use strict';

module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-eslint');

  grunt.config('eslint', {
    app: {
      src: '{,config/,server/**/,tasks/}*.js'
    }
  });
};
