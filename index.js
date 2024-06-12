const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (rep, res) => {
    res.send('Olá mundo!!!')
})

app.listen(port, () => {
    console.log(`Exemplo app listando a porta - ${port}`)
})