import React, {Component} from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import {Header} from "../components/header/MainHeader";
import './App.scss'
import {MovieInfo} from "../components/movie-info/MovieInfo";
import {MoviesListPage} from "../components/movies-list/MoviesLists";
import {moviesList} from "../constants";
import {MoviesListCard} from "../components/movies-list-card/MoviesListCard";
import '../components/movie-info/MovieInfo.scss'

class App extends Component {
    render() {
        const NotFound = () => <div>Not found</div>
        const NotFoundRedirect = () => <Redirect to='/page-not-found' />

        return (
            <Router>
                <Header/>
                <Switch>

                    <Route path='/movies' component={MoviesListPage} exact/>
                    <Route path='/movies/:movieTitle'
                           render={(routerProps) => {
                               return (<MoviePage {...routerProps}/>);
                           }}
                    />

                    <Redirect to='/movies'/>

                    <Route path='/page-not-found' component={NotFound} />
                    <Route component={NotFoundRedirect} />
                </Switch>
            </Router>
        )
    }
}

export default App;
const MoviePage = (props) => {
    const { match: { url, path, params: { movieTitle } }, history } = props;

    const movie = moviesList.find(item => item.title === movieTitle);

    return(
        <div>
            {
                !!movie && (
                    <MovieInfo movie={movie}/>
                )
            }
        </div>
    )

}