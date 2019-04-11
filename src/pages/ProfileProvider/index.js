import React, {Component} from 'react';
import './style.css'



const boxStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.31)',
    borderRadius: '10px',
}
const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '150px',
    height: '600px',
    width: '700px',
}

class ProfileProvider extends Component {
    state = {
        compName: {},
        compInfo: {},
        compLogo: {},
        inputValue: ""
    };

    handleEditButton = () => {

    }

    render() {
        return (

            <div
                className="container"
                style={containerStyle}
            >
                <div
                    className="logoBox"
                    style={boxStyle}
                >
                    <img
                        src="https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/08/nasa-logo-web-rgb.png?itok=Iczdwajo&fc=50,50"
                        alt="tu powinno być logo NASA, ale z jakiegoś powodu go nie ma."
                    />
                </div>
                <div
                    className="nameBox"
                    style={boxStyle}
                >
                    <p>
                        Jakaś tam firma S.A.
                    </p>
                </div>
                <div
                    className="infoBox"
                    style={boxStyle}
                >
                    <p>
                        Chcemy Cie okraść nie tylko z godności. Cras luctus at urna sed tempus. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi lobortis ac urna
                        in luctus. Aliquam justo massa, aliquam ac dolor eu, dignissim vulputate elit. Sed diam libero,
                        egestas vel gravida quis, fermentum ac ante. Fusce venenatis tristique massa. Vivamus
                        scelerisque hendrerit ipsum a cursus. Donec maximus elementum viverra.
                    </p>
                </div>
                <div
                    className="contactBox"
                    style={boxStyle}
                >

                </div>
                <button
                    className="editButton"
                    onClick={this.handleEditButton}
                >
                    Edycja
                </button>
            </div>


        );
    }
}

export default ProfileProvider;
