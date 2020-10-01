/**
 * imgmin
 * 画像を圧縮するタスク
 * @return {Static}
 */

exports.imgmin = function imgmin(cb) {
  const { src, dest } = require('gulp');
  const config = require('./config');
  const plumber = require('gulp-plumber');
  const notify = require('gulp-notify');
  const imagemin = require('gulp-imagemin');
  const pngquant = require('imagemin-pngquant');
  const mozjpeg = require('imagemin-mozjpeg');

  src(config.path.src.img)
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(
      imagemin([
        pngquant({
          quality: [0.85, 0.85],
          speed: 1,
          floyd: 0
        }),
        mozjpeg({
          quality: [0.85, 0.85],
          progressive: true
        }),
        imagemin.svgo(),
        imagemin.optipng(),
        imagemin.gifsicle()
      ])
    )
    .pipe(dest(config.path[global.env].img))
    .on('end',cb);
};