import { Button } from "@mui/material"
import { RaceObjModel } from "../../../models/raceObj.model"


export const EnrollmentCmp: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {
    return (
        <div className="main-enrollment vh-80">
            <div className="background-home"></div>
            <div className="header-home">
                <h1>{eventObj.description} 2022</h1>
                <Button className="button-border" variant="contained">הרשמה</Button>
            </div>

        </div>
    )
}