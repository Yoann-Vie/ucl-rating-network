const JWT_Checker = require('./middlewares/security');

const MovieDetail = require('./models/movie')

const movie = new MovieDetail()
movie.title = 'Django Unchained'
movie.year = 2012
movie.releaseDate = new Date()
movie.save()
    .then(() => console.log('Saved'))
    .catch((error) => console.log('Error while saving: ' + error))

MovieDetail.find({ year: 2012 })
    .then((items) => { console.log(items) })
    .catch((error) => console.log('Error while retrieving movie details: ' + error))
