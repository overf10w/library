var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

// this willl include everything in . directory & in src directory
var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style',function() {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});
