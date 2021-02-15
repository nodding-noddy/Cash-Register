import React,{Component} from 'react';
import './css/main-content.css';

class MainContent extends Component {

    render() {

        return (

            <div className="main-content">
                <div className="login-form">
                    <div className="form">
                        <strong>Login!</strong>
                        <form action="">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" placeholder="Enter your email address"/>
                            <label htmlFor="pwd">Password</label>
                            <input type="password" name="pwd" id="" placeholder="Enter your password"/>
                            <input type="submit" value="Login"/>
                        </form>
                        <p> <a href="https://www.google.com"> Don't have an account? Sign Up!</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContent;
