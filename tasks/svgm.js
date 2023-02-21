const {
    src,
    dest
} = require('gulp');
const svgMin = require('gulp-svgmin');

function svg(){
    return src('assets/images/**/*.svg')
        .pipe(svgMin())
        .pipe(dest('build/svg/'));
}

module.exports = svg;