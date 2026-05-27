import React from 'react';

const heartbeatAnimation = `
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(1.2);
  }

  40% {
    transform: scale(1);
  }

  60% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
`;

const heartStyle: React.CSSProperties = {
  animation: "heartbeat 1.5s infinite",
  fontSize: "3rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  height: "100vh",

  color: "red",
};

function Heartbeat() {
  return (
    <>
      <style>{heartbeatAnimation}</style>

      <div style={heartStyle}>
         My Heart Beats For Code ❤️
      </div>
    </>
  );
}

export { Heartbeat };