import { Button } from "@mui/material"
import { RaceObjModel } from "../../../../models/raceObj.model"



export const Results: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {





    return (
        <div className="resaluts-container">
            <div>
                <h1>תוצאות</h1>
                <Button className="sign-btn" href={eventObj.registrationUrl} variant="contained">לחץ לתוצאות</Button>
            </div>



        </div >
    )
}