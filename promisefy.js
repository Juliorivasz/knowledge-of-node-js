// usa un modulo llamado util de node son funciones o herramientas para tener codigo mas comodo 
// tambien esta la opcion mejorada ya que fail system ya viene con promesas se llama fs/promises
const {readFile} = require('fs/promises')
// const {promisify} = require('util'); <----  es una manera anterior una mejor esta en la linea de arriba
// un callback lo puedo convertir en una promesa sin usar el formato antiguo que encuentra en el archivo promise.js
// const usePromisify = promisify(readFile); <---- ya tampoco se necesitaria esto 
//  ejemplo: 
async function readText() {
    try { 
    //   const solution = await usePromisify("./data/newfile.txt",'utf-8'); <-- esta es una opcion 
    // readfile con fs/promises es mucho mejor y mas rapido
      const solution = await readFile("./data/newfile.txt",'utf-8'); 
      console.log(solution);
    } catch (error) {
      console.log(error);
    }
  }

  readText();

// orden de actualizacion
// primero se uso call backs 
// segundo promises
// tercero async-await