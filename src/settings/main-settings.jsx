import React, { Component } from 'react';
import ChangePassword from './change-password';
import ChangeUserName from './change-username';
import './css/main-settings.css';
import EditMenuSettings from './edit-menu-settings';
import {
    Link,
    withRouter
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


class Settings extends Component {

    constructor() {
        super();
        this.state = {
            changeUserName:false,
            changePassword:false,
            editMenu:false
        }
    }

    componentDidMount() {
        document.title="Settings";
        let sideBar = document.querySelector('.settings-side-bar');
        setTimeout( () => sideBar.style.transform = 'translateX(0%)',100);
        if(!this.props.globalUserLoginStatus) {
            this.props.history.push('/login');
        }
    }

    componentWillUnmount() {
        let sideBar = document.querySelector('.settings-side-bar');
        sideBar.style.transform = 'translateX(-100%)';
    }

    toggleChangeUsername = () => {
        this.setState({
            changeUserName:true,
            changePassword:false,
            editMenu:false
        })
    }


    toggleChangePassword = () => {
        this.setState({
            changeUserName:false,
            changePassword:true,
            editMenu:false
        })
    }

    toggleEditMenu= () => {
        this.setState({
            changeUserName:false,
            changePassword:false,
            editMenu:true
        })
    }

    render() {
        let changeUserName;
        let changePassword;
        let editMenu; 

        if(this.state.changeUserName) 
            changeUserName = <ChangeUserName userId={this.props.userId} />

        if(this.state.changePassword)
            changePassword = <ChangePassword userId={this.props.userId}  />

        if(this.state.editMenu)
            editMenu = <EditMenuSettings userId={this.props.userId} />

        return (
                <div className="settings-container">
                    <div className="settings-side-bar">
                        <div className="back-button"> <span><Link to="/">To dashboard</Link> <FontAwesomeIcon icon={faArrowLeft} /> </span> </div>
                        <div className="all-settings">
                            <div className="all-settings-holder">
                                <div className="settings-heading"><span className="main-settings-heading">Settings</span></div>
                                <div className="setting-categories">
                                    <div className="account-settings setting-category">
                                        <span className="settings-heading">Account</span>
                                        <span className="sub-settings" onClick={this.toggleChangeUsername}>Change Username</span>
                                        <span className="sub-settings" onClick={this.toggleChangePassword}>Change Password</span>
                                    </div>
                                    <div className="menu-settings setting-category">
                                        <span className="settings-heading">Menu</span>
                                        <span className="sub-settings" onClick={this.toggleEditMenu}>Edit Menu Items</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    { changeUserName }

                    { changePassword }

                    { editMenu }
                </div>
        )
    }
}

export default withRouter(Settings);