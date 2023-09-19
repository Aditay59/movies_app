import BannerCrousel from "./BannerCrousel";
import PopularMovies from "./PopularMovies";
import SearchBar from "./SearchBar";
import TodaysTrendingTv from "./TodaysTrendingTv";
import TopRated from "./TopRated";
import '../styles/index.css';

const HomePage = () => {
  return (
    <>
    <SearchBar />

    <BannerCrousel />
    <br/><br/>
    <TodaysTrendingTv />
    <PopularMovies />
    <TopRated />

    <div className="Wcontainer">
      <p className="warning"> ⚠ These ratings are according to tmdb not imdb. </p>
    </div>

    </>
  )
}

export default HomePage;