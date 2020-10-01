/**
 * server
 * ローカルサーバーをたてるタスク
 */

const { sync } = require('gulp-dart-sass');

exports.server = function server(cb) {
  const config = require('./config');
  const browser = require('browser-sync');
  const isWin = process.platform === 'win32';
  browser.init({
    port: config.server.port,
    server: {
      baseDir: config.path[global.env].root
    },
    startPath: config.server.startPath,
    ghostMode: false,
    browser: isWin ? 'chrome' : 'google chrome',
    open: 'local',
    notify: false,
    ui: false
  });
  cb();
};