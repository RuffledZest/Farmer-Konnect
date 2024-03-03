import React from "react";

const StyledHeading = () => (
  <>
    <style jsx>{`
      .heading {
        color: #2e383b;
        text-align: center;
        font: 400 45px/144% "Outfit", -apple-system, Roboto, Helvetica, sans-serif;
      }
      
      @media (max-width: 991px) {
        .heading {
          font-size: 40px;
        }
      }
    `}</style>
    <h1 className="heading">Empowering Farmers Through Knowledge</h1>
  </>
);

const LearningTitle= () => {
  return (
    <main>
      <StyledHeading />
    </main>
  );
};

export default LearningTitle;