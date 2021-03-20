import React, {Component} from 'react';
import './css/home-nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry, faPlus } from '@fortawesome/free-solid-svg-icons';


class AllNotifications extends Component {

    render() {

        let noNotificationIcon;
        if(this.props.allNotif.length === 0) {
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
                    {this.props.allNotif.map((notif, index) =>
                        <div key={index} className="notification">
                                <FontAwesomeIcon icon={faPlus} />
                                <strong>A new order has been placed with order number #{notif}</strong> 
                        </div>
                    )}
                        {/* {this.props.allNotif.recievedNotification} */}
                </div>
            </div>
        )
    }
}

export default AllNotifications;