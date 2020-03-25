import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { moviesActions } from './app/movies/duck'

const store = createStore(rootReducer, composeWithDevTools())    // initiate Redux store, for combined reducer, with detools in browser

export default store