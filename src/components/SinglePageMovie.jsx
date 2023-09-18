import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/MovielandingPage.css';
import play from '../assets/play2.png';
import cross from '../assets/cross.png';

const SinglePageMovie = () => {
    const {id} = useParams();

    const [MovieData,setMovieData] = useState(null);
    const [Images, setImages] = useState(null);
    const [Videos, setVideos] = useState(null);
    const [isDisplay, setisDisplay] = useState(false);

    const getMovie =  async () =>{
       await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a78831d06734a1634099e000239fe870`)
      .then(res => res.json())
      .then((json) => {
        setMovieData(json);
      });
    }

    const getImages = async () =>{
      await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=a78831d06734a1634099e000239fe870`)
      .then(res => res.json())
      .then(json => {
        const enLogos = json.logos.filter(logo => logo.iso_639_1 === "en");
        if(enLogos.length > 0) {
          setImages(enLogos[0].file_path);
        }
      })
    }

    const getVideos = async () =>{
      await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a78831d06734a1634099e000239fe870`)
      .then(res => res.json())
      .then(json => {
        const data = json.results.filter(item=>item.type==="Trailer");
        setVideos(data[0].key);
      })
    }

    useEffect(() =>{
      getMovie();
      getImages();
      getVideos();
    },[]);

    const videoRef = useRef(null);

    const pauseVideo = () => {
      const video = document.querySelector('iframe[src*="youtube.com"]');
      if(video) {
        const player = new window.YT.Player(video);
        player.pauseVideo();
      }
    };

    const clickHandler = () =>{
      if(isDisplay === true) {
        setisDisplay(false);
        pauseVideo();
      } else {
        setisDisplay(true);
      }
    }

  return (
   <>

   {
    MovieData ? 
    <div className="Design">
    <div className="main-Wrapper">
      <div className="overlay"></div>
      <img src={`https://image.tmdb.org/t/p/original${MovieData.backdrop_path}`} alt="background" />
      </div>
     
      <div className="container">
        {/* <img className="Pimg" src={`https://image.tmdb.org/t/p/original${MovieData.poster_path}`} alt="poster" height={450} width={300} /> */}
        
        <div> 
          {
            Images ? 
          <img src={`https://www.themoviedb.org/t/p/original/${Images}`} width={400} height={100} /> 
          :
          <h2 className="MTitle"> {MovieData.title} </h2>
          }

        </div>

        <div className="genresContainer">
          {
            MovieData.genres.map((item,index)=>(
              <div key={index} className="genreItem"> {item.name} </div>
            ))
          }
         
          </div>
        
        {/* <h2> {MovieData.title} </h2> */}
       
        <div>
          <h5 className="tagline"> {MovieData.tagline} </h5>
          <p className="overview"> {MovieData.overview} </p>
        </div>

        <div className="trailerButton" onClick={clickHandler}>
           <img src={play} width={60} height={60} /> 
           <p className="trailertext">Watch Trailer</p>
        </div>

      </div>

      <div className="Trailer" onClick={clickHandler} style={{display: isDisplay? 'flex' : 'none'}} >
        <img src={cross} width={80} height={80} alt="cross" className="cross" onClick={clickHandler} />
          <iframe ref={videoRef} width={800} height={500} src={`https://www.youtube.com/embed/${Videos}`} allowFullScreen></iframe>
        </div>

      </div>
    :
    <div>Loading...</div>

   }

   </>
  )
}

export default SinglePageMovie;