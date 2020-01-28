const color = require('colors')
const fs = require('fs');
let listarTabla = (base, limite=10)=>{
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject(`El valor ${base} no es un numero`);
            return;
        }
        for (let i= 1; i <= limite; i++){
           console.log(`${ i } x ${base} = ${i*base}`.yellow);
        }
    });
}

let crearArchivo = (base, limite=10)=>{
    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`El valor ${base} no es un numero`);
            return;
        }

        let data='';
        for (let i=1; i <= limite ; i++){
            data += `${base} x ${i}= ${base * i}\n`;
        }
        

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`,data,(err) => {
            if (err) reject(err)
            else
                resolve (`tabla del ${base}-al-${limite}.txt`)
            
        });

    })
}
module.exports = {
    crearArchivo,
    listarTabla
}

