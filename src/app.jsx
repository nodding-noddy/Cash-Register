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
import { UserProvider } from './context/userContext';

let socket;
let appConfiguration;

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
            menu:[],
            allNotif: [],
            newNotification:false,
            userIsLoggedIn:false,
            userId:'',
            selectedOrder: [],
            token:'',
            orderContents:false,
            orderAccepted:false,
            orderDeclined:false,
            suggestions:[],
            sideBar:false
        }

        // socket = io('http://localhost:8000/');
    }


    componentDidMount() {
        let recoveredState = localStorage.getItem('reactState');
        if(recoveredState) {
            recoveredState = JSON.parse(recoveredState);
            this.setState({...recoveredState});
            if(recoveredState.userIsLoggedIn) {
                const token = recoveredState.token;
                socket = io('http://localhost:8080', {
                    query:{token} 
                });
                socket.emit('restro connection');
                this.props.history.push('/');
            }
        }
    }

    setGlobalUserLogin = (globalUserData) => {

        if(globalUserData.reqAccepted) {
            this.setState({
                userIsLoggedIn:globalUserData.reqAccepted
            });
            this.setState({
                userId:globalUserData.userId
            })

            this.setState({
                menu:[...globalUserData.menu]
            })
            this.setState({
                token:globalUserData.token
            }, () => {
                localStorage.setItem('reactState',JSON.stringify(this.state));
            })
            
            const token = globalUserData.token;

            socket = io('http://localhost:8080', {
                query:{token} 
            });

            
            socket.emit('restro connection');

            this.props.history.push('/');
        }
        else { 
            this.setState({
                userIsLoggedIn:false
            }, () => {
                localStorage.setItem('reactState',JSON.stringify(this.state));
            });
            this.props.history.push('/login');
        }

    }

    addOrder = (newOrder) => {
        this.setState(prevState => ({
            allOrders:[newOrder,...prevState.allOrders]
        }))

        this.updateTotalOrderCount();
        this.updateTotalOrderAmount(newOrder.totalAmount);
    }

    updateAllOrdersList = (newOrderData) => {
        this.setState(prevState => ({
            allOrders:[newOrderData,...prevState.allOrders]
        }))
    }

    setCurrentlySelectedOrder = (order) => {
        this.setState({
            orderAccepted:false
        })
        this.setState({
            orderDeclined:false
        })

        this.setState({
            selectedOrder:order
        })
        if(!this.state.orderContents) {
            this.setState({
                orderContents:true
            })
        }

    }

    showOrderContents = (event) => {
        const tableNumber = event.target.name;
        const order = this.state.allOrders.find(element => element.tableNumber === tableNumber) ;
        let OrderContents = document.querySelector('.order-contents-details');
        let orderDetails = document.createElement('div');
        orderDetails.className = 'order-details';
        orderDetails.innerHTML = `
                        <div className="customer-details customer-name"><strong>Name: </strong>${order.customerName}</div>
                        <div className="customer-details customer-mobile-no"><strong>Mobile: </strong>${order.phoneNumber}</div>
                        <div className="customer-details order-table-no"><strong>Table Number: </strong>${tableNumber}</div>`;

        let orderList = document.createElement('div');
        orderList.className = 'order-list';
        order.items.forEach(item => {
            let orderImageHolder = document.createElement('div');
            orderImageHolder.innerHTML = `
                                <div className="order-img-and-title">
                                <div className="order-image m-t-20">
                                    <img src="http://localhost:8000/images?itemName=${item.title}" alt="item image"/> 
                                    </div>
                                    <span className="order-img-description"> <strong>${item.title}</strong> </span>
                                </div>
                                <div className="quantity">
                                    <strong>Qty.</strong> ${item.quantity}
                                </div>`
        })
    }

    updateTotalOrderCount = (updatedCount) => {
        this.setState( prevState => ({
            orderSummary: {
                ...prevState.orderSummary,totalOrderCount:prevState.orderSummary.totalOrderCount + 1
            }
        }))

    }

    updateTotalOrderAmount= (updatedAmount) => {
        this.setState(prevState => ({
            orderSummary: {
                ...prevState.orderSummary, totalOrderAmount:prevState.orderSummary.totalOrderAmount + updatedAmount
            }
        }),() => {
            localStorage.setItem('reactState',JSON.stringify(this.state));
        });
    }

    updateTotalOrderServed = (orderNumber) => {
        this.setState( prevState => ({
            orderSummary: {
                ...prevState.orderSummary, totalOrderServed:prevState.orderSummary.totalOrderServed + 1
            }
        }), () => {
            localStorage.setItem('reactState', JSON.stringify(this.state));
        });

        let newAllOrdersArray = [...this.state.allOrders];

        let indexOfOrder;

        for(let i = 0; i < newAllOrdersArray.length; i++) {
            if(newAllOrdersArray[i].orderNumber === orderNumber) {
                indexOfOrder = i;
            }
        }

        let order = {...newAllOrdersArray[indexOfOrder]};

        order.orderStatus = 'served';

        newAllOrdersArray[indexOfOrder] = order;

        this.setState({
            allOrders:newAllOrdersArray
        })

    }

    showNewNotification = (orderNumber) => {
        this.setState(prevState => ({
            allNotif:[orderNumber, ...prevState.allNotif]
        }));

        this.setState({
            newNotification:true
        })

    }

    turnOffNewNotif = () => {
        this.setState({
            newNotification:false
        })
    }

    setLocalStorage = () => {
        localStorage.setItem('reactState',JSON.stringify(this.state));
    }

    reloadPrevState = () => {
        let recoveredState = localStorage.getItem('reactState');
        recoveredState = JSON.parse(recoveredState);
        if(!this.state.userIsLoggedIn) {
            if(recoveredState) {
                if(recoveredState.userIsLoggedIn === false) {
                    recoveredState.userIsLoggedIn = true;
                    localStorage.setItem('reactState',JSON.stringify(recoveredState));
                }
                this.setState({...recoveredState});
            }
            else {
            }
    }
    }

    updateOrderStatus = (totalAmount, orderNumber, isConfirmed) => {
        const orderArray = [...this.state.allOrders];
        if(isConfirmed) {
            this.setState({
                orderAccepted:true
            });
            this.setState({
                orderDeclined:false
            })
            let selectedRow;
            for(let i = 0; i < orderArray.length; i++) {
                if (orderArray[i].orderNumber=== orderNumber) {
                    selectedRow = i;
                    break;
                }
            }
            let newRow = {...orderArray[selectedRow]};
            newRow.orderStatus = 'accepted';
            orderArray[selectedRow] = newRow;
            this.setState({
                allOrders:orderArray
            }, () => {
                localStorage.setItem('reactState', JSON.stringify(this.state));
            })
        }
        else {
            this.setState({
                orderContents:false
            })
            this.setState({
                selectedOrder:[]
            })
            this.setState(prevState => ({
                orderSummary:{
                    ...prevState.orderSummary, totalOrderAmount:prevState.orderSummary.totalOrderAmount - totalAmount
                }
            }));

            if(this.state.orderSummary.totalOrderCount > 0) {
                this.setState(prevState=> ({
                    orderSummary:{
                        ...prevState.orderSummary, totalOrderCount:prevState.orderSummary.totalOrderCount - 1
                    }
                }));
            }

            this.setState({
                orderAccepted:false
            });
            this.setState({
                orderDeclined:true
            })
            const modifiedArray = orderArray.filter(order => order.orderNumber !== orderNumber);
            this.setState({
                allOrders:modifiedArray
            }, () => {
                localStorage.setItem('reactState',JSON.stringify(this.state));
            })
        }
    }

    activateAutoComplete = (value) => {
        let autoComplete = document.querySelector('.autocomplete-ul');
            let newArray = this.state.allOrders.filter(order => {
                let num = order.orderNumber + '';
                return num.startsWith(value);
            })

        if(newArray.length === 0 || value === '' || value === ' ') {
            autoComplete.style.display = 'none';
        }
        else {
            this.setState({
                suggestions:newArray
            })
            autoComplete.style.display='block';
        }
    }

    sideBarIsVisible = (visibility) => {
        this.setState({
            sideBar:visibility
        })
    }

    render() {

        return (

                <HomeNavBar orderSummary={this.state.orderSummary} globalUserLoginStatus={this.state.userIsLoggedIn}
                        allOrders={this.state.allOrders} 
                        allNotif={this.state.allNotif}
                        setGlobalUserLogin={this.setGlobalUserLogin}
                        menuItems={this.state.menu}
                        userId={this.state.userId}
                        addOrder={this.addOrder}
                        setCurrentlySelectedOrder={this.setCurrentlySelectedOrder}
                        selectedOrder={this.state.selectedOrder}
                        orderContents={this.state.orderContents}
                        newNotification={this.state.newNotification}
                        allNotif={this.state.allNotif}
                        showNewNotification={this.showNewNotification}
                        turnOffNewNotif={this.turnOffNewNotif}
                        reloadPrevState={this.reloadPrevState}
                        updateOrderStatus={this.updateOrderStatus}
                        orderAccepted = {this.state.orderAccepted}
                        orderDeclined = {this.state.orderDeclined}
                        activateAutoComplete={this.activateAutoComplete}
                        suggestions={this.state.suggestions}
                        updateTotalOrderServed={this.updateTotalOrderServed}
                        sideBar={this.state.sideBar}
                        sideBarIsVisible={this.sideBarIsVisible}
                        /> 
        )
    }
}

export default withRouter(App);
export { socket };