const { parallel } = require('gulp');
const gulp = require('gulp'),
    requireDir = require('require-dir'),
    watch = require('gulp-watch'),
    tasks = requireDir('./tasks');

exports.img = tasks.img
exports.webp = tasks.webp
exports.font = tasks.font;
/*
    Сжимает и записывает svg, так же создает спрайт sprite.svg
 */
exports.svg = gulp.parallel(
    exports.svg = tasks.svgm,
    exports.sprite = tasks.sprite
)
/*
    Запускает компиляцию двух файлов скриптов, создает две карты ресурсов js. Идея в том, что main.min.js - файл, который подключается везде, other.min.js на определенных страницах
 */
exports.js = gulp.parallel(
    exports.jsMain = tasks.scripts,
    exports.jsOther = tasks.scriptsother
)

/*
    Команда gulp style - для единовлременной компиляции, gulp st запускает сервер компиляции
 */
exports.style = tasks.style
gulp.task('st', done => {
    gulp.watch('assets/scss/**/*.scss', gulp.parallel('style'));
    done();
})
