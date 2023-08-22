import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import "./Card.css"

function Card({movie}) {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])
  return (
    <>
     {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme highlightColor='#444' baseColor='#202020'>
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>
        :
        <Link to = {`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}} >
                <div className="cards">
                    <img src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="" className="cards__img" />
                    <div className="cards__overlay">
                        <div className="card__title">{movie?movie.original_title:""}</div>
                        <div className="card__runtime">{movie?movie.release_date:""}
                        <span className='card__rating'>{movie?movie.vote_average:""}<AiFillStar style={{color:"#FFC436"}}/>{" "}</span>
                        <div className="card__description">{movie?movie.overview.slice(0,118)+"...":""}</div>
                        </div>
                    </div>
                </div>
        </Link>
     } 
    </>
  )
}

export default Card
