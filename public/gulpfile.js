var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

gulp.task('stylesheets', function() {
  gulp.src('./scss/index.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass({ lineos: true }))
    .pipe(autoprefixer("last 2 versions", "> 5%", "ie 10", "ie 9"))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('./scss/*.scss', ['stylesheets']);
});

gulp.task('build', ['stylesheets'], function() {});

gulp.task('default', ['stylesheets', 'watch']);