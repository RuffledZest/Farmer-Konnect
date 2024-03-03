import React from "react";

const FeatureCard = ({ imageUrl, title, description, altText }) => (
  <div className="feature-card">
    <img loading="lazy" src={imageUrl} alt={altText} className="feature-image" />
    <div className="feature-content">
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  </div>
);

const features = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/197c3a6e6174320c97d5ca89a3c4e1027a92ca53279185ae9e286927459f0c80?apiKey=dadde3c8bb91485ea6a1326748697be7&",
    title: "Crop Guides",
    description: "A comprehensive library of guides covering various crops commonly grown in your area.",
    altText: "Crop guides",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc2c80626acaa1d61e5f339a1c695007db250e03dd4d7133dc0d950ed723cf2e?apiKey=dadde3c8bb91485ea6a1326748697be7&",
    title: "Market Trends & Analysis",
    description: "Provide insights into current and future agricultural market trends in your area.",
    altText: "Market trends and analysis",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec5981dff822dff4f290649f493728f175fb3bd7f559c142fb9aaac6458178d4?apiKey=dadde3c8bb91485ea6a1326748697be7&",
    title: "Sustainable Farming Practices",
    description: "Offer educational content on sustainable farming techniques that benefit both the environment and farmers' long-term success.",
    altText: "Sustainable farming practices",
  },
];

const AgriculturalServices = () => (
  <>
    <div className="features-container">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
    <style jsx>{`
      .features-container {
        margin-top: 55px;
        padding: 0 1px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-around;
      }
      @media (max-width: 991px) {
        .features-container {
          flex-direction: column;
          align-items: stretch;
          margin-top: 40px;
          gap: 0;
        }
      }
      .feature-card {
        display: flex;
        flex-direction: column;
        color: #000;
        width: calc(33% - 20px);
      }
      @media (max-width: 991px) {
        .feature-card {
          width: 100%;
          margin-top: 40px;
        }
      }
      .feature-image {
        aspect-ratio: 1.49;
        object-fit: cover;
        width: 100%;
      }
      .feature-content {
        display: flex;
        margin-top: 21px;
        flex-direction: column;
        padding: 0 24px;
      }
      @media (max-width: 991px) {
        .feature-content {
          padding: 0 20px;
        }
      }
      .feature-title {
        text-align: center;
        font: 400 20px 'Outfit', sans-serif;
      }
      .feature-description {
        margin-top: 11px;
        font: 300 18px 'Outfit', sans-serif;
      }
    `}</style>
  </>
);

export default AgriculturalServices;