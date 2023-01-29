import React from "react";

const About: React.FC = () => {

  /*const changeThemeImg = () => {
    if (theme) {
      if (theme.classList.contains('light-theme')) {
        return (
          <img
            src="./images/moi.jpg"
            alt="Alexy Martinet"
            style= {{ filter: "invert(1)" }}
          />
        );
      } else {
        return (
          <img
            src="./images/moi.jpg"
            alt="Alexy Martinet"
            style= {{ filter: "invert(0)" }}
          />
        );
      }
    }
  };*/

  return (
    <main>
      <section className="aboutPage">
        <div className="decoration">
          <div>
            <h1>ALEXY</h1>
            <div className="rectangle"></div>
          </div>
          <div>
            <div className="rectangle"></div>
            <h1>MARTINET</h1>
          </div>
        </div>
        <div className="aboutPage__content">
          <div className="aboutPage__content--text">
            <div className="about--row">
              <h3>À propos</h3>
              <div>
                <p>Front-end développeur basé à Toulouse & Lyon, France</p>
                <p>Je développe et design des site web</p>
                <p>Professeur au Wagon & La toile</p>
              </div>
            </div>
            <div className="about--row">
              <h3>Rôle</h3>
              <div>
                <p>Front-end développeur</p>
                <p>React / TypeScript</p>
                <p>UX / UI Designer</p>
                <p>Figma</p>
              </div>
            </div>
            <div className="about--row">
              <h3>Contact</h3>
              <div>
                <p>Twitter : <a className="linkAbout" href="https://twitter.com/amlds_ma" target="_blank" rel="noreferrer">@amlds_ma</a></p>
                {/*<p>Instagram : <a className="linkAbout" href="https://www.instagram.com/amlds/" target="_blank" rel="noreferrer">@amlds</a></p>*/}
                <p>Github : <a className="linkAbout" href="https://github.com/amlds" target="_blank" rel="noreferrer">@amlds</a></p>
                <p>Linkedin : <a className="linkAbout" href="https://www.linkedin.com/in/alexy-martinet-9a6580168/" target="_blank" rel="noreferrer">@Alexy Martinet</a></p>
                <p>Mail : <a className="linkAbout" href="mailto:am.production.dev@gmail.com">am.production.dev@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <img className="about__img" src="./images/moi.jpg" alt="img" />
      </section>
    </main>
  );
}

export default About;
