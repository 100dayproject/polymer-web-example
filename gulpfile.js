/**
 * Created by Vietworm on 3/5/2016.
 */

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function () {
    return gulp.src('elements/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
});