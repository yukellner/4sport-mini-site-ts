import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { StatusBtn } from "../../../../components/StatusBtn"
import { IHeat } from "../../../../models/Heat"
import { IEvent } from "../../../../models/Event"


export const HeatBox: React.FC<{ heat: IHeat, event: IEvent }> = ({ heat, event }) => {
    const [raceType, setRaceType] = useState('race')
    styled(Button)`
      background-color: --backgroundColorJson;
      color: var(--white);
      &:hover {
        background-color: ${event.foregroundColor};
        color:${event.backgroundColor};
        outline:1px ${event.backgroundColor} solid;
      }
    `;

    useEffect(() => {
        setRaceType(event.eventType)
    }, [])

    return (
        <div className="main-heat-container">
            <div className="heat-des">
                <div>
                    <div className="heat-details">

                        <h3>{heat.description}</h3>
                        {heat.amami ?  <h3>עממי</h3> : <h3>תחרותי</h3>}
                        <StatusBtn  event={event}  />
                    </div>
                </div>
            </div>
            <div className="heat-box">
                <div>
                    {raceType === 'run' && <span className="material-icons icon">
                        directions_run
                    </span>}
                    {raceType === 'swim' && <span className="material-icons icon">
                        pool
                    </span>}
                    {raceType === 'bike' && <span className="material-icons icon">
                        directions_bike
                    </span>}
                    {raceType === 'tri' &&
                        <span className="material-icons icon">
                            directions_run
                        </span>}
                </div>
            </div>
        </div>
    )
}