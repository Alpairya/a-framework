const {
    src,
    dest
} = require('gulp');
const svgMin = require('gulp-svgmin');
const svgSprite = require('gulp-svg-sprite');

function spriteMin(){
    return src('assets/images/**/*.svg')
        .pipe(svgMin())
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('build/svg/'));
}

module.exports = spriteMin;