const {writeFile} = require('fs/promises');

const createbigfile = async () =>{
    // string.repeat(valor) valor es la cantidad de veces que quiero que se repita 
    await writeFile('./data/bigfile.txt', 'HELLO WORD BIGFILE'.repeat(9000));
}

createbigfile();
// fs es fail system
const {createReadStream} = require('fs');
// createReadStream posee un tercer paramatro que es un objecto
// y se llena para completar mas parametros dentro del objeto ej:
const stream = createReadStream('./data/bigfile.txt', {
    encoding: 'utf-8'
    // tamaño de los chunks a enviar highWaterMark    
});
// data evento creado para recibir datos
// la funcion espera porciones de datos que se le coloca chunk
// lo que hace es mostrar el dato en buffer por partes si es muy grande el archivo
stream.on('data', (chunk)=> {
    console.log(chunk);
})

// posee varios eventos ej:
// close es cuando se cierra la conexion 
// end es cuando termino de enviar los datos 
// error si ocurre un error hacer tal funcion