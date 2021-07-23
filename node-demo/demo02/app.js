const http = require('http');
const url = require('url');
const tools = require('./module/tools');
http.createServer(function (request, response) {
    // url


    response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    response.write("<head><meta charset='utf-8'></head>");

    console.log(request);
    console.log(request.url);
    console.log(url.parse(request.url, true).query);


    response.write('Hello World');
    response.write('</br>');
    response.write('你好 World');
    response.write('</br>');
    response.write('你好 kuririn');
    response.write('</br>');
    response.write(tools.formatApi('commonjs'));
    response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');