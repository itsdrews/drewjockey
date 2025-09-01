import React, { useState } from "react";
import "./Home.css";
import Vinyl from "../components/Vinyl";

const Home = () => {
  const [selected, setSelected] = useState(0);

  // Apenas 4 discos
  const tracks = [
    { id: 0, title: "Clássico 1" },
    { id: 1, title: "Clássico 2" },
    { id: 2, title: "Clássico 3" },
    { id: 3, title: "Clássico 4" },
  ];

  return (
    <div className="homeWrapper">
      <h1 className="title">DrewJockey Alpha</h1>

      <div className="arcContainer">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className={`arcItem ${selected === index ? "active" : ""}`}
            onClick={() => setSelected(index)}
          >
            <Vinyl />
            <p>{track.title}</p>
          </div>
        ))}
      </div>

      <div className="centerContainer">
        <h2>Selecionado:</h2>
        <Vinyl />
        <p>{tracks[selected].title}</p>
      </div>
    </div>
  );
};

export default Home;
