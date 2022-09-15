import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { RaceObjModel } from "../../../../models/raceObj.model"



export const Terms: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

    const StyledButton = styled(Button)`
    background-color: white;
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
                <h1>תקנון</h1>
                <h3>{eventObj.comments}</h3>
                {/* <StyledButton className="sign-btn" href={eventObj.resultsUrl} 
                sx={{  }}
                variant="contained">לחץ לתוצאות</StyledButton> */}
            </div>



        </div >
    )
}