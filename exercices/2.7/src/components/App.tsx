import './App.css'
import Movie from '../type'
import MovieList from './MovieList'
import { useState } from 'react'
import MovieFormAdd from './MovieFormAdd'

function App() {

  const defaultMovie : Movie[] = [
    {
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      during: 184,
      url : "https://m.media-amazon.com/images/I/512xMsswCnL._SL500_.jpg",
      description : "Two imprisoned",
      budget : 25
    },
    {
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      during: 174,
    },
    {
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      during: 94,
    },
    {
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      during: 154 ,
    },
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      during: 148,
    }
  ]

  const [movies, setMovies] = useState(defaultMovie);

  const MovieAdded  = (newMovie : Movie ) => {
    console.log("Movie to Add ", newMovie);
    console.log(movies);
    setMovies([...movies, newMovie]);
  }


  return (
    <div>
      <MovieList movies={ movies }/>
    
      <MovieFormAdd MovieAdded={MovieAdded} />

      </div>
  )
}

export default App
