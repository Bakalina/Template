let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function(done){
    gulp.src('./styles/*.scss').pipe(sass()).pipe(gulp.dest('./styles')), done()
});

gulp.task('watch', function(){
    gulp.watch('./styles/*.scss', gulp.series('sass'))
});

