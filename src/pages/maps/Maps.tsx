import {HeaderTitle} from "../../components/HeaderTitle"
import {RaceObjModel} from "../../models/raceObj.model"

export const Maps: React.FC<{ eventObj: RaceObjModel }> = ({eventObj}) => {


    return (
        <div className="main-contact">
            <HeaderTitle titleText={'מפות'}/>

            {eventObj.heats.map(heat =>


                <div key={heat.description} className="map-container">
                    <h2>
                        {heat.description}
                    </h2>
                    <iframe className="alltrails" src={heat.mapUrl} width="100%" height="400" frameBorder="0"
                            scrolling="no"
                            title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running"></iframe>
                </div>
// marginHeight="0" marginWidth="0"
            )}

        </div>
    )
}