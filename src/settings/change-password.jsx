import React, { Component } from 'react';

class ChangePassword extends Component {

    render() {

        return (
            <div className="change-user-password">
                <form action="">
                    <label htmlFor="username" className="settings-labels">Enter your old password</label>
                    <input className="pwd-field" placeholder="Enter your old password" type="password" name="user-pwd" id="old-pwd"/>
                    <label htmlFor="user-pwd" className="settings-labels">Enter new password</label>
                    <input className="pwd-field" placeholder="Enter new password" type="password" name="user-pwd" id="new-pwd-1"/>
                    <label htmlFor="user-pwd" className="settings-labels">Confirm Password</label>
                    <input className="pwd-field" placeholder="Confirm Password" type="password" name="user-pwd" id="new-pwd-2"/>
                    <input type="submit" value="Change password" className="submit"/>
                </form>
            </div>
        )
    }
}

export default ChangePassword;