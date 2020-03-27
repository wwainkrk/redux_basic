import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllMovies } from '../duck/operations'


{/* Simply list with movies from Initial State from Redux */}
const MovieContainer = ({movies, getAllMovies}) => {

    useEffect(() => {getAllMovies()}, [])

    return <ul>
        {movies.list.map(movie => <li>{movie}</li>)}
    </ul>
}

{/* Export state to the rest of the app */}
const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => ({
    getAllMovies: () => dispatch(getAllMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)