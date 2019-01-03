import React, {Component} from 'react';
import Hot_Offers from './Hot_Offers.js'
import StoreInformation from './Store_Information'
import './footer.css'

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <Hot_Offers/>
                <Hot_Offers/>
                <StoreInformation/>
            </div>
        )
    }
}

export default Footer