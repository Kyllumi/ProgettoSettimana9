import { Api, HP } from '../data'
import { Component, React } from 'react'
import MyCard from './MyCard';

export default class MyGallery1 extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = () => {
        fetch(Api + HP)
            .then(response => response.json())
            .then(json => this.setState({ movies: json.Search.map((movie) => movie.Poster) }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <h4 className="ms-2 mt-3">Harry Potter</h4>
                <MyCard movies={this.state.movies} />
            </>
        )
    }
}
