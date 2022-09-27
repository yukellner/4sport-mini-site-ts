import { useEffect } from "react"
import { HeaderTitle } from "../../components/HeaderTitle"
import { RaceObjModel } from "../../models/raceObj.model"
import { DetailsContent } from "./details-cmp/DetailsContent"
import { DetailsMainHeader } from "./details-cmp/DetailsMainHeader"
// import { DetailsMainHeader } from "./details-cmp/DetailsMainHeader"


export const Details: React.FC<{ eventObj: RaceObjModel, pageHeader: Function, target: number }> = ({ target, eventObj, pageHeader }) => {


    useEffect(() => {
        pageHeader("פרטים מלאים")

    }, [])

    // console.log(eventObj.comments)
    return (
        <div className="details-container min-height">
            <HeaderTitle titleText={'פרטים מלאים'} />
            <div className="content-container">
                <DetailsContent target={target} eventObj={eventObj} />
                <DetailsMainHeader eventObj={eventObj} />
            </div>
            {eventObj.comments.length > 0 && <div className="custom-notes">
                <div className="json-par" dangerouslySetInnerHTML={{ __html: eventObj.comments }} />

            </div>}


        </div >
    )
}