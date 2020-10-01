/**
 * - .eslintに基づくeslintの施行（lib 配下除く）
 * @babel/prevent-env, core-js@3によるPolyfill
 * - Webpackによるバンドル
 * @return {Stream}
 */

exports.bundleJs = function bundleJs(cb) {
  const { src, dest } = require('gulp');
  const config = require('./config');
  const eslint = require('gulp-eslint');
  const babel = require('gulp-babel');
  const webpackStream = require('webpack-stream');
  const webpack = require('webpack');
  const env = process.env.NODE_ENV || 'development'; // or production
  const webpackConfig = {
    'entry': {
      'main': './js/main.js',
      'bounce': './js/bounce.js'
    },
    'mode': env,
    'output': {
      'filename': '[name].js'
    },
    'optimization': {
      'minimize': true
    },
    'module': {
      'rules': [{
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': [{
          'loader': 'babel-loader',
          'options': {
            'presets': ['@babel/preset-env']
          }
        }]
      }]
    }
  };

  src(config.path.src.js)
    .pipe(eslint({ useEslintrc: true })) // .eslintrcを参照
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(babel({
      presets: [
        ['@babel/preset-env', {
          'useBuiltIns': 'usage',
          'corejs': '3.6',
        }],
      ],
    }))
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest(config.path[global.env].js))
    .on('end', cb);
};