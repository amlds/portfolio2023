import React from "react";

const About: React.FC = () => {
  return (
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
              <p>Twitter : @amlds_ma</p>
              <p>Instagram : @amlds</p>
              <p>Github : @amlds</p>
              <p>Linkedin : @Alexy Martinet</p>
              <p>Mail : am.production.dev@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <img className="about__img" src="https://picsum.photos/720/900" alt="img" />
    </section>
  );
}

export default About;
