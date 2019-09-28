// Definición de la función
function suma(num1, num2) {
    return num1 + num2;
}

// Ejecución
console.log(suma(4, 5));

// Definición sumaRet
function sumaRet(num1, num2, resultado) {
    setTimeout(function () {
        // Ejecución de resultado
        resultado(num1 + num2);
    }, 3000);
    console.log('Cuando sale esto');
}

// Ejecución sumaRet
sumaRet(4, 6, function (num) {
    console.log('Este es el resultado: ' + num);
});



let suma2 = (num1, num2) => num1 + num2;
suma2(8, 9);

let saludo = mensaje => `Este es mi mensaje: ${mensaje}`;
saludo('Mensajito');

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let arrPares = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arrPares.push(arr[i]);
    }
}
console.log(arrPares);

let arrPares2 = arr.filter(item => item % 2 === 0);
console.log(arrPares2);