import React from 'react';
import MovieCard from '../components/MovieCard';

const cardList = ({ movies }) => {
    const CardComponent = movies.map((movie, i) => {
        return (
            <MovieCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                title={movie.title}
                overview={movie.overview}
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
            />
            )
    });
    return (
        <div className='flex flex-wrap justify-between'>
            {CardComponent}
        </div>
    );
}

export default cardList;