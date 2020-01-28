// CREAR UNA TABLA DE MULTIPLICAR   

// constante file system de node
// requiere
const fs = require('fs');
let data='';
let base = 6;
// creando la tabla de valor de la base
for(let i=1 ; i<=10 ; i++){
    data +=(`${base} X ${i} = ${base*i}\n`)
    // console.log(`${base} X ${i} = ${base*i}`)
}
// Escribiendo la tabla en un archivo
fs.writeFile(`tablas/tabla-${base}.txt`,data, (err) => {
    if (err) throw err;
    console.log(`Se creó el archivo de la tabla ${base}`);
  });