
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { RaceObjModel } from "../../../../../models/raceObj.model"



export const PdfDownloader: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {


    const StyledButton = styled(Button)`
    background-color: var(--white);
    color: ${eventObj.backgroundColor};
    outline:1px ${eventObj.backgroundColor} solid;
    border:unset;
    
    &:hover {
        background-color: ${eventObj.foregroundColor};
        color:${eventObj.backgroundColor};
        outline:1px ${eventObj.backgroundColor} solid;
        border:unset;
    }
    // &:focus {
    //   background-color: green;
    // }
  `;


    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }



    return (
        <div>
            

                <StyledButton href={eventObj.backgroundColor} className="sign-btn" onClick={onButtonClick}
                    sx={{}}
                    variant="outlined">לחץ להורדת התקנון</StyledButton>
            

            
        </div>
    )
}