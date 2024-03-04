import React from 'react';

const CropInformation = ({ cropName, area, plantingDate, harvestDate }) => (
  <div className="crop-information">
    <div className="crop-name">{cropName}</div>
    <div className="crop-details">
      <div className="area">{area}</div>
      <div className="planting-date">{plantingDate}</div>
    </div>
    <div className="harvest-date">{harvestDate}</div>
  </div>
);

const CropManager = (props) => {
  const cropsData = [
    { cropName: "Wheat", area: "2 acres", plantingDate: "01/01/2024", harvestDate: "01/01/2024" },
    { cropName: "Maize", area: "1 acre", plantingDate: "01/01/2024", harvestDate: "01/01/2024" },
    { cropName: "Rice", area: "5 acres", plantingDate: "01/01/2024", harvestDate: "01/01/2024" },
  ];

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>

        <header>
          <div className="header-box">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/38ea5c2c96f29f55234984f95621912a436f1f6117c59471d162ceee47f67a98?apiKey=dadde3c8bb91485ea6a1326748697be7&" className="header-image" alt="Header" />
          </div>
        </header>
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'space-between',
          
        }}>
          <main>
            <section className="crop-overview-section">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f110d7cdc3a8627e696838eb3b43abee3b065323c4e402904ab459d5997293?apiKey=dadde3c8bb91485ea6a1326748697be7&" className="crop-overview-image" alt="Crop Overview" />
              <h1>Crop Overview</h1>
            </section>
            <section className="temperature-section">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9b54eebcb74814d4157dd0475caf6d67aa8611d14b8f59c1e27f706ac591847?apiKey=dadde3c8bb91485ea6a1326748697be7&" className="temperature-image" alt="Temperature Ranges" />
              <div className="temperature-readings">
                <div className="temperature-high">35 C</div>
                <div className="temperature-low">15 C</div>
              </div>
            </section>
            <article className="crop-information-article">
              <header>
                <h2>Name of the crop</h2>
                <h2>Area</h2>
                <h2>Planting Date</h2>
                <h2>Est. Harvest Date</h2>
              </header>
              {cropsData.map((crop, index) => (
                <CropInformation key={index} {...crop} />
              ))}
            </article>
          </main>
          <aside className="insights-recommendations">
            <div className="market-insights">
              <h3>Market Insights</h3>
            </div>
            <div className="recommendations">
              <h3>Recommendations</h3>
            </div>
          </aside>
        </div>

      </div>
      <style jsx>{`
        .header-box {
          border-radius: 50px;
          background-color: rgba(4, 142, 68, 0.15);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
          padding: 10px 60px 10px 25px;
        }
        .header-image {
          aspect-ratio: 1;
          object-fit: cover;
          width: 40px;
        }
        .crop-overview-section, .temperature-section {
          margin-top: 25px;
          text-align: center;
        }
        .crop-overview-image, .temperature-image {
          width: 100%;
          aspect-ratio: auto;
        }
        .temperature-readings {
          display: flex;
          justify-content: space-between;
          width: 175px;
          margin: auto;
        }
        .temperature-high, .temperature-low {
          font-family: Outfit, sans-serif;
        }
        .crop-information {
          display: flex;
          justify-content: space-between;
          padding: 19px 80px;
          font-size: 22px;
          color: #000;
          background-color: rgba(4, 142, 68, 0.1);
          border-radius: 50px;
          text-align: center;
        }
        .crop-name, .area, .planting-date, .harvest-date {
          font-family: Outfit, sans-serif;
        }
        .insights-recommendations {
          display: flex;
          justify-content: space-between;
          margin-top: 60px;
        }
        .market-insights, .recommendations {
          background-color: rgba(4, 142, 68, 0.15);
          padding: 28px;
          border-radius: 20px;
          font: 500 30px Outfit, sans-serif;
          color: #048e44;
          text-align: center;
        }
        @media (max-width: 991px) {
          .header-box, .crop-overview-section, .temperature-section, .crop-information {
            max-width: 100%;
            padding: 0 20px;
            flex-direction: column;
            align-items: stretch;
          }
          .temperature-readings {
            flex-direction: column;
          }
          .insights-recommendations {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default CropManager;