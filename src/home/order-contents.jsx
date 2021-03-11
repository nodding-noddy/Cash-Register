import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckDouble, faCross, faHandPointLeft, faMugHot, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { socket } from '../app';
import OrderContentsList from './order-contents-list';

class OrderContents extends Component {

    confirmOrder = (event) => {
        const name = event.currentTarget.name;
        const orderNumber = this.props.selectedOrder.orderNumber;
        const totalAmount = this.props.selectedOrder.totalAmount;

        if(name === 'order-accepted') {
            this.props.updateOrderStatus(totalAmount, orderNumber, true);
            socket.emit('order confirmation',orderNumber , true);
        }
        else {
            this.props.updateOrderStatus(totalAmount, orderNumber, false);
            socket.emit('order confirmation', orderNumber, false);
        }
    }

    
    render() {

        let contentsHint;

        let orderDetails = this.props.selectedOrder;
        let orderList; 
        let orderAcceptDeclineMessage;

        if(this.props.orderAccepted) {
            orderAcceptDeclineMessage =  
                        <div className="order-dec">
                            <span style={{color:'green'}}><FontAwesomeIcon icon={faCheck} size="5x"/> </span>
                            <h3 style={{marginTop:'10px',color:'green'}}>Successfully accepted the order!</h3>
                        </div>
        }

        if(this.props.orderDeclined) {
            orderAcceptDeclineMessage =  
                        <div className="order-dec">
                            <span style={{color:'red'}}><FontAwesomeIcon icon={faTimesCircle} size="5x"/> </span>
                            <h3 style={{marginTop:'10px',color:'red'}}>Order Declined!</h3>
                        </div>
        }

        if(!this.props.orderContents) {
            contentsHint = <div className="order-content-hint">
                                <FontAwesomeIcon icon={faMugHot} size="7x" />
                                <br />
                                <h3>No order has been selected yet!</h3>
                                <h4>Click on any order from "All Orders" and it will appear here.</h4>
                            </div> 
        }
        else {
            orderList = 
                    <div className="order-details">
                        {orderAcceptDeclineMessage}
                        <div className="customer-details customer-name"><strong>Name: </strong>{orderDetails.customerName}</div>
                        <div className="customer-details customer-mobile-no"><strong>Mobile: </strong>{orderDetails.phoneNo}</div>
                        <div className="customer-details order-table-no"><strong>Order Number: </strong>{orderDetails.orderNumber}</div>
                        <div className="order-list">
                            {this.props.orderContents && orderDetails.items.map(item => 
                                <OrderContentsList 
                                    userId={this.props.userId}
                                    key={item.itemId}
                                    itemId={item.itemId}
                                    itemTitle={item.itemTitle}
                                    quantity={item.quantity} />
                            )}
                        </div>
                        <div className="accept-decline-order">
                            <div className="buttons">
                                <button className="accept-decline-button accept" name="order-accepted" onClick={e => {this.confirmOrder(e)}}> <strong>Accept</strong> </button>
                                <button className="accept-decline-button decline" name="order-declined" onClick={e => {this.confirmOrder(e)}}><strong>Decline</strong></button>
                            </div>
                        </div>
                        </div>
        }

        return (
            <div className="order-contents m-t-40 m-l-120 ">
                <h1 className="order-contents-heading m-b-20">Order Contents</h1>
                <div className="order-contents-details">
                    {contentsHint}
                    {orderList}
                            {/* <div className="order-image-holder">
                                <div className="order-img-and-title">
                                <div className="order-image m-t-20">
                                    <img src="/images/itachi-pole.jpg" alt=""/> 
                                    </div>
                                    <span className="order-img-description"> <strong>Veg Kathi Roll with extra Masala</strong> </span>
                                </div>
                                <div className="quantity">
                                    <strong>Qty.</strong> 1
                                </div>
                            </div>
                            <hr />
                            <div className="order-image-holder">
                                <div className="order-img-and-title">
                                <div className="order-image m-t-20">
                                    <img src="/images/itachi-pole.jpg" alt=""/> 
                                    </div>
                                    <span className="order-img-description"> <strong>Something</strong> </span>
                                </div>
                                <div className="quantity">
                                    <strong>Qty.</strong> 1
                                </div>
                            </div>
                            <hr />
                            <div className="order-image-holder">
                                <div className="order-img-and-title">
                                <div className="order-image m-t-20">
                                    <img src="/images/itachi-pole.jpg" alt=""/> 
                                    </div>
                                    <span className="order-img-description"> <strong>Something</strong> </span>
                                </div>
                                <div className="quantity">
                                    <strong>Qty.</strong> 1
                                </div>
                            </div>
                            <hr />
                            <div className="order-image-holder">
                                <div className="order-img-and-title">
                                <div className="order-image m-t-20">
                                    <img src="/images/itachi-pole.jpg" alt=""/> 
                                    </div>
                                    <span className="order-img-description"> <strong>Something</strong> </span>
                                </div>
                                <div className="quantity">
                                    <strong>Qty.</strong> 1
                                </div>
                            </div>
                            <hr /> */}
                        {/* </div> */}
                </div> 
            </div>
        )
    }
}

export default OrderContents