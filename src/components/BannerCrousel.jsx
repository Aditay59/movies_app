import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Banner.css';
import { Link } from 'react-router-dom';


const BannerCrousel = () => {

  const [TodaysTrending, setTodaysTrending] = useState(null);

  const getMovies = async () =>{
    await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=a78831d06734a1634099e000239fe870`)
    .then(res => res.json())
    .then(json => setTodaysTrending(json.results))
  }

  useEffect(()=>{
    getMovies();
  },[]);

  return (
    <>
    <Carousel >

      {
        TodaysTrending ? 
        TodaysTrending.map((item,index)=>(
            <Carousel.Item key={index} className='BannerItem'>
             <Link to={`/${item.id}`}> <img className='poster' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt='poster' /> </Link>
              <Carousel.Caption className='BanerItem'>
              <h2> {item.title} </h2>
              <p> {item.overview} </p>
            </Carousel.Caption>
           </Carousel.Item>
        )) : <div>Loading</div>
      }

    </Carousel>
    </>
  )
}

export default BannerCrousel;

/**
 * await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=a78831d06734a1634099e000239fe870`)
 */