import React from 'react';

const buttonHoverKeyframes = `
@keyframes buttonHover {
  0% {
    background-color: #b3b3ff;
  }
  100% {
    background-color: #8080ff;
  }
}

.button {
  background-color: #b3b3ff;
  padding: 1%;
  width: 15%;
  border-radius: 4px;
  color: white;
  text-align: center;
  cursor: pointer;
  border: none;
}

.button:hover {
  animation: buttonHover 0.3s forwards;
}
`;

function ButtonHover() {
  return (
    <>
      <style>{buttonHoverKeyframes}</style>
      <form action="">
        <button className="button">Login</button>
      </form>
    </>
  );
}

export { ButtonHover };
