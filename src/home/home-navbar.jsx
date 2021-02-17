import React,{Component} from 'react';
import './css/home-nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faSearch,faSlidersH, faUser } from '@fortawesome/free-solid-svg-icons'
import DashBoard from './dashboard';

class HomeNavBar extends Component {

    render() {

        return (

            <React.Fragment>
                <header className="home-header"> 
                    <div className="home-nav-container">
                        <div id="header-left-nav">
                            <div className="home-logo">
                                <img src="/images/logo-white.png" alt="Cash Register Logo"></img>
                            </div>
                            <div className="search-bar">
                                <span id="search-icon"><FontAwesomeIcon icon={faSearch} /></span>
                                <input type="text" name="search-bar" placeholder="Search Something..." id="search"/>
                            </div>
                        </div>
                        <nav id="header-right-nav">
                            <div className="notifications notif-set pointer">
                                <div className="color-filler"></div>
                                <span><FontAwesomeIcon icon={faBell} /></span>
                            </div>
                            <div className="settings notif-set pointer">
                                <div className="color-filler opposite-color-filler"></div>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </div>
                            <div className="profile-icon pointer">
                                <div className="color-filler"></div>
                                <span><FontAwesomeIcon icon={faUser} /></span>
                            </div>
                        </nav>
                    </div>
                </header>
                <nav id="lower-nav">
                    <div className="lower-navigation">
                        <a href="https://www.google.com">Home</a>
                    </div>
                </nav>
                <DashBoard />
            </React.Fragment>
        )
    }
}

export default HomeNavBar;