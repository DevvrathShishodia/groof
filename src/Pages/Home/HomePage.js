import React from 'react'
import { useEffect, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import "./Home.css"
import Movielist from '../../components/Movielist/Movielist';
const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([])
    useEffect(()=> {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res=>res.json())
        .then(data=>setPopularMovies(data.results))
    },[])
    let link = "https://image.tmdb.org/t/p/original"
  return (
    <>
      <div className="poster">
        <Carousel showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}>
          
          {
           popularMovies.map(movie=>(
            <Link style={{textDecoration:"none", color:"white"}} to={`/movies/${movie.id}`}>
            <div className="posterImage">
              <img src={link+`${movie && movie.backdrop_path}`} alt="" />
            </div>
            <div key={movie.id} className="posterImage__overlay">
              <div className="posterImage__title">{movie ? movie.original_title:""}</div>
              <div className="posterImage__runtime">
                {movie? movie.release_date:""}
                <span className="posterImage__rating">
                  {movie? movie.vote_average:""}
                  <AiFillStar style={{color:"#FFC436"}}/>{" "}
                </span>
              </div>
              <div className="posterImage__description">{movie? movie.overview:""}</div>
            </div>
            </Link>
           ))
          }

        </Carousel>
        <Movielist/>
      </div>
    </>
  )
}

export default HomePage
