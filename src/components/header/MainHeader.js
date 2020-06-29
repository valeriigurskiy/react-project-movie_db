import React from 'react';
import {Badge} from 'reactstrap'
import './MainHeader.scss'
import {links, user} from "../../constants";
import Logo from '../../assets/logo192.png';
import {UserInfo} from "../user-info/UserInfo";
import {NavLink} from "react-router-dom";
import {Button} from 'reactstrap'

export const Header = () => {
    return (
        <div className="main-header navbar">
            <a href="/movies"><img
                src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
                className="main-header-logo"/></a>
            <div className="main-header-links-wrapper">
            </div>
            <UserInfo user={user}></UserInfo>
        </div>
    )
}