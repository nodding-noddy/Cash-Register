import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import { socket } from '../app';

class OrderContents extends Component {

    constructor() {
        super();
        this.state = {
            contents:true
        }
    }


    confirmOrder = (event) => {
        // const name = event.target.name;
        // if(name === 'order-accepted') {
        //     socket.emit('order confirmation', tableNumber, true);
        // }
        // else 
        //     socket.emit('order confirmation', tableNumber, false);
    }

    render() {

        let contentsHint;

        if(!this.state.contents) {
            contentsHint = <div className="order-content-hint">
                                <FontAwesomeIcon icon={faHandPointLeft} size="6x" />
                                <br />
                                <h3>Click on any of the orders from the "All Orders" section and it's full description will appear here.^_^</h3>
                            </div> 
        }

        return (
            <div className="order-contents m-t-40 m-l-120 ">
                <h1 className="order-contents-heading m-b-20">Order Contents</h1>
                <div className="order-contents-details">
                    {contentsHint}
                    <div className="order-details">
                        <div className="customer-details customer-name"><strong>Name: </strong>Someone Something</div>
                        <div className="customer-details customer-mobile-no"><strong>Mobile: </strong>123098710</div>
                        <div className="customer-details order-table-no"><strong>Table Number: </strong>22</div>
                        <div className="order-list">
                            <div className="order-image-holder">
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
                            <hr />
                        </div>
                        <div className="accept-decline-order">
                            <div className="buttons">
                                <button className="accept-decline-button accept" name="order-accpeted" onClick={e => this.confirmOrder(e)} type="button"> <strong>Accept</strong> </button>
                                <button className="accept-decline-button decline" name="order-declined" onClick={e => this.confirmOrder(e)} type="button"><strong>Decline</strong></button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default OrderContents