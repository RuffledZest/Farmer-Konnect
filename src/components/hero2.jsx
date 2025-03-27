import React from "react";

// Image Component - reusable component for images
const ImageComponent = ({ imageURL, altText }) => (
  <>
    <img src={imageURL} alt={altText} className="responsive-image" />
    <style >{`

      .responsive-image {
        aspect-ratio: 1.89;
        object-fit: cover;
        object-position: center;
        width: 100%;
        margin-top: 16px;
        max-width: 1160px;
      }
      @media (max-width: 991px) {
        .responsive-image {
          max-width: 100%;
        }
      }
    `}</style>
  </>
);

// Main Component
const DisplayImage = () => {
  return (
    <>
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        
      
      }}>
        <ImageComponent 
          imageURL="https://cdn.builder.io/api/v1/image/assets/TEMP/84fb55883540b948116b6a6bd217def0297d763266d83225f2d14069f8ebe172?apiKey=dadde3c8bb91485ea6a1326748697be7&" 
          altText="Descriptive text about the image" 
        />
      </main>
    </>
  );
};

export default DisplayImage;