/**
 * Require Browsersync
 */
var browserSync = require('browser-sync');

/**
 * Run Browsersync with server config
 */
browserSync({
  server: './',
  watch: ['./src/pug/index.pug', './src/scss/*.scss'],
  files: ['./*.html', './assets/css/*.css']
});
