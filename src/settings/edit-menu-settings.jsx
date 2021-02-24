import React,{Component} from 'react';
import CurrentMenuItems from './current-menu-items';
import AddItems from './add-items';

class EditMenuSettings extends Component {

    componentDidMount() {
        document.title = "Settings: Edit Menu";
    }

    render() {
        
        return(
            <div className="edit-menu-setting m-t-20">
                <div className="current-menu-section">
                   <div className="current-menu">
                        <h1>Current Menu</h1>
                        <CurrentMenuItems />
                    </div> 
                </div>
                <div className="add-items-section">
                    <div className="add-items">
                        <h1>Add items to the Menu</h1>
                        <AddItems />
                    </div>
                </div>
            </div>
        )
    }
}

export default EditMenuSettings;