import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material"
import { RaceObjModel } from "../../../../models/raceObj.model"





export const Terms: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

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

            <h1>תקנון</h1>


            <h3>
                {eventObj.terms}
            </h3>

            {/* <div className="terms-btn"> */}



            {eventObj.termLinks && eventObj.termLinks.map(link =>


                <a href={link.link} key={link.link} target="_blank">
                    <button className="main-btn" >{link.name}</button>
                </a>



            )}
            {/* </div> */}




            {/* <h3>{eventObj.comments}</h3> */}
            {/* <PdfDownloader eventObj={eventObj}/> */}

        </div>




    )
}