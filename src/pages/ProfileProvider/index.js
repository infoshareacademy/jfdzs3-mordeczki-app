import React, { Component } from 'react';
import Header from '../../layout/Header/index'
import Footer from '../../layout/Footer/index'

class ProfileProvider extends Component {
  render() {
    return (
        
      <div className="ProfileProvider">
        <Fragment >
            <Header />

            <Footer />
        </Fragment>
      </div>
    );
  }
}

export default ProfileProvider;
