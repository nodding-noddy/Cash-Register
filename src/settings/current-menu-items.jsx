import React, {Component} from 'react';

class CurrentMenuItems extends Component {

    componentDidMount() {
        console.log("Current Menu items",this.props.menuItems);
    }


    render() {
        let menuItems = this.props.menuItems;

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
                {/* <div className="item">
                    <img src="/images/itachi-pole.jpg" alt=""/>
                    <div className="item-title"><strong>Veg Kathee Roll</strong></div>
                </div>
                <hr />
                <div className="item">
                    <img src="/images/itachi-pole.jpg" alt=""/>
                    <div className="item-title"><strong>Veg Kathee Roll</strong></div>
                </div>
                <hr />
                <div className="item">
                    <img src="/images/itachi-pole.jpg" alt=""/>
                    <div className="item-title"><strong>Veg Kathee Roll</strong></div>
                </div>
                <hr />
                <div className="item">
                    <img src="/images/itachi-pole.jpg" alt=""/>
                    <div className="item-title"><strong>Veg Kathee Roll</strong></div>
                </div>
                <hr />
                <div className="item">
                    <img src="/images/itachi-pole.jpg" alt=""/>
                    <div className="item-title"><strong>Veg Kathee Roll</strong></div>
                </div>
                <hr />
                <div className="item">
                    <img src="/images/itachi-pole.jpg" alt=""/>
                    <div className="item-title"><strong>Veg Kathee Roll</strong></div>
                </div>
                <hr /> */}
            </div>
        )
    }
}

export default CurrentMenuItems;