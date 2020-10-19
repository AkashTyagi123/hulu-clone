import axios from 'axios';
import React, { forwardRef, useEffect, useState } from 'react'
import request from '../../Requests/request';
import './Results.css';
import VideoCard from './VideoCard/VideoCard';
import FlipMove from 'react-flip-move';
const Results= forwardRef(({selectedOption,ref}) =>{
    const [movies,setMovies] = useState([]);
    //Use effect is use to make API calls
    useEffect(()=>{
        //Run this code whenever the component mount/loads
        // the empty array is to run it one and once it will run into an infinite
        //loop if it is missing
        //If we pass any component in the array(dependency array) it will also 
        //run when the dependency component is chage or rerender

        async function fetchData(){
            const req = await axios.get(`https://api.themoviedb.org/3${selectedOption}`);
            console.log(req.data.results);
            setMovies(req.data.results);
            return req;
        }
        fetchData();
    },[selectedOption]);
    return (
        <div ref={ref} className="results">
           <FlipMove>
           {movies.map(movie=><VideoCard  key={movie.id} movie={movie}/>)}
           </FlipMove>
        </div>
    )
});

export default Results
