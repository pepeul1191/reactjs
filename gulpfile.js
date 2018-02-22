var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require("gulp-concat");
var minify = require('gulp-minify');
var replace = require('gulp-replace');
var concatCss = require('gulp-concat-css');
var minifyCss = require("gulp-minify-css");
var sass = require('gulp-sass');
var DESTINO = 'dist/';
var MEDIA = '';
var BASE_URL = 'http://localhost:82/react/';

gulp.task('libs-js', function(){
  gulp.src([
    MEDIA + 'bower_components/jquery/dist/jquery.min.js',
    MEDIA + 'bower_components/bootstrap/dist/js/bootstrap.min.js',
    MEDIA + 'bower_components/react/react.development.js',
		MEDIA + 'bower_components/react/react-dom.development.js'
  ])
  .pipe(concat('libs.js'))
  .pipe(minify({
    ext:{ 
      //src:'libs.js',
      //min:'min.js'
    },
    exclude: [],
    ignoreFiles: []
  }))
  .pipe(gulp.dest(DESTINO));
});

gulp.task('fonts', function() {
  gulp.src([
    MEDIA + 'bower_components/font-awesome/fonts/*',
    MEDIA + 'bower_components/bootstrap/fonts/*',
    MEDIA + 'assets/fontastic/fonts/*'
  ])
  .pipe(gulp.dest(DESTINO));
});

gulp.task('libs-css', function() {
  gulp.src([
    MEDIA + 'bower_components/bootstrap/dist/css/bootstrap.min.css',
    MEDIA + 'bower_components/font-awesome/css/font-awesome.min.css',
  ])
  .pipe(concatCss('libs.min.css'))
  .pipe(minifyCss())
  .pipe(replace('../../../font-awesome/fonts/', BASE_URL + 'dist/'))
  .pipe(replace('../fonts/glyphicons', 'glyphicons'))
  .pipe(gulp.dest(DESTINO));
});

gulp.task('babel', function(){
  gulp.src([
  	MEDIA + 'jsx/app.jsx'
  ])
  .pipe(babel({
   	plugins: ['transform-react-jsx']
   }))
  .pipe(gulp.dest(DESTINO));
});

gulp.task('app', function(){
  gulp.src([
    DESTINO + 'libs-min.js',
    DESTINO + 'app.js',
  ])
  .pipe(concat('app.js'))
  .pipe(minify({
    ext:{ 
      //src:'libs.js',
      //min:'min.js'
    },
    exclude: [],
    ignoreFiles: []
  }))
  .pipe(gulp.dest(DESTINO));
});

gulp.task('sass', function () {
  return gulp.src([
  		'scss/constants.scss',
  		'scss/styles.scss',
  	])
  	.pipe(concat('styles.min.scss'))
    .pipe(sass.sync().on('error', sass.logError))
  	.pipe(minifyCss())
    .pipe(gulp.dest('dist'));
});

gulp.task('layout', ['libs-js', 'babel', 'app', 'fonts', 'libs-css', 'sass',]);