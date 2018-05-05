var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var browserify  = require('browserify');
var uglify      = require('gulp-uglify');
var gulpCopy = require('gulp-copy');

var connect = require('gulp-connect');
var cors = require('cors');


gulp.task('connect', function() {
    connect.server({
        root: 'public',
        middleware: function() {
            return [cors()];
        }
    });
});


// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src("gallery/assets/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

// process js
gulp.task('js', function () {
    return gulp.src('gallery/assets/js/*js')
        //.pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.stream());
});

// process templates
gulp.task('templates', function () {
    return gulp.src("gallery/assets/templates/*html")  //,"gallery/assets/templates/**/*html"
        .pipe(gulp.dest('public'));
});


// process php files for docker
gulp.task('php', function () {

    //COPY gallery/api /var/www/html/
    return gulp
        .src('gallery/api')
        .pipe(gulpCopy('/var/www/html/'));


});


//reload js
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

//reload templates
gulp.task('templates-watch', ['templates'], function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('default', ['js','sass','templates', 'php'], function () {

    browserSync.init({
        server: "./public"
    });

    gulp.watch("gallery/assets/sass/*.scss", ['sass']);
    gulp.watch("gallery/assets/templates/*.html",['templates-watch']);  //,"gallery/assets/templates/**/*.html"


    gulp.watch("gallery/api/index.php", ['php']);

    gulp.watch("gallery/assets/js/*.js", ['js-watch']);
});


