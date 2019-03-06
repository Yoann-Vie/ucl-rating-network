console.log('Server is running')
const express = require('express')
const RoundRouter = require('./routes/round')
const SecurityRouter = require('./routes/security')
const verifyToken = require('./middlewares/security');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express()

app.use(cors());
app.use(bodyparser.json());
app.use(verifyToken);
app.use(RoundRouter)
app.use('/', SecurityRouter)
app.listen(3000, () => console.log('Express is listening'))


