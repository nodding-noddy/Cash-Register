import React,{Component} from 'react';
import HomeNavBar from './home/home-navbar';
import MainContent from './login/mainContent';
import SvgPattern from './login/svgPattern';
import './main-css/main.css';

class App extends Component {

    render() {
        return (
            <div className="login-page">
                <HomeNavBar />
                {/* <MainContent /> */}
                {/* <SvgPattern /> */}
                {/* <div id="footer"><footer>&copy; Some Technologies</footer></div> */}
            </div>
        )
    }
}

export default App;
