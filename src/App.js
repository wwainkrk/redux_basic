import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

/* Initial data for feature */
const initialMovies = {
  listName: 'Favourite',
  movies: [
    'Prestige', 'Wolf of Wall Street', '60 seconds'
  ]
}


/* Basic reducer with few action for dispatch */
function movies(state = initialMovies, action) {
  switch (action.type) {
    case 'RESET':                                         // first action
      return {
        ...state, movies: []                              // we keep old data in 'state'
      }
    case 'ADD':                                           // second action  
      return {
        ...state, movies: [...state.movies, action.movie] // we keep old data in 'state', movie will be provided as argument
      }
    default:
      return state
  }
}

const store = createStore(movies, composeWithDevTools())    // initiate Redux store
window.store = store


/* Main component to render - simpy react-app */
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
