const yargs = require('./Config/yargsCfg').yargs;
const colors = require('colors/safe');
const { CrearArchivo, ListarTabla } = require('./Multiplicar/multiplicar.js');

let command = yargs._[0];

//console.log(yargs.base);
//console.log(yargs.limit);
//console.log(command);


switch (command) {
    case 'listar':
        ListarTabla(yargs.base, yargs.limit);
        break;

    case 'crear':
        CrearArchivo(yargs.base, yargs.limit)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(colors.red(err)));
        break;

    default:
        console.log(`${command} no se reconoce como un comando valido!`);
}
//

//console.log(yargs.base);
//let base = 5;
//let argv = process.argv;
//let param = argv[2];
//let base = param.split('=')[1];