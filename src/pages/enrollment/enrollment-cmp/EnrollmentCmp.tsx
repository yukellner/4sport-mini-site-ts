import {Button} from "@mui/material"
import { RaceObjModel } from "../../../models/raceObj.model"


export const EnrollmentCmp:React.FC<{eventObj:RaceObjModel}> = ({eventObj}) => {
    return (
        <div className="main-enrollment vh-80">
            <h1>{eventObj.description}</h1>
            <Button className="button-border" variant="contained">הרשמה</Button>

        </div>
    )
}