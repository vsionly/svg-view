const fs = require('fs');

module.exports = function (path = '/src/assets/icons/svg', extension = false) {
    const filepath = __dirname + path;
    const data = fs.readdirSync(`${filepath}`);
    console.log(data)
    var imgs = '';
    var syspath = filepath.replace(/\\/g, '/')
    for (var i = 0; i < data.length; i++) {
        imgs += `
        <div class="svg-panel">
            <div class="svg-item"><img style="height:30px" src="${syspath + '/' + data[i]}"> <span>${data[i]}</span></div>
            <div class="svg-item" style="background:#000;color:#fff"><img style="height:30px" src="${syspath + '/' + data[i]}"> <span>${data[i]}</span></div>
        </div>`  ;
    }
    var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style type="text/css">
            body {
                padding: 30px;
            }
            *{
                margin: 0;
            }
            .svg-panel {
                display:inline-block;
                margin-right: 10px;
                margin-bottom: 6px;
                width: 240px;
                box-sizing: border-box;
                border: 1px solid #000;
                border-radius: 8px;
                overflow: hidden
            }
            .svg-item {
                height: 40px;
                line-height: 36px;
                padding-left: 16px;
                padding-right: 16px;
                box-sizing: border-box;
                white-space: nowrap
            }
            .svg-item img, .svg-item span{
                vertical-align: middle;
                white-space: nowrap
            }
            #copy-tip {
                position: absolute;
                top: 20px;
                left: 50%;
                display: none;
                width: 140px;
                padding: 11px 16px;
                margin-left: -70px;
                border-radius: 4px;
                text-align: center;
                color: #fff;
            }
        </style>
    </head>
    <body>${imgs}
        <div id="copy-tip"></div>
    </body>
    <script type="text/javascript">
        document.querySelector('body').onclick = (e) => {
            var svgClass = ''
            if (e.target.className == 'svg-item') {
                svgClass = e.target.innerText.split('.')[0]
            } else if (e.target.localName == 'span') {
                svgClass = e.target.innerText.split('.')[0]
            } else if (e.target.localName == 'img') {
                svgClass = e.target.nextElementSibling.innerText.split('.')[0]
            }
            console.log(svgClass)
            const input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', svgClass + (extension?'.svg':''));
            input.select();
            let text = ''
            let color = ''

            const tipE = document.querySelector('#copy-tip')
            if (document.execCommand('copy')) {
                document.execCommand('copy');

                text = '图片名复制成功！'
                color = '#67c23a'
            }

            tipE.innerText = text || '您的浏览器不支持复制功能！'
            tipE.style.background = color || '#f23a3a'

            tipE.style.display = 'block'
            setTimeout(() => {
                tipE.style.display = 'none'
            }, 1555)

            document.body.removeChild(input);
        }
    </script>
    </html>
    `
    fs.writeFile('./svgs.html',html, function(err) {
        if (err) {
            throw err;
        } else {
            const {exec} = require("child_process")
            // 拿到当前系统的参数
            switch (process.platform) {
                //mac系统使用 一下命令打开url在浏览器
                case "darwin":
                    exec(`open ./svgs.html`);
                //win系统使用 一下命令打开url在浏览器
                case "win32":
                    exec(`start ./svgs.html`);
                    // 默认mac系统
                default:
                    exec(`open ./svgs.html`);
            }
        }
        console.log('Hello.');
    })
}
