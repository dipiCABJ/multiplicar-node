const fs = require('fs');
const colors = require('colors');
//const colors = require('colors/safe');

/*let CrearArchivo = async(base) => {
    if (!Number(base))
        throw new Error(`${base} no es un Numero!!`);
    let data = '';
    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`./Tablas/Tabla-${base}.txt`, data, (err) => {
        if (err)
            throw err;
        else
            return `Tabla-${base}.txt`;
    });
}
*/

let CrearArchivo = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (!Number(base))
            reject(`${base} no es un Numero!!`);
        let data = '';
        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`./Tablas/Tabla-${base}-al-${limit}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}-al-${limit}.txt`.green);
        });
    })
}

let ListarTabla = (base, limit) => {
    console.log('============='.yellow);
    console.log(`=Tabla del ${base}=`.yellow);
    console.log('============='.yellow);
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}`.red.underline);
    }
}

module.exports = {
    CrearArchivo,
    ListarTabla
}