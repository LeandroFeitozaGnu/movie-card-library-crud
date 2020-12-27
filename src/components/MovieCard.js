import React from 'react';
import { Link, Route } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';

class MovieCard extends React.Component {
  render() {
    const {movie} = this.props
    const {
      title,
      subtitle,
      storyline,
      imagePath,
      id,
    } = movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={`Poster do filme ${title}`} />
        <h4> {title} </h4>
        <h5> {subtitle} </h5>
        <span> {storyline} </span>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
        <Route path="movies/:id"
          render={(props) => <MovieDetails {...props}/>}
        />
      </div>
    );
  }
}

export default MovieCard;
