const { Pool } = require('pg')

const pool = new Pool()

pool.query('CREATE TABLE names (id SERIAL, name VARCHAR(100))', (err, res) => {
    console.log(err, res)
    pool.query("INSERT INTO names (name) values ('emmanuel')",
        (err, res) => {
            console.log(err, res)
            pool.end()
        }
    )
})

