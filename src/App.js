import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddMovie from './Components/AddMovie';
import Desc from './Components/Desc';
import MovieList from './Components/MovieList';
import SearchMovie from './Components/SearchMovie';
import { moviesData } from './data';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState('')
  const [rating, setRating] = useState(1)

  // add movie
  const handleAdd = (newMovie) => setMovies([...movies,newMovie])

  // handle text
  const handleText = (e) => setText(e.target.value)

  // handle the rate
  const handleRating = (x) =>setRating(x)

  return (
    <div className="App">
      <BrowserRouter>
        <SearchMovie rating={rating} text={text} handleText={handleText} handleRating={handleRating} />
        <Switch>
          <Route exact path="/" render={()=>(
          <MovieList movies={movies.filter(
            el=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating >= rating
            )
          } />
        )} />
        <Route path="/movie/:id" render={(props)=>
          <Desc movies={movies} {...props} />
        } />
        </Switch>
        <AddMovie add={handleAdd} />
      </BrowserRouter>
    </div>
  );
}

export default App;
