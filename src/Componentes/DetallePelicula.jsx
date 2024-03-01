import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const DetallePelicula = () => {
const location = useLocation();

const queryParams = new URLSearchParams(location.search)

const id = queryParams.get("id");
const title = queryParams.get("title");
const original_title = queryParams.get("original_title");
const original_language = queryParams.get("original_language");
const overview = queryParams.get("overview");
const poster_path = queryParams.get("poster_path");
const popularity= queryParams.get("popularity");
const release_date= queryParams.get("release_date");
const vote_average= queryParams.get("vote_average");
const vote_count= queryParams.get("vote_count");             
      

console.log({title})



  return (
    <>

<div className='busqueda_nombre'>
      <Link to="/App">
        <button className='boton_busqueda'>
          <h2> Ir a página inicio</h2>
        </button>
      </Link>
</div>


<div className='detallePelicula'>
    <div className='imagenDetalle'>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className='imgDet'/>
    <br/>
      
    </div>

    <div>
    <div className='infoDetallePelicula'>
      <div>
        
        <h3>Título original: </h3>
        <h2>{ original_title }</h2>
        <br/> 

        <h3>Lengua original: </h3>
        <h2>{  original_language  }</h2>
        <br/>

        <h3>Popularidad: </h3>
        <h2>{  popularity }</h2>
        <br/>

        <h3>Fecha: </h3>
        <h2>{  release_date }</h2>
        <br/>

        <h3>Promedio de votos: </h3>
        <h2>{  vote_average }</h2>
        <br/>


        <h3>Recuento de votos: </h3>
        <h2>{  vote_count }</h2>
        <br/>

        <h3> Sinopsis: </h3>
        <h2>{  overview }</h2>

      </div>
    </div>
  </div>
</div>
</>
    
  )
}

export default DetallePelicula