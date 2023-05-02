import React, { useEffect, useState } from 'react'
import "./Random.css"
import axios from 'axios';
import Spinner from './Spinner';

// const API_KEY = MBmMrOoHNDS1Pw6RZABtDcUg2I7Xvsnc;

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {
    const [gif,setGIF] = useState('');
    const[loading,setloading] = useState(false);


  

    async function fetchData(){
        setloading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        console.log(imageSource);
        setGIF(imageSource);
        setloading(false);
    }


    useEffect(()=>{
        fetchData()
    },[])

    const ClickHandler = () =>{
        fetchData();
    }

  return (
    <div className='container1'>
        <h1 className='RandomName'>Random GIF</h1>

        {
        loading ? (<Spinner/>) : <img src={gif} width="300" alt="" />
         }

        
        <button className='btnn' onClick={ClickHandler}>
                Generate
        </button>
    </div>
  )
}
