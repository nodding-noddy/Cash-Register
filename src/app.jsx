import React,{Component} from 'react';
import NavBar from './navbar';
import MainContent from './mainContent';
import SvgPattern from './svgPattern';
import './css/main.css';

class App extends Component {

    render() {

        return (
            <React.Fragment>
                <NavBar />
                <MainContent />
                <SvgPattern />
                <div id="footer"><footer>&copy; Some Technologies</footer></div>
            </React.Fragment>
        )
    }
}

export default App;
