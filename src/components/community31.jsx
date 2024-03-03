import React from "react";

const ImageContainer = ({ imgSrc, imgAlt, className }) => (
    <div className={className}>
        <img loading="lazy" src={imgSrc} alt={imgAlt} className="image" />
    </div>
);

function ChatUI() {
    return (
        <>
            <style jsx>{`
        .chatContainer {
          border-radius: 20px;
          background-color: rgb(218 238 227);
          width: 100%;
          display: flex;
          margin-top: 11px;
          padding-left: 12px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .chatContainer {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .sendMessageWrapper {
          display: flex;
          gap: 6px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .sendMessageWrapper {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .iconContainer {
          border-radius: 20px;
          background-color: #05ffff;
          display: flex;
          aspect-ratio: 1.15;
          justify-content: center;
          align-items: center;
          padding: 9px 13px;
        }
        .image {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 30px;
        }
        .inputPlaceholder {
          border-radius: 20px;
          background-color: white;
          flex-grow: 1;
          justify-content: center;
          align-items: start;
          color: rgba(0, 0, 0, 0.5);
          white-space: nowrap;
          text-align: center;
          padding: 15px 60px 15px 28px;
          font: 300 20px 'Outfit', sans-serif;
        }
        @media (max-width: 991px) {
          .inputPlaceholder {
            white-space: initial;
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .secondaryIconsWrapper {
          align-self: start;
          display: flex;
          gap: 14px;
        }
        .iconSmallContainer {
          border-radius: 20px;
          background-color: rgba(4, 255, 240, 0.83);
          display: flex;
          aspect-ratio: 1.04;
          justify-content: center;
          align-items: center;
          width: 56px;
          height: 56px;
          margin: auto 0;
          padding: 0 14px;
        }
        .thirdIconContainer {
          border-radius: 20px;
          background-color: rgba(4, 142, 68, 0.05);
          display: flex;
          aspect-ratio: 1;
          justify-content: center;
          align-items: center;
          width: 65px;
          height: 65px;
          padding: 0 4px;
        }
      `}</style>

            <section className="chatContainer">
                <div className="sendMessageWrapper">
                    {/* <ImageContainer
                        imgsrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a394b4a4bd408b1e1766b4c521db13e16c68d436a4fa0270879af236bdb80ede?apiKey=dadde3c8bb91485ea6a1326748697be7&" imgAlt="Icon"
                        className="iconContainer"
                    /> */}
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="30" height="30" fill="url(#pattern0)" />
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1_310" transform="scale(0.01)" />
                            </pattern>
                            <image id="image0_1_310" width="100" height="100" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
                    <div style={{
                        marginTop: "-17px",
                        width: "30vh",
                    }} className="inputPlaceholder">Write Messages...</div>
                </div>
                <div className="secondaryIconsWrapper">
                    {/* <ImageContainer
            imgsrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9b50a91c104a21375238c27d1aeca5710427ac31c05842b74f62edb6e2e8c56c?apiKey=dadde3c8bb91485ea6a1326748697be7&"imgAlt="Plus Icon"
            className="iconSmallContainer"
          /> */}
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="30" height="30" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_1_311" transform="scale(0.01)"/>
</pattern>
<image id="image0_1_311" width="100" height="100" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>


                    {/* <div className="thirdIconContainer">
            <ImageContainer
              imgsrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8da0700bda505ace84a7942b6235b46d4cf7ad68488fc58f33552f61c03eb78e?apiKey=dadde3c8bb91485ea6a1326748697be7&"imgAlt="Emoji Icon"
              className="iconSmallContainer"
            />
          </div> */}
                    

                </div>
            </section>
        </>
    );
}

export default ChatUI;