const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv/config');

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


//Routes
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

//Database
mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log('Database Connection is ready...')
  })
  .catch((err) => {
    console.log(err);
  })

//Server
app.listen(3000, () =>  {
  
  console.log('server is running http://localhost:3000');
})
