'use strict';
//加载插件
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

var paths = {
  scripts: ['src/js/*.js', 'src/js/**/*.coffee', '!src/external/**/*.coffee'],
  // images: 'src/images/**/*'
};

gulp.task('minify', function() {
    return gulp.src('src/js/*.js')
               .pipe(jshint())
               .pipe(jshint.reporter('default'))
               .pipe(uglify())
               .pipe(concat('app.js'))
               .pipe(gulp.dest('dest/js'));
});

//监听html+css+js文件 Return the task when a file changes
gulp.task('watch', function() {
    //将你的默认任务代码放在这里
    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/html/*.html").on("change", browserSync.reload);

    gulp.watch(paths.scripts, ['scripts']);
    // gulp.watch(paths.images, ['images']);

});

gulp.task('greet', function () {
   console.log('Hello world!');
});

gulp.task('css', ['greet'], function () {
   // Deal with CSS here
});
//The default task (called when you run 'gulp' from cli)
gulp.task('default', ['watch', 'minify', 'greet']);
