const http = require('http');
const {createReadStream} = require('fs');

const server = http.createServer((req,res) =>{
    const filestream = createReadStream('./data/bigfile.txt',{
        encoding: 'utf-8'
    })

    filestream.on('data', (chunk)=>{
        // pipe es le voy a pasar un dato a otra funcion 
        // en este caso le pase el dato que retorna filestream a res
        filestream.pipe(res);
    })
    // al enviar datos a la interfaz si es muy grande lo divide en varias partes
    filestream.on('error', (error)=>{
        console.log(error);
    })
})

server.listen(3000);
console.log(`server on port 3000`);