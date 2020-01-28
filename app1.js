const argv = require('./config/yargs').argv;
const color = require('colors');

// import {crearArchivo} from ('calculos\multiplicar')
const {crearArchivo, listarTabla} = require('./calculos/multiplicar')
let comando = argv._[0];    
//se comento la base para traer el dato desde 
// la línea de comando
//let base = 32;
switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then (archivo => console.log(`Archivo creado: ${ archivo }`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('no se');
}
 //let argv2 = process.argv;

// console.log('limite y base', argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split("=")[1]
//console.log(base);

