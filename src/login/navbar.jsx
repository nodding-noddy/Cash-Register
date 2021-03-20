import React, {Component} from 'react';
import './css/navbar.css';
import Burger from './burgermenu';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

    componentDidMount() {
        let locationName = this.props.history.location.pathname;
        if(locationName === '/create-account') {

        }
    }

    render() {

        return (
            <header id="login-header-nav">
                <div className="nav-container">
                    <div className="logo">
                        <img src="/images/logo-white.png" alt="Cash Register Logo"></img>
                    </div>

                    <nav>
                        <ul className="main-nav-links">
                            <li><a href="https://www.google.com">HOME</a></li>
                            <li><a href="https://www.google.com">ABOUT US</a></li>
                            <li><a href="https://www.google.com">SUPPORT</a></li>
                            <li><a href="https://www.google.com">CONTACT US</a></li>
                        </ul>
                    </nav>
                    <Burger />
                </div>
            </header>
        )
    }
}

export default withRouter(NavBar);
