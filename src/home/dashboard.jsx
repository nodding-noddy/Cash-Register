import React, {Component} from 'react';
import './css/dashboard.css';
import AllOrders from './all-orders';
import OrderSummary from './order-summary';

class DashBoard extends Component {

    render() {

        return (
            <div className="dashboard m-t-50">
                <OrderSummary />
                <AllOrders />
                <div className="checkout m-t-40 m-l-120 ">
                    <h1 className="checkout-heading m-b-20">Order Contents</h1>
                   <div className="billing">
                    </div> 
                </div>
            </div>
        )
    }
}

export default DashBoard;