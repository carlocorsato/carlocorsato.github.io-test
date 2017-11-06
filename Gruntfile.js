'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'images/'
        }]
      }
    },

    uglify: {
        options: {
            manage: false
        },
        my_target: {
            files: {
                'assets/js/scripts.min.js': ['assets/js/plugins/*.js', 'assets/js/_*.js']
            }
        }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ["imagemin"])

};
