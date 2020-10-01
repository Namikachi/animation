/**
 * watch
 * 対象ファイルを監視し、変更があった場合に実行するタスク
 */

exports.watch = function watch(cb) {
  const { pug } = require('./pug');
  const { scss } = require('./scss');
  const { concatJsLibs } = require('./concat-js-libs');
  const { bundleJs } = require('./bundle-js');
  const { imgmin } = require('./imgmin');
  const { watch } = require('gulp');
  const config = require('./config');

  watch(config.path.watch.pug, pug);
  watch(config.path.watch.scss, scss);
  watch(config.path.watch.js_libs, concatJsLibs);
  watch(config.path.watch.js, bundleJs);
  watch(config.path.watch.img, imgmin);
  cb();
}