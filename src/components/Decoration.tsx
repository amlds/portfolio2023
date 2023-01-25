import React from "react";

import Logo from "../components/Logo";

class Decoration extends React.Component {
  render() {
    return (
      <section className="decoration">
        <div>
          <h1>AM</h1>
          <div className="rectangle"></div>
          <Logo />
        </div>
        <div>
          <div className="rectangle"></div>
          <h1>PRODUCTION</h1>
        </div>
        <div className="footerDecoration">
          <div>
            <p>Front-End Développeur</p>
            <p>Designer UX/UI</p>
          </div>
          <div>
            <p>Freelance</p>
            <p>@2023 V1.0</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Decoration;
