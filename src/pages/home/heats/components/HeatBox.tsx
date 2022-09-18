import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { HeatModel } from "../../../../models/heat.model"
import { RaceObjModel } from "../../../../models/raceObj.model"


export const HeatBox: React.FC<{ heat: HeatModel, eventObj: RaceObjModel }> = ({ heat, eventObj }) => {

    const [raceType, setRaceType] = useState('race')


    const StyledButton = styled(Button)`
    background-color: --backgroundColor;
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

    useEffect(() => {

        setRaceType(eventObj.eventType)



        // printJSON()
    }, [])


    return (
        <div className="main-heat-container">
            {/* <div className="heat-container"> */}
            <div className="heat-des">
                <div>
                    <div className="heat-details">

                        <h3>{heat.description}</h3>
                       {heat.amami ?  <h3>עממי</h3> : <h3>תחרותי</h3>}
                        {eventObj.status==="registration" ? <StyledButton className='sign-btn'
                            sx={{ color: eventObj.foregroundColor, backgroundColor: eventObj.backgroundColor }} href={eventObj.registrationUrl} variant="contained">לחץ

                            להרשמה</StyledButton> : <StyledButton className='sign-btn'
                            sx={{ color: eventObj.foregroundColor, backgroundColor: eventObj.backgroundColor }} href={eventObj.resultsUrl} variant="contained">לחץ

                            לתוצאות</StyledButton>}
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
            {/* </div> */}
        </div>
    )
}