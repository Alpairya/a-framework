const {
    src,
    dest
} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

function jsOtherMin(){
    return src('assets/js/other/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('other.min.js'))
        .pipe(sourcemaps.write('../sourcemaps'))
        .pipe(dest('build/js/'));
}

module.exports = jsOtherMin;