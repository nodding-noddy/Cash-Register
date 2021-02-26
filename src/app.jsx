import React,{Component} from 'react';
import HomeNavBar from './home/home-navbar';
import './main-css/main.css';
import {io} from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
     withRouter,
     Switch,
     Route,
    } from 'react-router-dom';
import CreateAccount from './login/create-account'

let socket;

class App extends Component {


    constructor() {

        super();


        this.state = {
            orderSummary: {
                totalOrderCount:0,
                totalOrderAmount:0,
                totalOrderServed:0,
            },
            allOrders:[],
            allNotif: {
                notifications:true,
                recievedNotification:[]
            },
            userIsLoggedIn:false
        }

        // socket = io('http://localhost:8000/');
    }


    componentDidMount() {
        // socket.emit('get-init-notif');
        // socket.on('recieved-init-notif',(initNotif) => { this.showInitNotif(initNotif) });
        // socket.on('order placed', (totalAmount, newOrder) => {
        //     this.updateTotalOrderCount();
        //     this.updateTotalOrderAmount(totalAmount);
        //     this.updateAllOrdersList(newOrder);
        // });
    }

    setGlobalUserLogin = () => {
        this.setState({
            userIsLoggedIn:true
        })

        this.props.history.push('/');
    }

    updateAllOrdersList = (newOrderData) => {
        let tableBody = document.querySelector('tbody');
        let newOrder = document.createElement('tr');
        newOrder.innerHTML = `
            <td>${newOrderData.items}</td>
            <td>${newOrderData.time}</td>
            <td>${newOrderData.customerName}</td>
            <td><div className="pending order-status"><strong>${newOrderData.status}</strong></div>}</td>
        `
        tableBody.prepend(newOrder);
        
        this.setState(prevState => ({
            allOrders:[...prevState.allOrders, newOrder]
        }))
    }

    updateTotalOrderCount = (updatedCount) => {
        this.setState( prevState => ({
            orderSummary: {
                ...prevState.orderSummary,totalOrderCount:prevState.orderSummary.totalOrderCount + 1
            }
        }))

        console.log('State is ',this.state.orderSummary.totalOrderCount)
    }

    updateTotalOrderAmount= (updatedAmount) => {
        this.setState(prevState => ({
            orderSummary: {
                ...prevState.orderSummary, totalOrderAmount:prevState.orderSummary.totalOrderAmount + updatedAmount
            }
        }))
    }

    updateTotalOrderServed = (updatedCount) => {
        this.setState( prevState => ({
            orderSummary: {
                ...prevState.orderSummary, totalOrderServed:prevState.orderSummary.totalOrderServed + 1
            }
        }))
    }

    showInitNotif = (initNotif) => {
        initNotif.forEach(notif => {
            let newDiv;
            newDiv = <div className="notification">
                        <FontAwesomeIcon icon={faPlus} />
                       <strong>{notif}</strong> 
                    </div>
            this.setState(prevState => ({
                allNotif: {...prevState.allNotif,recievedNotification:[...prevState.allNotif.recievedNotification, newDiv]}
            }))
        })
    }

    render() {

        let homeNavBar;
        let locationName = this.props.history.location.pathname;

        if(locationName != '/create-account') {
            if(locationName === '/login' || locationName === '/create-account') {
                homeNavBar = <HomeNavBar orderSummary={this.state.orderSummary} globalUserLoginStatus={this.state.userIsLoggedIn}
                        allOrders={this.state.allOrders} 
                        allNotif={this.state.allNotif}
                        noSearchBar={true}
                        setGlobalUserLogin={this.setGlobalUserLogin}
                        /> 
            }
            else 
                homeNavBar = <HomeNavBar orderSummary={this.state.orderSummary} globalUserLoginStatus={this.state.userIsLoggedIn}
                        allOrders={this.state.allOrders} 
                        allNotif={this.state.allNotif}
                        noSearchBar={true}
                        setGlobalUserLogin={this.setGlobalUserLogin}
                        /> 
        }

        return (

            <Switch>
                {homeNavBar}
                <Route path="/create-account">
                    <CreateAccount />
                </Route>
            </Switch>
        )
    }
}

export default withRouter(App);
export { socket };