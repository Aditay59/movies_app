import { Button } from 'react-bootstrap';
import '../styles/Search.css';
import { useState } from 'react';

const SearchBar = () => {

    const [searchtext, setSearchText] = useState("");
    // const [searchedMovies, setSearchedMovies] = useState(null);

    // const getMovies = async () =>{
    //   await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a78831d06734a1634099e000239fe870&query=${searchtext}`)
    //   .then(res => res.json())
    //   .then(json => setSearchedMovies(json.results))
    // }

    const handleChange = (e) =>{
      var text = e.target.value;
        setSearchText(text);
    }

    const handleSearch = (e) =>{
        if(e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter' ) ) {
          if(searchtext.trim()!=="") {
            window.location.href = `search/${searchtext}`;
            // console.log(searchtext);
            //  getMovies();
          }
        }
    }

  return (
    <>
   
   <div className="inputGroup">
    <input type="text" autoComplete="off"  value={searchtext} placeholder='Enter movie to search' onChange={handleChange} onKeyDown={handleSearch}  />
    <Button type='button' className='Sbtn' onClick={handleSearch}> Search </Button>
     </div>

     {/* <div className="searchResult" >

      {
        searchedMovies ? 
        searchedMovies.map((item,index)=>(
          <div key={index}>
            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width={50} height={70} alt='poster' />
            <h5> {item.title} </h5>
          </div>
        )) : <div></div>
      }

     </div> */}

    </>
  )
}

export default SearchBar;

/**
 * https://api.themoviedb.org/3/search/movie?api_key=a78831d06734a1634099e000239fe870&query=batman
 */