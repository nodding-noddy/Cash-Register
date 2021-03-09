import React, { Component } from 'react';

class OrderContentsList extends Component {

    render() {
        return(

            <React.Fragment>
                <div className="order-image-holder">
                    <div className="order-img-and-title">
                    <div className="order-image m-t-20">
                        <img src={`http://localhost:8080/images?item_id=${this.props.itemId}&user_id=${this.props.userId}`} alt=""/> 
                        </div>
                        <span className="order-img-description"> <strong>{this.props.itemTitle}</strong> </span>
                    </div>
                    <div className="quantity">
                        <strong>Qty.</strong> {this.props.quantity}
                    </div>
                </div>
                <hr />
            </React.Fragment>
        )
    }
}

export default OrderContentsList;