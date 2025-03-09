import React from 'react';
import './MovieCard.css';

const MovieCard = ({id, poster_path, title, release_date, overview, vote_average, vote_count}) => {
    return (
        <div className='moviecard outline w-20 tc bg-gold dib br3 pa3 ma2 grow bw2 shadow-5 flex flex-column'>
            <img className='tc w-60' alt='movie' src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
            <div className='flex flex-column justify-between mt2'>
                <div className='movCard'>
                    <h2 className='f4 mt2'>{title}</h2>
                    <div className='tl'>
                        <p className='b'>Release Date: {release_date}</p>
                        <p className='b'>Overview:</p>
                        <p>{overview}</p>
                        <p>Vote Average: {vote_average}</p>
                        <p>Vote Count: {vote_count}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;