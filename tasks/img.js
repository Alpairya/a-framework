const {
    src,
    dest
} = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');


function img(){
    return src('assets/images/**/*.{jpg,png,jpeg,JPG,JPEG,PNG}')
        .pipe(changed('build/images'))
        .pipe(imagemin())
        .pipe(dest('build/images'))
}
module.exports = img;