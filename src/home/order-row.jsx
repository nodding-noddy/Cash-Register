import React, {Component} from 'react';

class OrderRow extends Component {

    render() {

        let orderData = this.props.orderData;

        return(
            <tr name={orderData.orderId}>
                <td>{orderData.quantity}</td>
                <td>{orderData.time}</td>
                <td>{orderData.customerName}</td>
                <td><div className="pending order-status"> <strong>{orderData.status}</strong> </div></td>
            </tr>
        )
    }
}