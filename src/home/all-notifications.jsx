import React, {Component} from 'react';
import './css/home-nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSadCry} from '@fortawesome/free-solid-svg-icons'

class AllNotifications extends Component {

    constructor() {
        super();
        this.state = {
            notifications:false
        }
    }

    render() {

        let noNotificationIcon;
        if(!this.state.notifications) {
            noNotificationIcon = <div className="no-notifications">
                                    <FontAwesomeIcon icon={faSadCry} size="5x" />
                                    <br />
                                    <br />
                                    <h1>No new notifications</h1>
                                </div> 
        }

        return (
            <div className="notifications-container">
                <div className="all-notifications">
                        {noNotificationIcon}
                </div>
            </div>
        )
    }
}

export default AllNotifications;