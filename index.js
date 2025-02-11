const express= require('express');
const app= express();
const cors = require('cors');
require('dotenv').config();
const {dbConnection}= require("./config/dbConnection")


app.use(cors());


app.use(express.json());


const loginroutes= require('./routes/usuarioLoginRoute');
const proveedorroutes= require('./routes/proveedorRoute');
const productoroutes= require('./routes/productoRoute');
const carritoroutes= require('./routes/carritoRoute');
const pedidoroutes= require('./routes/pedidoRoute');


const PORT = process.env.PORT || 3000;

app.use('/api/login',loginroutes)
app.use('/api/proveedor',proveedorroutes)
app.use('/uploads', express.static('uploads'));
app.use('/api/producto',productoroutes)
app.use('/api/carrito',carritoroutes)
app.use('/api/pedido',pedidoroutes)

let admin = require("firebase-admin")


var serviceAccount = require("./proyecto-final-4483a-firebase-adminsdk-qlnvs-2321e3b964.json")


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })

app.listen(PORT,() =>{
    console.log(`listening on port ${PORT}`)
});