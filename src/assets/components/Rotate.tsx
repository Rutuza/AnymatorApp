import React from "react";

const rotatekeyframes = `
@keyframes rotate {
  0% {rotate(0deg); }
  100% {rotate(360 deg); }
}
`;

const myStyle: React.CSSProperties = {
  animation: "rotate 1s inifinite",
}

function Rotate() {
  return(
    <>
      <style>{rotatekeyframes}</style>
      <div style={myStyle}>Blink animation</div>
    </>
  );
}

export { Rotate } ;
