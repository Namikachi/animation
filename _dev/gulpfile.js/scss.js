/**
 * scss
 * sassのコンパイルタスク
 * @return {Stream}
 */
// expandedかcompressed
const { src, dest, series } = require('gulp');
const { stylelint } = require('./stylelint-scss');
const config = require('./config');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sass = require('gulp-dart-sass');
const autoPrefixer = require('gulp-autoprefixer');

function scss(cb) {
  src(config.path.src.scss)
    .pipe(plumber({ errorHandler: notify.onError('Error1: <%= error.message %>') }))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoPrefixer())
    .pipe(dest(config.path[global.env].css))
    .on('end', cb);
};

exports.scss = series(stylelint, scss);