let http = require('http')
let fs = require('fs')

let server = http.createServer((request, response) => {
    let url = request.url
    let content = ''

    if (url.startsWith('/kkb')) {
        url = url.replace(/^\/kkb/g, '/static')
        content = fs.readFileSync(__dirname + url)
        response.write(content)
    } else if (url === '/') {
        content = fs.readFileSync('./template/index.html')
        // response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(content)
    }

    response.end()
})

server.listen(8080, () => {
    console.log('开启了服务，请求地址：http://localhost:8080')
})
