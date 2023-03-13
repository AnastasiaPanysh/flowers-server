const { pool } = require('../DB')

async function getCustomerDB() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM customer';
    const data = (await client.query(sql)).rows;
    return data;
}

async function getCustomerByIdDB(id) {
    const client = await pool.connect();
    const sql = 'SELECT * FROM customer WHERE id=$1';
    const data = (await client.query(sql, [id])).rows;
    return data;
}

async function createCustomerDB(customerName) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `INSERT INTO customer (CUSTOMERNAME)
          VALUES ($1) RETURNING *`;
        const data = (await client.query(sql, [customerName])).rows;
        await client.query('COMMIT');
        return data;
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(error);
        return [];
    }
}

async function updateCustomerDB(id, customerName) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `UPDATE customer SET CUSTOMERNAME=$1 WHERE id=$2 RETURNING*)`;
        const data = (await client.query(sql, [customerName, id])).rows;
        await client.query('COMMIT');
        return data;
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(error);
        return [];
    }
}

async function deleteCustomerDB(id) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `DELETE FROM customer WHERE id=$1 RETURNING *`;
        const data = (await client.query(sql, [id])).rows;
        await client.query('COMMIT');
        return data;
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(error);
        return [];
    }
}

module.exports = { getCustomerDB, getCustomerByIdDB, createCustomerDB, updateCustomerDB, deleteCustomerDB }