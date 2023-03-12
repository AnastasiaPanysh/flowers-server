const { getCustomerDB, getCustomerByIdDB, createCustomerDB, updateCustomerDB } = require('../repository/customer.repository')

async function getCustomer() {
    const customer = await getCustomerDB()
    if (!customer.length) throw new Error('customer DB is empty')
    return customer
}

async function getCustomerById(id) {
    const customer = await getCustomerByIdDB(id)
    if (!customer.length) throw new Error('customer DB is empty')
    return customer
}

async function createCustomer(name) {
    const customer = await createCustomerDB(name)
    if (!customer.length) throw new Error('customer DB is empty')
    return customer
}

async function updateCustomer(id, name) {
    const customer = await updateCustomerDB(id, name)
    if (!customer.length) throw new Error('customer DB is empty')
    return customer
}

module.exports = {  getCustomer, getCustomerById, createCustomer, updateCustomer  }