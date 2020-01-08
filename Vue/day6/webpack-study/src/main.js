// 项目js入口文件
console.log('ok')

import './css/index.css'

import './css/index.scss'

//如果通过路径的形式去引入node_modules中相关的文件，可以直接省略路径前面的node_modules这一层目录，直接写包的名称，然后后面跟上具体的文件路径
// 不写 node_modules 这一层目录，默认就会去 node_modules 中查找

// bootstrap4已经不默认提供图标了，而是分开了，需要在别的地方下载
// npm i bootstrap -S
// git clone https://github.com/iconic/open-iconic ,将下载好的 open-iconic 放到 node_modules里
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'