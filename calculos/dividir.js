//aplicacion para dividir
const fs = require('fs');
let baseDividir = (base)=>{
    return new Promise ((resolve, reject) =>{
        if(!Number(base)){
            reject(`El valor ${base} no es un numero`);
            return;
        }
        let div ='';

        for (let index = 0; index <= 10; index++) {
            div += `${index} / ${base} = ${index/base}\n`;
        }
           //crear archivo  
        fs.writeFile(`./tablas/tablas-div ${base}.txt`,div,err=>{
            if (err) 
                reject(err)
            else 
                resolve (`Se creo la tabla div-${base}`)
            // console.log('Se creó el archivo!');
            
        });
    

    })
    
}




module.exports = {
    baseDividir
};


