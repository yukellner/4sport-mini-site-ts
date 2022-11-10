import { IEvent } from "../../../models/Event"
import {HeatBox} from "./components/HeatBox"

export const Heats:React.FC<{event: IEvent}> = ({event}) => {
    return (
        <div className="main-heats">
            <h1 className="header-large">המקצים</h1>
            <div className="heats-container">
                {event.heats.map(heat =>
                    <HeatBox key={heat.description} heat={heat} event={event}/>
                )}
            </div>
        </div>
    )
}