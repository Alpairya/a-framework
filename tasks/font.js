const {
    src,
    dest
} = require('gulp');
const changed = require('gulp-changed');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

function font(done){
    src('assets/fonts/**/*.ttf')
        .pipe(ttf2woff())
        .pipe(dest('build/fonts/'));
    src('assets/fonts/**/*.ttf')
        .pipe(ttf2woff2())
        .pipe(dest('build/fonts/'));
    done();
}

module.exports = font;

