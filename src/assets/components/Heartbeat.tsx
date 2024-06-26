import React from 'react';

const heartbeatkeyframes = `
@keyframes heartbeat{
    0% {
        transform: scale(1);
    }
    14% {
        transform: scale(1.3);
    }
    28% {
        transform: scale(1);
    }
    42% {
        transform: scale(1.3);
    }
    70% {
        transform: scale(1);
    }
}
`;

const myStyle: React.CSSProperties = {
    animation: "heartbeat 1.5s infinite",
    textAlign: "center",
    overflowX: "hidden",
    
};


function Heartbeat() {
  return (
    <>
      <style>{heartbeatkeyframes}</style>
      <div style={myStyle}>Heartbeat animation</div>
    </>
  );
}

export { Heartbeat } ;
