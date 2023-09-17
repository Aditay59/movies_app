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
    <div className="model">
    <h3> {`Today's Trending Tv Shows`} </h3>

    <div className="MoviesContainer">
        
    {
        TodaysTrending ? 

        TodaysTrending.map((item,index)=>(
            <div key={index} className="movieDiv">
                <Link to={`/tv/${item.id}`}> <img className="Pimg" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="poster" height={230} width={150} /> </Link>
                <Link to={`/tv/${item.id}`} className="Tlink"> <h5 className="Title">{item.name}</h5> </Link>
                <p>{item.first_air_date}</p>

                <div className="progress-bar" style={{ border: `4px solid ${item.vote_average*10 <= 50 ? 'red' : item.vote_average*10 <= 70 ? 'yellow' : item.vote_average*10<=95 ? 'greenyellow' : "green"}` }} >
                     <span> {Math.floor(item.vote_average * 10)}<span className="percent"> <sup>%</sup> </span></span> 
                
                </div>

            </div> 

        )) : <div>Loading</div>
    }
    </div>

    </div>
  )
}

export default TodaysTrendingTv;