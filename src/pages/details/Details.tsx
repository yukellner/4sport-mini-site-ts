import { useEffect } from "react"
import { HeaderTitle } from "../../components/HeaderTitle"
import { RaceObjModel } from "../../models/raceObj.model"
import { DetailsContent } from "./details-cmp/DetailsContent"
import { DetailsMainHeader } from "./details-cmp/DetailsMainHeader"
// import { DetailsMainHeader } from "./details-cmp/DetailsMainHeader"


export const Details: React.FC<{ eventObj: RaceObjModel, pageHeader: Function }> = ({ eventObj, pageHeader }) => {


    useEffect(() => {
        pageHeader("פרטים מלאים")

    }, [])

    console.log(eventObj.comments)
    return (
        <div className="details-container">
            <HeaderTitle titleText={'פרטים מלאים'} />
            <div className="content-container">
                <DetailsContent eventObj={eventObj} />
                <DetailsMainHeader eventObj={eventObj} />
            </div>
            {eventObj.comments.length > 0 && <div className="custom-notes">
                <div className="json-par" dangerouslySetInnerHTML={{ __html: eventObj.comments }} />

            </div>}


        </div >
    )
}