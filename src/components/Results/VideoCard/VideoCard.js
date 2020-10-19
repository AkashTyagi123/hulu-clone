import React from 'react'
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
function VideoCard({movie}) {
    const baseUrl = "https://image.tmdb.org/t/p/original"
    return (
        <div className="videoCard">
            <img src={`${baseUrl}${movie.backdrop_path}`}/>
            <TextTruncate 
            line={1}
            element="p"
            truncateText="..."
            text=
            {movie.overview}
            />
           
        <h2>{movie.original_title}</h2>
        <div >
        <p className="videoCard__vote"><ThumbUpIcon/>{movie.vote_count}</p>
        </div>
        </div>
    )
}

export default VideoCard
