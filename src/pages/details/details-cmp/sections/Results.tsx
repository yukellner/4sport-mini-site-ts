import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { IEvent } from "../../../../models/Event"

export const Results: React.FC<{ event: IEvent }> = ({ event }) => {
    styled(Button)`
      background-color: var(--white);
      color: ${event.backgroundColor};
      &:hover {
        background-color: ${event.foregroundColor};
        color:${event.backgroundColor};
        outline:1px ${event.backgroundColor} solid;
      }
    `;

    return (
        <div className="resaluts-container">
            <div>
                <h1>תוצאות</h1>
                <a href={event.resultsUrl}>
                    <button className="main-btn">לחץ לתוצאות</button>
                </a>
            </div>
        </div >
    )
}