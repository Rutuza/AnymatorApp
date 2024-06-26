import React from 'react';

const fadeinkeyframes = `
@keyframes fadein{
    0% { opacity: 0; }
    100% { opacity: 1;}
}
`;

const myStyle : React.CSSProperties = {
    animation: "fadein 2s ease-in forwards",
};

function Fadein() {
  return (
    <>
      <style>{fadeinkeyframes}</style>
      <div style={myStyle}>TS: Are you ready Mr. Styles ?</div>
    </>
  );
}

export { Fadein };
