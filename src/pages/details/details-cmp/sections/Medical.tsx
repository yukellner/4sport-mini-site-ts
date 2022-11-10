import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { IEvent } from "../../../../models/Event"
import React from "react";

export const Medical: React.FC<{ event: IEvent }> = ({ event }) => {
    styled(Button)`
      justify-content: flex-start;
      background-color: var(--white);
      color: ${event.backgroundColor};
      target: blank;

      &:hover {
        background-color: ${event.foregroundColor};
        color:${event.backgroundColor};
        outline:1px ${event.backgroundColor} solid;
      }
    `;
    return (
        <div className="terms-container">
            <h1>הצהרת בריאות</h1>
            <h3>
                {event.terms}
            </h3>
            {event.medicalLinks && event.medicalLinks.map(link =>
                <a href={link.link} key={link.link} target="_blank">
                    <button className="main-btn">{link.name}</button>
                </a>
            )}
        </div>
    )
}