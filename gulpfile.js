const gulpfile = require('gulp');
const sass = require('node-sass');
const gulp_sass = require('gulp-sass')(sass);

gulpfile.task('sass', () => {
    return gulpfile
        .src(['public/scss/**/*.scss', '!public/scss/**/_*.scss']) // --------
        .pipe(gulp_sass({outputStyle: 'expanded'}).on('error', gulp_sass.logError))
        .pipe(gulpfile.dest('public/css'));
});

gulpfile.task('watch', () => {
    gulpfile.watch('./public/scss/**/*.scss', gulpfile.series('sass'));
});

gulpfile.task('default', gulpfile.series('sass'));