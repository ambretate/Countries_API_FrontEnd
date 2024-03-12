import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="headline">Flags, Facts, and Beyond:</h1>
      <h2 className="sub-headline">
        Essential Facts and Key Figures for Each Nation
      </h2>
      <p className="welcome-text">
        Welcome to our comprehensive guide to countries, where we delve into the
        fundamental elements that define nations across the globe. Uncover the
        essential facts and figures that for each country, from population
        statistics to linguistic diversity and flags. This website is a curated
        repository of high-level information, offering a systematic exploration
        of the key characteristics that distinguish one nation from another.
        Whether you're a student of geopolitics, a trivia enthusiast, or simply
        curious about the world, our platform is your go-to resource for gaining
        insight into the essential details that make each country a unique
        entity on the global stage. Welcome to the ultimate destination for
        country facts!
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/World_Map_%28political%29.svg/2880px-World_Map_%28political%29.svg.png"
        width="800px"
      />
    </div>
  );
}

export default Home;
