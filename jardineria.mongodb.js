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

use("jardineria");
db.createCollection("oficina");

use("jardineria");
db.oficina.insertMany([
    {
        codigo: 1,
        ciudad: "Armenia",
        pais: "Colombia",
        region: "Andina",
        codigoPostal: "630001",
        telefono: "3150368955",
        lineaDireccion1: "Calle busquela",
        lineaDireccion2: ""
    },
    {
        codigo: 2,
        ciudad: "Bogota",
        pais: "Colombia",
        region: "Andina",
        codigoPostal: "110001",
        telefono: "1234567891",
        lineaDireccion1: "Calle encontrada",
        lineaDireccion2: ""
    },
    {
        codigo: 3,
        ciudad: "Medellin",
        pais: "Colombia",
        region: "Andina",
        codigoPostal: "050001",
        telefono: "9876543210",
        lineaDireccion1: "Calle finded",
        lineaDireccion2: ""
    },
    {
        codigo: 4,
        ciudad: "Tunja",
        pais: "Colombia",
        region: "Andina",
        codigoPostal: "546501",
        telefono: "35434834343",
        lineaDireccion1: "Calle found",
        lineaDireccion2: ""
    }
]);

use("jardineria");
db.createCollection("empleado");

use("jardineria");
db.empleado.insertMany([
    {
        codigo: 1,
        nombre: "Andres Felipe",
        apellido1: "Delgado",
        apellido2: "Gutierrez",
        email: "andresfdel13@gmail.com",
        puesto: "Gerente"
    },
    {
        codigo: 2,
        nombre: "Juan David",
        apellido1: "Molina",
        apellido2: "Torres",
        email: "molina@gmail.com",
        puesto: "Empleado"
    },
    {
        codigo: 3,
        nombre: "Cristian Camilo",
        apellido1: "Giraldo",
        apellido2: "Cagua",
        email: "camilo@gmail.com",
        puesto: "Contador"
    },
    {
        codigo: 4,
        nombre: "Marielly",
        apellido1: "Gutierrez",
        apellido2: "Gonzalez",
        email: "make@gmail.com",
        puesto: "Directora"
    }
]);

use("jardineria");
db.createCollection("gama");

use("jardineria");
db.gama.insertMany([
    {
        gama: "Helechos",
        descripcionTexto: "",
        descripcionHtml: "",
        imagen: ""
    },
    {
        gama: "Lechigas",
        descripcionTexto: "",
        descripcionHtml: "",
        imagen: ""
    },
    {
        gama: "Hongos",
        descripcionTexto: "",
        descripcionHtml: "",
        imagen: ""
    },
    {
        gama: "Fruteros",
        descripcionTexto: "",
        descripcionHtml: "",
        imagen: ""
    }
]);

use("jardineria");
db.createCollection("cliente");

use("jardineria");
db.cliente.insertMany([
    {
        codigo: 1,
        nombre: "Alvaro Rodriguez",
        nombreContacto: "Alvaro",
        apellidoContacto: "Rodriguez",
        telefono: "1234567890",
        fax: "",
        lineaDireccion1: "Ibagué",
        lineaDireccion2: "",
        ciudad: "Ibagué",
        region: "Andina",
        pais: "Colombia",
        codigoPostal: "",
        codigoEmpleadoRepVentas: "",
        limiteCredito: 100000.00
    },
    {
        codigo: 2,
        nombre: "Adalberto ",
        nombreContacto: "Adalberto",
        apellidoContacto: "",
        telefono: "4313513",
        fax: "",
        lineaDireccion1: "Armenia",
        lineaDireccion2: "",
        ciudad: "Armenia",
        region: "Andina",
        pais: "Colombia",
        codigoPostal: "",
        codigoEmpleadoRepVentas: "",
        limiteCredito: 3435135.00
    },
    {
        codigo: 3,
        nombre: "Germán Angarita",
        nombreContacto: "Germán",
        apellidoContacto: "Angarita",
        telefono: "343434",
        fax: "",
        lineaDireccion1: "Armenia",
        lineaDireccion2: "",
        ciudad: "Armenia",
        region: "Andina",
        pais: "Colombia",
        codigoPostal: "",
        codigoEmpleadoRepVentas: "",
        limiteCredito: 6435131.00
    },
    {
        codigo: 4,
        nombre: "Arle ",
        nombreContacto: "Arle",
        apellidoContacto: "",
        telefono: "3435135135",
        fax: "",
        lineaDireccion1: "Armenia",
        lineaDireccion2: "",
        ciudad: "Armenia",
        region: "Andina",
        pais: "Colombia",
        codigoPostal: "",
        codigoEmpleadoRepVentas: "",
        limiteCredito: 354351385.22
    }
]);

use("jardineria");
db.createCollection("pedido");

use("jardineria");
db.pedido.insertMany([
    {
        codigo: 1,
        fechaPedido: "2023-08-27",
        fechaEsperada: "2023-08-31",
        fechaEntrega: "2023-08-30",
        estado: "ENTREGADA",
        comentarios: "",
    },
    {
        codigo: 2,
        fechaPedido: "2023-07-27",
        fechaEsperada: "2023-07-31",
        fechaEntrega: "2023-07-30",
        estado: "DEVOLUCION",
        comentarios: "",
    },
    {
        codigo: 1,
        fechaPedido: "2023-06-27",
        fechaEsperada: "2023-06-31",
        fechaEntrega: "2023-06-30",
        estado: "NOVEDAD",
        comentarios: "",
    },
    {
        codigo: 1,
        fechaPedido: "2023-05-27",
        fechaEsperada: "2023-05-31",
        fechaEntrega: "2023-05-30",
        estado: "TRANSPORTE",
        comentarios: "",
    }
]);

use("jardineria");
db.createCollection("producto");

use("jardineria");
db.producto.insertMany([
    {
        codigo: 1,
        nombre: "Velas aromáticas",
        gama: "",
        dimensiones: "23 * 50",
        proveedor: "KETE SA",
        descripcion: "",
        stock: 30,
        precioVenta: 15242.35,
        precioProveedor: 10352.52
    },
    {
        codigo: 2,
        nombre: "Velas simples",
        gama: "",
        dimensiones: "23 * 50",
        proveedor: "LANA SA",
        descripcion: "",
        stock: 20,
        precioVenta: 13431.35,
        precioProveedor: 4646.52
    },
    {
        codigo: 3,
        nombre: "Velas negras",
        gama: "",
        dimensiones: "23 * 50",
        proveedor: "SIAS SA",
        descripcion: "",
        stock: 15,
        precioVenta: 3135.35,
        precioProveedor: 3023.52
    },
    {
        codigo: 4,
        nombre: "Velas blancas",
        gama: "",
        dimensiones: "23 * 50",
        proveedor: "SIIS SA",
        descripcion: "",
        stock: 30,
        precioVenta: 3435.35,
        precioProveedor: 2435.52
    }
]);

use("jardineria");
db.createCollection("detallePedido");

use("jardineria");
db.detallePedido.insertMany([
    {
        codigoPedido: {
            $ref: "pedido",
            $id: ObjectId("64ebd70944c7733db8433e3c"),
            $db: "jardineria"
        },
        codigoProducto: "",
        cantidad: 1,
        precioUnidad: 24132.00,
        numeroLinea: 1
    },
    {
        codigoPedido: {
            $ref: "pedido",
            $id: ObjectId("64ebd70944c7733db8433e3d"),
            $db: "jardineria"
        },
        codigoProducto: "",
        cantidad: 1,
        precioUnidad: 4344.00,
        numeroLinea: 2
    },
    {
        codigoPedido: {
            $ref: "pedido",
            $id: ObjectId("64ebd70944c7733db8433e3e"),
            $db: "jardineria"
        },
        codigoProducto: "",
        cantidad: 35,
        precioUnidad: 34143.00,
        numeroLinea: 3
    },
    {
        codigoPedido: {
            $ref: "pedido",
            $id: ObjectId("64ebd70944c7733db8433e3f"),
            $db: "jardineria"
        },
        codigoProducto: "",
        cantidad: 6,
        precioUnidad: 3513.00,
        numeroLinea: 4
    }
]);

use("jardineria");
db.createCollection("pago");

use("jardineria");
db.pago.insertMany([
    {
        codigoCliente: "",
        formaPago: "Efectivo",
        idTransaccion: 1,
        fechaPago: "2023-08-27",
        total: 34313.00
    },
    {
        codigoCliente: "",
        formaPago: "Cheque",
        idTransaccion: 2,
        fechaPago: "2023-07-27",
        total: 68466.00
    },
    {
        codigoCliente: "",
        formaPago: "Transaccion",
        idTransaccion: 3,
        fechaPago: "2023-06-27",
        total: 78764.00
    },
    {
        codigoCliente: "",
        formaPago: "Acuerdo",
        idTransaccion: 4,
        fechaPago: "2023-05-27",
        total: 95313.00
    }
]);