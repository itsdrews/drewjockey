import React, { useState } from "react";
import "./Vinyl.css";

const Vinyl = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="vinylWrapper">
      <div className={`vinyl ${isPlaying ? "spinning" : ""}`}>
        <div className="vinylGrooves"></div>
        <div className="vinylLabel">
          <span>ALBUM CLÁSSICO</span>
          <span>33 RPM</span>
        </div>
        <div className="vinylCenter"></div>
      </div>

      <div className="controls">
        <button className="btn" onClick={togglePlay}>
          {isPlaying ? "⏸️ Pausar" : "▶️ Reproduzir"}
        </button>
      </div>
    </div>
  );
};

export default Vinyl;
