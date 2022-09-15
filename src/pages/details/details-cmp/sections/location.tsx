import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { RaceObjModel } from "../../../../models/raceObj.model"
// import { faWater, brands  } from '@fortawesome/free-solid-svg-icons'
import { faWaze } from '@fortawesome/free-brands-svg-icons'




export const Location: React.FC<{ eventObj: RaceObjModel }> = ({ eventObj }) => {





    return (
        <div className="location-container">
            <div className="meeting-point">

                <a href={eventObj.wazeDirection}>
                    <FontAwesomeIcon href={eventObj.wazeDirection} className="icon" icon={faWaze} />
                    {/* <img src={require('../../../../assets/icons/icon-waze.png')} alt="" /> */}
                    <h3>לחץ לניווט לשטח הכינוס</h3>
                </a>

            </div>




        </div >
    )
}