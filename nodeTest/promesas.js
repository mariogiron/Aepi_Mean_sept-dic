let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < 0.7) {
        resolve(num);
    } else {
        reject(num);
    }
});

prom
    .then((numAleatorio) => {
        console.log('Todo OK ' + numAleatorio);
    })
    .catch((numAleatorio) => {
        console.log('Algo ha fallado! ' + numAleatorio);
    });




// function suma(num1, num2) {
//     return num1 + num2;
// }

// let a = 4;
// let b = 9;
// suma(a, b);