const express = require('express')

const app = express()

app.get('/', function (req, res){
    console.log('access from index')
    res.send('working')
})

const port = 3001
const server = app.listen(port, function(){
    console.log(`Server listening on localhost:${port}`)
})
