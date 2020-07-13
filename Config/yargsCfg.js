const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const yargs = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Genera un archivo con tablas de multimplicar', options)
    .help()
    .argv;


module.exports = {
    yargs
}