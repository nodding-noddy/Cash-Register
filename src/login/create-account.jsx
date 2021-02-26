import React, { Component } from 'react';
import './css/main-content.css';
import NavBar from './navbar';
import SvgPattern from './svgPattern';
import { Link } from 'react-router-dom';
class CreateAccount extends Component {

    componentDidMount() {
        console.log('Create Account Mounted')
    }

    render() {
        
        return(

            <React.Fragment>
            <NavBar />
            <div className="create-account">
                <div className="form">
                    <form>
                        <label htmlFor="firstName" className="login-label">First Name</label>
                        <input className="login-input" placeholder="Enter your first name" type="text" name="firstName" id=""/>
                        <label htmlFor="lastName" className="login-label">Last Name</label>
                        <input className="login-input" placeholder="Enter your last name" type="text" name="lastName" id=""/>
                        <label htmlFor="email" className="login-label">Email</label>
                        <input className="login-input" placeholder="Enter your email" type="email" name="email" id=""/>
                        <label htmlFor="phoneNo" className="login-label">Phone Number</label>
                        <input className="login-input" type="tel" placeholder="Enter your phone number" name="phoneNo" id=""/>
                        <label htmlFor="gender" className="login-label">Gender</label>
                        <select className="login-input" name="gender">
                            <option value="male">Male</option>
                            <option value="male">Female</option>
                        </select>
                        <label htmlFor="dateOfBirth" className="login-label">Date of birth</label>
                        <input className="login-input" type="date" name="phoneNo" id=""/>
                        <input className="login-submit" type="submit"/>
                        <Link to="/login">Already have an account? login</Link>
                    </form>
                </div>
            </div>
            <SvgPattern />
            </React.Fragment>
        )
    }
}

export default CreateAccount;