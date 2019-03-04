console.log('Server is running')
const express = require('express')
const RoundRouter = require('./routes/round')

const app = express()
app.use(RoundRouter)
app.listen(3000, () => console.log('Express is listening'))
