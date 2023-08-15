/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Mostrar bases de datos
show("dbs");
//Cambiar a base de datos db_producto
use("db_producto");
//
db.createCollection("productos");
// Insertar datos
db.productos.insertOne({
    nombre: "Arroz",
    precio: 1000,
    descripcion: "Aproveche que está barato"
});

db.productos.insertOne({
    nombre: "Papa",
    precio: 2000,
    descripcion: "Se puso caro",
    cantidad: 2,
    um: "kg"
});
//Mirar productos
db.productos.find();
//INsertar muchos
db.productos.insertMany([
    {
        nombre: "Lenteja",
        precio: 1500,
        descripcion: "Deliciosa"
    },
    {
        nombre: "Frijol",
        precio: 8500,
        descripcion: "Frijol rojo"
    }
]);
//
db.createCollection("categorias");
//
db.categorias.insertMany([
    {
        nombre: "Verduras"
    },
    {
        nombre: "Carnes"
    },
    {
        nombre: "Legumbres"
    },
    {
        nombre: "Vegetales"
    },
    {
        nombre: "Frutas"
    }
])
