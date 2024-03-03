import React from 'react';

const ImageWithTitle = ({ imageUrl, alt, title }) => (
  <div className="image-with-title" style={{
    position: 'absolute',
    height: '30vh',


  }}>
    <img src={imageUrl} alt={alt} className="image" />
    <div className="title">{title}</div>
  </div>
);

const TextField = ({ label, name, type = 'text' }) => (
  <label className="text-field" style={{
    
    width: '70vh',
  }}>
    {label}
    <input type={type} id={name} name={name} className="input" placeholder={name} style={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '20px',
      
      padding: '10px',
      backgroundColor: '#f2f2f2',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '10px',
    }} />
  </label>
);

const RegistrationForm = () => {
  const formItems = [
    { label: 'Full Name', name: 'fullName' },
    { label: 'Age', name: 'age', type: 'number' },
    { label: 'Address', name: 'address' },
    { label: 'Crops You Grow', name: 'crops' },
  ];

  return (
    <form className="form" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'center',
    }}>
      {formItems.map((item) => (
        <TextField key={item.name} label={item.label} name={item.name} type={item.type} />
      ))}
      <button type="submit" className="register-button" style={{
        width: '40vh',
        borderRadius: '20px',
        hover: 'pointer',
        
      }}>Register</button>
    </form>
  );
};

const Login1 = () => (
  <>
    <header className="header">

    </header>

    <main className="main-content">
      <div style={{
        display: 'flex',
        // flexDirection: 'column',
        gap: '20px',
        justifyContent: 'space-evenly',
      }}>

        <section className="registration-section" style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          width: '50vh',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',


        }}>
          <div style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2f692dda8237734f2ce40b0c3c7999f754504bcadd9b57cd3ae20fee740d63a3?apiKey=dadde3c8bb91485ea6a1326748697be7&"
              alt="Farmers Konnect Logo"

              title="Farmers Konnect"
              style={{
                width: '10%',
                fontSize: '2rem',
              }}
            />

            <h2 style={{
              fontSize: '2rem',
            }}>Farmers Konnect</h2>

          </div>
          <h2>Register Yourself</h2>
          <RegistrationForm />
        </section>
        <aside className="info-aside">
          <ImageWithTitle
            imageUrl="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7696d4fa7050c45a537621a9d06ff28334789a87a32948f9457e5edd7143b326?apiKey=dadde3c8bb91485ea6a1326748697be7&"
            alt="Empowering Farmers, Growing Together"
            title="Farmers Konnect <br /> Empowering Farmers, Growing Together"
          />
          <h2>Farmers Konnect
Empowering Farmers, Growing Together</h2>
        </aside>
      </div>
    </main>
    <style jsx>{`
      .header, .main-content, .registration-section, .info-aside, .form {
        display: flex;
        flex-direction: column;
      }

      .header {
        align-items: center;
      }

      .main-content {
        display: flex;
        justify-content: space-between;
        gap: 20px;
      }

      .registration-section, .info-aside {
        flex: 1;
      }

      .image-with-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }

      .image {
        width: 100%;
        height: auto;
        object-fit: cover;
      }

      .title {
        font-size: 1rem;
        text-align: center;
      }

      .text-field {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
      }

      .input {
        padding: 8px;
        margin-top: 4px;
      }

      .register-button {
        background-color: #2e383b;
        color: #ffffff;
        padding: 10px;
        border: none;
        cursor: pointer;
      }

      @media (max-width: 991px) {
        .main-content {
          flex-direction: column;
        }
      }
    `}</style>
  </>
);

export default Login1;