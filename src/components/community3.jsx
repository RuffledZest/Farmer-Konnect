import React from "react";
import Boxie from "./chatboxpiece";
import UserCardList from "./community2";
import ProfileCard from "./community1";
import GalleryComponent from "./community0";
// import ChatHotKeys from "./community31";
import ChatUI from "./community31";

const ImageContainer = ({ src, alt, className }) => (
  <div className={`image-container ${className}`}>
    <img loading="lazy" src={src} alt={alt} className="image" />
  </div>
);

const StyledMessage = ({ children, className }) => (
  <div className={`styled-message ${className}`}
    style={{
      height: '30vh',

    }}
  >{children}</div>
);

export default function ChatInterface() {
  return (
    <>

      <div style={{
        display: 'flex',
        // flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>

        <ProfileCard />
        
        
        <div style={{
          display: 'flex',
          
          gap: '20px',
          justifyContent: 'space-evenly',
          alignItems: 'start',
        
        }}>
          <GalleryComponent />
          <div>
          <div style={{
            margin: '20px',
          }}>

            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              gap: '20px',
            }}>
              <UserCardList />



              <section style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
              }}>
                <div style={{
                  height: '80vh',
                  display: 'flex',
                  width: '90vh',
                  backgroundColor: '#048e4445',
                  borderRadius: '20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '20px',
                  flexDirection: 'column',
                  padding: '20px',

                }}>

                  <Boxie />

                </div>
                {/* <main className="message-input-area">
                    <ImageContainer
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a394b4a4bd408b1e1766b4c521db13e16c68d436a4fa0270879af236bdb80ede?apiKey=dadde3c8bb91485ea6a1326748697be7&"
                        alt="Add attachment"
                        className="attach-icon"
                    />
                    <StyledMessage>Write Messages...</StyledMessage>
                    <ImageContainer
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b50a91c104a21375238c27d1aeca5710427ac31c05842b74f62edb6e2e8c56c?apiKey=dadde3c8bb91485ea6a1326748697be7&"
                        alt="Send"
                        className="send-icon"
                    />
                    <ImageContainer
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da0700bda505ace84a7942b6235b46d4cf7ad68488fc58f33552f61c03eb78e?apiKey=dadde3c8bb91485ea6a1326748697be7&"
                        alt="More options"
                        className="more-options-icon"
                    />
                </main> */}
                {/* <ChatHotKeys /> */}
                <ChatUI />
              </section>

            </div>
          </div>


        </div>
        </div>
        
        </div>

      </div>


      <style jsx>{`
        .chat-header,
        .message-input-area {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }
        
        .message-input-area {
          margin-top: 10px;
        }

        @media (max-width: 991px) {
          .chat-header,
          .message-input-area {
            flex-direction: column;
          }
        }

        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          background-color: rgba(4, 142, 68, 0.05);
          padding: 18px;
        }

        .attach-icon,
        .send-icon,
        .more-options-icon {
          width: 65px;
          height: 65px;
        }

        .image {
          width: 100%;
          height: auto;
          aspect-ratio: 1;
          object-fit: cover;
        }

        .message-large,
        .message-medium,
        .message-small {
          border-radius: 20px;
          background-color: #d3e59f;
        }

        .message-large {
          width: 400px;
          height: 100px;
        }

        .message-medium {
          width: 330px;
          height: 100px;
          margin-top: 20px;
        }

        .message-small {
          width: 173px;
          height: 55px;
          margin-top: 35px;
        }

        .styled-message {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: rgba(0, 0, 0, 0.5);
          font-weight: 300;
          font-family: Outfit, sans-serif;
        }
      `}</style>
    </>
  );
}