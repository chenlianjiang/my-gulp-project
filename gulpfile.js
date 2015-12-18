'use strict';
//加载插件
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//监听html+css+js文件
gulp.task('default', function() {
    //将你的默认任务代码放在这里
    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/html/*.html").on("change", browserSync.reload);
});
