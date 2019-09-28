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

module.exports = Persona;