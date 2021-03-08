import React,{Component} from 'react';
import './css/home-nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faSearch,faSlidersH, faUser } from '@fortawesome/free-solid-svg-icons'
import DashBoard from './dashboard';
import AllNotifications from './all-notifications';
import Settings from '../settings/main-settings';
import MainContent from '../login/mainContent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
    Link,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import CreateAccount from '../login/create-account';
import ProfileOptions from './profile-options';

class HomeNavBar extends Component {

    defaultStyle = {
        transition: 'opacity 1000ms ease-in-out',
        opacity:0
    }

    transitionStyles = {
        entering: {opacity: 1},
        entered: {opacity: 1},
        exiting: {opacity: 0},
        exited: {opacity: 0}
    }

    constructor() {
        super();
        this.state = {
            // clicked:false,
            userIsLoggedIn:true
        }
    }


    // afterTransition = () => {
    //     let allNotif = document.querySelector('.all-notifications');
                    
    //             if(allNotif.style.display === 'block' && this.state.clicked ) {
    //                 allNotif.style.display = 'none';
    //     }
    // }

    handleLogout = () => {
        this.props.setGlobalUserLogin(false);
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

    activateAutoComplete = () => {
        let autoComplete = document.querySelector('.autocomplete-ul');
        autoComplete.style.display = 'block';
    }

    showProfileOptions = () => {

        let profileOptionsContainer = document.querySelector('.profile-options-container');
        let profileOptions = document.querySelector('.profile-options');
        console.log("PRofile",profileOptionsContainer.style.transform);
        
        if(profileOptionsContainer.style.transform === 'translate(20%, 95%)') {
            console.log("inside if");
            profileOptions.style.display = 'block';
            profileOptionsContainer.style.opacity = '1';


            profileOptionsContainer.style.transform = 'translate(20%, 82%)';

            }
        else {
            profileOptionsContainer.style.transform = 'translate(20%, 95%)';
            profileOptionsContainer.style.opacity = '0';
            }
    }

    handleBurgerNotifications = () => {
        // let burgerNotificationHolder = document.querySelector('.burger-notification-holder');
        let burgerNotifications = document.querySelector('.burger-notifications');

        if(burgerNotifications.style.height === '400px') 
            burgerNotifications.style.height = '0';
        else 
            burgerNotifications.style.height = '400px';
    }

    handleBurgerUserOptions = () => {
        let userOptions = document.querySelector('.burger-user-options');

        if(userOptions.style.height ==='200px') {
            userOptions.style.height = '0';
        }
        else 
            userOptions.style.height = '200px';
    }

    showBurgerMenu = () => {
        let burgerHolder = document.querySelector('.expanded-burger-holder');
        let burgerMenuFirstBar = document.querySelector('.home-bar-1');
        let burgerMenuSecondBar= document.querySelector('.home-bar-2');
        let burgerMenuThirdBar = document.querySelector('.home-bar-3');
        if(burgerHolder.style.transform === 'translateX(100%)') {
            burgerMenuSecondBar.style.opacity = 0;
            burgerMenuThirdBar.style.transform = 'rotate(45deg) translate(-10px, -10px)';
            burgerMenuFirstBar.style.transform = 'rotate(-45deg) translate(-10px, 10px)';
            burgerHolder.style.transform = 'translateX(0%)';
        }
        else {
            burgerHolder.style.transform = 'translateX(100%)';
            burgerMenuThirdBar.style.transform = '';
            burgerMenuFirstBar.style.transform = '';
            burgerMenuSecondBar.style.opacity = 1;
        }
    }

    render() {
        let searchBar;
        let rightNav;

            if(this.props.globalUserLoginStatus) {
            searchBar =  
                            <div className="search-wrapper">
                                <div className="search-bar" >
                                    <span id="search-icon"><FontAwesomeIcon icon={faSearch} /></span>
                                    <input type="text" name="search-bar" placeholder="Search about orders here..." id="search"/>
                                        <ul className="autocomplete-ul">
                                            <li> <div className="suggestion">Suggestion<div className="order-status"><strong>Done</strong></div></div> </li>
                                            <li> <div className="suggestion">Suggestion<div className="order-status"><strong>Done</strong></div></div> </li>
                                            <li> <div className="suggestion">Suggestion<div className="order-status"><strong>Completed</strong></div></div> </li>
                                            <li> <div className="suggestion">Suggestion<div className="order-status"><strong>Done</strong></div></div> </li>
                                            <li> <div className="suggestion">Suggestion<div className="order-status"><strong>Pending</strong></div></div> </li>
                                        </ul>
                                </div>
                            </div>

            rightNav = 
                        <nav id="header-right-nav">
                            <div onClick={this.handleNotifClick} className="notifications notif-set pointer">
                                <div className="color-filler"></div>
                                <span><FontAwesomeIcon icon={faBell} /></span>
                            </div>
                            <div className="settings notif-set pointer">
                                <div className="color-filler opposite-color-filler"></div>
                               <span><Link to="/settings">Settings</Link> <FontAwesomeIcon icon={faSlidersH} /></span>
                            </div>
                            <div onClick={this.showProfileOptions} className="profile-icon pointer">
                                <div className="color-filler"></div>
                                <span><FontAwesomeIcon icon={faUser} /></span>
                            </div>
                            <AllNotifications allNotif={this.props.allNotif}/>
                            <ProfileOptions handleLogout={this.handleLogout} />
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
                            <div onClick={this.showBurgerMenu} className="burger-menu">
                                <div className="home-bar-1 burger-bars"></div>
                                <div className="home-bar-2 burger-bars"></div>
                                <div className="home-bar-3 burger-bars"></div>
                            </div>
                        </div>
                    </header>
                    <nav id="lower-nav">
                        <div className="lower-navigation">
                            <Link to="/">Home</Link>
                            <a href="https://www.google.com">About Us</a>
                            <a href="https://www.google.com">Contact Us</a>
                            <a href="https://www.google.com">Support</a>
                        </div>
                    </nav>
                    <div className="expanded-burger-holder">
                        <div className="expanded-burger">
                            <div className="burger-options">
                                <div className="burger-headings" onClick={this.handleBurgerNotifications}> <span><FontAwesomeIcon icon={faBell} /></span> View Notifications</div>
                                <div className="burger-option burger-notification-holder">
                                    <div className="burger-notifications">
                                        <ul>
                                            <li>A new notification</li>
                                            <li>A new notification</li>
                                            <li>A new notification</li>
                                            <li>A new notification</li>
                                            <li>A new notification</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="burger-options">
                                <div className="burger-headings"> <span className="settings-anchor"> <FontAwesomeIcon icon={faSlidersH} /></span><Link to="/settings">Go to settings</Link></div>
                            </div>
                            <div className="burger-options">
                                <div onClick={this.handleBurgerUserOptions} className="burger-headings"> <span><FontAwesomeIcon icon={faUser} /></span>User options</div>
                                <div className="burger-user-options">
                                    <ul>
                                        <li>Edit profile</li>
                                        <li onClick={this.handleLogout}>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TransitionGroup>
                        <CSSTransition 
                        key={this.props.history.location.key}
                        classNames="fade"
                        timeout={1000}
                        >
                        <Switch location={this.props.history.location}>
                            <Route path="/" exact>
                                <DashBoard orderSummary={this.props.orderSummary} globalUserLoginStatus={this.props.globalUserLoginStatus}
                                allOrder={this.props.allOrders} userId={this.props.userId} menuItems={this.props.menuItems} 
                                addOrder={this.props.addOrder}/>
                            </Route>
                            <Route path="/settings">
                                <Settings menuItems={this.props.menuItems}  globalUserLoginStatus={this.props.globalUserLoginStatus}
                                userId={this.props.userId}/>
                            </Route>
                            <Route path="/login">
                                <MainContent globalUserLoginStatus={this.props.globalUserLoginStatus}
                                setGlobalUserLogin={this.props.setGlobalUserLogin} />
                            </Route>
                            <Route path="/create-account">
                                <CreateAccount />
                            </Route>
                        </Switch>
                    </CSSTransition>
                    </TransitionGroup>
            </React.Fragment>
        )
    }
}

export default withRouter(HomeNavBar);