import React, { Component } from 'react';

class MenuItem extends Component {

    render() {
        
        return(
            <React.Fragment>
                <div className="item">
                    <img src={`/images/${this.props.itemId}.jpg`} alt=""/>
                    <div className="item-title"><strong>{this.props.itemTitle}</strong></div>
                </div>
                <hr />
            </React.Fragment>
        )
    }
}