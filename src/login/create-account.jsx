import React, { Component } from 'react';
import './css/main-content.css';
import SvgPattern from './svgPattern';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class CreateAccount extends Component {

    constructor() {

        super();
        this.state = {
            passwordWarning: false,
            accountCreationSuccess:false,
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmedPassword:'',
            gender:'m',
            dateOfBirth:'',
        }
    }

    componentDidMount() {
        console.log('Create Account Mounted')
    }

    createAccount = async (event) => {
        event.preventDefault();

        if(this.state.password === this.state.confirmedPassword) {
            const userData = {
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                password:this.state.password,
                gender:this.state.gender,
                dateOfBirth:this.state.dateOfBirth,
            }

            const result = await fetch('/create-account',{
                method:'POST',
                body: JSON.stringify(userData),
                headers:{
                    'Content-Type':'application/json'
                }
            }) 
            .then(
                response => response.json()
            ).then(response => response);

            if(result.success) {
                this.setState({
                    accountCreationSuccess:true
                })
            }
        }
        else {
            this.setState({
                passwordWarning:true
            })
        }

    }

    setInputState = (event) => {

        if(event.target.name !== 'gender') {
            this.setState({
                [event.target.name]:event.target.value
            })
        }
        else {
            this.setState({
                gender:event.target.value,
            })
        }

    } 

    render() {

        let accountCreationSuccess;
        let passwordsDontMatch;

        if(this.state.accountCreationSuccess) {
            accountCreationSuccess =  <div className="de-focus">
                                            <div className="create-account-success">
                                                <span><FontAwesomeIcon icon={faCheck} size="5x" /></span>
                                                <strong>Account created successfully! Click the button below to login now!</strong>
                                                <Link to="/login"><button type="button" className="login-submit">Login</button></Link>  
                                            </div>
                                        </div>
        }

        if(this.state.passwordWarning) {
            passwordsDontMatch = <div className="wrong-pass-warning">
                                    <strong style={{color:'red',marginTop:'-20px'}}>Your passwords don't match please try again!</strong>
                                </div>
        }
        
        return(

            <React.Fragment> 
                <div className="create-account">
                    {passwordsDontMatch}
                    <div className="form">
                        <form onSubmit={(e) => this.createAccount(e)}>
                            <label htmlFor="firstName" className="login-label">First Name</label>
                            <input onChange={(e) => this.setInputState(e)} required className="login-input" id="first-name" placeholder="Enter your first name" type="text" name="firstName" />
                            <label htmlFor="lastName" className="login-label">Last Name</label>
                            <input onChange={(e) => this.setInputState(e)} required className="login-input" id={"last-name"} placeholder="Enter your last name" type="text" name="lastName" />
                            <label htmlFor="email" className="login-label">Email</label>
                            <input onChange={(e) => this.setInputState(e)} required className="login-input" id="email-addr" placeholder="Enter your email" type="email" name="email" />
                            <label htmlFor="pwd" className="login-label">Password</label>
                            <input onChange={(e) => this.setInputState(e)} required className="login-input" id="password-1" type="password" placeholder="Create a password" name="password" />
                            <label htmlFor="pwd" className="login-label">Confirm Password</label>
                            <input onChange={(e) => this.setInputState(e)} required className="login-input" id="password-2" type="password" placeholder="Create a password" name="confirmedPassword" />
                            <label htmlFor="gender" className="login-label">Gender</label>
                            <select onChange={(e) => this.setInputState(e)} value={this.state.gender} id="select-gender" required className="login-input" name="gender">
                                <option value="m" selected>Male</option>
                                <option value="f">Female</option>
                                <option value="o">Other</option>
                            </select>
                            <label htmlFor="dateOfBirth" className="login-label">Date of birth</label>
                            <input  onChange={(e) => this.setInputState(e)} required className="login-input" id="date-of-birth" type="date" name="dateOfBirth" />
                            <input className="login-submit" type="submit"/>
                            <Link to="/login">Already have an account? login</Link>
                        </form>
                    </div>
                    {accountCreationSuccess}
                </div>
                <SvgPattern />
            </React.Fragment>
        )
    }
}

export default CreateAccount;