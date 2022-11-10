import { useEffect } from "react";
import { HeaderTitle } from "../../components/HeaderTitle";
import { IEvent } from "../../models/Event";
import { EnrollmentTable } from "./enrollment-table/EnrollmentTable";


export const Enrollment: React.FC<{ event: IEvent, pageHeader: Function }> = ({ event, pageHeader }) => {


    useEffect(() => {
        pageHeader("הרשמה")

    }, [])

    return (
        <div className="main-enrollment min-height">
            <HeaderTitle titleText={'הרשמה'} />
            <EnrollmentTable event={event} />
            
        </div>
    )
}