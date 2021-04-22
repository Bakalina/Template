let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function(){
    gulp.src('./styles/*.scss').pipe(sass()).pipe(gulp.dest('./styles'))
} )