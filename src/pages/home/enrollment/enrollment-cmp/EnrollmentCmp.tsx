import styled from "@emotion/styled";
import { Button } from "@mui/material"
import { RaceObjModel } from "../../../../models/raceObj.model"


export const EnrollmentCmp: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

    const StyledButton = styled(Button)`
    background-color: var(--backgroundColorJson);
    color: var(--fontColorJson);
    border: unset;
    box-sizing: border-box;
    margin-top: 1rem;
    &:hover {
            box-sizing: border-box;
        border: unset;
      background-color: ${eventObj.foregroundColor};
      color:${eventObj.backgroundColor};
    //   border:1px ${eventObj.backgroundColor} solid;
    }
    // &:focus {
    //   background-color: green;
    // }
  `;


    return (
        <div className="main-enrollment vh-80">
            <div className="background-home"></div>
            <div className="dark-home"></div>
            <div className="header-home">
                <div>
                    {/* kenburns-top */}
                    {/* className="scale-up-center" */}
                    <h1>{eventObj.description}</h1>
                    <h2 className="hero">ההרשמה בעיצומה!</h2>
                </div>
                <div>
                    <a href={eventObj.registrationUrl}>
                        <button className="main-btn reverse-color">לחץ להרשמה</button>
                    </a>
                </div>
                {/* <StyledButton className="sign-btn" href={eventObj.registrationUrl}
                    sx={{}}
                    variant="outlined">
                    להרשמה
                </StyledButton> */}
            </div>

        </div>
    )
}