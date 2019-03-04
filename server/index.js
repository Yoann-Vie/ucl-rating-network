console.log('Server is running')
const express = require('express')
const Round = require('./models/round')

const app = express()
const router = express.Router();

router.get('/rounds', (req, res) => {

    Round.find()
        .then((items) => {
            res.status(200).send(JSON.stringify(items))
        })
        .catch((error) => console.log('Error while retrieving rounds details: ' + error))
})

app.use(router)
app.listen(3000, () => console.log('Express is listening'))
