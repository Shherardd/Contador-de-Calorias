const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.get('/', (req, res) => {
    res.send('server working')    
})

const port = 3000
const server = app.listen(port, () => {
    console.log(`server listening in localhost:${port}`)
})