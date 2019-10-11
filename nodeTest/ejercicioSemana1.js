let fs = require('fs');
let path = require('path');

function readMdFiles(pDir) {
    fs.readdir(pDir, (err, files) => {
        if (err) console.err(err);
        let filesFiltered = files.filter(item => {
            return path.extname(item) === '.md';
        });
        filesFiltered.forEach(item => {
            fs.readFile(`./${item}`, (err, content) => {
                console.log(content.toString());
            })
        })
    });
}

function readMdFilesPro(pDir) {
    fs.readdir(pDir, (err, files) => {
        if (err) console.err(err);
        files.filter(item => item.endsWith('.md')).forEach(item => {
            console.log(fs.readFileSync(`./${item}`).toString());
        })
    });
}

readMdFiles('./');