import React from 'react';
import { Link, Route } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';

import '../style/MovieCard.css';

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
      <div className="container-fluid">
      {/* <div data-testid="movie-card" className="card" style={ { width: "18rem" } }> */}
        <div data-testid="movie-card" className="card" style={ { width: "100%"} }>
        <img src={imagePath} alt={`Poster do filme ${title}`} className="card-img-top" />
        <div className="card-body" >
          <h4 className="card-title"> {title} </h4>
          <h5 className="card-title"> {subtitle} </h5>
          <span className="cart-text"> {storyline} </span>
        </div>
        <Link 
          to={`/movies/${id}`}
          className="btn btn-outline-primary"
        >
          VER DETALHES
        </Link>
        <Route path="/movies/:id" render={(props) => <MovieDetails {...props} /> } />
      </div>
      </div>
    );
  }
}

export default MovieCard;
