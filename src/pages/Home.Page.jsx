import React, {useState} from 'react';
//components
import EntertainmentCard from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
//layout HOC
import DefaultLayoutHOC from '../layouts/Default.layout';

const HomePage = () => {
  const [recommendedMovies, setrecommendedMovies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

  return (
    <>
    <HeroCarousel/>
    </>
  )
}

export default DefaultLayoutHOC(HomePage);