import React, {Component} from 'react';
import './css/dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle,faRupeeSign,faUtensils } from '@fortawesome/free-solid-svg-icons'

class DashBoard extends Component {

    render() {

        return (
            <div className="dashboard m-t-50">
                <div className="order-summary">
                    <div className="recent-orders heading"><h1>Recent Orders</h1></div>
                    <div className="order-summary-icons">
                        <div className="total-orders o-ico">
                            <span className="order-icons"><FontAwesomeIcon icon={faUtensils} size="3x"/><strong>200</strong></span>
                            <div className="order-icon-description"> <strong>Total Orders</strong> </div>
                        </div>
                        <div className="total-amount o-ico">
                            <span className="order-icons"><FontAwesomeIcon icon={faRupeeSign} size="3x"/><strong id="rs-strong">2000</strong></span>
                            <div className="order-icon-description"> <strong>Total Amount</strong></div>
                        </div>
                        <div className="orders-served o-ico">
                            <span className="order-icons"><FontAwesomeIcon icon={faCheckCircle} size="3x"/><strong id="check-circle-strong">200</strong></span>
                            <div className="order-icon-description"> <strong>Orders Served</strong></div>
                        </div>
                    </div>
                </div>
                <div className="all-orders m-t-20">
                    <div className="all-orders-heading"><h1>All Orders</h1></div>
                    <div className="all-order-data">
                        <table>
                            <thead>
                                <tr>
                                    <th>items</th>
                                    <th>Time</th>
                                    <th>Customer Name</th>
                                    <th>Order Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td>19:27</td>
                                    <td>Shubh</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>19:27</td>
                                    <td>Shubh</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>19:27</td>
                                    <td>Shubh</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>19:27</td>
                                    <td>Shubh</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>19:27</td>
                                    <td>Shubh</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>19:27</td>
                                    <td>Shubh</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>19:27</td>
                                    <td>Shubh</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>19:27</td>
                                    <td>Shubh</td>
                                    <td>Pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="checkout"></div>
            </div>
        )
    }
}

export default DashBoard;