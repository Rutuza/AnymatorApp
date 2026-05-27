import React from "react";

const uploadAnimation = `
@keyframes floatUpload {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-18px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes progress {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}

@keyframes glow {
  0% {
    box-shadow: 0 0 10px rgba(59,130,246,0.4);
  }

  50% {
    box-shadow: 0 0 30px rgba(59,130,246,0.9);
  }

  100% {
    box-shadow: 0 0 10px rgba(59,130,246,0.4);
  }
}
`;

const containerStyle: React.CSSProperties = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#020617",
};

const cardStyle: React.CSSProperties = {
  width: "320px",

  padding: "40px 30px",

  borderRadius: "28px",

  background: "#0f172a",

  display: "flex",

  flexDirection: "column",

  alignItems: "center",

  gap: "24px",

  animation: "glow 2s infinite ease-in-out",
};

const iconStyle: React.CSSProperties = {
  width: "90px",
  height: "90px",

  borderRadius: "50%",

  background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  fontSize: "42px",

  color: "white",

  animation: "floatUpload 2s infinite ease-in-out",
};

const textStyle: React.CSSProperties = {
  color: "white",

  fontSize: "1.2rem",

  fontWeight: "bold",

  letterSpacing: "0.5px",
};

const progressBarStyle: React.CSSProperties = {
  width: "100%",
  height: "10px",

  background: "#1e293b",

  borderRadius: "999px",

  overflow: "hidden",
};

const progressStyle: React.CSSProperties = {
  height: "100%",

  borderRadius: "999px",

  background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",

  animation: "progress 3s infinite",
};

function Upload() {
  return (
    <>
      <style>{uploadAnimation}</style>

      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={iconStyle}>⬆</div>

          <div style={textStyle}>
            Uploading Files...
          </div>

          <div style={progressBarStyle}>
            <div style={progressStyle}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Upload };