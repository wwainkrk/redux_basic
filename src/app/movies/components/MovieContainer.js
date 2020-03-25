import React from 'react'
import { connect } from 'react-redux'


{/* Simply list with movies from Initial State from Redux */}
const MovieContainer = (props) =>
    <ul>
        {props.movies.list.map(movie => <li>{movie}</li>)}
    </ul>

{/* Export state to the rest of the app */}
const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, {})(MovieContainer)