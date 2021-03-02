import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle,faRupeeSign,faUtensils } from '@fortawesome/free-solid-svg-icons'

class OrderSummary extends Component {

    handleClick = () => {
        this.setState({
            totalOrderCount: this.state.totalOrderCount+1
        })
    }

    componentDidMount() {
    }

    render() {

        return (
                <div className="order-summary">
                    <div className="recent-orders heading m-b-20"><h1>Orders Summary</h1></div>
                    <div className="order-summary-icons">
                        <div className="total-orders o-ico">
                            <span className="order-icons"><FontAwesomeIcon icon={faUtensils} size="4x"/><strong className="total-orders-count">{this.props.orderSummary.totalOrderCount}</strong></span>
                            <div className="order-icon-description"> <strong>Total Orders</strong> </div>
                        </div>
                        <div className="total-amount o-ico">
                            <span className="order-icons"><FontAwesomeIcon icon={faRupeeSign} size="4x"/><strong className="total-orders-amount">{this.props.orderSummary.totalOrderAmount}</strong></span>
                            <div className="order-icon-description"> <strong>Total Amount</strong></div>
                        </div>
                        <div className="orders-served o-ico">
                            <span className="order-icons"><FontAwesomeIcon icon={faCheckCircle} size="4x"/><strong className="total-orders-served">{this.props.orderSummary.totalOrderServed}</strong></span>
                            <div className="order-icon-description"> <strong>Orders Served</strong></div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default OrderSummary;