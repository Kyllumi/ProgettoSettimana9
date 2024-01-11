import { Api, C } from '../data'
import { Component, React } from 'react'
import MyCard from './MyCard';
import { Spinner, Alert } from 'react-bootstrap'

export default class MyGalleryC extends Component {
    state = {
        movies: [],
        errMsg: false,
        isLoading: false
    }

    componentDidMount = async () => {
        try {
            this.setState({
                isLoading: true
            })

            const response = await fetch(Api + C)
            if (response.ok) {
                const data = await response.json()
                setTimeout(() => {
                    this.setState({
                        movies: data.Search.map((movie) => movie.Poster),
                        isLoading: false
                    })
                }, 500)

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
                <h4 className="ms-2 mt-3">Saga di Star Wars</h4>

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
