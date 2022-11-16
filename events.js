// como manejar eventos en node js
// eventos para datos 
// es como se llama en la documentacion 
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// emit nos permite emitir un evento es cuando se esta ejecutando determinado evento
// on nos permite escuchar un evento ejemplo cuando pase determinada cosa escucha ese evento 
// response es lo que recibe como evento y segundo parametro es una funcion que toma como argumento la 
// informacion recibe la info dada como respuesta
// primero se crea los eventos on y despues se activan con emit 
// puede llamarse como sea el primer parametro de on
// se puede dar como argumento al segundo parametro mas de un dato
customEmitter.on('response', (data, dato, date) => {
    console.log(data);
    console.log(dato);
    console.log(date);
})
// on crea un evento en el primer parametro y con el emit se puede puede accionar en el primer parametro 
// y en el segundo parametro se le pasa lo que recibe la data del on 
customEmitter.emit('response', 'hello worlds', ['hola','ejecuto','un','evento'], 'realizado el 10/10/2021');