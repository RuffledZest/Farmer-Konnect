import React from 'react';

const FarmerTestimonial = ({ imageUrl, testimonial, name, location, altText }) => (
  <div className="testimonial-card">
    <img src={imageUrl} alt={altText} className="testimonial-image" />
    <div className="testimonial-content">
      <p className="testimonial-text">{testimonial}</p>
      <div className="farmer-info">
        <div className="farmer-name">{name}</div>
        <div className="farmer-location">{location}</div>
      </div>
    </div>
  </div>
);

const FarmersKonnect = () => {
  const testimonials = [
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a17b674b93567979f8f88a6debea2610892352e8f70141b10e34949a7a172a3?apiKey=dadde3c8bb91485ea6a1326748697be7&",
      testimonial: "“Increased yield by 15% thanks to data-driven recommendations. Thanks, Farmers Konnect!”",
      name: "Jaswinder Singh",
      location: "Farmer, Ludhiana",
      altText: "Jaswinder Singh's Testimony",
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6f36684c3175fd761c9492c582823b5e5f7ce855c920bd34ecc0eb1c9ea613b?apiKey=dadde3c8bb91485ea6a1326748697be7&",
      testimonial: "\"Weather alerts saved my harvest from unexpected hailstorms. Farmers Konnect is a lifesaver.\"",
      name: "Jay Singh",
      location: "Farmer, Haryana",
      altText: "Jay Singh's Testimony",
    },
  ];

  return (
    <>
      <section className="farmers-konnect" style={{
        backgroundColor: 'black',
      }}>
        <div className="konnect-intro">
          <h2>Farmers about Farmers Konnect</h2>
          <p>Feel the happiness of India’s Farmer</p>
        </div>
        <div className="konnect-gallery">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/25fdbddd484eca0697a19fef50b7c19dfee6667ffb2abebd4a3a7439b2aff0aa?apiKey=dadde3c8bb91485ea6a1326748697be7&" alt="Gallery Image 1" className="gallery-image" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/14a37eb84874499d4422f74eb440f880a13d9899a60b2703dbf99e43fd40158a?apiKey=dadde3c8bb91485ea6a1326748697be7&" alt="Gallery Image 2" className="gallery-image" />
        </div>
        {testimonials.map((testimonial, index) => (
          <FarmerTestimonial key={index} {...testimonial} />
        ))}
      </section>
      <style >{`
        .farmers-konnect {
          background-color: #f0f9f4;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 50px 60px;
          margin-top: 100px;
        }
        @media (max-width: 991px) {
          .farmers-konnect {
            padding: 0 20px;
            margin-top: 40px;
          }
        }
        .konnect-intro h2, .konnect-intro p {
          text-align: center;
        }
        .konnect-intro h2 {
          color: #048e44;
          font-size: 20px;
        }
        .konnect-intro p {
          color: #1e1e1e;
          font-size: 45px;
        }
        @media (max-width: 991px) {
          .konnect-intro p {
            font-size: 40px;
          }
        }
        .konnect-gallery {
          display: flex;
          gap: 20px;
          margin-top: 120px;
        }
        @media (max-width: 991px) {
          .konnect-gallery {
            flex-direction: column;
            align-items: center;
            margin-top: 40px;
          }
        }
        .gallery-image {
          width: 100px;
          object-fit: cover;
        }
        @media (max-width: 991px) {
          .gallery-image {
            margin-top: 35px;
          }
        }
        .testimonial-card {
          border-radius: 7.695px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 41px 31px;
          margin-top: 40px;
        }
        .testimonial-image {
          width: 120px;
          aspect-ratio: 1;
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          color: #6d7d8b;
          margin-top: 24px;
        }
        .testimonial-text {
          color: #000;
          font-size: 18px;
        }
        .farmer-info {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .farmer-name {
          font-weight: 400;
        }
        .farmer-location {
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

export default FarmersKonnect;