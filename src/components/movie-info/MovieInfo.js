import React, {useState} from 'react';
import './MovieInfo.scss'
import {Badge, Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import {GenreBadge} from "../genre-badge/GenreBadge";
import StarRatings from 'react-star-ratings';
import Card from "reactstrap/es/Card";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {genreList} from "../../constants";

function MovieInfoComponent(props) {

    const {movie, location: {pathname}, history} = props;
    const {title, id, overview, release_date, vote_average, genre_ids, poster_path, backdrop_path, original_language} = movie;

    const movieLogo = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const movieBackgroundLogo = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

    const fullDateToYear = new Date(release_date).getFullYear();

    const toMoviePage = () => {
        history.push('/movies');
    };

    const movieHeaderStyle = {
        color: "white",
        fontSize: "22px",
    }

    const movieOverviewStyle = {
        maxWidth: '400px',
        width: '400px',
        fontSize: "18px",
        color: "grey"
    }

    console.log(title);

    let addToWatchList = () =>{
        localStorage.setItem(`title${id}`, title)
        localStorage.setItem('movieLogo', movieLogo)
    }

    return (
        <div className="may-movie">
            <div style={{marginLeft: '384px'}}>
                <img src={movieLogo}/>
                <div style={{marginLeft: '30px', marginTop: '-50px'}}>
                    <a href={`https://filmix.co/search/${title} ${fullDateToYear}`} target='_blank'><Button color="warning" style={{width: '200px'}}>Watch Online</Button></a>
                    {genre_ids.map(mappedMovieGenres => (
                        <div
                            style={{marginTop: '5px'}}>{genreList.filter(genre => genre.id === mappedMovieGenres).map(filteredPerson => (
                            <Badge color="success" pill>{filteredPerson.name}</Badge>
                        ))}</div>
                    ))}
                    <br/>
                    <StarRatings
                        rating={vote_average/2}
                        numberOfStars={5}
                        starRatedColor='rgb(255,215,0)'
                        starDimension="30px"
                        starEmptyColor='rgb(128,128,128)'
                    />
                </div>
            </div>

            <div style={{marginLeft: '10px', marginTop: '60px', width: '300px'}}>

                <div style={movieHeaderStyle}>{`${title} (${fullDateToYear})`}</div>
                <div style={movieOverviewStyle}>{overview}</div>

            </div>


        </div>

    );
}

export const MovieInfo = withRouter(MovieInfoComponent);