import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { moviesActions } from './app/movies/duck'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))    // initiate Redux store, for combined reducer, with detools in browser

export default store