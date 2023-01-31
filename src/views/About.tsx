import React, { useEffect } from "react";


const About: React.FC = () => {
  const [theme, setTheme] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    return setTheme(document.querySelector("main"));
  }, [theme]);

  const ThemeImg = () =>{
    if (theme) {
      if (theme.classList.contains('dark-theme')) {
        return (
          <img
            src="./images/moi.jpg"
            alt="Alexy Martinet"
            className="about__img"
          />
        );
      } else {
        return (
          <img
            src="./images/moi.jpg"
            alt="Alexy Martinet"
            className="about__img negatif__img"
          />
        );
      }
    }
  };

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
            <span className="separator"></span>
        <div className="aboutPage__content">
          <div className="aboutPage__content--text">
            <div className="about--row">
              <h3>À propos</h3>
              <div>
                <p>Front-end développeur basé à Toulouse & Lyon, France</p>
                <p>Je développe et design des sites web</p>
                <p>Professeur au <a className="linkAbout cursorHover" target="_blank" rel="noreferrer" href="https://www.lewagon.com/fr">Wagon </a> & <a className="linkAbout cursorHover" target="_blank" rel="noreferrer" href="https://latoile.em-lyon.com/">La toile</a>
                </p>
                <p>Ancien technicien audiovisuel</p>
              </div>
            </div>
            <div className="about--row">
              <h3>Compétence</h3>
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
                <p>Twitter : <a className="linkAbout cursorHover" href="https://twitter.com/amlds_ma" target="_blank" rel="noreferrer">@amlds_ma</a></p>
                {/*<p>Instagram : <a className="linkAbout" href="https://www.instagram.com/amlds/" target="_blank" rel="noreferrer">@amlds</a></p>*/}
                <p>Github : <a className="linkAbout cursorHover" href="https://github.com/amlds" target="_blank" rel="noreferrer">@amlds</a></p>
                <p>Linkedin : <a className="linkAbout cursorHover" href="https://www.linkedin.com/in/alexy-martinet-9a6580168/" target="_blank" rel="noreferrer">@Alexy Martinet</a></p>
              </div>
            </div>
          </div>
        </div>
        {ThemeImg()}
      </section>
    </main>
  );
}

export default About;
