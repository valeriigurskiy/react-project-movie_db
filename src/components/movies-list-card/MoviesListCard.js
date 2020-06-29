import React, {useState} from 'react';
import './MoviesListCard.scss'
import {Badge, Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import {GenreBadge} from "../genre-badge/GenreBadge";
import StarRatings from 'react-star-ratings';
import Card from "reactstrap/es/Card";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

function MoviesListCardComponent(props) {

    const {movie, location: {pathname}} = props;

    const {title, id, overview, release_date, vote_average, genre_ids, poster_path, original_language} = movie;

    const movieLogo = `https://image.tmdb.org/t/p/w300/${poster_path}`;

    const fullDateToYear = new Date(release_date).getFullYear();

    console.log(pathname);

    return (
        <div className="may-movies-list-card">
            <div className="card-body">
                <div>
                    <Link to={`${pathname}/${movie.title}`}><img src={movieLogo}/></Link>
                </div>
                <br/>
            </div>
        </div>
    );
}

export const MoviesListCard = withRouter(MoviesListCardComponent);