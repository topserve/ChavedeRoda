import { Connection } from 'pg';
const {Pool, Client} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Chave',
    password: '1234',
    port: 5432
})

pool.query('select now()', (err, res)=>{
    console.log(err, res)
    pool.end()
})

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Chave',
    password: '1234',
    port: 5432
})
client.connect()

client.query('select now()', (err, res)=>{
    console.log(err, res)
    client.end()
})