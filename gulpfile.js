var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var reload      = browserSync.reload;
var wiredep = require('wiredep').stream;

gulp.task('default', ['serve']);

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch(["*.html","js/*.js"]).on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	
    return gulp.src("scss/main.scss")
	.pipe(wiredep())
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(reload({stream: true}));
});




//rest of file commented out
//rest of file commented out
//rest of file commented out





// Include gulp
//var gulp = require('gulp');

// Include Our Plugins
//var jshint = require('gulp-jshint');
//var sass = require('gulp-sass');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');

//var browserSync = require('browser-sync').create();

// Static server
//gulp.task('browser-sync', function() {
//    browserSync.init({
//        server: {
//            baseDir: "./"
//        }
//    });
//});

//gulp.task('default', ['browser-sync']);





// or...
//gulp.task('browser-sync', function() {
//    browserSync.init({
//        proxy: "yourlocal.dev"
//    });
//});


// Lint Task
//gulp.task('lint', function() {
//    return gulp.src('js/*.js')
//        .pipe(jshint())
//        .pipe(jshint.reporter('default'));
//});

// Compile Our Sass
//gulp.task('sass', function() {
//    return gulp.src('scss/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('dist/css'));
//});

// Concatenate & Minify JS
//gulp.task('scripts', function() {
//    return gulp.src('js/*.js')
//        .pipe(concat('all.js'))
//        .pipe(gulp.dest('dist'))
//        .pipe(rename('all.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('dist/js'));
//});

// Watch Files For Changes
//gulp.task('watch', function() {
//    gulp.watch('js/*.js', ['lint', 'scripts']);
//    gulp.watch('scss/*.scss', ['sass']);
//});

// Default Task
//gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
