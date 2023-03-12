const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const products = require('./controller/products.controller')
const provider = require('./controller/provider.controller')
const customer = require('./controller/customer.controller')
const sale = require('./controller/sale.controller')


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());

app.use('/products', products)
app.use('/provider', provider)
app.use('/customer', customer)
app.use('/sale', sale)

app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})

module.exports = app