import React, {Component} from 'react';
import './css/dashboard.css';
import AllOrders from './all-orders';
import OrderSummary from './order-summary';
import OrderContents from './order-contents';

class DashBoard extends Component {

    render() {

        return (
            <div className="dashboard m-t-50">
                <OrderSummary />
                <AllOrders />
                <OrderContents />
            </div>
        )
    }
}

export default DashBoard;