import React, { Component } from 'react';
import { MovieCard } from '../components';
import { getMovies } from '../services/movieAPI';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount(){
    this.handleState();
  }

  async handleState() {
    const moviesFromApi = await getMovies();
    this.setState({ movies: moviesFromApi });
  }

  render() {
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
