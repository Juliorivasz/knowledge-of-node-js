const os = require("os");
// require() es para importar modulos

// os datos de sistema operativo
//informacion de usuario os.userinfo()
console.log(os.userInfo());
// os.uptime() dice el tiempo que lleva la pc desde que se encendio
console.log(os.uptime());
// ver sistema operativo en el que se ejecuta node os.platform()
console.log(os.platform());
//informacion total de la memoria .totalmem
console.log(os.totalmem());
// informacion disponible de la memoria .freemen
console.log(os.freemem());

// metodos de la consola son:
// table para mostrar como tabla 
console.table({
    os: os.uptime(),
    memoryram: os.totalmem(),
    version: os.release()
})

