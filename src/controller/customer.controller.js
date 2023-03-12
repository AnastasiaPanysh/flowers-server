const express = require('express')
const { getCustomer, getCustomerById, createCustomer, updateCustomer } = require('../service/customer.service')
const route = express.Router()


route.get('/', async (req, res) => {
    try {
        const customer = await getCustomer()
        res.status(200).send(customer)
    } catch (error) {
        res.status(404).send(error.message)

    }
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await getCustomerById(id)
        res.status(200).send(customer)
    } catch (error) {
        res.status(404).send(error.message)

    }
})

route.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const customer = await createCustomer(name);
        res.status(200).send(customer)
    } catch (error) {
        res.status(404).send(error.message)
    }
});

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const customer = await updateCustomer(name);
        res.status(200).send(customer)
    } catch (error) {
        res.status(404).send(error.message)
    }
});



module.exports = route;