var gulp = require('gulp'),
bundle = require('gulp-bundle-assets');
var concat = require('gulp-concat')

gulp.task('bundle', function() {
return gulp.src('./bundle.config.js')
  .pipe(bundle())
  .pipe(gulp.dest('./public'));
});