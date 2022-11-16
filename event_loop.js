const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.write('welcome to the server');
        return res.end();
    } 
    else if(req.url === '/1'){
        // es para dar un ejemplo porque tarda en cargar una pagina
        // hasta que no se termine de ejecutar el bucle se seguira cargando
        // conocido como blocking code
        for(let i = 0; i<50000; i++){
            console.log(Math.random()*i);
        }
        return res.end('page 1');
    }else{
        res.end('Not Found');
    }
})

server.listen(3000);
console.log('server deployed port 3000');