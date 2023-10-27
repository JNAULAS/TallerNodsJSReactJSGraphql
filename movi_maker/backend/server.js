const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors');
const bodyParser = require('body-parser');

const movieResolver = require('./resolvers/resolver')
const movieSchema = require('./schema/schema')
const resolve= require('./resolvers/resolver')
const db = require('./db')
const app = express()


app.use(cors());
app.use(bodyParser.json());

db()
//resolve.addMovie()
//resolve.listMovies()



app.use(
  '/graphql',
  graphqlHTTP({
    schema: movieSchema,
    rootValue: movieResolver,
    graphiql: true
  })
)


/*app.get('/hi', (req, res) => {
  res.send('Hola desde el servidor.')
})*/

let port = process.env.PORT || 4003
app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`)
})
