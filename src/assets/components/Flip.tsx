import React from "react";

const flipAnimation = `
@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}
`;

const flipStyle: React.CSSProperties = {
  animation: "flip 2s infinite linear",

  fontSize: "3rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  height: "100vh",

  color: "#06b6d4",

  transformStyle: "preserve-3d",
};

function Flip() {
  return (
    <>
      <style>{flipAnimation}</style>

      <div style={flipStyle}>
        Flip Animation 🔄
      </div>
    </>
  );
}

export { Flip };