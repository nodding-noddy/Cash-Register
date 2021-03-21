import { faCloudMeatball, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';

class CurrentMenuItems extends Component {

    componentDidMount() {
        console.log("Current Menu items",this.props.menuItems);
    }


    render() {
        let menuItems = this.props.menuItems;
        let noMenuItems;

        if(menuItems.length === 0) {
            noMenuItems = <div className="no-menu-items">
                            <span><FontAwesomeIcon icon={faCloudMeatball} size="8x"/></span>
                            <h3>No menu items have been added yet!</h3>
                          </div>
        }

        return (

            <div className="current-menu-items">
                {this.props.menuItems.map(menuItem => 
                    <React.Fragment>
                        <div className="item">
                            <img src={`http://localhost:8080/images?item_id=${menuItem.item_id}&user_id=${this.props.userId}`} alt=""/>
                            <div className="item-title"><strong>{menuItem.item_name}</strong></div>
                        </div>
                        <hr />
                    </React.Fragment>
                    )}
                    {noMenuItems}
            </div>
        )
    }
}

export default CurrentMenuItems;