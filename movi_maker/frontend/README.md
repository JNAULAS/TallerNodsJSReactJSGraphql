### COMANDOS DEPENDENCIAS
npm install express 
npm install -g nodemon 

npm i express-graphql

### JSON PARA REGISTRO DE INFORMACION
mutation{
addMovie(name: "Avatar", genero:"Accion", year:"2019"){
name,
genero,
year}
}

query {
    listMovies{
        name
        genero
      year
    }
}

// Ya no va
npm install apollo-boost react-apollo graphql-tag graphql
npm install @apollo/client graphql

// OK 
npm install react-query
npm install body-parser
