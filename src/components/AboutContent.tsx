import React from "react";

import Logo from "./Logo";

class AboutContent extends React.Component {
  render() {
    return (
      <section className="aboutContent">
        <div className="aboutContent__flex">
          <div className="rectangle"></div>

          <div className="aboutContent__text">
            <div className="aboutContent__text--Header">
              <h2>Martinet Alexy</h2>
              <p className="md-1">@AMLDS</p>
              <p className="md-1">Développeur / Designer</p>
            </div>
            <p>
              Technicien expérimenté dans l'audiovisuel,
              j'ai occupé pendant plusieurs années le poste
              d'intégrateur sur de nombreux projets passionnants.
              Mon expertise technique et ma capacité à travailler
              en équipe m'ont permis de réaliser des projets *
              de mapping vidéo et d'automatisation de muséographie.
            </p>
            <p>
              Depuis cet été, j'ai entamé une reconversion
              professionnelle pour devenir développeur web.
              J'ai choisi ce métier car je suis passionné par les
              nouvelles technologies et par la création de sites
              et d'applications innovantes. En tant que designer
              et développeur front-end, je mets mon intérêt pour
              l'art et la création de contenu visuel au service de
              mes projets. Je suis spécialisé en TypeScript et React.
            </p>
            <p>
              Je suis passionné par mon métier et je suis toujours
              à la recherche de nouvelles opportunités professionnel.
              N'hésitez pas à me contacter pour en savoir plus
              sur mon parcours et mes compétences.
            </p>
          </div>
          <div className="center">
            <Logo />
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContent;
