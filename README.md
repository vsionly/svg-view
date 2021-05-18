# svg-view
View all SVG images in your project

#### 功能介绍
    1、查询项目下svg文件中的所有svg图样式，可以快速复制使用相关svg
    2、目前只在window上做过调试，没有mac 等买了再调mac的

#### 用法
    1、项目中安装 svg-view 包 执行  npm i svg-view -D
    2、项目根目录新建svg.js 文件 名字随意
```javascript
    const creation = require('svg-view')
    creation(path='svg图所在目录相对根目录的路径', extension = true)
```
    命令行执行 node svg.js 会生成svgs.html 并在浏览器中打开，以后查看可以直接打开svgs.html
    如果项目有新的svg图标加入 需重新执行  node svg.js
    3、预览svg图片时  点击图片的元素  可以实现 名字的快速复制

#### 配置项

    path 'svg图所在目录相对根目录的路径'
    extension 复制名字时是否需要.svg后缀 ，默认不需要