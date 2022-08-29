import { HeaderTitle } from "../../components/HeaderTitle";
import { RaceObjModel } from "../../models/raceObj.model";
import { EnrollmentTable } from "./enrollment-table/EnrollmentTable";


export const Enrollment:React.FC<{eventObj:RaceObjModel}> = ({ eventObj }) => {


    return (
        <div>
            <HeaderTitle titleText={'הרשמה'} />
            <EnrollmentTable eventObj={eventObj} />
        </div>
    )
}