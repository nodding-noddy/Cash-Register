import React, {Component} from 'react';
import './css/dashboard.css';
import AllOrders from './all-orders';
import OrderSummary from './order-summary';
import OrderContents from './order-contents';
import { withRouter } from 'react-router-dom';
import { socket } from '../app';

class DashBoard extends Component {

    componentDidMount() {
        document.title="Home";
        if(!this.props.globalUserLoginStatus) {
            this.props.history.push('/login');
        }
        else {
            if(new Date().toLocaleDateString().slice(0,2) === localStorage.getItem('crDate')) { 
                this.props.reloadPrevState();
                socket.on('new order', (orderDetails) => {
                    this.props.addOrder(orderDetails);
                    this.props.showNewNotification(orderDetails.orderNumber);
                })
                let svgHolder = document.querySelector('.svg-holder');
                if(svgHolder) {
                    svgHolder.style.opacity = '0';
                }
            }
            else {
                localStorage.removeItem('reactState');
                localStorage.setItem('crDate',new Date().toLocaleDateString().slice(0,2));
            }
        }
    }

    render() {

        return (
            <React.Fragment>
                {/* <HomeNavBar /> */}
                <div className="dashboard m-t-50">
                    <OrderSummary orderSummary={this.props.orderSummary}
                    updateTotalOrderCount={this.props.updateTotalOrderCount} />
                    <AllOrders allOrders={this.props.allOrders}
                    setCurrentlySelectedOrder={this.props.setCurrentlySelectedOrder} />
                    <OrderContents selectedOrder={this.props.selectedOrder}
                    orderContents={this.props.orderContents} 
                    userId={this.props.userId} updateOrderStatus={this.props.updateOrderStatus}
                    orderAccepted={this.props.orderAccepted} orderDeclined={this.props.orderDeclined}/>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(DashBoard);