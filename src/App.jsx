import { useEffect, useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom';



function App() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const API_KEY = "poner la API_KEY";

  const popularMovies = async ()=>{
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es`);
      const data = await response.json();
      setMovies(data.results);
    }catch (error){
      console.error('Error al obtener las peliculas:', error);
    }
  };

  useEffect(()=>{
    popularMovies();
  });

  const handleMovieClick = (movie)=>{
      
        navigate(`/detallePelicula?id=${movie.id}
                  &title=${encodeURIComponent(movie.title)}
                  &overview=${encodeURIComponent(movie.overview)}
                  &poster_path=${encodeURIComponent(movie.poster_path)}
                  &original_language=${encodeURIComponent(movie.original_language)}
                  &original_title=${encodeURIComponent(movie.original_title)}
                  &popularity=${encodeURIComponent(movie.popularity)}
                  &release_date=${encodeURIComponent(movie.release_date)}
                  &vote_average=${encodeURIComponent(movie.vote_average)}
                  &vote_count=${encodeURIComponent(movie.vote_count)}    
                  `);
      };
        
  
  return (
    <>
    <div className='busqueda_nombre'>
      <Link to="/busquedaNombre">
      <button className='boton_busqueda'>
        <h2> Ir a búsqueda por nombre</h2>
      </button>
      </Link>
    </div>
    
    <div className='container'>
     <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title} className="movie-poster"
                        onClick={() => handleMovieClick(movie)}
                        
                        />
            <h1 className="movie-title">{movie.title}</h1>
          </div>
        ))}
      </div>
    </div>
    </>
  )

}
export default App


