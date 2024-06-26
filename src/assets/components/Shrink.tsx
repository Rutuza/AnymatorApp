import React from 'react';

const shrinkkeyframes = `
@keyframes shrink{
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0.5);
    }
}
`;

const myStyle: React.CSSProperties = {
    animation: "shrink 2s forwards",
    textAlign: "center",
    
    
};


function Shrink() {
  return (
    <>
      <style>{shrinkkeyframes}</style>
      <div style={myStyle}>Shrink animation</div>
    </>
  );
}

export { Shrink } ;
