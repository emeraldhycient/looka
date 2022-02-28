import React from "react";
import Header from "../components/header";
import Amazing from "../components/home/amazing";
import Hero from "../components/home/hero";

import "./styles.css";

function Index() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <Amazing />
    </main>
  );
}

export default Index;
