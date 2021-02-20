import React, { Component } from 'react';
import DashBoard from '../home/dashboard';
import HomeNavBar from '../home/home-navbar';
import './css/main-settings.css';
import EditMenuSettings from './edit-menu-settings';

class Settings extends Component {

    render () {

        return(
            <React.Fragment >
                <HomeNavBar />
                <div className="settings-container">
                    <div className="settings-side-bar">
                        <div className="all-settings">
                            <div className="all-settings-holder m-t-20">
                                <div className="settings-heading"><span className="main-settings-heading">Settings</span></div>
                                    <div className="setting-categories">
                                        <div className="account-settings setting-category">
                                            <span className="settings-heading">Account</span>
                                            <span className="sub-settings">Change Username</span>
                                            <span className="sub-settings">Change Password</span>
                                        </div>
                                        <div className="menu-settings setting-category">
                                            <span className="settings-heading">Menu</span>
                                            <span className="sub-settings">Edit Menu Items</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <EditMenuSettings /> */}
                </div>
            </React.Fragment>
        )
    }
}

export default Settings;