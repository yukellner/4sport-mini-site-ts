import { useEffect } from "react";
import { HeaderTitle } from "../../components/HeaderTitle";
import { RaceObjModel } from "../../models/raceObj.model";
import { EnrollmentTable } from "./enrollment-table/EnrollmentTable";


export const Enrollment: React.FC<{ eventObj: RaceObjModel, pageHeader: Function }> = ({ eventObj, pageHeader }) => {


    useEffect(() => {
        pageHeader("הרשמה")

    }, [])

    return (
        <div className="main-enrollment min-height">
            <HeaderTitle titleText={'הרשמה'} />
            <EnrollmentTable eventObj={eventObj} />
            
        </div>
    )
}