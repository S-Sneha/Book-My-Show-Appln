import React from 'react';
import MovieNavbar from "../components/NavBar/MovieNavbar.Component";
const MovieLayoutHOC =
  (Component) =>
  ({...props}) => {
    return (
        <div> 
          <MovieNavbar/>
          <Component {...props} />
          {/*<div> Footer </div>*/}
        </div>
    )
  } 


export default MovieLayoutHOC