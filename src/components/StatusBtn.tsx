import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { IEvent } from "../models/Event";


export const StatusBtn: React.FC<{ event: IEvent, goToRegistration?: () => void }> = ({ event, goToRegistration }) => {
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
      background-color: var(--backgroundColorJson);
      color: var(--white);
      &:hover {
        background-color: ${event.foregroundColor};
        color:${event.backgroundColor};
        outline:1px ${event.backgroundColor} solid;
      }
    `;

    function registrationBtnClicked() {
        if(goToRegistration) {
            goToRegistration()
            return
        }
        window.location.href = event.registrationUrl
    }

    return (
        <>
            <div className="btn-status">
                {(event.status === "registration") && (eventTime=== 'before-race') && <StyledButton onClick={registrationBtnClicked} variant="contained">לחץ להרשמה</StyledButton>}
                {(event.status === "registration") && (eventTime=== 'expired') && <StyledButton href={event.resultsUrl} variant="contained">לחץ לתוצאות</StyledButton>}
                {(event.status != "registration") && (eventTime=== 'before-race') && (event.showParticipants ? <StyledButton href={event.participantsListUrl} variant="contained">לחץ לרשימת המשתתפים</StyledButton> : <h3 style={{fontSize: '1.17em'}}>ההרשמה הסתיימה</h3>)}
                {(event.status != "registration") && (eventTime=== 'expired') && <StyledButton href={event.resultsUrl} variant="contained">לחץ לתוצאות</StyledButton>}
            </div>
        </>
    )
}