import { useEffect } from "react"
import { HeaderTitle } from "../../components/HeaderTitle"
import { RaceObjModel } from "../../models/raceObj.model"

export const Maps: React.FC<{ eventObj: RaceObjModel, pageHeader: Function }> = ({ eventObj, pageHeader }) => {


    useEffect(() => {
        pageHeader("מפות ומסלולים")
    }, [])
    return (
        <div className="main-contact">
            <HeaderTitle titleText={'מפות ומסלולים'} />

            {eventObj.heats.map(heat =>


                <div key={heat.description} className="map-container">
                    <div className="route-header">

                    <h2>
                        {heat.description}
                    </h2>
                    </div>
                    <h3>{heat.routeDescription}</h3>

                    {heat.mapUrl && <iframe className="alltrails" src={heat.mapUrl} width="100%" height="400" frameBorder="0"
                        scrolling="no"
                        title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running"></iframe>}
                </div>
            )}

        </div>
    )
}