import React, { useEffect } from 'react';
import SingleMovie from '../components/SingleMovie';
import { useQuery } from "react-query";
import { useState } from 'react';

const listMovies1 = [
    {name:'Rambo', genero: 'Action',year:2019},
    {name:'Rambo1', genero: 'Action',year:2020},
    {name:'Rambo2', genero: 'Action',year:2021},
    {name:'Rambo3', genero: 'Action',year:2022}
]



const Movies = () =>{
  const urlApi = 'http://localhost:4003/graphql'
     // Hooks state
const [listmovies, setListMovies] = useState([])

   // Ejecuta funcion para consultar
   const { data, isLoading, error } = useQuery("launches", () => {
    return fetch(urlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
                  {
                    listMovies {
                      name
                      genero
                      year
                    }
                  }
                `,
      })
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error("Error fetching data");
      } else {
        return response.json();
      }
    })
      .then((data) => {
        console.log('Data de retorno')
        console.log(data.data.listMovies)
        setListMovies(data.data.listMovies)
      });

  })

return(
    <div className='footer'>
    {
        listmovies.map((data) => {
            return <SingleMovie key={data.id} name={data.name} genero={data.genero + ' '+data.year}/>
        })
    }
    </div>
)
}
export default Movies