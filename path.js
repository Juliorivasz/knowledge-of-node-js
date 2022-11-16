// nos permite trabajar con carpetas y archivos, y poder conocer sus direcciones:
// tambien detecta en que sistema estemos:
const { url } = require('inspector');
const path = require('path');
// metodo .join permite unir directorios o rutas:
// es decir las convirte al sistema operativo:
// se usa para importar archivos devolviendo ruta valida:
console.log(path.join('/desktop', 'win32', 'plat.html'));
// metodo .basename permite extraer una URL:
const urlp = path.join('/desktop', 'win32', 'plat.html');
// devuelve la base de la url:
console.log(path.basename(urlp));
// metodo da la ruta sin el archivo base: 
console.log(path.dirname(urlp));
// da la ruta en formato objeto :
console.log(path.parse(urlp));
// completa la ruta de un archivo pasado por parametro:
console.log(path.resolve('plat.html'));