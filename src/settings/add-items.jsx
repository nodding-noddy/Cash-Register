import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

class AddItems extends Component {

    handleSubmit = () => {

    }

    render() {

        return (

            <div className="add-items-holder">
                <div className="img-upload">
                    <div className="uploaded-img-div">
                        <FontAwesomeIcon icon={faCameraRetro} size="5x"/>
                    </div>
                </div>
                <div className="added-item-title-description">
                    <form onSubmit={this.handleSubmit}>
                        <input type="file" name="item-image-input" id="item-image-input" accept="image/x-png,image/jpeg"/>
                        <label classNmae="settings-labels" htmlFor="added-item-title">Item title</label>
                        <input className="input-text" type="text" name="added-item-title" id="new-item-title" placeholder="Item title"/>
                        <label className="settings-labels" htmlFor="added-item-desc-label">Item description</label>
                        <textarea name="added-item-description" id="added-item-description" cols="30" rows="10"></textarea>
                        <input className="submit" type="submit" value="Add item"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddItems;