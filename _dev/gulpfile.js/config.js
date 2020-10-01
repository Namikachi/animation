/**
 * config
 * gulpの設定ファイル
 */

module.exports = {
  name: 'sample-coding-rules',
  server: {
    port: 4008,
    startPath: './index.html'
  },
  browsers: [
    'ie >= 11',
    'ios >= 11',
    'android >= 6'
  ],
  path: {
    watch: {
      pug:     ['./pug/**/*.pug'],
      scss:    ['./scss/**/*.scss'],
      js:      ['./js/**/*.js', '!./js/lib/**/*.js'],
      js_libs: ['./js/lib/**/*.js'],
      img:     ['./images/**/*.{jpg,jpeg,png,gif}']
    },
    copy: {
      img: ['./images/**/*.{svg}', '!./images/**/_*.{svg}']
    },
    src: {
      root:    './',
      pug:     ['./pug/**/*.pug', '!./pug/**/_*.pug'],
      scss:    ['./scss/**/*.scss', '!./scss/**/_*.scss'],
      js:      ['./js/**/*.js', '!./js/lib/**/*.js', '!./js/**/_*.js'],
      js_libs: ['./js/lib/*'],
      img:     ['./images/**/*.{jpg,jpeg,png,gif}', '!./images/**/_*.{jpg,jpeg,png,gif}'],
    },
    dest: {
      html: ['../dest/**/*.html']
    },
    lint: {
      scss: {
        src: ['./scss/**/*.scss', '!./scss/reset/*.scss', '!./scss/plugins/*.scss']
      }
    },
    release: {
      root:    '../dest/',
      html:    '../dest/',
      js:      '../dest/assets/js/',
      js_libs: '../dest/assets/js/lib/',
      css:     '../dest/assets/css/',
      img:     '../dest/assets/image/'
    }
  }
};