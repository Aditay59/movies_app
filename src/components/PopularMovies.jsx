import { useEffect, useState } from "react";
import '../styles/Popular.css';
import { Link } from 'react-router-dom';

const PopularMovies = () => {

    const [Pmovies, setPmovies] = useState(null);
    // const [pages, setPages] = useState(0);
    // const [progress, setProgress] = useState(0);

    const getMovies = () =>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=a78831d06734a1634099e000239fe870")
        .then(res => res.json())
        .then((json) => {
            setPmovies(json.results);
            // setPages(json.total_pages);
        });
    }

    useEffect(() =>{
        getMovies();
    },[])

    // if(Pmovies!=null && pages>=1) {
    //     console.log(Pmovies);
    //     console.log(pages);
    // }


  return (
    <div className="model">
    <h3> {`What's Popular`}</h3>
    <div className="MoviesContainer">
    {
        Pmovies ?

       Pmovies.map((item,index)=>(
            <div key={index} className="movieDiv">
                
                <Link to={`/${item.id}`}> <img className="Pimg" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="poster" height={230} width={150} /> </Link>
                <div className="details">
                <Link to={`/${item.id}`} className="Tlink"> <h5 className="Title">{item.title}</h5> </Link>
                <p>{item.release_date}</p>
                </div>
                
                <div className="progress-bar" style={{ border: `4px solid ${item.vote_average*10 <= 50 ? 'red' : item.vote_average*10 <= 70 ? 'yellow' : 'greenyellow'}` }} >
                     <span> {item.vote_average * 10}<span className="percent"> <sup>%</sup> </span></span> 
                
                </div>
                



            </div>
        )) : <div>Loading....</div>
      
    }
    </div>
    </div>
  )
}

export default PopularMovies