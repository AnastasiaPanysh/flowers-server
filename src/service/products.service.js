const { getProductsDB, getProductByIdDB, createProductDB, updateProductDB } = require('../repository/products.repository')

async function getProducts() {
    const products = await getProductsDB()
    if (!products.length) throw new Error('products DB is empty')
    return products
}

async function getProductById(id) {
    const products = await getProductByIdDB(id)
    if (!products.length) throw new Error('products DB is empty')
    return products
}
async function createProduct(title, price) {
    const products = await createProductDB(title, price)
    if (!products.length) throw new Error('products DB is empty')
    return products
}

async function updateProduct(id, title, price) {
    const products = await updateProductDB(id, title, price)
    if (!products.length) throw new Error('products DB is empty')
    return products
}

module.exports = { getProducts, getProductById, createProduct,updateProduct }