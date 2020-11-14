const { rejects } = require('assert');
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for( i = 1; i<=limite; i++){

        console.log(`${ base } * ${ i } = ${ base * i }`);
 
    }
}

let crearArchivo = ( base, limite = 10) => {
    return new Promise( (resolve, reject ) => {
       
        if ( !Number(base) ){
            reject(`El valor base ${ base } no es un número`);
            return;
        }
        let data = '';
for(let i = 1; i<=limite; i++){

    data += (`${ base } * ${ i } = ${ base * i }\n`);
}
//const data = new Uint8Array(Buffer.from(data));
fs.writeFile(`tablas/tablastabla ${ base }.txt`, data, (err) => {
  if (err) reject (err)
  else 
  resolve(`tabla ${ base }.txt`)
    //console.log('El archivo ha sido creado!');
});
    });
}

 module.exports = {
    crearArchivo,
    listarTabla
} 


