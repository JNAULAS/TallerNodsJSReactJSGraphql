import React, { useState } from 'react';
import { useMutation } from "react-query";
import { HashLink as Link } from 'react-router-hash-link';



const AddMovie = () => {

  const urlApi = 'http://localhost:4003/graphql'
  // Hooks state
  const [nombre, setNombre] = useState('')
  const [genero, setGenero] = useState('')
  const [anno, setAnno] = useState('')

  const onChangeTextField = (field, value) => {
    if (field === undefined || value === undefined) return
    switch (field) {
      case 'name':
        setNombre(value)
        break
      case 'genero':
        setGenero(value)
        break
      case 'year':
        setAnno(value)
        break
      default:
        break
    }
  }

  // Function
  const mutation = useMutation(() => {
    console.log('Ingresa a mutation')
    return fetch(urlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        mutation AddMovie($name: String!, $genero: String!, $year: String!){
          addMovie(name: $name, genero: $genero, year: $year){
              name,
              genero,
              year
              }
          }
        `,
        variables: {
          name: nombre,
          genero: genero,
          year: anno,
        },
      }),
    }).then((response) => {
      if (response.status >= 400) {
        console.log('Datos de response save')
        console.log(response)
        throw new Error('Error creating movie');
      } else {
        return response.json();
        alert('Registro agregado con exito')
      }
    })
      .then((data) => {
        console.log('Data de retorno')
        console.log(data.data.listMovies)
      });

  })

  // View
  return (
    // Se agrega id para poder se enlazado desde el boton de otro componente
    <div className='addMovie' id='addmovie'>
      <form>
        <input type='text' id='idNombre' placeholder='Movie name' required onChange={(event, text) => onChangeTextField('name', event.target.value)}></input>
        <input type='text' id='idGenero' placeholder='Movie Genero' required onChange={(event, text) => onChangeTextField('genero', event.target.value)}></input>
        <input type='text' id='idYear' placeholder='Movie Year' onChange={(event, text) => onChangeTextField('year', event.target.value)}></input>
        <button onClick={() => mutation.mutate()}>Add Movie</button>
      </form>
      <div className='top'>
        <Link smooth to='#header' className='top-button'>Back to top</Link>
      </div>
    </div>
  )
}
export default AddMovie