import { RaceObjModel } from "../../../../models/raceObj.model"



export const Location:React.FC<{eventObj:RaceObjModel}> = ({ eventObj }) => {





    return (
        <div className="location-container">
            <div className="meeting-point">
                <a href={eventObj.wazeDirection}>
                    <img src={require('../../../../assets/icons/icon-waze.png')} alt="" />
                    <h3>לחץ לניווט לשטח הכינוס</h3>
                </a>

            </div>




        </div >
    )
}