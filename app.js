//  Conclucion: El modulo de npm Yargs le ayuda a crear herramientas de línea de comandos interactivas, analizando argumentos 
// y generando una elegante interfaz de usuario.



// const fs = require('fs');
// const fs = require('express'); Es un paquete que se instala que no son nativos en node
// const fs = require('./paqueteElian'); Archivos que nosostros mismos escribimos
// const { argv } = require('process');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch ( comando ){

  case 'listar':
    listarTabla( argv.base, argv.limite);
  break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
.then (archivo => console.log(`Archivo creado: ${ archivo }`))
.catch(err => console.log(err));
  break;

  default:console.log('Comando no reconocido');

}
// let base = 'asd';
// let data = '';
// for(let i = 1; i<=10; i++){

//     data += (`${ base } * ${ i } = ${ base * i }\n`);
// }
//const data = new Uint8Array(Buffer.from(data));
// fs.writeFile(`tablas/tablastabla ${ base }.txt`, data, (err) => {
//   if (err) throw err;
//   console.log('El archivo ha sido creado!');
// }); 



// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log(argv2);
// console.log('Limite',argv.limite);
/* console.log(base);
crearArchivo(base)
.then (archivo => console.log(`Archivo creado: ${ archivo }`))
.catch(err => console.log(err)); */