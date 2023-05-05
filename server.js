const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
//const customersRoutes = require('./routes/customersRoutes');
//const productRoutes = require('./routes/productRoutes');
//const categoryRoutes = require('./routes/categoryRoutes');
//const tagRoutes = require('./routes/tagRoutes');


//Environment Variable 
dotenv.config();
const PORT = process.env.PORT || 8080;

// Express init
const app = express();

// Middleware init
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

// public folder static
app.use(express.static('public'));

//API init
/* app.use('api/v1/customers', customersRoutes);
app.use('api/v1/products', productRoutes);
app.use('api/v1/category', categoryRoutes);
app.use('api/v1/tag', tagRoutes); */

//Server listen
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgGreen.bgCyan);
})