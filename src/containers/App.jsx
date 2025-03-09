import { useState, useEffect } from 'react';
import './App.css';
import 'tachyons';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Next from '../components/Next';
import Back from '../components/Back';

function App() {
  const [movies, setMovies] = useState([])
  const [searchbox, setSearchbox] = useState('')
  const [page, setPage] = useState(1)
  const [apiUrl, setApiUrl] = useState(`https://api.themoviedb.org/3/discover/movie?include_adult-false&include_video=false`)

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer [YOUR OWN TOKEN]'
      }
    }

    fetch(`${apiUrl}`, options)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      console.log('movies array updated:', movies)
  },[page, apiUrl])

  const onSearchUpdate = (event) => {
    setSearchbox(event.target.value)
  }

  const nextPage = () => {
    if (page < 48993) {
      setPage(page + 1)
      setApiUrl(`https://api.themoviedb.org/3/discover/movie?include_adult-false&include_video=false&page=${page + 1}`)
      console.log(page);
      console.log(apiUrl);
    }
  }

  const backPage = () => {
    if (page > 0) {
      setPage(page - 1)
      setApiUrl(`https://api.themoviedb.org/3/discover/movie?include_adult-false&include_video=false&page=${page - 1}`)
      console.log(this.state.page);
      console.log(this.state.apiUrl);
    }
  }

  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(searchbox.toLowerCase())
  });
  console.log(filteredMovies);

  return !movies.length ?
  <h1>Loading...</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>MoviesApp</h1>
        <SearchBox onSearch={onSearchUpdate}/>
        <div className='flex flex-row'>
          <p>page: {page}</p>
          <Next nextClick={nextPage}/>
          <Back backClick={backPage}/>
        </div>
        <CardList movies={filteredMovies}/>
      </div>
    );
}

export default App;
