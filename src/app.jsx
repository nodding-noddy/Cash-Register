import React,{Component} from 'react';
import NavBar from './login/navbar';
import MainContent from './login/mainContent';
import SvgPattern from './login/svgPattern';
import './main-css/main.css';

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
