import React, {Component} from 'react';

class OrderRow extends Component {

    render() {

        let orderData = this.props.orderData;

        return(
            <tr onClick={() => this.props.setCurrentlySelectedOrder(orderData)} name={orderData.orderNumber}>
                <td>{orderData.items.length}</td>
                <td>{new Date().toLocaleTimeString()}</td>
                <td>{orderData.customerName}</td>
                <td><div className="pending order-status"> <strong>Pending</strong> </div></td>
            </tr>
        )
    }
}

export default OrderRow;