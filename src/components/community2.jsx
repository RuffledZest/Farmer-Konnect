import React from "react";

// UserCard Component
const UserCard = ({ imageUrl, name, location, time }) => {
    return (
        <article className="user-card">
            <section className="user-info">
                <img loading="lazy" src={imageUrl} alt={`${name}'s profile`} className="profile-image" />
                <div className="user-details">
                    <div className="user-name">{name}</div>
                    <div className="user-location">{location}</div>
                </div>
            </section>
            <div className="time-stamp">{time}</div>
        </article>
    );
};

const UserCardList = () => {
    return (
        <>
            <div style={{
                // backgroundColor: '#048E44',
                // // 

                // width: '60vh',
            }}>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    width: '60vh',
                }}>

                    <UserCard
                        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3168f6605071147958c90c5c80b2d6912d7b7d5aa60f9eaef9c356ded0b922ff?apiKey=dadde3c8bb91485ea6a1326748697be7&"
                        name="Jaspreet Singh"
                        location="Ludhiana"
                        time="12:05 p.m."

                    />
                    <UserCard
                        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3168f6605071147958c90c5c80b2d6912d7b7d5aa60f9eaef9c356ded0b922ff?apiKey=dadde3c8bb91485ea6a1326748697be7&"
                        name="Jaspreet Singh"
                        location="Ludhiana"
                        time="12:05 p.m."

                    />
                    <UserCard
                        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3168f6605071147958c90c5c80b2d6912d7b7d5aa60f9eaef9c356ded0b922ff?apiKey=dadde3c8bb91485ea6a1326748697be7&"
                        name="Jaspreet Singh"
                        location="Ludhiana"
                        time="12:05 p.m."

                    />
                    <UserCard
                        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3168f6605071147958c90c5c80b2d6912d7b7d5aa60f9eaef9c356ded0b922ff?apiKey=dadde3c8bb91485ea6a1326748697be7&"
                        name="Jaspreet Singh"
                        location="Ludhiana"
                        time="12:05 p.m."

                    />
                    <UserCard
                        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3168f6605071147958c90c5c80b2d6912d7b7d5aa60f9eaef9c356ded0b922ff?apiKey=dadde3c8bb91485ea6a1326748697be7&"
                        name="Jaspreet Singh"
                        location="Ludhiana"
                        time="12:05 p.m."

                    />
                    <UserCard
                        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3168f6605071147958c90c5c80b2d6912d7b7d5aa60f9eaef9c356ded0b922ff?apiKey=dadde3c8bb91485ea6a1326748697be7&"
                        name="Jaspreet Singh"
                        location="Ludhiana"
                        time="12:05 p.m."

                    />
                    
                </div>
            </div>
            {/* Reuse UserCard for other entries */}
            <style jsx>{`
        .user-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: rgba(4, 142, 68, 0.15);
          border-radius: 20px;
          padding: 24px 15px;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .profile-image {
          width: 50px;
          aspect-ratio: 1;
          object-fit: cover;
          border-radius: 50%;
        }

        .user-details {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font: 400 25px Outfit, sans-serif;
        }

        .user-location {
          margin-top: 8px;
          font: 300 18px Outfit, sans-serif;
        }

        .time-stamp {
          font: 300 14px Outfit, sans-serif;
          white-space: nowrap;
        }

        @media (max-width: 991px) {
          .user-card {
            flex-direction: column;
          }

          .user-info {
            flex-direction: column;
            align-items: center;
          }

          .time-stamp {
            margin-top: 20px;
          }
        }
      `}</style>
        </>
    );
};

export default UserCardList;