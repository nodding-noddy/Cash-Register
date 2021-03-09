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
        console.log('Local Dash', localStorage.getItem('reactState'));
        if(!this.props.globalUserLoginStatus) {
            this.props.history.push('/login');
        }
        else {
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
                    userId={this.props.userId}/>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(DashBoard);