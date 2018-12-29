import React, {Component} from 'react';
import location from '../../media/icons/location.png';
import mail from '../../media/icons/mail.png';
import phone from '../../media/icons/phone.png';
import skype from '../../media/icons/skype.png';

class StoreInformation extends Component {

    render() {
        return (
            <div className="footerBox">
                <h4 className="hot_offers">STORE INFORMATION</h4>

                <div className="communicationInfo">
                    <div className="communicationInfoImg">
                        <img src={location} alt="location"/>
                        <img src={phone} alt="phone"/>
                        <img src={mail} alt="mail"/>
                        <img src={skype} alt="skype"/>
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