// 使用node构建web服务器

//1、使用require方法加载 http 核心模块
//    require 方法有两个作用
//      1、加载文件模块，并执行里面的代码
//      2、拿到被加载文件模块导出的接口对象 export
var http = require('http')

//2、创建一个 web 服务器
var server = http.createServer()

// 3、当客户端有请求过来回自动触发服务器的 request 事件，然后执行回调处理函数
// request 请求对象
// response 响应对象
    // write 可以给客户端发送响应数据，可以使用多次，最后必须用end来结束响应，否则客户端会一直等待
server.on('request', function(request, response){
    console.log("收到客户端的请求了, 请求路径是: " + request.url)
    // response.write("Hello ")
    // response.write("Node.js")   这一段没注释起来导致后面使用 setHeader 时报错了 Cannot set headers after they are sent to the client

    var url = request.url
    if(url === '/'){
        response.end('index page') // 结束的同时发送数据
    }else if(url === '/login'){
        response.end(' login page') 
    }else if(url === '/products'){
        response.setHeader('Content-Type', 'text/plain; charset=utf-8') // 设置编码   text/plain 普通文本
        var products=[
            {name:"苹果X", price:8000},
            {name:"华为", price:9000}
        ]
        // 响应数据只能是二进制数据或者字符串
        response.end(JSON.stringify(products))
        return
    } else if(url === '/html'){
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.end('<p>Hello</p>')
        return
    } else{
        response.end('404 not found')
    }
})

// 4、绑定端口号，启动服务器
server.listen(3000, function(){
    console.log("服务器运行在3000端口")
})

