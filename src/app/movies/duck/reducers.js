import types from './types'

/* Initial data for first reducer - feature */
const INITIAL_STATE = {
    listName: 'Favourite',
    list: [
      'Prestige', 'Wolf of Wall Street', '60 seconds'
    ]
  }

  /* First reducer with unique actions for dispatch */
const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.RESET_MOVIES:                                         // first action
        return {
          ...state, list: []                              // we keep old data in 'state'
        }
      case types.ADD_MOVIE:                                           // second action  
        return {
          ...state, list: [...state.list, action.item] // we keep old data in 'state', movie will be provided as argument
        }
      default:
        return state
    }
  }

  export default moviesReducer