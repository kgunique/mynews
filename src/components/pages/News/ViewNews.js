/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewNews = () => {
const [news,setNews] = useState({})
const {title,image_1,l_description,author,location} = news;
const {id} = useParams();
const loadnews = async()=>{
    const res = await axios.get(
        `http://localhost:3001/news/${id}`
        );
        setNews(res.data)
        console.log(res.data)
}

useEffect(() => {
   loadnews();
}, [loadnews])
   
    return (
        <div>
            <h1 className='text-center'>{title}</h1>      
            <img className='img-fluid' src={image_1} alt='big_img' />
            <p>{l_description}</p>
            <big>{author}</big>
            <span>{location}</span>
        </div>
    )
}

export default ViewNews
