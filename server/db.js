import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'la-cantina-de-escalante'
})

export const connection = await pool.getConnection()