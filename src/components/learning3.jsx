import React from 'react';

const FarmerTestimonial = ({ quote, name, location, imageUrl }) => (
  <section className="testimonial">
    <img src={imageUrl} alt="Farmer" className="testimonial-image" />
    <div className="testimonial-quote">{quote}</div>
    <div className="testimonial-info">
      <div className="farmer-name">{name}</div>
      <div className="farmer-location">{location}</div>
    </div>
  </section>
);

const LearningRating = () => (
  <>
    <header className="page-header">
      <h1>Empowering and motivating farmers through real-world examples of success</h1>
      <p>Feel the happiness of India’s Farmer</p>
    </header>
    <main>
      <div className="image-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7800bfcebed49c1fe8afd58be63422fcad9d3209f0f312bde5c551b58dc2a6de?apiKey=dadde3c8bb91485ea6a1326748697be7&" alt="" className="farmer-image" />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f201e6afc3ed7a1261787c164d12ce7fd09c83b731dc159e101ed3a279a0797d?apiKey=dadde3c8bb91485ea6a1326748697be7&" alt="" className="farmer-image" />
      </div>
      <FarmerTestimonial 
        quote="Increased yield by 15% thanks to data-driven recommendations. Thanks, Farmers Konnect!" 
        name="Jaswinder Singh" 
        location="Farmer, Ludhiana" 
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/94d1a80349369370706b567f65643c52cb313cd8bcd1ebc589a2eed28c86a7c0?apiKey=dadde3c8bb91485ea6a1326748697be7&" 
      />
      <FarmerTestimonial 
        quote="Increased yield by 15% thanks to data-driven recommendations. Thanks, Farmers Konnect!" 
        name="Jaswinder Singh" 
        location="Farmer, Ludhiana" 
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b30a58d3cf01b4669faa4f2183285e9fc0a790364d69446ee0568d5ecfa849e7?apiKey=dadde3c8bb91485ea6a1326748697be7&" 
      />
    </main>
    <style jsx>{`
      .page-header {
        background-color: #f0f9f4;
        margin-top: 82px;
        padding: 25px;
      }
      @media (max-width: 991px) {
        .page-header {
          max-width: 100%;
          padding: 20px;
          margin-top: 40px;
        }
      }
      h1 {
        color: #048e44;
        font: 400 20px Outfit, sans-serif;
      }
      p {
        color: #1e1e1e;
        margin-top: 31px;
        font: 400 35px/50px Outfit, -apple-system, Roboto, Helvetica, sans-serif;
      }
      .image-container {
        display: flex;
        margin-top: 101px;
        gap: 18px;
      }
      @media (max-width: 991px) {
        .image-container {
          margin-top: 40px;
        }
      }
      .testimonial {
        border-radius: 8px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 41px 29px;
        margin-top: 40px;
      }
      .testimonial-image {
        width: 120px;
        max-width: 100%;
      }
      .testimonial-quote {
        color: #000;
        margin-top: 28px;
        font: 400 18px/27px Cabin, -apple-system, Roboto, Helvetica, sans-serif;
      }
      .testimonial-info {
        display: flex;
        margin-top: 99px;
        justify-content: space-between;
      }
      .farmer-name {
        font: 400 18px/150.2% Cabin, -apple-system, Roboto, Helvetica, sans-serif;
      }
      .farmer-location {
        margin-top: 9px;
        font: 600 14px/150.6% Cabin, -apple-system, Roboto, Helvetica, sans-serif;
      }
    `}</style>
  </>
);

export default LearningRating;