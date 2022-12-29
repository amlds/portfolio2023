import React from "react";

//import components
import Header from "../components/Header";
import Decoration from "../components/Decoration";

export default function Home() {
  return (
    <main>
      <div className="home">
        <Header />
        <Decoration />
      </div>
    </main>
  );
}
