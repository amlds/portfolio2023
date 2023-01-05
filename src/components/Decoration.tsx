import React from "react";

import Logo from "../components/Logo";

class Decoration extends React.Component {
  render() {
    return (
      <section className="decoration">
        <div>
          <h1>ALEXY</h1>
          <div className="rectangle"></div>
        </div>
        <div>
          <Logo />
          <div className="rectangle"></div>
          <h1>MARTINET</h1>
        </div>
        <div className="footerDecoration">
          <p>Front-End Développeur</p>
          <div>
            <p>Designer UX/UI</p>
            <p>Freelance</p>
            <p>@2023</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Decoration;
