import React, {Component} from 'react';
import './css/dashboard.css';
import HomeNavBar from './home-navbar';
import AllOrders from './all-orders';
import OrderSummary from './order-summary';
import OrderContents from './order-contents';

class DashBoard extends Component {

    componentDidMount() {
        // let loginHeader = document.querySelector('.login-page');
        // loginHeader.style.display = 'none';
    }

    render() {

        return (
            <React.Fragment>
                {/* <HomeNavBar /> */}
                <div className="dashboard m-t-50">
                    <OrderSummary />
                    <AllOrders />
                    <OrderContents />
                </div>
            </React.Fragment>
        )
    }
}

export default DashBoard;