import SellerSection from "./src/components/choice1";
import React from "react";
import { Global, css } from "@emotion/react";
import App1 from "./src/components/navbar";


const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
`;

function Roles(){
    return(
        <>
        

        <App1 />
        <svg style={{
                    
                    position: 'absolute',
                    fontWeight: '200',
                    right: '580px',
                    top: '180px',
                    zIndex: '-1',

                }} width="426" height="72" viewBox="0 0 426 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="11.5225" width="424.486" height="60" rx="15" transform="rotate(-1.55545 0 11.5225)" fill="#D3E59F" />
                </svg>
            <Global styles={globalStyles} />
            <h1 style={{
                textAlign: 'center',
                marginTop: '50px',
                fontSize: '50px',
                fontFamily: 'Outfit',
            
            }}>Choose Your</h1>
            <h1 style={{
                textAlign: 'center',
                marginBottom: '50px',
                fontSize: '50px',
                fontFamily: 'Outfit',
            
            
            }}>Business Role</h1>
            <SellerSection />
        </>
    )
}

export default Roles;


// function Roles(){
//     return(
//         <>
//             <h1 style={{
//                 textAlign: 'center',
//                 marginTop: '50px',
//                 fontSize: '50px',
//                 fontFamily: 'Outfit',
            
//             }}>Choose Your</h1>
//             <h1 style={{
//                 textAlign: 'center',
//                 marginBottom: '50px',
//                 fontSize: '50px',
            
            
//             }}>Business Role</h1>
//             <SellerSection />
//         </>
//     )
// }


// export default Roles;