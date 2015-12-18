# gulp 入门

## 获取

```
git clone https://github.com/chenlianjiang/my-gulp-project.git
```

## 安装

```
$npm install
```

## 使用

```
$gulp
```

## gulp plugins

- gulp-imagemin: 压缩图片
- gulp-ruby-sass: 支持sass
- gulp-minify-css: 压缩css
- gulp-jshint: 检查js
- gulp-uglify: 压缩js
- gulp-concat: 合并文件
- gulp-rename: 重命名文件
- gulp-htmlmin: 压缩html
- gulp-clean: 清空文件夹
- gulp-livereload: 服务器控制客户端同步刷新（需配合chrome插件LiveReload及tiny-lr）

## 添加插件

```
$npm install  gulp-imagemin --save-dev
```

## 项目目录结构

  project(项目名称)
  |–.git 通过git管理项目会生成这个文件夹
  |–node_modules 组件目录
  |–dest 发布环境
      |–css 样式文件(style.css style.min.css)
      |–images 图片文件(压缩图片)
      |–js js文件(main.js main.min.js)
      |–index.html 静态文件(压缩html)
  |–src 生产环境
      |–sass sass文件
      |–images 图片文件
      |–js js文件
      |–index.html 静态文件
  |–.jshintrc jshint配置文件
  |–gulpfile.js gulp任务文件
  |–package.json 项目配置文件

## gulp基础语法

gulp通过gulpfile文件来完成相关任务，因此项目中必须包含gulpfile.js

gulp有五个方法：src、dest、task、run、watch
src和dest：指定源文件和处理后文件的路径
watch：用来监听文件的变化
task：指定任务
run：执行任务

# 参考资料
[Gulp安装及配合组件构建前端开发一体化][1]

[1]: http://www.dbpoo.com/getting-started-with-gulp/
