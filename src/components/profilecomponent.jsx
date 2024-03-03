import React from "react";

// Style Component
const styles = `
  .profileCard {
    border-radius: 20px;
    background-color: #0ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    height: 30px;
    width: 100%;
    padding: 25px;
  }
  .profileImage {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 50px;
  }
  .profileInfo {
    display: flex;
    
    align-items: center;
    gap: 10px;
    margin: auto 0;
  }
  .nameLocationWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  .name {
    color: #000;
    text-align: center;
    flex-grow: 1;
    margin-top: -5px;
    font: 400 25px Outfit, sans-serif;
  }
  .indicator {
    background-color: #048e44;
    border-radius: 50%;
    height: 8px;
    margin-top: 8px;
  }
  .locationWrapper {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-size: 18px;
    color: #000;
    font-weight: 300;
    white-space: nowrap;
    text-align: center;
  }
  .location {
    font-family: Outfit, sans-serif;
  }
  .locationIndicator {
    background-color: #048e44;
    border-radius: 50%;
    align-self: start;
    margin-top: 5px;
    width: 8px;
    height: 8px;
  }
  @media (max-width: 991px) {
    .profileCard {
      max-width: 100%;
      margin-top: 10px;
      flex-wrap: wrap;
      padding-right: 20px;
    }
    .profileInfo, .nameLocationWrapper, .locationWrapper {
      max-width: 100%;
      flex-wrap: wrap;
      white-space: initial;
    }
  }
`;

function ProfileCard1() {
  return (
    <>
      <style jsx>{styles}</style>
      <section className="profileCard">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3168f6605071147958c90c5c80b2d6912d7b7d5aa60f9eaef9c356ded0b922ff?apiKey=dadde3c8bb91485ea6a1326748697be7&"
          alt="Profile Image"
          className="profileImage"
        />
        <div className="profileInfo">
          <div className="nameLocationWrapper">
            <h3 className="name">Jaspreet Singh</h3>
            <div>
              <div className="indicator" />
              <div className="indicator" />
            </div>
          </div>
          <div className="locationWrapper">
            <div className="location">Ludhiana</div>
            <div className="locationIndicator" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileCard1;