import { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieSearchApp = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
  
    const API_KEY = 'poner la API_KEY';
  
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=es`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error al obtener las peliculas:', error);
      }
    };
  
    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchMovies();
    };
  
    return (
        

    <>

      <div className='busqueda_nombre'>
            <Link to="/App">
              <button className='boton_busqueda'>
                <h2> Ir a página inicio</h2>
              </button>
            </Link>
      </div>
        
      <div className="container">
        <h1 className="title">BUSQUEDA POR NOMBRE</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input type="text" value={query} onChange={handleInputChange} placeholder="Escribe el nombre" className="search-input" />
          <button type="submit" className="search-button">Buscar</button>
        </form>

        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-release-date">{movie.release_date}</p>
              <p className="movie-overview">{movie.overview}</p>
            </div>
          ))}
        </div>
      
      </div>
    </>

    )
  }
  
  export default MovieSearchApp
  