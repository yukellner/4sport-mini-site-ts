import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material"
import { RaceObjModel } from "../../../../models/raceObj.model"





export const Medical: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

    const StyledButton = styled(Button)`
    justify-content: flex-start;
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
        <div className="terms-container">

            <h1>הצהרת בריאות</h1>

           
            <h3>
                {eventObj.terms}
            </h3>

            {/* <div className="terms-btn"> */}



            {eventObj.medicalLinks && eventObj.medicalLinks.map(link =>
               
                    <StyledButton key={link.link}  className="sign-btn" href={link.link}
                        sx={{}}
                        variant="outlined">

                        {/* <FontAwesomeIcon href={eventObj.wazeDirection} className="icon" icon={faDownload} /> */}
                        {link.name}
                    </StyledButton>
                

            )}
            {/* </div> */}




            {/* <h3>{eventObj.comments}</h3> */}
            {/* <PdfDownloader eventObj={eventObj}/> */}

        </div>




    )
}