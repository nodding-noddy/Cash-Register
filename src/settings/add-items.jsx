import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class AddItems extends Component {

    constructor() {
        super();
        this.state = {
            addedItemTitle:'',
            addedItemDescription:'',
            addedItemAmount:0,
            updated:false
        }
    }

    setInputState = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const uploadedImage = document.getElementById('item-image-input').files[0];
        let formData = new FormData();
        formData.append('itemTitle', this.state.addedItemTitle);
        formData.append('itemAmount', this.state.addedItemAmount);
        formData.append('itemDescription', this.state.addedItemDescription);
        formData.append('itemImage', uploadedImage);
        formData.append('userId', this.props.userId);
        const result = await fetch('http://localhost:8080/upload-menu-item', {
            method:'POST',
            body:formData,
        })
        .then(response => 
            response.json())
        .catch(err => {
            console.log('Error at FETCH',err);
        })
        
        if(result.success) {
            this.setState({
                updated:true
            })
            console.log('Data uploaded Successfully');
        }
        else {
            console.log('Failed to upload data to the server');
        }

    }

    render() {

        let updated;
        let form;
        if(this.state.updated) {
            updated = 
                    <div className="updated">
                        <div className="update-confirmation"> 
                            <span><FontAwesomeIcon icon={faCheckCircle} size="5x" /></span>
                            Successfully added {this.state.addedItemTitle} to the menu!
                        </div>
                        <input className="submit" type="submit" onClick={() => {this.setState({updated:false})}} value="Add more"/>
                    </div>
        }

        if(!this.state.updated) {
            form = 
            <React.Fragment>
                <div className="img-upload">
                    <div className="uploaded-img-div">
                        <FontAwesomeIcon icon={faCameraRetro} size="5x"/>
                    </div>
                </div>
                <div className="added-item-title-description">
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={() => this.setState({updated:false})} type="file" name="item-image-input" id="item-image-input" accept="image/x-png,image/jpeg"/>
                        <label className="settings-labels" htmlFor="added-item-title"> <strong>Item title</strong> </label>
                        <input onChange={this.setInputState} className="input-text" type="text" name="addedItemTitle" id="new-item-title" placeholder="Enter item title"/>
                        <label className="settings-labels" htmlFor="addedItemAmount"> <strong>Item Amount</strong> </label>
                        <input onChange={this.setInputState} className="input-text" type="text" name="addedItemAmount" id="new-item-amount" placeholder="Enter item amount"/>
                        <label className="settings-labels" htmlFor="addedItemDescription">Item description</label>
                        <textarea onChange={this.setInputState} name="addedItemDescription" placeholder="Enter item description" id="added-item-description" cols="40" rows="5"></textarea>
                        <input className="submit" type="submit" value="Add item"/>
                    </form>
                </div>
            </React.Fragment>
        }

        return (

            <div className="add-items-holder">
                    {updated}
                    {form}
            </div>
        )
    }
}

export default AddItems;