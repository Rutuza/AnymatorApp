import React from "react";

const blinkKeyframes = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
`;

const myStyle: React.CSSProperties = {
 animation: "blink 1s infinite",
};

function Blink() {
  return (
    <>
      <style>{blinkKeyframes}</style>
      <div style={myStyle}>Blink animation</div>
    </>
  );
}

export { Blink } ;
