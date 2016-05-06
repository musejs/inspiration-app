var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

gulp.task('browserify', function() {

    browserify({
        entries: './src/factory.js',
        debug: true,
        standalone: 'inspirationArchitectFactory'
    })
        .transform(babelify, {presets: ['es2015']})
        .bundle()
        .pipe(source('inspiration-architect.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./'));

});

gulp.task('watch', function() {
    gulp.watch('./src/factory.js', ['browserify']);
});

gulp.task('default', ['browserify', 'watch']);