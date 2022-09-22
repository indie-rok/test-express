require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')
const cors = require('cors')

const app = express()
const port = 3000

console.log(process.env)

app.use(cors())
app.use(express.json());


const pool = new Pool()

app.get('/names', (req, res) => {
  pool.query('SELECT * from names ORDER BY id DESC', (err, data)=>{
    res.send(data.rows)
  })
})

app.post('/names', (req, res) => {
  pool.query(`INSERT INTO names (name) values ('${req.body.name}')`, (err, data)=>{
    res.sendStatus(201)
  })
})


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
