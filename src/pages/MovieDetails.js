import React, { Component } from 'react';
import {getMovie} from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      imagePath: '',
      title: '',
      subtitle: '',
      storyline: '',
      genre: '',
      rating: '',
      redirect: '',
      loading: false,
      redirect: false,
    };
  }

  componentDidMount() {
    this.handleFetchMovieApi();
  }

  async handleFetchMovieApi() {
    const {id} = this.props.match.params;
    const movieApi = await getMovie(id);
 
    this.setState({
      imagePath: movieApi.imagePath,
      title: movieApi.title,
      subtitle: movieApi.subtitle,
      storyline: movieApi.storyline,
      genre: movieApi.genre,
      rating: movieApi.rating,
      redirect: '',
      loading: true,
    })

  }

  render() {
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      loading
    } = this.state;

    if (loading === false) return <Loading />

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/movies/:id/edit">EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
