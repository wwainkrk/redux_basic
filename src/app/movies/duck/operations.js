import actions from './actions'

const fetchMovies = async () => {
    const response = await fetch('http://localhost:3000/movies', {method: 'GET'})
    //console.log(response)
    const json = await response.json()

    return json
}

export const getAllMovies = () =>
    async (dispatch) => {
        const movies = await fetchMovies()
        console.log(movies)
        movies.map(movie => dispatch(actions.add(movie.title)))
    }