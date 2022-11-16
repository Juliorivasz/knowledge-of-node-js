// modelo cliente servidor 
// creando mi propio server
const http = require('http');
// request recibe del servidor web 
// response envia al servidor web
// crear un servidor metodo .createServer recibe una funcion como parametro:
const nombre = 'julio';
const server = http.createServer((request,response)=>{
    console.log(request.url);
    // ruta inicial / :
    if(request.url === '/'){
        response.write('welcome to the server')
        return response.end();
    }
    else if(request.url === '/skills'){
        response.write(`<h1>hola ${nombre}</h1>`)
        return response.end();
    }
    response.write('<h1> not found </h1>');
    response.end();
})
server.listen(3000); 

console.log('servidor escuchando en el puerto 3000');