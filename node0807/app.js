let http = require('http')
let fs = require('fs')

let server = http.createServer((request, response) => {
    console.log('收到一个请求')

    let url = request.url
    let content = ''

    if (url.startsWith('/static')) {
        content = fs.readFileSync('.' + url)
        response.write(content)
    } else if (url === '/') {
        content = fs.readFileSync('./template/index.html')
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(content)
    }

    response.end()
})

server.listen(8080, () => {
    console.log('开启了服务，请求地址：http://localhost:8080')
})
