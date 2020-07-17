const http = require('http');
const { listenerCount } = require('process');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Diego',
        edad: 44,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    // res.write('Hola Mundo');
    res.end();
})

.listen(8080);

console.log('Escuchando el puerto 8080');