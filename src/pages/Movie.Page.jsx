import React, {useEffect, useState, useContext} from "react";
import MovieLayoutHOC from '../layouts/Movie.layout';
import {useParams} from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../context/Movie.context";
import Slider from "react-slick";
import {FaCcVisa, FaCcApplePay} from "react-icons/fa";

const MoviePage = () => {
const {id}= useParams();

const {movie} = useContext(MovieContext);

const [cast,setCast] = useState([]);
const [SimilarMovies, setSimilarMovies] = useState([]);
const [RecommendedMovies, setRecommendedMovies] = useState([]);

useEffect(() => {
  const requestCast = async() => {
    const getCast = await axios.get(`/movie/${id}/credits`);
    setCast(getCast.data.cast);
  }
  requestCast();
}, []);

useEffect(() => {
  const requestSimilarMovies = async() => {
    const getSimilarMovies= await axios.get(`/movie/${id}/similar`);
    setSimilarMovies(getSimilarMovies.data.results);
  }
  requestSimilarMovies();
}, [id]);

useEffect(() => {
  const reqRecommendedMovies = async() => {
    const getRecommendedMovies= await axios.get(`/movie/${id}/recommendations`);
    setRecommendedMovies(getRecommendedMovies.data.results);
  }
  reqRecommendedMovies();
}, []);

const settingsCast = {};
const settings = {};

  return (
    <>
    {/* <MovieHero/> */}
    <div className="my-12 container px-4 lg:ml-20 lg:w-2/1">
      <div className="flex flex-col items-start gap-3">
        <h1 className = "text-gray-800 font-bold text-2xl">About the Movie </h1>
        <p> {movie.overview} </p>
      </div>

      <div className="my-8">
        <hr/>
      </div>
      <div className="my-8">
        <h2 className="text-gray-800 font-bold text-2xl my-3"> Applicable Offers </h2>
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
            <div className="w-8 h-8">
              <FaCcVisa className="w-full h-full"> </FaCcVisa>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default MovieLayoutHOC(MoviePage);