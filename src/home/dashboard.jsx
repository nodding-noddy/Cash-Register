import React, {Component} from 'react';
import './css/dashboard.css';
import AllOrders from './all-orders';
import OrderSummary from './order-summary';
import OrderContents from './order-contents';
import { withRouter } from 'react-router-dom';

class DashBoard extends Component {

    componentDidMount() {
        document.title="Home";
        if(!this.props.globalUserLoginStatus) {
            this.props.history.push('/login');
        }
        else {
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
                    <AllOrders />
                    <OrderContents />
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(DashBoard);