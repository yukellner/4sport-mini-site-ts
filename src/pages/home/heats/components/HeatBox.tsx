import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { HeatModel } from "../../../../models/heat.model"
import { RaceObjModel } from "../../../../models/raceObj.model"


export const HeatBox: React.FC<{ heat: HeatModel, eventObj: RaceObjModel }> = ({ heat, eventObj }) => {

    const [raceType, setRaceType] = useState('race')




    useEffect(() => {

        setRaceType(eventObj.eventType)



        // printJSON()
    }, [])


    return (
        <div className="main-heat-container">

            <div className="heat-container">
                <div className="heat-des">
                    <div>
                        <h3>{heat.description}</h3>
                        <h3>מגיל {heat.minAge} עד גיל {heat.maxAge}</h3>
                        <Button className='sign-btn' 
                        sx={{ color: eventObj.foregroundColor, backgroundColor: eventObj.backgroundColor }}href={eventObj.participantsListUrl}  variant="contained">לחץ

                            להרשמה</Button>

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
        </div>
    )
}