import React,{Component} from 'react';
import { Switch, Route, Link, Router, withRouter } from 'react-router-dom';
import CreateAccount from './create-account';
import './css/main-content.css';
import SvgPattern from './svgPattern';

class MainContent extends Component {

    componentDidMount() {
        console.log('The location is',this.props.history.location.pathname);
        document.title = "Cash Register - Login";
    }

    render() {

        return (
            <React.Fragment>
                    <Route path="/create-account">
                        <CreateAccount />
                    </Route>
                <div className="main-content">
                    <div className="login-form">
                        <div className="form">
                            <strong>Login!</strong>
                            <form action="">
                                <label className="login-label" htmlFor="email">Email</label>
                                <input className="login-input" type="email" name="email" id="" placeholder="Enter your email address"/>
                                <label className="login-label" htmlFor="pwd">Password</label>
                                <input className="login-input" type="password" name="pwd" id="" placeholder="Enter your password"/>
                                <input className="login-submit" type="submit" value="Login"/>
                            </form>
                            <Link to="/create-account">Don't have an account? Sign Up!</Link> 
                        </div>
                    </div>
                </div>
                <SvgPattern />
            </React.Fragment>
        )
    }
}

export default withRouter(MainContent);
