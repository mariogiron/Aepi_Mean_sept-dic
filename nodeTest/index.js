class Persona {

    constructor(pNombre, pApellidos, pEdad) {
        this._nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
    }

    get nombre() {
        console.log('Recupero el nombre...');
        return this._nombre;
    }

    set nombre(newValue) {
        console.log('Modifico el nombre...');
        this._nombre = newValue;
    }

    hablar() {
        console.log(`Me llamo ${this.nombre} ${this.apellidos} y tengo ${this.edad}`);
    }

}

let pers1 = new Persona('Pedro', 'Gutiérrez', 45);

pers1.hablar();
console.log(pers1.nombre);

pers1.nombre = 'Ramiro';
console.log(pers1.nombre);

