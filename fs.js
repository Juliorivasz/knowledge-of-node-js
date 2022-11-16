// posee metodos para leer,crear,modificar o eliminarlos:
const fs = require('fs');

// leer un archivo:
// segundo parametro para elegir el formato:
const file = fs.readFileSync('./data/file.txt', 'utf-8');
const fileTwo = fs.readFileSync('./data/Two.txt', 'utf-8');
//tambien se convertir en string usando .toString
console.log(file, fileTwo);
// para crear un archivo:
// el contenido se pasa por segundo parametro:
// el tercer parametro pueda agregar un texto nuevo al archivo ya existente sin reemplazar el texto del principio:
fs.writeFileSync('./data/third.txt', 'Es el tercer archivo con texto interno', {
    flag: 'a'
});

// Sync significa que ejecuta una funcion y hasta que no termine no puede empezar otra funcion
// no se puede colocar en una variable porque cuando es Async tiene que ejecutar una funcion despues de haber realizado la operacion:
// segundo parametro se coloca el formato que quiere que muestre:
// segundo parametro o tercer parametro recibe una funcion que se ejecuta despues de terminada de leer:
// la funcion puede recibir dos parametros el primero es un error y el segundo es el dato:
fs.readFile('./data/file.txt', 'utf-8', (error,data) => {
    error ? console.log(error) : console.log(data);
    fs.writeFile('./data/newfile.txt', 'creando un archivo con node js', (error, data)=>{
        error ? console.log(error) : console.log(data);
    } )
});