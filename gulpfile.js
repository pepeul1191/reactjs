var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require("gulp-concat");
var concatCss = require('gulp-concat-css');
var minifyCss = require("gulp-minify-css");
var sass = require('gulp-sass');

gulp.task('babel', function(){
  return gulp.src('jsx/app.jsx').
  	pipe(babel({
    	plugins: ['transform-react-jsx']
    })).
    pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
  return gulp.src([
  		'sass/constants.scss',
  		'sass/styles.scss',
  	])
  	.pipe(concat('styles.min.scss'))
    .pipe(sass.sync().on('error', sass.logError))
  	.pipe(minifyCss())
    .pipe(gulp.dest('dist'));
});
