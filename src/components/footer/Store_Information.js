import React, {Component} from 'react';
import location from '../../media/icons/location.png';
import mail from '../../media/icons/mail.png';
import phone from '../../media/icons/phone.png';
import skype from '../../media/icons/skype.png';

class StoreInformation extends Component {

    render() {
        return (
                <div className="footerContentBox">
                    <h4 className="hot_offers">STORE INFORMATION</h4>

                    <div className="communicationInfo">
                        <div className="communicationInfoImg">
                            <img src={location} alt="location" style={{msGridRow: '1', width: '60%'}}/>
                            <img src={phone} alt="phone" style={{msGridRow: '2'}}/>
                            <img src={mail} alt="mail" style={{msGridRow: '3'}}/>
                            <img src={skype} alt="skype" style={{msGridRow: '4'}}/>
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