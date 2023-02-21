const {
    src,
    dest
} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const babel = require('gulp-babel');

function jsMin(){
    return src('assets/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write('../sourcemaps'))
        .pipe(dest('build/js/'));
}

module.exports = jsMin;