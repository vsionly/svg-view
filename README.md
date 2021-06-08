# svg-view
View all SVG images in your project

### 使用文档

#### 功能介绍
    1、浏览项目下svg文件中的所有svg图样式，可以快速复制使用相关svg
    2、svg图标是无法直接查看的 所以有时虽然已经有我们需要的svg图了 我们却找不到 会重复添加
    3、可以配合vue、 react 下的svgIcon组件使用 提升开发效率
```javascript
    import SvgIcon from '@/components/SvgIcon.vue'
    Vue.component('SvgIcon', SvgIcon)
```
#### 用法
    1、项目中安装 svg-view 包 执行  npm i svg-view -D
    2、项目根目录新建svg.js 文件 名字随意
```javascript
    const creation = require('svg-view')
    // 传入svg图相对于根目录的路径 (更确切的说是相对于node_modules所在目录)
    creation('/src/img/')
    // 复制名字时 需要带后缀.svg 需要传入第二个参数
    creation('/src/img/', true)
```
    命令行执行 node svg.js 会生成svgs.html 并自动在浏览器中打
    开，以后查看可以直接打开svgs.html
    如果项目有新的svg图标加入 需重新执行  node svg.js
    3、预览svg图片时  点击图片的元素  可以实现 名字的快速复制

#### 配置项

    第一个参数path 'svg图所在目录相对根目录的路径'
    第二个参数extension 复制名字时是否需要.svg后缀 ，默认不需要

### Introduce

#### Features
    1、View all svg picture styles in the svg file under
    the project, you can quickly copy and use related svg
    2. The svg icon cannot be viewed directly, so sometimes
    although we already have the svg image we need, we
    can’t find it and will add it repeatedly
    3. It can be used with the svgIcon component under
    vue and react to improve development efficiency

```javascript
    import SvgIcon from '@/components/SvgIcon.vue'
    Vue.component('SvgIcon', SvgIcon)
```
#### usage
    1、Install the svg-view package in the project , execute
    npm i svg-view -D
    2、Create a new svg.js file in the root directory of the
    project with any name

```javascript
    const creation = require('svg-view')
    // Pass in the path of the svg graph relative to the root
    // directory (more precisely, relative to the directory
    // where node_modules is located)
    creation('/src/img/')
    // When copying the name, it needs to have a suffix.
    // svg needs to pass in the second parameter
    creation('/src/img/', true)
```
    Execute node svg.js from the command line to generate svgs.
    html and automatically open it in the browser. You can open
    svgs.html directly for later viewing
    If the project has a new svg icon added, you need to re-execute
    node svg.js
    3、When previewing the svg picture, click on the element of the
    picture to realize the quick copy of the name

#### options

    1、path The path relative to the root directory of the directory
    where the svg image is located
    2、extension Is the .svg suffix required when copying the name?
    By default, it is not required