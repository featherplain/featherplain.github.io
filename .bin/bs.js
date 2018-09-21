/**
 * Require Browsersync
 */
var browserSync = require('browser-sync');

/**
 * Run Browsersync with server config
 */
browserSync({
  server: 'docs',
  files: ['docs/*.html', 'docs/*.css']
});
