var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task("babel", function(){
  return gulp.src("jsx/app.jsx").
  	pipe(babel({
    	plugins: ['transform-react-jsx']
    })).
    pipe(gulp.dest("dist/"));
});