import React, {Component} from 'react';

class OrderRow extends Component {

    render() {

        let orderData = this.props.orderData;

        let orderStatus;

        if(orderData.orderStatus === 'pending') {
            orderStatus = <td><div className="pending order-status"><strong>Pending</strong></div></td>
        }
        else {
            orderStatus = <td><div className="completed order-status"><strong>Accepted</strong></div></td>
        }

        return(
            <tr onClick={() => this.props.setCurrentlySelectedOrder(orderData)} name={orderData.orderNumber}>
                <td>{orderData.items.length}</td>
                <td>{orderData.orderTime}</td>
                <td>{orderData.customerName}</td>
                {orderStatus}
            </tr>
        )
    }
}

export default OrderRow;