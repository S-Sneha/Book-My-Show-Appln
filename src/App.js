import "./App.css";
//Routes
import {Routes,Route} from 'react-router-dom';
import axios from "axios";
//Pages
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import PlayPage from "./pages/Play.Page";
// Importing react-slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL= "https://api.themoviedb.org/3";
axios.defaults.params= {};
//axios.defaults.params["api_key"]= process.env.REACT_APP_API_KEY;
axios.defaults.params["api_key"]= "c2fc045992a3f908c5a8ffef646c2dba";

function App() {
  return <Routes>
    <Route path = "/" element={<HomePage />}/>
    <Route path = "/movie/:id" element={<MoviePage />} />
    <Route path = "/plays" element={<PlayPage />} />
   </Routes> 
}

export default App;
