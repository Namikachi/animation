/**
 * stylelintScss
 * scssがスタイル規約に従っているかをチェックしてプロパティを並び替えて元ファイルに上書きするタスク
 * 
 * @return {Stream}
 */

exports.stylelint = function stylelint(cb) {
  const { src } = require('gulp');
  const config = require('./config');
  const plumber = require('gulp-plumber');

  const postcss = require('gulp-postcss');
  const postcssScss = require('postcss-scss');
  const stylelint = require('stylelint');
  const reporter = require('postcss-reporter');

  src(config.path.lint.scss.src)
    .pipe(plumber({ errorHandler: function(err) { 
      this.emit('end');
    }}))
    .pipe(postcss([
      stylelint({ fix: true }),
      reporter({ clearMessage: true, throwError: false })
    ], { syntax: postcssScss }));
    cb();
};