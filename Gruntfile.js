/*
 * grunt-rt-template
 * https://github.com/maaprote/grunt-rt-template
 *
 * Copyright (c) 2017 Rodrigo Teixeira @ Okler Team
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    rttemplate: {
      main: {
        files: [{
          expand: true,
          cwd: 'test/assets/templates/',
          dest: 'test/expected/',
          src: ['*.tmpl'],
          ext: '.html'
        }],
        templateData: [{   
            name: 'John Doe',
            link: 'http://www.google.com'
        }, {
            name: 'Joana Doe',
            link: 'http://www.microsoft.com'
        }, {
            name: 'Robert Doe',
            link: 'http://www.apple.com'
        }]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'rttemplate', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
