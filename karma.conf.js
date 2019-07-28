// Karma configuration
// Generated on Sun Jul 28 2019 16:22:16 GMT+0900 (GMT+09:00)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-ajax',　'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test/js/*.js',
      // 読み込む順序があるため、分けて指定している
      'assets/js/jquery-3.4.1.min.js',
      'assets/js/bootstrap.bundle.min.js',
      'assets/js/main.js',
      'index.html',
      {
        pattern: 'assets/css/*.css',
        included: false,
        served: true
      },
      {
        pattern: 'assets/images/*',
        included: false,
        served: true
      }
    ],


    // list of files / patterns to exclude
    exclude: [
      'assets/js/boot.js'
    ],

    proxies: {
      '/assets/css/': '/base/assets/css/',
      '/assets/images/': '/base/assets/images/'
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'index.html': ['html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    client: {
      // 画面(html)が表示されてるか確認したいので。
      clearContext: false,
    }
  })
}
