const {
    src,
    dest
} = require('gulp');
const changed = require('gulp-changed');
const webp = require('gulp-webp');

function webpImg(){
    return src('build/images/**/*.{jpg,png,jpeg,JPG,JPEG,PNG}')
        .pipe(changed('build/web_img', {
            extension: '.webp'
        }))
        .pipe(webp())
        .pipe(dest('build/webp/'))
}

module.exports = webpImg;