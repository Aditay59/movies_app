import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const TopRated = () => {

    const [TopMovies, setTopMovies] = useState(null);

    const getMovies = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a78831d06734a1634099e000239fe870`)
        .then(res => res.json())
        .then(json => setTopMovies(json.results))
    }

    useEffect(()=>{
        getMovies();
    },[]);

  return (
    <>
    <h3>Top Rated Movies</h3>

    <div className="MoviesContainer">
    {
        TopMovies ?

       TopMovies.map((item,index)=>(
            <div key={index} className="movieDiv">
                
                <Link to={`/${item.id}`}> <img className="Pimg" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="poster" height={230} width={150} /> </Link>
                <Link to={`/${item.id}`} className="Tlink"> <h5 className="Title">{item.title}</h5> </Link>
                <p>{item.release_date}</p>
            </div>
        )) : <div>Loading....</div>
      
    }
    </div>

    </>
  )
}

export default TopRated;