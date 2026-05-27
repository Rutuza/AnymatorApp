import React from "react";

const bounceAnimation = `
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-40px);
  }
}
`;

const bounceStyle: React.CSSProperties = {
  animation: "bounce 1s infinite",

  fontSize: "3rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  height: "100vh",

  color: "#22c55e",
};

function Bounce() {
  return (
    <>
      <style>{bounceAnimation}</style>

      <div style={bounceStyle}>
        Bounce Animation 🟢
      </div>
    </>
  );
}

export { Bounce };