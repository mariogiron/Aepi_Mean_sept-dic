const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    nombre: String,
    precio: Number,
    activo: Boolean,
    departamento: String
});

// Definición
productSchema.methods.mismoDepartamento = function (callback) {
    this.model('Product').find({
        departamento: this.departamento
    }, callback);
}

productSchema.methods.devuelveNombre = function () {
    return this.nombre;
}

productSchema.statics.activos = function (callback) {
    this.model('Product').find({
        activo: true
    }, callback);
}

module.exports = mongoose.model('Product', productSchema);