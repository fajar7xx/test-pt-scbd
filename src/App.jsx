import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  // const [count, setCount] = useState(0)
  const [movies, setMovies] = useState([]);


  const getMovies = async() => {
    try {
      const url = `https://api.themoviedb.org/3/movie/157336/videos?api_key=5f64f923470c28059a9953b36ea3c9fe`
      const response = await axios.get(url)
      // console.log(response.data.results)
      setMovies(response.data.results)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMovies()
  })
  return (
    <>
      {/* list movies */}
      <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
