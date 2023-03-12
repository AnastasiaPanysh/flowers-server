const { pool } = require('../DB')

async function getProductsDB() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM product';
    const data = (await client.query(sql)).rows;
    return data;
}

async function getProductByIdDB(id) {
    const client = await pool.connect();
    const sql = 'SELECT * FROM product WHERE id=$1';
    const data = (await client.query(sql, [id])).rows;
    return data;
}

async function createProductDB(provider_ID, price, productName) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `INSERT INTO product (PROVIDER_ID, PRICE, PRODUCTNAME)
          VALUES ($1,$2,$3,$4) RETURNING *`;
        const data = (await client.query(sql, [provider_ID, price, productName])).rows;
        await client.query('COMMIT');
        return data;
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(error);
        return [];
    }
}

async function updateProductDB(id, provider_ID, price, productName) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `UPDATE product SET PROVIDER_ID=$1, PRICE=$2, PRODUCTNAME=$3
            WHERE id=$4 RETURNING*)`;
        const data = (await client.query(sql, [provider_ID, price, productName])).rows;
        await client.query('COMMIT');
        return data;
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(error);
        return [];
    }
}

module.exports = { getProductsDB, getProductByIdDB, createProductDB, updateProductDB }