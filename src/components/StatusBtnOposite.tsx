import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { IEvent } from "../models/Event";

export const StatusBtnOposite: React.FC<{ event: IEvent }> = ({ event }) => {
    const [eventStatus, setEventStatus] = useState<string>('registration')
    const [eventTime, setEventTime] = useState<string>()

    var dateString = event.dateTime
    dateString = dateString.slice(0, 8)
    dateString = dateString.substr(3, 2) + "/" + dateString.substr(0, 2) + "/" + dateString.substr(6, 4);
    var date = new Date(dateString); // some mock date
    var DATE_IN_MS = date.getTime();

    const handleEventStatus = () => {
        (event.status === "registration") ? setEventStatus('registration') : setEventStatus('registration-close');
        (DATE_IN_MS < Date.now()) ? setEventTime('expired') : setEventTime('before-race');
        
    }

    useEffect(() => {
        handleEventStatus()
        
    }, [])

    const StyledButton = styled(Button)`
    background-color: var(--white);
    color: black;
    &:hover {
      background-color: ${event.foregroundColor};
      color:${event.backgroundColor};
      outline:1px ${event.backgroundColor} solid;
    }
    // &:focus {
    //   background-color: green;
    // }
  `;
    

    return (<>
    {/* {eventTime}
    {event.status} */}

       
       <div className="btn-status">
            {(event.status === "registration") && (eventTime=== 'before-race') && <StyledButton href={event.registrationUrl} variant="contained">לחץ להרשמה</StyledButton>}
            {(event.status === "registration") && (eventTime=== 'expired') && <StyledButton href={event.resultsUrl} variant="contained">לחץ לתוצאות</StyledButton>}
            {(event.status != "registration") && (eventTime=== 'before-race') && (event.showParticipants ? <StyledButton href={event.participantsListUrl} variant="contained">לחץ לרשימת המשתתפים</StyledButton> : <h3 style={{fontSize: '1.17em'}}>ההרשמה הסתיימה</h3>)}
            {(event.status != "registration") && (eventTime=== 'expired') && <StyledButton href={event.resultsUrl} variant="contained">לחץ לתוצאות</StyledButton>}
        </div>
    </>
      
                    

        
    )
}