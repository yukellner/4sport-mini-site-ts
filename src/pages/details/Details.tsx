import { useEffect } from "react"
import { HeaderTitle } from "../../components/HeaderTitle"
import { RaceObjModel } from "../../models/raceObj.model"
import { DetailsContent } from "./details-cmp/DetailsContent"
import { DetailsMainHeader } from "./details-cmp/DetailsMainHeader"
// import { DetailsMainHeader } from "./details-cmp/DetailsMainHeader"


export const Details:React.FC<{eventObj:RaceObjModel, pageHeader: Function}> = ({ eventObj, pageHeader }) => {


    useEffect(() => {
        pageHeader("פרטים מלאים")
        
    }, [])


    return (
        <div className="details-container">
            <HeaderTitle titleText={'מידע'} />
            <div className="content-container">
                <DetailsContent eventObj={eventObj} />
                <DetailsMainHeader eventObj={eventObj} />
            </div>


        </div >
    )
}