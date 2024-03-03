import React from 'react';

function ImageCard({src, alt, wrapperClass, imgClass}) {
  return (
    <div className={wrapperClass}>
      <img loading="lazy" src={src} alt={alt} className={imgClass} />
    </div>
  );
}

function GalleryComponent() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f692dda8237734f2ce40b0c3c7999f754504bcadd9b57cd3ae20fee740d63a3", alt: "First image description" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c93f8d7d7300001a16a7489e292a357907aff93e3c70ffffd591d055b98770b", alt: "Second image description" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/161280f710bce51aa3fe6a41e23068604fc9309667863139fc941d1fd7a396cf", alt: "Third image description" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/480d4c50103a827b762b6068729e1c24c68bb16acc71d155086c56f2111a044c", alt: "Fourth image description" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ed130d1704f686d1d61e11980e731f0b6880c9d579c7c3ca207b73148cbef1f", alt: "Fifth image description" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/463f8d4fc3a0a70fa76ce5fd8d64e55a5228674235e628a57b6fb9c289c78451", alt: "Sixth image description" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e754051568e63bafcafeb0899be3d582c32301ba76989b01bce9bc9b2d0df1a6", alt: "Seventh image description" }
  ];

  return (
    <>
      <section className="galleryContainer">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            alt={image.alt}
            wrapperClass={`imageWrapper ${
              index > 0 ? 'marginTop' : ''
            }`}
            imgClass="galleryImage"
          />
        ))}
      </section>
      <style jsx>{`
        .galleryContainer {
          border-radius: 20px;
          background-color: rgba(4, 142, 68, 0.15);
          display: flex;
          flex-direction: column;
          padding: 40px 20px;
        }
        .imageWrapper {
          border-radius: 15px;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 10px;
          aspect-ratio: 1.17;
        }
        .galleryImage {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 50px;
        }
        .marginTop {
          margin-top: 25px;
        }
        @media (max-width: 991px) {
          .imageWrapper:last-of-type {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default GalleryComponent;