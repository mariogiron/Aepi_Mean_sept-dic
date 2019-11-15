export class Libro {

    id: number;
    titulo: string;
    publicado: number;
    imagen: string;
    escritor: number;

    constructor({ id, titulo, publicado, imagen, escritor }) {
        this.id = id;
        this.titulo = titulo;
        this.publicado = publicado;
        this.imagen = imagen;
        this.escritor = escritor;
    }
}