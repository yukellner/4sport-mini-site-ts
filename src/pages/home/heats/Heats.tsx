import { RaceObjModel } from "../../../models/raceObj.model"
import {HeatBox} from "./components/HeatBox"


export const Heats:React.FC<{eventObj:RaceObjModel}> = ({eventObj}) => {


    return (
        <div className="main-heats">
            <h1 className="header-large">המקצים</h1>
            <div className="heats-container">
                {eventObj.heats.map(heat =>
                    <HeatBox key={heat.description} heat={heat} eventObj={eventObj}/>
                )}
                


            </div>

        </div>


    )
}

//https://nicepage.com/html-templates/preview/book-your-workout-2405683?device=desktop