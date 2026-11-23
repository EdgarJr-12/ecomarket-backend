const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', mensaje: 'Servidor EcoMarket activo' });
});

app.get('/api/productos', (req, res) => {
  res.json([
    { id: 1, nombre: 'Cepillo de Bambú', precio: 15.00, stock: 50 },
    { id: 2, nombre: 'Bolsa Reutilizable', precio: 10.00, stock: 100 },
    { id: 3, nombre: 'Botella Térmica Eco', precio: 45.00, stock: 30 }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor EcoMarket corriendo en el puerto ${PORT}`);
});
