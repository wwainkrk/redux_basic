import React from 'react'
import { connect } from 'react-redux'
import actions from '../duck/actions'

const MovieForm = (props) => {

    // Ref is something like a id
    const movieInput = React.createRef()

    const addMovie = (event) => {
        event.preventDefault()
        props.add(movieInput.current.value)                     // dispatch function with value from form

        movieInput.current.value = ''                           // after dispatch, form field with empty value
    }


    return <form onSubmit={addMovie}>
        <input ref={movieInput} />
        <button type='submit'>Add movie</button>
    </form>
}

const mapDispatchToProps = dispatch => ({
    add: movie => dispatch(actions.add(movie))
})

export default connect(null, mapDispatchToProps)(MovieForm)      // connect with dispatch function, how changes