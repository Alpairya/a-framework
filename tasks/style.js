const {
    src,
    dest
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const bulkSass = require('gulp-sass-bulk-import');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

function style(){
    return src('assets/scss/mystyle.scss')
        .pipe(sourcemaps.init())
        .pipe(bulkSass())
        .pipe(sass({ outputStyle: 'compressed'}))
            .on('error', sass.logError)
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions'],
            browsers: [
                'Android >= 4',
                'Chrome >= 20',
                'Firefox >= 24',
                'Explorer >= 11',
                'iOS >= 6',
                'Opera >= 12',
                'Safari >= 6',
            ],
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('../sourcemaps/'))
        .pipe(dest('build/css/'));
}

module.exports = style;