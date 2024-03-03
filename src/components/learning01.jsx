import React from "react";

function AgricultureResources() {
  return (
    <>
      <main>
        <section className="resource-section">
          <p className="resource-description">
            “Access a wealth of agricultural resources and educational materials to improve your farming practices and increase your yields.”
          </p>
        </section>
      </main>
      <style jsx>{`
        .resource-section {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 23px;
        }
        
        .resource-description {
          color: #000;
          text-align: center;
          font-weight: 300;
          font-size: 20px;
          font-family: Outfit, sans-serif;
        }
        
        @media (max-width: 991px) {
          .resource-description {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default AgricultureResources;