import { Api, A } from '../data'
import { Component, React } from 'react'
import MyCard from './MyCard';
import { Spinner, Alert } from 'react-bootstrap'

export default class MyGalleryA extends Component {
    state = {
        movies: [],
        errMsg: false,
        isLoading: false
    }

    componentDidMount = async () => {
        // fetch(Api + A)
        //     .then(response => response.json())
        //     .then(json => this.setState({ movies: json.Search.map((movie) => movie.Poster) }))
        //     .catch(err => console.log(err))

        try {
            this.setState({
                isLoading: true
            })

            const response = await fetch(Api + A)
            if (response.ok) {
                const data = await response.json()
                setTimeout(() => {
                    this.setState({
                        movies: data.Search.map((movie) => movie.Poster),
                        isLoading: false
                    })
                }, 300)

            } else {
                console.log('Errore nel caricamento dei dati')
                this.setState({
                    isLoading: false,
                    errMsg: true
                })
            }
        } catch (err) {
            console.log(err)
            this.setState({
                isLoading: false,
                errMsg: true
            })
        }
    }

    render() {
        return (
            <>
                <h4 className="ms-2 mt-3">Saga di Il Signore degli Anelli</h4>

                {this.state.isLoading && <Spinner animation="border" variant="secondary" />}

                {this.state.errMsg &&
                    <Alert variant="warning">
                        Errore nel caricamento dei dati
                    </Alert>
                }

                <MyCard movies={this.state.movies} />
            </>
        )
    }
}
