import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/MovielandingPage.css';

const SinglePageMovie = () => {
    const {id} = useParams();

    const [MovieData,setMovieData] = useState(null);
    const [Images, setImages] = useState(null);

    const getMovie = async () =>{
      await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a78831d06734a1634099e000239fe870`)
      .then(res => res.json())
      .then((json) => {
        setMovieData(json);
        // console.log(json);
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

    useEffect(() =>{
      getMovie();
      getImages();
    },[]);

  return (
   <>

   {
    MovieData ? 
    <div className="textDesign">
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
        
        {/* <h2> {MovieData.title} </h2> */}
        <h5> {MovieData.tagline} </h5>
        <p> {MovieData.overview} </p>
      </div>
      </div>
    :
    <div>Loading...</div>

   }

   </>
  )
}

export default SinglePageMovie;