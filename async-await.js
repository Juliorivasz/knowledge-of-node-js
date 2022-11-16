// async sirve para especificar que una funcion adentro de su contenido esta manejando codigo asincrono
// await es cuando estamos utilizando una funcion asincrona para indicar que ese codigo va a tomar algo de tiempo
// ejemplo

const { getText } = require("./promise.js");
// como es asincrona se le coloca await
// y no necesitas el then o catch para devolver el resultado gracias al await
// se puede guardar en una variable
// pero es necesario que la variable este dentro de una funcion
// porque la funcion que lo contenga debe tener la palabra reservada async
// para retener un error o encontrar un error se usara el try catch
// throw es una palabra para colocar un error detiene el codigo 
async function readText() {
  try { 
    // throw new Error('error no esperado');
    const solution = await getText("./data/newfile.txt");
    console.log(solution + " ejecutado desde async await");
  } catch (error) {
    console.log(error);
  }
}

readText();
