
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
.command('listar','imprime en consola tablas de multiplicar',opts)
.command('crear','graba la multiplicar',opts)
.help()
.argv;

module.exports = {
    argv
}