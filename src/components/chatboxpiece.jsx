import React from "react";

const StyledBox1 = () => (
  <section className="styled-box1">
    <style jsx>{`
      .styled-box1 {
        border-radius: 20px;
        background-color: green;
        align-self: start;
        width: 296px;
        height: 109px;
        max-width: 100%;
      }
    `}</style>
  </section>
);
const StyledBox2 = () => (
  <section className="styled-box2">
    <style jsx>{`
      .styled-box2 {
        border-radius: 20px;
        background-color: green;
        align-self: end;
        width: 296px;
        height: 109px;
        max-width: 100%;
      }
    `}</style>
  </section>
);
const StyledBox3 = () => (
  <section className="styled-box3">
    <style jsx>{`
      .styled-box3 {
        border-radius: 20px;
        background-color: green;
        align-self: start;
        width: 296px;
        
        height: 100px;
        max-width: 100%;
      }
    `}</style>
  </section>
);
const StyledBox4 = () => (
  <section className="styled-box4">
    <style jsx>{`
      .styled-box4 {
        border-radius: 20px;
        background-color: green;
        align-self: end;
        width: 296px;
        height: 70px;
        max-width: 100%;
      }
    `}</style>
  </section>
);

function Boxie() {
  return (
    <>
      <StyledBox1 />
        <StyledBox2 />
        <StyledBox3 />
        <StyledBox4 />
      
    </>
  );
}

export default Boxie;