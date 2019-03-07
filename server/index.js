console.log('Server is running')
const express = require('express')
const SecurityRouter = require('./routes/security')
const verifyToken = require('./middlewares/security');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express()

const RoundRouter = require('./routes/round')
const RatingRouter = require('./routes/ratings')
const CommentRouter = require('./routes/comments')

app.use(cors());
app.use(bodyparser.json());
app.use(verifyToken);
app.use(RoundRouter)
app.use(RatingRouter)
app.use(CommentRouter)
app.use('/', SecurityRouter)
app.listen(3000, () => console.log('Express is listening'))


