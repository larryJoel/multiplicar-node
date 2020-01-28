const {baseDividir} = require ('./calculos/dividir')
let base = 3;

baseDividir(base)
        .then (archivo => console.log(`Se creo el archvio del ${archivo}`))
        .catch (e => console.log(e))
