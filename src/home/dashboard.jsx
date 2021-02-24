import React, {Component} from 'react';
import './css/dashboard.css';
import AllOrders from './all-orders';
import OrderSummary from './order-summary';
import OrderContents from './order-contents';

class DashBoard extends Component {

    componentDidMount() {
        document.title="Home";
    }

    render() {

        return (
            <React.Fragment>
                {/* <HomeNavBar /> */}
                <div className="dashboard m-t-50">
                    <OrderSummary orderSummary={this.props.orderSummary}
                    updateTotalOrderCount={this.props.updateTotalOrderCount} />
                    <AllOrders />
                    <OrderContents />
                </div>
            </React.Fragment>
        )
    }
}

export default DashBoard;