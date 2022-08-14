import React from "react";
import Section14DaysFree from "./components/Section14DaysFree";
import SectionAdvantages from "./components/SectionAdvantages";
import SectionCarousel from "./components/SectionCarousel";
import Hero from "./components/SectionHero";
import SectionPartners from "./components/SectionPartners";

function App() {
  return (
    <div className="App">
      <Hero />
      <SectionCarousel />
      <SectionAdvantages />
      <Section14DaysFree />
      <SectionPartners />
    </div>
  );
}

export default App;
