import types from "./types"


/* Initial data for second reducer - feature */
const INITIAL_STATE = {
    listName: 'Best',
    list: [
      'Leonardo Di Caprio', 'Christian Bale', 'Scarlett Johansson'
    ]
  }

  /* Second reducer with unique actions for dispatch */
const actorsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.RESET_ACTORS:                                         // first action
        return {
          ...state, list: []                              // we keep old data in 'state'
        }
      case types.ADD_ACTOR:                                           // second action  
        return {
          ...state, list: [...state.list, action.actor] // we keep old data in 'state', actor will be provided as argument
        }
      default:
        return state
    }
  }

  export default actorsReducer

