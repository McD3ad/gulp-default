var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function() {
    gulp.src('./sass/app.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
    gulp.run('scss');

    gulp.watch('./sass/**/*.scss', function() {
        gulp.run('scss');
    });
});