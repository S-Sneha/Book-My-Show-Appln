import React from 'react';
import NavBar from "../components/NavBar/NavBar.Component";

const DefaultLayoutHOC = 
 (Component) =>
({...props}) => {
   return (
   <div> 
    <NavBar/>
    <Component {...props} />
    <div> Footer </div>
   </div>
   )
} 

export default DefaultLayoutHOC 