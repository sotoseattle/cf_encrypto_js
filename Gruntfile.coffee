module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-mocha-test')

  grunt.initConfig
    watch:
      coffee:
        files: 'lib/*.coffee'
        tasks: ['coffee:compile', 'mochaTest:test']
      test:
        files: 'spec/**/*.js'
        tasks: ['mochaTest:test']

    coffee:
      compile:
        expand: true,
        flatten: true,
        cwd: "#{__dirname}/lib/",
        src: ['*.coffee'],
        dest: 'js/',
        ext: '.js'

    mochaTest:
      test:
        options:
          reporter: 'spec',
          quiet: false #,
          # require: 'coverage/blanket'
        src: ['spec/**/*.js']

    grunt.registerTask('default', ['coffee','mochaTest'])
