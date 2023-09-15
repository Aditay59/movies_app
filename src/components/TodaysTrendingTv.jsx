import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const TodaysTrendingTv = () => {

    const [TodaysTrending, setTodaysTrending] = useState(null);

    const getMovies = async () => {
        await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=a78831d06734a1634099e000239fe870`)
        .then(res => res.json())
        .then(json => setTodaysTrending(json.results))
    }

    useEffect(()=>{
        getMovies();
    },[]);

    

  return (
    <>
    <h3> {`Today's Trending Tv Shows`} </h3>

    <div className="MoviesContainer">
        
    {
        TodaysTrending ? 

        TodaysTrending.map((item,index)=>(
            <div key={index} className="movieDiv">
                <Link to={`/tv/${item.id}`}> <img className="Pimg" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="poster" height={230} width={150} /> </Link>
                <Link to={`/tv/${item.id}`} className="Tlink"> <h5 className="Title">{item.name}</h5> </Link>
                <p>{item.first_air_date}</p>
            </div> 

        )) : <div>Loading</div>
    }
    </div>

    </>
  )
}

export default TodaysTrendingTv;