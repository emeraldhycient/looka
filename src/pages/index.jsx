import React from "react";
import Header from "../components/header";
import Amazing from "../components/home/amazing";
import Community from "../components/home/community";
import Hero from "../components/home/hero";

import "./styles.css";

function Index() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <Amazing />
      <Community />
    </main>
  );
}

export default Index;
