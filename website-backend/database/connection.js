require('dotenv').config({ path: '../.env' })
const mysql = require('mysql')

const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_host = process.env.DB_HOST
const db_name = process.env.DB_NAME

const connection = mysql.createConnection({
  host: db_host,
  user: db_user,
  password: db_password,
  database: db_name
})

module.exports = connection;
