import React, { Component } from 'react';
import './css/navbar.css';

class Burger extends Component {

    render() {

        return (
            <div className="burger">
                <div className="bar-1 bar"></div>
                <div className="bar-2 bar"></div>
                <div className="bar-3 bar last-bar"></div>
            </div>
        )
    }
}

export default Burger;