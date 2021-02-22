import React,{Component} from 'react';
import HomeNavBar from './home/home-navbar';
import MainContent from './login/mainContent';
import SvgPattern from './login/svgPattern';
import './main-css/main.css';
import {io} from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faSadCry} from '@fortawesome/free-solid-svg-icons'

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
            }
        }

        socket = io('http://localhost:8000/');
    }


    componentDidMount() {
        socket.emit('get-init-notif');
        socket.on('recieved-init-notif',(initNotif) => { this.showInitNotif(initNotif) });
        socket.on('order placed', (totalAmount, newOrder) => {
            this.updateTotalOrderCount();
            this.updateTotalOrderAmount(totalAmount);
            this.updateAllOrdersList(newOrder);
        });
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
        let allNotif = document.querySelector('.all-notifications');
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
        return (
            <div className="login-page">
                <HomeNavBar orderSummary={this.state.orderSummary} updateTotalOrderCount={this.updateTotalOrderCount}
                allOrders={this.state.allOrders} updateTotalOrderCount={this.updateTotalOrderCount}
                allNotif={this.state.allNotif}
                 />
            </div>
        )
    }
}

export default App;
export { socket };