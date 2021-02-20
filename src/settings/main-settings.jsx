import React, { Component } from 'react';
import ChangePassword from './change-password';
import ChangeUserName from './change-username';
import './css/main-settings.css';
import EditMenuSettings from './edit-menu-settings';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom';

class Settings extends Component {

    render () {

        return(
            <React.Fragment >
                <Router>
                <div className="settings-container">
                    <div className="settings-side-bar">
                        <div className="all-settings">
                            <div className="all-settings-holder m-t-20">
                                <div className="settings-heading"><span className="main-settings-heading">Settings</span></div>
                                    <div className="setting-categories">
                                        <div className="account-settings setting-category">
                                            <span className="settings-heading">Account</span>
                                            <span className="sub-settings"> <Link to="/change-username">Change Username</Link> </span>
                                            <span className="sub-settings"> <Link to="/change-password">Change Password</Link> </span>
                                        </div>
                                        <div className="menu-settings setting-category">
                                            <span className="settings-heading">Menu</span>
                                            <span className="sub-settings"> <Link to="/edit-menu-settings">Edit Menu Items</Link> </span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/change-username">
                            <ChangeUserName />
                        </Route>

                        <Route path="/change-password">
                            <ChangePassword />
                        </Route>

                        <Route path="/edit-menu-settings">
                            <EditMenuSettings />
                        </Route>
                    </Switch>
                </div>
                </Router>
            </React.Fragment>
        )
    }
}

export default Settings;