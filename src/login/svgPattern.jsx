import React, { Component } from 'react';
import './css/svg.css';

class SvgPattern extends Component {

    render() {
        
        return (
                <div className="svg-holder">
                    <div className="svg-div">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fillOpacity="1" d="M0,224L40,197.3C80,171,160,117,240,128C320,139,400,213,480,224C560,235,640,181,720,133.3C800,85,880,43,960,26.7C1040,11,1120,21,1200,32C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                    </div>
                </div>
        )
    }
}

export default SvgPattern;