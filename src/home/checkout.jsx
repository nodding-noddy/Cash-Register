import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './css/checkout.css';
import  { socket } from '../app';

class CheckOut extends Component {

    constructor() {
        super();
        this.state = {
            notificationSent:false
        }
    }

    componentDidMount() {
        const {details} = this.props.location.state;
        console.log('Checkout',this.props.location.state.details.orderStatus);
    }

    sendNotification = (event) => {
        if(!this.state.notificationSent) {
            if(this.props.location.state.details.orderStatus !== 'served') {
                this.setState({
                    notificationSent:true
                });
                event.currentTarget.disabled = true;
                setTimeout(() => document.getElementById('notification-button').disabled = false, 4000);
                this.props.updateTotalOrderServed(this.props.location.state.details.orderNumber);
                socket.emit('collect order', this.props.location.state.details.orderNumber);
            }
            else {
                console.log('Notification has already been sent for this order');
            }
        }
        else {
            console.log('Already notified');
        }
    }

    pushBack = () => {
        this.props.history.push('/');
    }

    render() {

        const {details} = this.props.location.state;

        let buttonMessage = 'Send Notification';

        if(this.state.notificationSent) {
            buttonMessage = <FontAwesomeIcon icon={faCheck} />
        }

        return (
            <div className="checkout-holder">
                <div className="go-back">
                   <Link to="/"><span><FontAwesomeIcon icon={faArrowLeft} size="2x" /></span></Link>
                </div>
                <div className="checkout-wrapper">
                <div className="checkout">
                    <table className="checkout-table">
                        <thead>
                            <tr>
                                <th>Item name</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.items.map(item => (
                                    <tr key={item.itemId}>
                                        <td>{item.itemTitle}</td>
                                        <td>x{item.quantity}</td>
                                        <td>{item.totalAmount}</td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="total-amount-checkout"><div className="td"><strong>Total Amount: </strong>{details.totalAmount}</div></div>
                <div className="print-buttons">
                    <button className="checkout-button print-button" onClick={() => window.print()}>Print Receipt</button>
                    <button id="notification-button" className="checkout-button print-button" onClick={this.sendNotification}>{buttonMessage}</button>
                    <button onClick={this.pushBack} className="checkout-button cancel-button">Cancel</button>
                </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CheckOut);