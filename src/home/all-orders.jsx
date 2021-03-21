import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';
import OrderRow from './order-row';

class AllOrders extends Component {

    render() {

        let allOrderData = [...this.props.allOrders];
        
        let noOrders;
        if(this.props.allOrders.length === 0) {
            noOrders = <div className="no-orders">
                            <FontAwesomeIcon icon={faCookieBite} size="5x" />
                            <br/>
                            <h1>No orders have been placed yet!</h1>
                        </div>
        }

        return (
                <div className="all-orders m-t-20">
                    <div className="all-orders-heading"><h1>All Orders</h1></div>
                    <div className="all-order-data">
                        <table>
                            <thead>
                                <tr>
                                    <th>Items</th>
                                    <th>Time</th>
                                    <th>Customer Name</th>
                                    <th>Order Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allOrderData.map((order,index) => {
                                    return <OrderRow setCurrentlySelectedOrder={this.props.setCurrentlySelectedOrder} key={order.orderNumber} orderData={order} />
                                })}
                            </tbody>
                        </table>
                        {noOrders}
                    </div>
                </div>
        )
    }
}

export default AllOrders;