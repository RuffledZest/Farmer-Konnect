import GalleryComponent from "./src/components/community0";
import CropManager from "./src/components/homeDashboard";

function FinalDashboard(){
    return(
        <>
            <div style={{
                display: 'flex',
                // flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                justifyContent: 'space-evenly',
            }}>

            <GalleryComponent />
            <CropManager />




            </div>

        </>
    )
}

export default FinalDashboard;