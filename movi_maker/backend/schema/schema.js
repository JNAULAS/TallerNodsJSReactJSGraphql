const { buildSchema } = require('graphql')
// para pruebas
const schema = buildSchema(`
    type Query {
        listMovies: [Movie]
    }
    type Mutation{
        addMovie(name: String, genero: String, year: String):Movie
    } 
    type Movie {
        name: String,
        genero: String,
        year: String
    }
`)
module.exports = schema