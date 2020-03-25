import React from 'react'

const MovieForm = () => {

    // Ref is something like a id
    const movieInput = React.createRef()

    const addMovie = (event) => {
        event.preventDefault()
        console.log('form', movieInput.current.value)           // Display movie from form in console
    }


    return <form onSubmit={addMovie}>
        <input ref={movieInput} />
        <button type='submit'>Add movie</button>}
    </form>
}

export default MovieForm