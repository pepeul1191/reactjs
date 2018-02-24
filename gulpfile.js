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

// INICIO LIBRERÍAS JS ----------------------------------------------------------

gulp.task('libs-js', function(){
  gulp.src([
    MEDIA + 'bower_components/jquery/dist/jquery.min.js',
    MEDIA + 'bower_components/tether/dist/js/tether.min.js',
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
    MEDIA + 'bower_components/tether/dist/css/tether.min.css',
    MEDIA + 'bower_components/bootstrap/dist/css/bootstrap.min.css',
    MEDIA + 'bower_components/font-awesome/css/font-awesome.min.css',
  ])
  .pipe(concatCss('libs.min.css'))
  .pipe(minifyCss())
  .pipe(replace('../../../font-awesome/fonts/', BASE_URL + 'dist/'))
  .pipe(replace('../fonts/glyphicons', 'glyphicons'))
  .pipe(gulp.dest(DESTINO));
});

// SASS ----------------------------------------------------------

gulp.task('sass', function () {
  gulp.src([
  		'scss/constants.scss',
  		'scss/styles.scss',
  ])
  .pipe(concat('styles.scss'))
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(minifyCss())
  .pipe(gulp.dest(DESTINO));
});

// REACTJS ----------------------------------------------------------

gulp.task('babel', function(){
  gulp.src([
  	MEDIA + 'jsx/app.jsx'
  ])
  .pipe(babel({
   	plugins: ['transform-react-jsx']
   }))
  .pipe(gulp.dest(DESTINO));
});

// APP ----------------------------------------------------------

gulp.task('app', function(){
  gulp.src([
    DESTINO + 'libs-min.js',
    DESTINO + 'app.js',
  ])
  .pipe(concat('app.js'))
  /*.pipe(minify({
    ext:{ 
      //src:'libs.js',
      //min:'min.js'
    },
    exclude: [],
    ignoreFiles: []
  }))*/
  .pipe(gulp.dest(DESTINO));

  gulp.src([
  	DESTINO + 'libs.min.css',
  	DESTINO + 'styles.css',
  ])
  .pipe(concat('styles.min.css'))
  .pipe(gulp.dest(DESTINO));
});

// Login ----------------------------------------------------------

gulp.task('login-css', function(){
  gulp.src([
    MEDIA + 'scss/constants.scss',
    MEDIA + 'scss/styles.scss',
    MEDIA + 'scss/login.scss',
  ])
  .pipe(concat('login.scss'))
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(minifyCss())
  .pipe(gulp.dest(DESTINO));

  gulp.src([
    DESTINO + 'libs.min.css',
    DESTINO + 'login.css',
  ])
  .pipe(concat('login.min.css'))
  .pipe(gulp.dest(DESTINO));
});

gulp.task('login-js', function(){
  gulp.src([
    DESTINO + 'libs-min.js',
    MEDIA + 'js/front.js',
  ])
  .pipe(concat('login-min.js'))
  /*.pipe(minify({
    ext:{ 
      //src:'libs.js',
      //min:'min.js'
    },
    exclude: [],
    ignoreFiles: []
  }))*/
  .pipe(gulp.dest(DESTINO));
});

gulp.task('login', ['login-css', 'login-js']);

// Home ----------------------------------------------------------

gulp.task('home-css', function(){
  gulp.src([
    MEDIA + 'scss/constants.scss',
    MEDIA + 'scss/styles.scss',
  ])
  .pipe(concat('home.scss'))
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(minifyCss())
  .pipe(gulp.dest(DESTINO));

  gulp.src([
    DESTINO + 'libs.min.css',
    DESTINO + 'home.css',
  ])
  .pipe(concat('home.min.css'))
  .pipe(gulp.dest(DESTINO));
});

gulp.task('home-js', function(){
  gulp.src([
    DESTINO + 'libs-min.js',
    MEDIA + 'js/front.js',
  ])
  .pipe(concat('home-min.js'))
  /*.pipe(minify({
    ext:{ 
      //src:'libs.js',
      //min:'min.js'
    },
    exclude: [],
    ignoreFiles: []
  }))*/
  .pipe(gulp.dest(DESTINO));
});

gulp.task('home', ['home-css', 'home-js']);

// TODO ----------------------------------------------------------

gulp.task('todo', ['fonts', 'libs-css', 'sass', 'libs-js', 'babel', 'app']);