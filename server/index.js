console.log('Server is running')

const Round = require('./models/round')

Round.find()
    .then((items) => { console.log(items) })
    .catch((error) => console.log('Error while retrieving movie details: ' + error))
