const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

var paths = {
    styles: {
        src: 'src/assets/styles/scss/components/*.scss',
        dest: 'src/assets/styles/css/components/'
    }
};

function clean() {
    return del(['src/assets/css/components/']);
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass({ 
            outputStyle: 'compressed' 
        }))
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
}

var build = gulp.series(clean, gulp.parallel(styles));

exports.clean = clean;
exports.styles = styles;
exports.watch = watch;
exports.build = build;

exports.default = build;
//------------------------------

// gulp.task('sass', function (cb) {
//     console.log();
//     return gulp.src('/src/assets/styles/scss/components/*.scss')
//         .pipe(sass({ outputStyle: 'compressed' })
//             .on('error', sass.logError)).pipe(concat('bundle.min.css'))
//         .pipe(gulp.dest('./dist'), cb);
// });

// gulp.task('watch', function () {
//     gulp.watch('/src/assets/styles/scss/components/*.scss', ['sass'])
// });

// gulp.task('default', ['watch']);