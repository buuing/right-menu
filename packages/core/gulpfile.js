const gulp = require('gulp')
const less = require('gulp-less')
const clean = require('gulp-clean-css')

const { series, parallel, watch } = require('gulp');

const less2css = () => gulp.src('./src/theme/*.less')
        .pipe(less())
        .pipe(clean())
        .pipe(gulp.dest('dist/theme'))


const done = async () => await console.log(`\u001B[93m successfully transferred .less into .css\u001B[0m`)

const taskChain = series(less2css, done)

const watchTask = () => watch('./src/theme/*.less', taskChain);

exports.default = parallel(watchTask, taskChain)

