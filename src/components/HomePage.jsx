import BannerCrousel from "./BannerCrousel";
import PopularMovies from "./PopularMovies";
import SearchBar from "./SearchBar";
import TodaysTrendingTv from "./TodaysTrendingTv";
import TopRated from "./TopRated";

const HomePage = () => {
  return (
    <>
    <SearchBar />
    <br/><br/>
    <BannerCrousel />
    <br/><br/>
    <TodaysTrendingTv />
    <PopularMovies />
    <TopRated />
    </>
  )
}

export default HomePage;