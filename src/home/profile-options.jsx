import React, { Component } from 'react';
import './css/profile-options.css';

class ProfileOptions extends Component {

    render() {

        return (
            
            <div className="profile-options-container">
                <div className="profile-options">
                    <ul>
                        <li>Edit Profile</li>
                        <li onClick={this.props.handleLogout}>Logout</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProfileOptions;