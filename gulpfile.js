// 'use strict';

// 引入 gulp及组件
var gulp = require('gulp'),                   //基础库
    imagemin = require('gulp-imagemin'),       //图片压缩
    sass = require('gulp-ruby-sass'),          //sass
    minifycss = require('gulp-minify-css'),    //css压缩
    jshint = require('gulp-jshint'),           //js检查
    uglify  = require('gulp-uglify'),          //js压缩
    rename = require('gulp-rename'),           //重命名
    concat  = require('gulp-concat'),          //合并文件
    clean = require('gulp-clean'),             //清空文件夹
    browserSync = require('browser-sync').create(),
   tinylr = require('tiny-lr'),               //livereload
   server = tinylr(),
//    port = 35729,
   livereload = require('gulp-livereload');   //livereload

// HTML处理
gulp.task('html', function() {
    var htmlSrc = 'src/html/*.html',
        htmlDst = 'dest/html';

    gulp.src(htmlSrc)
        .pipe(livereload(server))
        // .pipe(gulp.watch(htmlSrc).on("change", browserSync.reload))
        .pipe(gulp.dest(htmlDst))
});

// 样式处理
gulp.task('css', function () {
    var cssSrc = 'src/scss/*.scss',
        cssDst = 'dest/css';

    gulp.src(cssSrc)
        .pipe(sass({ style: 'expanded'}))
        .pipe(gulp.dest(cssDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(livereload(server))
        // .pipe(gulp.watch(cssSrc).on("change", browserSync.reload))
        .pipe(gulp.dest(cssDst));
});

// 图片处理
gulp.task('images', function(){
    var imgSrc = 'src/images/**/*',
        imgDst = 'dest/images';
    gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(livereload(server))
        // .pipe(gulp.watch(imgSrc).on("change", browserSync.reload))
        .pipe(gulp.dest(imgDst));
})

// js处理
gulp.task('js', function () {
    var jsSrc = 'src/js/*.js',
        jsDst ='dest/js';

    gulp.src(jsSrc)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(livereload(server))
        // .pipe(gulp.watch(jsSrc).on("change", browserSync.reload))
        .pipe(gulp.dest(jsDst));
});

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['desc/html', 'dest/css', 'dest/js'], {read: false})
        .pipe(clean());
});


// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){

        // 监听html
        gulp.watch('src/*.html', function(event){
            gulp.run('html');
        }).on("change", browserSync.reload);
        // 监听css
        gulp.watch('src/scss/*.scss', function(){
            gulp.run('css');
        }).on("change", browserSync.reload);

        // 监听images
        gulp.watch('src/images/**/*', function(){
            gulp.run('images');
        }).on("change", browserSync.reload);

        // 监听js
        gulp.watch('src/js/*.js', function(){
            gulp.run('js');
        }).on("change", browserSync.reload);
});

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
        server: "src"
    });

    gulp.watch("src/html/*.html").on("change", browserSync.reload);

    // gulp.watch(paths.scripts, ['scripts']);
    // gulp.watch(paths.images, ['images']);

});

gulp.task('greet', function () {
   console.log('Hello world!');
});

gulp.task('css', ['greet'], function () {
   // Deal with CSS here
});
//The default task (called when you run 'gulp' from cli)
// gulp.task('default', ['watch', 'minify', 'greet']);
// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function(){
    gulp.start('html','css','images','js', 'watch');
});
