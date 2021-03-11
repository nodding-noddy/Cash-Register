import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './css/checkout.css';

class CheckOut extends Component {

    componentDidMount() {
        const {details} = this.props.location.state;
        console.log('Checkout',details.items);
    }

    render() {

        const {details} = this.props.location.state;

        return (
            <div className="checkout-div">
                {
                    details.items.map((obj,index) => <h1 key={obj.itemId}>{obj.itemTitle}</h1>)
                }
            </div>
        )
    }
}

export default withRouter(CheckOut);