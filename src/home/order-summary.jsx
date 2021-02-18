import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle,faRupeeSign,faUtensils } from '@fortawesome/free-solid-svg-icons'

class OrderSummary extends Component {

    constructor() {
        super();
        this.state = {
            totalOrderCount:0,
            totalOrderAmount:0,
            totalOrderServed:0,
        }
    }
    componentDidMount() {
        let totalOrderCount = document.querySelector('.total-orders-count');
        let totalOrderAmount = document.querySelector('.total-orders-amount');
        let totalOrderServed = document.querySelector('.total-orders-served');

        totalOrderCount.innerText = this.state.totalOrderCount;
        totalOrderAmount.innerText = this.state.totalOrderAmount;
        totalOrderServed.innerText = this.state.totalOrderServed;
    }

    render() {

        return (
                <div className="order-summary">
                    <div className="recent-orders heading m-b-20"><h1>Orders Summary</h1></div>
                    <div className="order-summary-icons">
                        <div className="total-orders o-ico">
                            <span className="order-icons"><FontAwesomeIcon icon={faUtensils} size="4x"/><strong className="total-orders-count">200</strong></span>
                            <div className="order-icon-description"> <strong>Total Orders</strong> </div>
                        </div>
                        <div className="total-amount o-ico">
                            <span className="order-icons"><FontAwesomeIcon icon={faRupeeSign} size="4x"/><strong className="total-orders-amount">2000</strong></span>
                            <div className="order-icon-description"> <strong>Total Amount</strong></div>
                        </div>
                        <div className="orders-served o-ico">
                            <span className="order-icons"><FontAwesomeIcon icon={faCheckCircle} size="4x"/><strong className="total-orders-served">200</strong></span>
                            <div className="order-icon-description"> <strong>Orders Served</strong></div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default OrderSummary;