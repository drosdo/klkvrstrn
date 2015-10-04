var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    base64 = require('gulp-base64'),
    plumber = require('gulp-plumber');

gulp.task('css', function() {
  return gulp.src('less/style.less')
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('css'));
});
gulp.task('watch', function() {
  gulp.watch('less/*.less', ['css']);
});
gulp.task('default', ['css', 'watch']);