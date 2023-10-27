const model = require('../model/model')

const movies = [
    { name: 'Rambo', genero: 'Action', year: 2019 },
    { name: 'Rambo1', genero: 'Action', year: 2020 },
    { name: 'Rambo2', genero: 'Action', year: 2021 },
    { name: 'Rambo3', genero: 'Action', year: 2022 }
]
const rootValue = {
    listMovies: () => {
        //return movies
        return model.find({})
    },
    addMovie: (data) => {
        let obj = new model({
            name: data.name,
            genero: data.genero,
            year: data.year
        })
        obj.save()
        return obj
    }
}
module.exports = rootValue