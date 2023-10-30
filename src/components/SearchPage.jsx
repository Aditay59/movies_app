import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../styles/SearchPage.css';

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
    <div className="SearchContainer">
    {
      searchedMovies ? 

      searchedMovies.map((item,index)=>(
        <div key={index} className="singleItem">
           <Link to={`/${item.id}`} > <img className="posterImg" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width={200} height={300} alt='poster' /> </Link>
            <h5> {item.title} </h5>
            <p> {item.release_date} </p>
        </div>
      )) : <div className="loader"></div>
    }
    </div>
    </>
  )
}

export default SearchPage;