const {readFile} = require('fs');

// esto se puede simplicar con promise
// lo que se le pasa como parametro a la funcion padre es el archivo a leer
function getText(pathfile) {
    return new Promise((resolve,reject)=>{
        readFile(pathfile, 'utf-8', (e,d)=>{
            if(e){
                reject(e);
            }
            else{
                resolve(d);
            }
        })
    })
}

getText('./data/file.txt')
    .then((result) => console.log(result + ' ejecutado desde promise'))
    .catch((error)=> console.log(error))

module.exports = {
    getText
}