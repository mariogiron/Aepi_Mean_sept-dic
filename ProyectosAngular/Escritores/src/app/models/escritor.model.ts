export class Escritor {

    id: number;
    nombre: string;
    apellidos: string;
    imagen: string;
    pais: string;

    constructor({ id, nombre, apellidos, imagen, pais }) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.imagen = imagen;
        this.pais = pais;
    }
}
