import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IEvent } from "../../../../models/Event"
import { faWaze } from '@fortawesome/free-brands-svg-icons'
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

export const Location: React.FC<{ event: IEvent }> = ({ event }) => {
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
        <div className="location-container">
            <div className="meeting-point">
                <h3>הגעה לשטח כינוס</h3>
                <a href={event.wazeDirection} target='_blank'>
                    <FontAwesomeIcon  className="icon" icon={faWaze} />
                </a>
            </div>
        </div >
    )
}