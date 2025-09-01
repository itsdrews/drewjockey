import React, { useState } from 'react'

const Vinyl = () => {
    const [isPlaying,setIsPlaying] = useState(true);
    const togglePlay = () =>{
        setIsPlaying(!isPlaying);    
    };
  return ( 
   <div style={styles.recordContainer}>
        <div style={styles.record}>
          <div style={styles.grooves}></div>
          <div style={styles.reflection}></div>
          <div style={styles.recordLabel}>
            <div>ÁLBUM CLÁSSICO</div>
            <div>33 RPM</div>
          </div>
          <div style={styles.recordCenter}></div>
        </div>
      </div>
      
      <div style={styles.controls}>
        <button 
          style={styles.button} 
          onClick={togglePlay}
        >
          {isPlaying ? '⏸️ Pausar' : '▶️ Reproduzir'}
        </button>
      </div>
      
      <div style={styles.info}>
        <p>Este é um componente React autônomo que simula um disco de vinil giratório.</p>
        <p>Clique no botão para alternar entre os estados de reprodução e pausa.</p>
      </div>
    </div>
  );
};
  )
}

export default Vinyl
