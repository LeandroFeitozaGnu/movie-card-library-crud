import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/movies/:id/edit">
          <EditMovie />
        </Route>
        <Route exact path="/movies/new">
          <NewMovie />
        </Route>
        <Route exact path="movies/:id">
          <MovieDetails />
        </Route>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
