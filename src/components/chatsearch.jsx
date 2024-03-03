import React from "react";
import ProfileCard1 from "./profilecomponent";

const Image = ({ src, alt }) => (
    <img loading="lazy" src={src} alt={alt} className="image" />
);

export default function ChatComponent() {
    return (
        <>
            <style jsx>{`
        .chatContainer {
          border-radius: 20px;
          background-color: #73ff05;
          display: flex;
          height: 20px;
          width: 50vh;
          flex:start;
          flex-grow: 1;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 23px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .chatContainer {
            max-width: 100%;
            display: flex;
            
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            flex-wrap: wrap;
            padding: 23px 20px 23px 20px;
          }
        }
        .chatTitle {
          color: #000;
          text-align: center;
          align-self: stretch;
          flex-grow: 1;
          margin: auto 0;
          font: 400 25px Outfit, sans-serif;
        }
        .userAvatarContainer {
          border-radius: 10px;
          height: 100%;
          background-color: #fff;
          align-self: stretch;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          justify-content: center;
          align-items: start;
          padding: 8px 15px 8px 15px;
        }
        @media (max-width: 991px) {
          .userAvatarContainer {
            padding-right: 20px;
          }
        }
        .image {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 40px;
          align-self: stretch;
          margin: auto 0;
        }
        .actionIcon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 50px;
          align-self: stretch;
          margin: auto 0;
        }
      `}</style>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
            }}>

                <div className="chatContainer">
                    <header className="chatTitle">Chat</header>
                    <div className="userAvatarContainer">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/38ea5c2c96f29f55234984f95621912a436f1f6117c59471d162ceee47f67a98?apiKey=dadde3c8bb91485ea6a1326748697be7&"
                            alt="User avatar"
                            style={{
                                height: "32px",
                            }}
                        />
                    </div>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac4401bdb19b783a11f4d1a1f19102cb70efd8c1521bd96ac312ca2d80f4c3be?apiKey=dadde3c8bb91485ea6a1326748697be7&"
                        alt="Action icon"
                        className="actionIcon"
                        style={{
                            height: "32px",
                        }}
                    />
                </div>
                <ProfileCard1 />



            </div>
        </>
    );
}