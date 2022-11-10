import styled from "@emotion/styled";
import { Button } from "@mui/material"
import { StatusBtn } from "../../../components/StatusBtn";
import { IEvent } from "../../../models/Event"

export const HomePageCmp: React.FC<{ event: IEvent }> = ({ event }) => {
    styled(Button)`
      background-color: var(--backgroundColorJson);
      color: var(--fontColorJson);
      border: unset;
      box-sizing: border-box;
      margin-top: 1rem;
      &:hover {
        box-sizing: border-box;
        border: unset;
        background-color: ${event.foregroundColor};
        color:${event.backgroundColor};
      }
    `;

    return (
        <div className="main-home-page vh-80">
            <div className="background-home"></div>
            <div className="dark-home"></div>
            <div className="header-home">
                <div>
                    <h1>{event.description}</h1>
                    {(event.status === 'registration') && <h2 className="hero">ההרשמה בעיצומה!</h2>}
                </div>
                <div>
                    <StatusBtn event={event}/>
                </div>
            </div>
        </div>
    )
}