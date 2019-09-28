const http = require('http');

let server = http.createServer((req, res) => {
    console.log('Llega una petición');
    console.log('MÉTODO', req.method);
    console.log('URL', req.url);
    console.log('HEADERS', req.headers);
    res.end('Hola Mundo Server PRUEBA!');
});

server.listen(3000);