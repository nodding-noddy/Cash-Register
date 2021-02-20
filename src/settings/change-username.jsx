import React, { Component } from 'react';

class ChangeUserName extends Component {

    render() {

        return(

            <div className="change-user-name">
                <form action="">
                    <label htmlFor="username" className="settings-labels">New username</label>
                    <input className="input-text" placeholder="Enter new username" type="text" name="username" id=""/>
                    <label htmlFor="user-pwd" className="settings-labels">Enter your password</label>
                    <input className="pwd-field" placeholder="Enter your password" type="password" name="user-pwd" id=""/>
                    <input type="submit" value="Change username" className="submit"/>
                </form>
            </div>
        )
    }
}

export default ChangeUserName;