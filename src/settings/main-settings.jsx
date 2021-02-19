import React, { Component } from 'react';
import HomeNavBar from '../home/home-navbar';

class Settings extends Component {

    render () {

        return(
            <React.Fragment >
                <HomeNavBar />
                <div className="settings-container">
                    Settings Container
                </div>
            </React.Fragment>
        )
    }
}

export default Settings;