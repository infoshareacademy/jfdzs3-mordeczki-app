import React, { Component } from 'react'
import TwitterIcon from '../../image/twitter_icon.png';
import FBIcon from '../../image/fb_icon.png';
import InstaIcon from '../../image/insta_icon.png';
import './style.css';

class Footer extends Component {
render() {
return (
<div className='footer'>
    <div className="footerIconItems">
        <img src={TwitterIcon} className="iconItem"/>
        <img src={FBIcon} className="iconItem"/>
        <img src={InstaIcon} className="iconItem"/>
        cdscf
    </div>
</div>
);
}
}

export default Footer;