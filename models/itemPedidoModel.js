const { dbConnection } = require("../config/dbConnection")
const { DataTypes } = require("sequelize")
const Producto = require('./productoModel');
const Cliente = require('./usuarioModel');
const Pedido = require('./pedidoModel');

const ItemPedido = dbConnection.define("ItemPedido", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    fecha_entrega: { type: DataTypes.DATE, allowNull: false },
    pedidoId: { type: DataTypes.INTEGER,  references: { model: Pedido, key: 'id' }},
    productoId: { type: DataTypes.INTEGER,  references: { model: Producto, key: 'id' }},
    clienteId: { type: DataTypes.INTEGER,  references: { model: Cliente, key: 'id' }},
});

ItemPedido.belongsTo(Producto, { foreignKey: 'productoId' });
ItemPedido.belongsTo(Pedido, { foreignKey: 'pedidoId' });
ItemPedido.belongsTo(Cliente, { foreignKey: 'clienteId' });
Producto.hasMany(ItemPedido, { foreignKey: 'productoId' });
Pedido.hasMany(Pedido, { foreignKey: 'pedidoId' });
Cliente.hasMany(Pedido, { foreignKey: 'clienteId' });

ItemPedido.sync({alter: true})
  .then(() => {
    console.log("Tabla ItemPedido creada")
  })
  .catch((error) => {
    console.log(error)
  })

 

module.exports = ItemPedido