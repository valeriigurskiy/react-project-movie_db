import React, {Component} from 'react';
import {moviesList} from "../../constants";
import {MoviesListCard} from "../movies-list-card/MoviesListCard";
import {withRouter} from "react-router";
import './MoviesLists.scss'

export class moviesListsPageComponent extends Component {

    constructor(props) {
        super(props);
        const { location: { search } } = props;
        debugger
        this.state = {
            movies: moviesList
        };
    }
    state = {

    };
    render() {
        const {movies} = this.state;

        console.log(movies);

        return (
            <div className='d-flex'>

            <div className="d-flex movie-container">

                {
                    movies.map((movie, index) => {
                        return <MoviesListCard movie={movie} key={movie.id}/>
                    })
                }
            </div>
            </div>
        );
    }
}

export const MoviesListPage = withRouter(moviesListsPageComponent)