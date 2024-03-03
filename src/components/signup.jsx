import React from "react";

// Reusable components
const ImageWithCaption = ({ src, alt, caption }) => (
  <figure>
    <img src={src} alt={alt} loading="lazy" />
    <figcaption>{caption}</figcaption>
  </figure>
);

const SectionHeader = ({ text }) => (
  <div className="section-header">{text}</div>
);

const Button = ({ text, onClick, className }) => (
  <button onClick={onClick} className={className}>{text}</button>
);

const LoginSignupComponent = () => {
  return (
    <>
      <style >{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .login-container { background-color: #fff; padding: 20px; }
        .content-wrapper { display: flex; gap: 20px; @media (max-width: 991px) { flex-direction: column; align-items: stretch; gap: 0; } }
        .left-column, .right-column { display: flex; flex-direction: column; line-height: normal; }
        .left-column { width: 39%; @media (max-width: 991px) { width: 100%; } }
        .right-column { width: 61%; margin-left: 20px; @media (max-width: 991px) { width: 100%; } }
        .welcome-text { color: #2e383b; text-align: center; margin-top: 114px; font-size: 55px; @media (max-width: 991px) { margin-top: 40px; font-size: 40px; } }
        .instruction-text { color: #000; text-align: center; margin-top: 37px; font-size: 20px; }
        .info-text { text-align: center; color: rgba(4,142,68,1); margin-top: 76px; }
        .action-button { border-radius: 25px; margin-top: 43px; padding: 14px 18px; text-align: center; font-size: 18px; }
        .login-button { background-color: #2e383b; color: #ebebeb; }
        .otp-button { background-color: rgba(4, 142, 68, 0.1); color: rgba(0, 0, 0, 0.25); }
        .section-header { font-size: 25px; color: #2e383b; text-align: center; margin-top: 55px; }
        .otp-inputs { display: flex; margin-top: 50px; justify-content: space-between; gap: 19px; @media (max-width: 991px) { max-width: 100%; flex-wrap: wrap; margin-top: 40px; } }
        .otp-input { border-bottom: 1px solid #048e44; background-color: #fff; width: 67px; height: 67px; }
        .visually-hidden { border: 0; clip: rect(0 0 0 0); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px; }
      `}</style>
      <div className="login-container">
        <div className="content-wrapper">
          <div className="left-column">
            
            <ImageWithCaption src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f692dda8237734f2ce40b0c3c7999f754504bcadd9b57cd3ae20fee740d63a3?apiKey=dadde3c8bb91485ea6a1326748697be7&" alt="Farmers Konnect Logo" caption="Farmers Konnect"  />
            <SectionHeader text="Welcome Back" />
            <div className="instruction-text">Login with your Mobile Number</div>
            <form>
              <label htmlFor="mobileNumber" className="visually-hidden">Enter Mobile Number</label>
              <input type="text" id="mobileNumber" className="otp-button" placeholder="Enter Mobile Number" aria-label="Enter Mobile Number" />
              <Button text="Generate OTP" className="action-button login-button" />
            </form>
            <div className="otp-inputs">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="otp-input" />
              ))}
            </div>
            <Button text="Log In" className="action-button login-button" />
            <div className="info-text">
              New User? <span className="signup-link">Sign Up</span>
            </div>
          </div>
          <div className="right-column">
            <ImageWithCaption
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7696d4fa7050c45a537621a9d06ff28334789a87a32948f9457e5edd7143b326?apiKey=dadde3c8bb91485ea6a1326748697be7&"
              alt="Empowering Farmers"
              caption="Farmers Konnect Empowering Farmers, Growing Together"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignupComponent;