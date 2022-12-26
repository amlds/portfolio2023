import React from "react";
import { NavLink } from "react-router-dom";

//import components
import Logo from "../components/Logo";
import Header from "../components/Header";
import Project from "./Project";

export default function Home() {
  return (
    <main>
      <div className="home">
        <Header />
        <Logo />
        <section className="P">
          {/* link page project */}
          <NavLink
            to="project"
          >
            Project
          </NavLink>
        </section>
      </div>
    </main>
  );
}
