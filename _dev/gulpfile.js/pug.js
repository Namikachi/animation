/**
 * pug
 * /src/内のpugファイルをコンパイルし/htdocs/に出力するタスク
 * 
 * @returns {Stream}
 */

exports.pug = function pug(cb) {
  const { src, dest } = require('gulp');
  const config = require('./config');
  const pug = require('gulp-pug');
  const plumber = require('gulp-plumber');
  const notify = require('gulp-notify');

  src(config.path.src.pug)
    .pipe(plumber({errorHandler:notify.onError('Error: <%= error.message %>')}))
    .pipe(pug({ pretty: true }))
    .pipe(dest(config.path[global.env].html))
    .on('end', cb);
};