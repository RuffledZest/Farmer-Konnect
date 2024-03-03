import React from "react";
import { Link } from 'react-router-dom';
const SellerCard = ({ imageUrl, altText, labelText, buttonText }) => (
  <article className="seller-card">
    <img loading="lazy" src={imageUrl} alt={altText} className="seller-image" />
    <div className="seller-info">
      <h3 className="seller-label">{labelText}</h3>
      <div className="button" ><Link to="/dashboard">{buttonText}</Link></div>
    </div>
  </article>
);

const SellerSection = () => (
  <>
    <section className="seller-section">
      <SellerCard
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/609d8f8ba4e2399257dd6ee2a80e0db697ce32b66f8c21cb3884f0a207f36d43?apiKey=dadde3c8bb91485ea6a1326748697be7&"
        altText="Product 1"
        labelText="Seller"
        buttonText="Lets’s Go"
      />
      <SellerCard
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f0bafc309b064d9ced6c0f6ab9d349d69bd996b831d9ac92ffe0750ec06b52c6?apiKey=dadde3c8bb91485ea6a1326748697be7&"
        altText="Product 2"
        labelText="Seller"
        buttonText="Lets’s Go"
      ></SellerCard>
    </section>
    
    <style jsx>{`
      .seller-section {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 20px;
        margin: 20vh;
        margin-top: -30px;
      }
      @media (max-width: 991px) {
        .seller-section {
          flex-direction: column;
          margin-top: 40px;
        }
      }
      .seller-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
        background-color: rgba(4, 142, 68, 0.1);
        font-size: 25px;
        color: #048e44;
        text-align: center;
        padding: 48px 76px;
        width: 40vh;
        transition: transform 0.3s ease;
      }
      .seller-card:hover{
        transform: scale(1.1);

      }
      @media (max-width: 991px) {
        .seller-card {
          padding: 20px;
        }
      }
      .seller-image {
        width: 216px;
        aspect-ratio: 1.1;
        object-fit: cover;
        margin-bottom: 28px;
      }
      .seller-info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .seller-label {
        font-family: Outfit, sans-serif;
        margin-bottom: 20px;
      }
      .button {
        font-family: Outfit, sans-serif;
        background-color: #fff;
        border-radius: 20px;
        padding: 16px 27px;
      }
    `}</style>
  </>
);

export default SellerSection;