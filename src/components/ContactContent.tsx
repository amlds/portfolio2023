import React from "react"

import Profil from "../components/Profil"
import Banner from "../components/Banner"

class ContactContent extends React.Component{
  render() {
    return(
      <div className="contactContent">
        <div className="contactContent__svg">
          <Profil />
        </div>
        <div className="contactContent__text">
          {/*<p>Je suis disponible pour tout projet freelance ou en agence.</p>*/}        </div>
        <div className="contactContent__link">
          <a href="" className="button">Linkedin</a>
          <a href="" className="button">Github</a>
          <a href="" className="button">Twitter</a>
          <a href="" className="button">Instagram</a>
        </div>
        <Banner message="CONTACT"/>
        <div className="Rounded"></div>
      </div>
    );
  }
}

export default ContactContent;
