import React, { useState } from "react";
import "./Home.css";
import Vinyl from "../components/Vinyl";

const Home = () => {
  const [selected, setSelected] = useState(0);

  const tracks = [
    { id: 0, title: "Clássico 1" },
    { id: 1, title: "Clássico 2" },
    { id: 2, title: "Clássico 3" },
    { id: 3, title: "Clássico 4" },
  ];

  const radius = 300; // Raio do arco em px
  const total = tracks.length;
  const startAngle = -45; // Ângulo inicial
  const endAngle = 45;     // Ângulo final
  const angleStep = (endAngle - startAngle) / (total-2); // Espaçamento entre os discos

  return (
    <>


      <div className="arcContainer">
        <div className="arc">
          {tracks.map((track, index) => {
            const angle = startAngle + index * angleStep;

            return (
              <div
                key={track.id}
                className={`arcItem ${selected === index ? "active" : ""}`}
                onClick={() => setSelected(index)}
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translate(${radius}px)
                    rotate(${-angle}deg)
                  `,
                }}
              >
                <Vinyl />
                <p>{track.title}</p>
              </div>
            );
          })}
    
        </div>
      </div>

    </>
  );
};

export default Home;
