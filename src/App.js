import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieContainer from './app/movies/components/MovieContainer'
import MovieForm from './app/movies/components/MovieForm'


/* Few ways to dispatch function */

//store.dispatch({type: 'ADD_ACTOR', actor: 'Meghan Markle'})     // simply dispatch on store

// const addActor = item => ({type: 'ADD_ACTOR', actor: item})
// const reset = () => ({type: 'RESET_ACTORS'})
// store.dispatch(addActor('Patrick J. Adams'))

// const actorsActions = bindActionCreators({add: addActor, reset}, store.dispatch)
// actorsActions.add('Gabriel Macht')
// actorsActions.reset()



/* Main component to render - simply react-app */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Additional list component based on Redux state */}
          <MovieContainer />
          {/* Form component */}
          <MovieForm />
        </header>
      </div>
    );
  }
}

export default App;
