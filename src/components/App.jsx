import HomePage from './HomePage';
import {Routes, Route} from 'react-router-dom'
import SinglePageMovie from "./SinglePageMovie";
import SinglePageTv from "./SinglePageTv";
import SearchPage from './SearchPage';
import Layout from './Layout';

const App = ()=> {

  return (
    <>
    {/* <Routes>
      <Route path="/" element={<HomePage />}>  </Route>
      <Route path="/:id" element={<SinglePageMovie />}></Route>
      <Route path='/tv/:id' element={<SinglePageTv />} ></Route>
      <Route path='/search/:query' element={<SearchPage />} ></Route>
    </Routes>      */}

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />}></Route>
          <Route path='/:id' element={<SinglePageMovie />}></Route>
          <Route path='/tv/:id' element={<SinglePageTv />}></Route>
          <Route path='/search/:query' element={<SearchPage />}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App;
