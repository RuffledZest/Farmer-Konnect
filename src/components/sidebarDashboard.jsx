import React from "react";

const NavLink = ({ href, altText, imgSrc, sectionName }) => (
  <div className="nav-link">
    <img loading="lazy" src={imgSrc} alt={altText} className="icon" />
    <div className="link-text">{sectionName}</div>
  </div>
);

const SideNavigationBar = () => {
  const navLinks = [
    {
      href: "#",
      altText: "Farmers Konnect Logo",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f692dda8237734f2ce40b0c3c7999f754504bcadd9b57cd3ae20fee740d63a3?apiKey=dadde3c8bb91485ea6a1326748697be7&",
      sectionName: "Farmers Konnect",
    },
    {
      href: "#home",
      altText: "Home Icon",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c93f8d7d7300001a16a7489e292a357907aff93e3c70ffffd591d055b98770b?apiKey=dadde3c8bb91485ea6a1326748697be7&",
      sectionName: "Home",
    },
    // Add more navLinks objects as needed
  ];

  return (
    <nav>
      {navLinks.map(link => (
        <NavLink key={link.altText} {...link} />
      ))}
      <style >{`
        .nav-link {
          border-radius: 15px;
          background-color: rgba(4, 142, 68, 0.15);
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 5px 25px;
          margin-top: 25px;
          white-space: nowrap;
        }

        .icon {
          aspect-ratio: 1;
          object-fit: cover;
          width: 50px;
        }

        .link-text {
          font-family: Outfit, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }

        @media (max-width: 991px) {
          .nav-link {
            padding: 0 20px;
            white-space: initial;
          }
        }
      `}</style>
    </nav>
  );
};

export default SideNavigationBar;