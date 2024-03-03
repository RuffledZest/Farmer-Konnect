import React from "react";

const FeatureCard = ({ imageSrc, title, description, imageAlt }) => (
    <div className="feature-card">
        <div className="feature-media">
            <img loading="lazy" src={imageSrc} alt={imageAlt} className="feature-icon" />
        </div>
        <div className="feature-content">
            <h3 className="feature-title"><strong>{title}</strong></h3>
            <p className="feature-description">{description}</p>
        </div>
    </div>
);

const FeaturesContainer = () => {
    const features = [
        {
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/58dd9f17b7550567ba561c15c2e647a21ca57d263b228093e10a504b75cb9500?apiKey=dadde3c8bb91485ea6a1326748697be7&",
            imageAlt: "Personalized Crop Advice",
            title: "Personalized Crop Advice",
            description: "Leverage data-driven insights for informed planting decisions."
        },
    
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7af4460b08c0790a1476ac6ec234408284d9f2cc90488d170648a9a868686aeb?apiKey=dadde3c8bb91485ea6a1326748697be7&",
      imageAlt: "Direct Market Access",
      title: "Direct Market Access",
      description: "Sell your produce directly to buyers and get fair prices."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/12f8ebed20a08d8521a910aec28adba447a59dfd57955299f6cc056d9da921fa?apiKey=dadde3c8bb91485ea6a1326748697be7&",
      imageAlt: "Empowering Community",
      title: "Empowering Community",
      description: "Connect with fellow farmers to exchange knowledge and resources."
    }
  ];

  return (
    <div style={{
        padding: '20px 50px',
        
    }}>
        <section className="features-container" style={{
        display: 'flex',
        justifyContent: 'space-between',
    }}>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
      <style >{`
        .features-container {
          margin-top: 100px;
          width: 100%;
          max-width: 1160px;
          padding: 0 20px;
          gap: 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        
        .feature-card {
          background-color: #f0f9f4;
          border-radius: 20px;
          padding: 20px;
          color: #000;
          width: calc(33.333% - 13.333px);
          display: flex;
          flex-direction: column;
        }

        .feature-media img {
          aspect-ratio: 1;
          position: absolute;
          width: 50px;
          align-self: start;
          object-fit: contain;
        }

        .feature-title {
            margin-top: 15px;
          font-weight: 500;
          font-size: 20px;
          text-align: center;
        }

        .feature-description {
        
          margin-top: 35px;
          font-weight: 300;
          font-size: 18px;
        }

        @media (max-width: 991px) {
        .features-container {
            flex-direction: column;
            align-items: stretch;
            padding: 0;
            gap: 0;
          }

          .feature-card {
            width: 100%;
            margin-top: 17px;
          }
        }
      `}</style>
    </section>
    </div>
    
  );
};

export default FeaturesContainer;