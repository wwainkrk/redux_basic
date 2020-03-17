import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

/* Initial data for first reducer - feature */
const initialMovies = {
  listName: 'Favourite',
  list: [
    'Prestige', 'Wolf of Wall Street', '60 seconds'
  ]
}

/* Initial data for second reducer - feature */
const initialActors = {
  listName: 'Best',
  list: [
    'Leonardo Di Caprio', 'Christian Bale', 'Scarlett Johansson'
  ]
}


/* First reducer with unique actions for dispatch */
function movies(state = initialMovies, action) {
  switch (action.type) {
    case 'RESET_MOVIES':                                         // first action
      return {
        ...state, list: []                              // we keep old data in 'state'
      }
    case 'ADD_MOVIE':                                           // second action  
      return {
        ...state, list: [...state.list, action.movie] // we keep old data in 'state', movie will be provided as argument
      }
    default:
      return state
  }
}

/* Second reducer with unique actions for dispatch */
function actors(state = initialActors, action) {
  switch (action.type) {
    case 'RESET_ACTORS':                                         // first action
      return {
        ...state, list: []                              // we keep old data in 'state'
      }
    case 'ADD_ACTOR':                                           // second action  
      return {
        ...state, list: [...state.list, action.actor] // we keep old data in 'state', actor will be provided as argument
      }
    default:
      return state
  }
}

const allReducers = combineReducers({movies, actors})             // combine both reducers
const store = createStore(allReducers, composeWithDevTools())    // initiate Redux store, for combined reducer
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
