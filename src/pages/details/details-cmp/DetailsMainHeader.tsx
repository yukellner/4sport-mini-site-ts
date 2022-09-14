import { RaceObjModel } from "../../../models/raceObj.model"


export const DetailsMainHeader: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {


    return (
        <div className="main-details-container">
            <div className="first-img">
                


                <i className="fa-solid fa-calendar-days"></i>
                <img src={eventObj.coverImages[2]} alt="" />
            </div>
            



        </div>


    )
}

