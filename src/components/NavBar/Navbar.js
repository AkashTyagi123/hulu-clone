import React from 'react'
import request from '../../Requests/request';
import './Navbar.css';
function Navbar({setSelectedOption}) {
    return (
        <div className="navbar">
            <h2 onClick={()=>setSelectedOption(request.fetchTrending)}>Trending</h2>
            <h2 onClick={()=>setSelectedOption(request.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={()=>setSelectedOption(request.fetchActionMovies)}>Action</h2>
            <h2 onClick={()=>setSelectedOption(request.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={()=>setSelectedOption(request.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={()=>setSelectedOption(request.fetchMysteryMovies)}>Mystery</h2>
            <h2 onClick={()=>setSelectedOption(request.fetchSciFiMovies)}>Sci-fi</h2>
            <h2 onClick={()=>setSelectedOption(request.fetchWesternMovies)}>Western</h2>
            <h2 onClick={()=>setSelectedOption(request.fetchAnimationMovies)}>Animation</h2>
            <h2 onClick={()=>setSelectedOption(request.fetchTVMovies)}>Movie</h2>
        </div>
    )
}

export default Navbar
