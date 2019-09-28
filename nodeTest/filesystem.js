const fs = require('fs');

let files = fs.readdirSync('.');

console.log(files);

fs.readdir('.', (err, files) => {
    console.log(files);
    for (let i = 0; i < files.length; i++) {
        fs.readFile(`./${files[i]}`, 'UTF-8', (err, content) => {
            // console.log(content);

        })
    }
});
console.log('final');

fs.exists('lib', (existe) => {
    if (existe) {
        console.log('El directorio ya existe');
    } else {
        fs.mkdir('lib', (err) => {
            console.log('Directorio Creado');
        })
    }
})


