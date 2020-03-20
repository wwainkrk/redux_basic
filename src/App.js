import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, bindActionCreators } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

import { moviesActions } from './app/movies/duck'
            
const store = createStore(rootReducer, composeWithDevTools())    // initiate Redux store, for combined reducer

/* Few ways to dispatch function */

//store.dispatch({type: 'ADD_ACTOR', actor: 'Meghan Markle'})     // simply dispatch on store

// const addActor = item => ({type: 'ADD_ACTOR', actor: item})
// const reset = () => ({type: 'RESET_ACTORS'})
// store.dispatch(addActor('Patrick J. Adams'))

// const actorsActions = bindActionCreators({add: addActor, reset}, store.dispatch)
// actorsActions.add('Gabriel Macht')
// actorsActions.reset()

window.store = store

store.dispatch(moviesActions.add('Sala Samobojcow: Hejter'))


/* Main component to render - simply react-app */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
