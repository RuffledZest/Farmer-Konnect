import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  color: #ffff;
  text-align: center;
  margin-top: 10px;
  font: 300 20px/65px 'Outfit', -apple-system, Roboto, Helvetica, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Hero = (props) => {
    return (
        <>
            <div style={{
                padding: '100px 20px',
                backgroundColor: 'black',
                
            }}>
                <StyledSection>

                <h2 style={{
                    position: 'relative',

                    textAlign: 'center',
                    fontSize: '50px',
                    zIndex: '10',
                    // fontFamily: 'Outfit',
                    
                     
                }}>Farmers Konnect
                </h2>
                <svg style={{
                    
                    position: 'absolute',
                    fontWeight: '200',
                    right: '430px',
                    top: '180px',
                    zIndex: '0',

                }} width="426" height="72" viewBox="0 0 426 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="11.5225" width="424.486" height="60" rx="15" transform="rotate(-1.55545 0 11.5225)" fill="#687e3a" />
                </svg>

                <h2 style={{
                    textAlign: 'center',
                    fontSize: '50px',
                    zIndex: '10',
                }}>
                    Empowering Farmers, Growing Together</h2>
                </StyledSection>
                <StyledSection>
                    <p>Get personalized crop recommendations, connect directly with buyers, and join a thriving community of farmers.</p>
                </StyledSection>
            </div>
        </>
    );
};

export default Hero;