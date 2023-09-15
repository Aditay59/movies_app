import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const SearchPage = () => {

  const { query } = useParams();

  const [searchedMovies, setSearchedMovies] = useState(null);

  const getMovies = async () =>{
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a78831d06734a1634099e000239fe870&query=${query}`)
    .then(res => res.json())
    .then(json => setSearchedMovies(json.results));
  }

  useEffect(()=>{
    getMovies();
  },[]);

  return (
    <>
    {
      searchedMovies ?

      searchedMovies.map((item,index)=>(
        <div key={index}>
           <Link to={`/${item.id}`} > <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width={150} height={200} alt='poster' /> </Link>
            <h5> {item.title} </h5>
        </div>
      )) : <div>Loading...</div>
    }
    </>
  )
}

export default SearchPage;