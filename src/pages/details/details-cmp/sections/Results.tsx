import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { RaceObjModel } from "../../../../models/raceObj.model"



export const Results: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

    const StyledButton = styled(Button)`
    background-color: var(--white);
    color: ${eventObj.backgroundColor};
    &:hover {
      background-color: ${eventObj.foregroundColor};
      color:${eventObj.backgroundColor};
      outline:1px ${eventObj.backgroundColor} solid;
    }
    // &:focus {
    //   background-color: green;
    // }
  `;



    return (
        <div className="resaluts-container">
            <div>
                <h1>תוצאות</h1>
                <a href={eventObj.resultsUrl}>
                  <button className="main-btn">לחץ לתוצאות</button>
                </a>
                {/* <StyledButton className="sign-btn" href={eventObj.resultsUrl} 
                sx={{  }}
                variant="contained">לחץ לתוצאות</StyledButton> */}
            </div>



        </div >
    )
}