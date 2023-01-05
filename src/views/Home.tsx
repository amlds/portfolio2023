import React from "react";
import Banner from "../components/Banner";

//import components
import Header from "../components/Header";
import Decoration from "../components/Decoration";
import AboutContent from "../components/AboutContent";
import ProjectContent from "../components/ProjectContent";

export default function Home() {
  return (
    <main>
      <div className="home">
        <Header />
        <Decoration />
        <Banner message="À PROPOS" />
        <AboutContent />
        <Banner message="PROJECT" />
        <ProjectContent />
      </div>
    </main>
  );
}
