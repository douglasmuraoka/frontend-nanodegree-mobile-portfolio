module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      main: {
        options: {
          engine: 'im',
          concurrency: 4,
          sizes: [{
            rename: false,
            width: 100,
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['**/*.jpg'],
          cwd: 'src/img/',
          dest: 'dist/img/'
        }]
      },
      views: {
        options: {
          engine: 'im',
          concurrency: 4,
          sizes: [{
            rename: false,
            width: 960,
            quality: 30
          },
          {
            name: "small",
            width: 100,
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['**/*.{png,jpg}'],
          cwd: 'views/img/',
          dest: 'dist/views/img/'
        }]
      }
    },

    cwebp: {
      main: {
        options: {
          q: 50
        },
        files: [{
          expand: true,
          cwd: 'dist/img', 
          src: ['**/*.{png,jpg}'],
          dest: 'dist/img/'
        }]
      },
      views: {
        options: {
          q: 50
        },
        files: [{
          expand: true,
          cwd: 'dist/views/img', 
          src: ['**/*.{png,jpg}'],
          dest: 'dist/views/img/'
        }]
      }
    },

    /* Clear out the dist directory if it exists */
    clean: {
      dev: {
        src: ['dist/'],
      },
    },

    /* Generate dist directories if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['dist/img','dist/css','dist/js', 'dist/views/img/']
        },
      },
    },

    /* Copies other resources to dist directory
     * TODO: minify files
     */
    copy: {
      dev: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['src/js/*.js'],
            dest: 'dist/js/'
          },
        ],
      },
    },

    /* CSS Minifier */
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-cwebp');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images', 'cssmin', 'cwebp']);
};
