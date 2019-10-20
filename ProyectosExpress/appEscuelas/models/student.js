let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let studentSchema = new Schema({
    nombre: String,
    apellidos: String,
    edad: Number,
    dni: String,
    mail: String,
    activo: Boolean,
    productos: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

studentSchema.virtual('nombre_completo').get(function () {
    return this.nombre + ' ' + this.apellidos;
});

studentSchema.virtual('nombre_completo').set(function (newValue) {
    let arr = newValue.split(' ');
    this.nombre = arr[0];
    this.apellidos = arr[1];
});

module.exports = mongoose.model('Student', studentSchema);