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
          <a href="https://www.linkedin.com/in/alexy-martinet-9a6580168/" className="button">Linkedin</a>
          <a href="https://github.com/amlds" className="button">Github</a>
          <a href="https://twitter.com/amlds_ma" className="button">Twitter</a>
          <a href="https://www.instagram.com/amlds/" className="button">Instagram</a>
        </div>
        <Banner message="CONTACT"/>
        <div className="Rounded"></div>
      </div>
    );
  }
}

export default ContactContent;
