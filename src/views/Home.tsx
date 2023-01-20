import React from "react";
import Banner from "../components/Banner";

/* import Chargement from "../components/Chargement"; */
import Decoration from "../components/Decoration";
import ProjectContent from "../components/ProjectContent";
import TestScroll from "../components/TestScroll"

interface Props { }

const Home: React.FC<Props> = (props) => {
  return (
    <main>
      <div className="home">
        <Decoration />
        <Banner message="PROJECT" />
        <ProjectContent />
        <TestScroll />
      </div>
    </main>
  );
}

export default Home;
