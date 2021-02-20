import React,{Component} from 'react';
import './css/home-nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faSearch,faSlidersH, faUser } from '@fortawesome/free-solid-svg-icons'
import DashBoard from './dashboard';
import AllNotifications from './all-notifications';

class HomeNavBar extends Component {

    constructor() {
        super();
        this.state = {
            clicked:false,
            userIsLoggedIn:false
        }
    }

    componentDidMount() {

        // let notificationContainer = document.querySelector('.notifications-container');

        // notificationContainer.addEventListener('transitionend', this.afterTransition);
        
    }

    afterTransition = () => {
        let allNotif = document.querySelector('.all-notifications');
                    
                if(allNotif.style.display === 'block' && this.state.clicked ) {
                    allNotif.style.display = 'none';
        }
    }


    handleNotifClick = () =>  {

    let notificationContainer = document.querySelector('.notifications-container');
    let allNotifications = document.querySelector('.all-notifications');


    if(notificationContainer.style.transform === 'translate(-40%, 70%)') {
        allNotifications.style.display = 'block';
        notificationContainer.style.opacity = '1';

        this.setState({
            clicked:false
        });

        notificationContainer.style.transform = 'translate(-40%, 60%)';

        }
    else {
        this.setState({
            clicked:true
        })
        notificationContainer.style.transform = 'translate(-40%, 70%)';
        notificationContainer.style.opacity = '0';
        }
    }

    render() {
        let searchBar;
        let rightNav;

        if(this.state.userIsLoggedIn) {
            searchBar =  
                            <div className="search-bar">
                                <span id="search-icon"><FontAwesomeIcon icon={faSearch} /></span>
                                <input type="text" name="search-bar" placeholder="Search Something..." id="search"/>
                            </div>

            rightNav = 
                        <nav id="header-right-nav">
                            <div onClick={this.handleNotifClick} className="notifications notif-set pointer">
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
                            <AllNotifications />
                        </nav>
        }

        return (


            <React.Fragment>
                <header className="home-header"> 
                    <div className="home-nav-container">
                        <div id="header-left-nav">
                            <div className="home-logo">
                                <img src="/images/logo-white.png" alt="Cash Register Logo"></img>
                            </div>
                            {searchBar}
                        </div>
                        {rightNav}
                    </div>
                </header>
                <nav id="lower-nav">
                    <div className="lower-navigation">
                        <a href="https://www.google.com">Home</a>
                        <a href="https://www.google.com">About Us</a>
                        <a href="https://www.google.com">Contact Us</a>
                        <a href="https://www.google.com">Support</a>
                    </div>
                </nav>
                {/* <DashBoard /> */}
            </React.Fragment>
        )
    }
}

export default HomeNavBar;