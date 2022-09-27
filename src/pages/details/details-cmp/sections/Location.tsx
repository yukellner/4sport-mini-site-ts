import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { RaceObjModel } from "../../../../models/raceObj.model"
// import { faWater, brands  } from '@fortawesome/free-solid-svg-icons'
import { faWaze } from '@fortawesome/free-brands-svg-icons'
import styled from "@emotion/styled";
import { Button } from "@mui/material";




export const Location: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

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
        <div className="location-container">
            <div className="meeting-point">

                <a href={eventObj.wazeDirection} target="_blank">
                    <h3>לחץ לניווט לשטח הכינוס</h3>
                    <StyledButton className="sign-btn" href={eventObj.wazeDirection}
                        sx={{}}
                        variant="outlined">
                        <FontAwesomeIcon href={eventObj.wazeDirection} className="icon" icon={faWaze} />
                    </StyledButton>
                </a>


            </div>




        </div >
    )
}