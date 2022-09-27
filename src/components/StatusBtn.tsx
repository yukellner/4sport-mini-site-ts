import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { sign } from "crypto";
import { useEffect, useState } from "react";
import { RaceObjModel } from "../models/raceObj.model";


export const StatusBtn: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {

    
    const [eventStatus, setEventStatus] = useState<string>('registration')
    const [eventTime, setEventTime] = useState<string>()

    var dateString = eventObj.dateTime
    dateString = dateString.slice(0, 8)
    dateString = dateString.substr(3, 2) + "/" + dateString.substr(0, 2) + "/" + dateString.substr(6, 4);
    var date = new Date(dateString); // some mock date
    var DATE_IN_MS = date.getTime();

    const handleEventStatus = () => {
        (eventObj.status === "registration") ? setEventStatus('registration') : setEventStatus('registration-close');
        (DATE_IN_MS < Date.now()) ? setEventTime('expired') : setEventTime('before-race');
        
    }

    useEffect(() => {
        handleEventStatus()
        
    }, [])

    const StyledButton = styled(Button)`
    background-color: var(--backgroundColorJson);
    color: var(--white);
    &:hover {
      background-color: ${eventObj.foregroundColor};
      color:${eventObj.backgroundColor};
      outline:1px ${eventObj.backgroundColor} solid;
    }
    // &:focus {
    //   background-color: green;
    // }
  `;
    

    return (<>
    {/* {eventTime}
    {eventObj.status} */}

       
       <div className="btn-status">
            {(eventObj.status === "registration") && (eventTime=== 'before-race') && <StyledButton   href={eventObj.registrationUrl} variant="contained">לחץ להרשמה</StyledButton>}
            {(eventObj.status === "registration") && (eventTime=== 'expired') && <StyledButton   href={eventObj.resultsUrl} variant="contained">לחץ לתוצאות</StyledButton>}
            {(eventObj.status != "registration") && (eventTime=== 'before-race') && (eventObj.showParticipants ? <StyledButton   href={eventObj.participantsListUrl} variant="contained">לחץ לרשימת המשתתפים</StyledButton> : <h3 style={{fontSize: '1.17em'}}>ההרשמה הסתיימה</h3>)}
            {(eventObj.status != "registration") && (eventTime=== 'expired') && <StyledButton   href={eventObj.resultsUrl} variant="contained">לחץ לתוצאות</StyledButton>}
        </div>
    </>
      
                    

        
    )
}