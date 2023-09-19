// import { Button } from 'react-bootstrap';
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
   
    {/* <div className='Search'>
      <input type="text" autoComplete="off"  value={searchtext} placeholder='Enter movie to search' onChange={handleChange} onKeyDown={handleSearch}  />
      <Button type='button' className='Sbtn' onClick={handleSearch}> Search </Button>
    </div> */}
    <div className="container-input">
    <input type="text" autoComplete="off"  value={searchtext} placeholder='Search' onChange={handleChange} onKeyDown={handleSearch}  />
      <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
        <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fillRule="evenodd"></path>
      </svg>
    </div>

     
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