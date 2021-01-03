import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      shouldRedirect: false,
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFetchMovieApi = this.handleFetchMovieApi.bind(this);
  }

  componentDidMount() {
    this.handleFetchMovieApi();
  }

  async handleSubmit(updatedMovie) {
    await updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
      loading:false
    })
  }

  async handleFetchMovieApi() {
    const result = await getMovie(this.props.match.params.id);
    this.setState({
      movie: result,
      loading: true,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/"/>
    }

    if (loading === false) {
      return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
