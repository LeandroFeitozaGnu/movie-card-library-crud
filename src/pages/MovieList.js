import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import {getMovies} from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.handleState()
  }

  async handleState() {
    const moviesFromApi = await getMovies();
    this.setState({ movies: moviesFromApi })
  }

  render() {
    const { movies } = this.state;
    
    if (movies.length === 0) return <Loading />

    return (
      <section>
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie}/>
            ))}
        </div>
      </section>
    );
  }
}

export default MovieList;
