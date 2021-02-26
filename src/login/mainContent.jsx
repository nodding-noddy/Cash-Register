import React,{Component} from 'react';
import { Switch, Route, Link, Router, withRouter } from 'react-router-dom';
import CreateAccount from './create-account';
import './css/main-content.css';
import SvgPattern from './svgPattern';

class MainContent extends Component {

    constructor() {
        super();
        this.state = {
            email:'',
            password:'',
            warning:false
        }
    }

    componentDidMount() {
        console.log('The location is',this.props.history.location.pathname);
        document.title = "Cash Register - Login";
    }

    handleLoginSubmit = async (event) => {
        event.preventDefault();

        const data = {
            email:this.state.email,
            password:this.state.password
        }

        const result = await fetch('http://localhost:8000/login', {
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json());

        console.log(this.props);

        if(result.reqAccepted) 
            this.props.setGlobalUserLogin();
        else {
            this.setState({
                warning:true
            })
        }
    }

    render() {

        let warning;

        if(this.state.warning) {
            warning = <div className="wrong-pass-warning">
                        <h3 style={{color:'red'}}>Incorrect Password or Username!</h3>
                      </div>
        }

        return (
            <React.Fragment>
                <div className="main-content">
                    { warning }
                    <div className="login-form">
                        <div className="form">
                            <strong>Login!</strong>
                            <form onSubmit={ (e) => this.handleLoginSubmit(e)}>
                                <label className="login-label" htmlFor="email">Email</label>
                                <input onChange={(event) => {this.setState({email:event.target.value})}}className="login-input" type="email" name="email" id="" placeholder="Enter your email address"/>
                                <label className="login-label" htmlFor="pwd">Password</label>
                                <input onChange={(event) => {this.setState({password:event.target.value})}} className="login-input" type="password" name="pwd" id="" placeholder="Enter your password"/>
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
