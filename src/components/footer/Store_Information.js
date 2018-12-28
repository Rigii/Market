import React, {Component} from 'react';

class StoreInformation extends Component {

    render() {
        return (
            <div className="footerBox">
                <h4 className="hot_offers">STORE INFORMATION</h4>

                <div className="communicationInfo">
                    <div className="communicationInfoImg">
                        <img src="http://localhost:8000/icons/location.png" alt="location"/>
                        <img src="http://localhost:8000/icons/phone.png" alt="phone"/>
                        <img src="http://localhost:8000/icons/mail.png" alt="mail"/>
                        <img src="http://localhost:8000/icons/skype.png" alt="skype"/>
                    </div>
                    <div className="communicationInfoP">
                    <p>Lorem ipsum dolor sitamet</p><br/>
                    <p>Lorem ipsum dolor sit amet</p><br/>
                    <p>Lorem ipsum dolor sit amet</p><br/>
                    <p>Lorem ipsum dolor sit amet</p><br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoreInformation